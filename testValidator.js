const Validator = require('.');

const objData = {
  value1: {},
  value2: {},
  value3: {
    min: 5,
    max: 9,
    required: true,
  },
};

console.log(Validator({ valuesObj: { value3: 8 }, requireObj: objData }));
