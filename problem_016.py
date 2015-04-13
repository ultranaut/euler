#!/usr/bin/env python
"""
Problem 16: Power digit sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
"""

def power_digit_sum(base, exponent):
    num = base**exponent
    _sum = 0

    while num > 0:
        _sum += num % 10
        num /= 10

    return _sum

