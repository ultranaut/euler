#!/usr/bin/env python3
"""
The following iterative sequence is defined for the set of positive integers:

    n → n/2 (n is even)
    n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
"""
from functools import cache


# memoize
@cache
def collatz_length(start):
    if start == 1:
        return 1

    if start % 2 == 0:
        return collatz_length(start // 2) + 1
    else:
        # we can skip a step here since 3n + 1 will be even and the
        #   following iteration will be (3n + 1) / 2
        return collatz_length((start * 3 + 1) // 2) + 2


if __name__ == "__main__":
    longest = (1, 1)
    # since C(n) = C(n/2) + 1 when n is even, none of the values < limit/2 need
    #   to be computed
    for start in range(500000, 1000000):
        longest = max(longest, (collatz_length(start), start))
    print(longest[1])
