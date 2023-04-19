const isValidArg = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  } else {
    return true;
  }
}

const calculator = {
    add: function(num1, num2) {
      if(isValidArg(num1, num2)){
        return num1 + num2;
      }
      return "Not type";
    },
    subtract: function(num1, num2) {
      if(isValidArg(num1, num2)){
        return num1 - num2;
      }
      return "Not type";
    },
    multiply: function(num1, num2) {
      if(isValidArg(num1, num2)){
        return num1 * num2;
      }
      return "Not type";
    },
    divide: function(num1, num2) {
      if(isValidArg(num1, num2)){
        return num1/num2;
      }
      else{
        throw new Error('not the type!');
      } 
    }
  };

  export default calculator;