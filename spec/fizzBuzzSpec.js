"use strict";

describe("fizzbuzz", function() {
  var fizzBuzz;
  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("multiples of 3", function() {
    it("fizzes for 3", function() {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

    it("fizzes for 6", function() {
      expect(fizzBuzz.play(6)).toEqual("Fizz");
    });
  });

  describe("multiples of 5", function() {
    it("buzzes for 5", function() {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });

    it("buzzes for 10", function() {
      expect(fizzBuzz.play(10)).toEqual("Buzz");
    });
  });


  describe("all other numbers", function() {
    it("1 for 1", function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });
});
