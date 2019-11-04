const Validator = require('./');
const objData = {
  value1: {},
  value2: {},
  value3: {
    min: 5,
    max: 9,
    required: true,
  },
};

test('returns success response obj', () => {
  expect(Validator({ valuesObj: { value3: 8 }, requireObj: objData }))
    .toStrictEqual({ status: 'success' });
});