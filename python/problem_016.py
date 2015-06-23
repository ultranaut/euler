#!/usr/bin/env python
"""
Problem 16: Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
"""

# It's trivial in Python...
def easy_sum(base, exponent):
    num = base**exponent
    _sum = 0

    while num > 0:
        _sum += num % 10
        num /= 10

    return _sum

# ...but let's pretend we don't have support for large numbers
def multiply(multiplier, base):
    carry = 0
    for idx, val in enumerate(base):
        product = multiplier * val + carry
        base[idx] = product % 10
        carry = product / 10
    if carry != 0:
        base.append(carry)
    return base

def power_sum(base, exponent):
    ints = [base]
    while exponent > 1:
        ints = multiply(base, ints)
        exponent -= 1
    return sum(ints)

