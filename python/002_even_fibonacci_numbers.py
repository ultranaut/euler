#!/usr/bin/env python3
"""
Problem 2: Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the
previous two terms. By starting with 1 and 2, the first 10 terms
will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do
not exceed four million, find the sum of the even-valued terms.
"""


def sum_even_fibonaccis(limit):
    low, high, result = 0, 1, 0
    while high <= limit:
        low, high = high, low + high
        if low % 2 == 0:
            result += low

    return result


if __name__ == "__main__":
    result = sum_even_fibonaccis(4_000_000)
    print(result)
