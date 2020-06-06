const fName = (x) => {
    let firstName = x.split(' ')[0];
    return firstName;
};

const fNameOneLine = (x) => x.split(' ')[0];

const multiplier = {
  numbers: [1,2,3,4,5,6,7,8,9],
  multiplyBy: 2,
  multiply()
  {
      return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(fName('Mike Scott'));
console.log(fNameOneLine('Yo Bitch Tarek'));
console.log('Old Numbers: ', multiplier.numbers);
console.log('New Numbers: ',multiplier.multiply());