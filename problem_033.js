/* jshint node: true  */

/**
 * Problem 33: Digit cancelling fractions
 * The fraction 49/98 is a curious fraction, as an inexperienced
 * mathematician in attempting to simplify it may incorrectly believe
 * that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
 *
 * We shall consider fractions like 30/50 = 3/5, to be trivial examples.
 *
 * There are exactly four non-trivial examples of this type of fraction,
 * less than one in value, and containing two digits in the numerator
 * and denominator.
 *
 * If the product of these four fractions is given in its lowest common
 * terms, find the value of the denominator.
 */

var P033 = function () {
  this.fractions = [];
  /*
   * Generate fractions of the form
   *
   *     10a + b / 10b + c
   *
   * where
   *
   *    10a + b / 10b + c === a / c
   *
   * Since all of our fractions need to be less than one, then
   *     a < b, and a < c
   */

  // since `a` must be less than `b`, `b` starts at 2
  for (var b = 2; b < 10; b++) {
    for (var a = 1; a < b; a++) {
      for (var c = a + 1; c < 10; c++) {
        var numerator = 10*a + b;
        var denominator = 10*b + c;
        if (c * numerator === a * denominator) {
          this.fractions.push({
            numerator: 10*a + b,
            denominator: 10*b +c
          });
        }
      }
    }
  }
};

P033.prototype.showFractions = function () {
  for (var i = 0; i < this.fractions.length; i++) {
    var d = this.fractions[i].denominator.toString();
    var n = this.fractions[i].numerator.toString();
    console.log(n+'/'+d);
  }
};

P033.prototype.gcd = function (a, b) {
  var tmp;
  if (b > a) {
    tmp = a;
    b = a;
    a = tmp;
  }
  while (b > 0) {
    tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
};

P033.prototype.getProduct = function () {
  if (this.fractions.length === 0) {
    return 0;
  }
  var product = {
    numerator: 1,
    denominator: 1
  };
  for (var i = 0; i < this.fractions.length; i++) {
    product.denominator *= this.fractions[i].denominator;
    product.numerator *= this.fractions[i].numerator;
  }

  var gcd = this.gcd(product.denominator, product.numerator);
  product.numerator /= gcd;
  product.denominator /= gcd;
  return product;
};

module.exports = P033;
