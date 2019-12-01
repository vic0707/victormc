---
title: Advent of Code -  Day 1
description: Advent of Code -  Day 1
date: "2019-12-01T21:13:17.354Z"
---
This year I have decided to take part on the [Advent of Code](https://adventofcode.com/2019/). I tried last year and I was not able to complete all the challenges, so I think this can be a good measure of how my problem solvong skills are moving along. Also a good way to force myself to do it, is to blog about it every day here.

These are my solutions for the [Day 1](https://adventofcode.com/2019/day/1) challenge

In the first problem, you basically need to go through an array of data, do some calculation on each element and then add all the values of it.

The calculation you need to do is to grad the value, divide it by 3, round it down and substract 2 from it.

Using a simple map and reduce functions seems like the most straigh forward solution here, making it simple to understand.

```
const getFuel = mod => Math.floor(mod / 3) - 2;

const solution1 = data
  .map(mod => getFuel(mod))
  .reduce((a, b) => a + b, 0);
```

The second part of the challenge is a bit more tricky. It requires you to first do the same calculation as before, but this time, you need to keep doing it and adding the results until the value you get is equal or below to 0.

Trying to come up with a solution for this made me think that a recursive approach would be the most clear to me. You can create a function that goes through that calculation and that it keeps calling it self until the value left is below 0. This is the solution I came out with.

```
const getExtraFuel = mod => {
  const fuel = getFuel(mod);
  if (fuel < 0) {
    return 0;
  }
  return fuel + getExtraFuel(fuel);
};

const solution2 = data
  .map(mod => getExtraFuel(mod))
  .reduce((a, b) => a + b, 0);
```

Forgot to mention, at the end you need to add up all the values together again.

Till next time.

V.
