function FizzBuzz() {
}
  FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
    return number % divisor === 0;
  }
FizzBuzz.prototype.play = function(number) {

    if (this._isDivisibleBy(3, number)) { 
      return 'Fizz';}
    else { 
      return number; 
    }
  }

  FizzBuzz.prototype.play = function(number) {

    if (this._isDivisibleBy(5, number)) { 
      return 'Buzz';}
    else { 
      return number; 
    }
  }
