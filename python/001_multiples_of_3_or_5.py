#!/usr/bin/env python3
"""
Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of
3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
"""


def sum_of_multiples(m1, m2, ceil):
    return sum_up(m1, ceil) + sum_up(m2, ceil) - sum_up(m1 * m2, ceil)


def sum_up(multiple, ceil):
    ceil = (ceil - 1) // multiple
    return (ceil + 1) * ceil // 2 * multiple


if __name__ == "__main__":
    result = sum_of_multiples(3, 5, 1000)
    print(result)
