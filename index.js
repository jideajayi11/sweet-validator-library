const getResponseObj = (message='', key='') => message
  ? {
    status: 'error',
    message: message,
    key: key,
  }
  : { status: 'success' };
const Validator = (key, value) => ({
  min: (a) => typeof value !== 'number'
    ? getResponseObj(`${key} is not a number`, key)
    : value < a
    ? getResponseObj(`${key} should not be less than ${a}`, key)
    : getResponseObj(),
  max: (a) => typeof value !== 'number'
    ? getResponseObj(`${key} is not a number`, key)
    : a < value
    ? getResponseObj(`${key} should not be greater than ${a}`, key)
    : getResponseObj(),
  required: (a) => a && !value
    ? getResponseObj(`${key} is a required field`, key)
    : getResponseObj(),
});
let res = getResponseObj();


module.exports = ({valuesObj, requireObj}) => {
  Object.keys(requireObj).forEach((key) => {
    const { required=false, ...rest } = requireObj[key];
    requireObj[key] = required ? { required, ...rest } : { ...rest };
    Object.keys(requireObj[key]).forEach((element) => {
      if(res.status === 'success') {
        res = Validator(key, valuesObj[key])[element](requireObj[key][element]);
      }
    });
  });

  return res;
};