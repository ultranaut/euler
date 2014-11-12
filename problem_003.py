#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit
numbers.
"""
def largest_palindrome(size=3):
    """
    Overall time complexity: O(10^2n)
    where n = `size`
    """

    # O(1)
    bottom = pow(10, size)
    top = pow(10, size + 1)
    largest = (0, 0, 0)
    count = 0


    for i in range(bottom, top):
        count = 0
        for j in range(i, top):
            count += 1
            product = i * j
            string = str(product)
            if string == string[::-1] and product > largest[0]:
                largest = (product, i, j)
        print count
    return largest
