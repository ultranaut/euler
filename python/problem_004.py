#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit
numbers.
"""


def reverse_number(n):
    reverse = 0
    while n > 0:
        digit = n % 10
        reverse = 10 * reverse + digit
        n = int(n / 10)
        print(reverse, n)

    return reverse


def isPalindrome(n):
    return n == reverse_number(n)


def largest_palindrome(size):
    """
    Overall time complexity: O(10^2n)
    where n = `size`
    """

    # O(1)
    ceil = pow(10, size) - 1
    floor = pow(10, size - 1)
    largest = 0

    for i in range(ceil, floor - 1, -1):
        if i * ceil < largest:
            break
        for j in range(ceil, i - 1, -1):
            product = i * j
            if product < largest:
                break
            string = str(product)
            if string == string[::-1] and product > largest:
                largest = product

    return largest


if __name__ == "__main__":
    result = largest_palindrome(3)
    print(result)
