# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rickcarr/lotide`

**Require it:**

`const _ = require('@rickcarr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* 'assertArraysEqual': checks if arrays are equal
* 'assertEqual': checks if arguments are equal
* 'assertObjectsEqual': checks if objects are equal
* 'countLetters': The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* 'countOnly': This function should take in a collection of items and return counts for a specific subset of those items
* 'eqArrays': checks if arrays are equal utilizing inspect function of util.
* 'eqObjects':checks object key values are equal. (primitives and arrays only).
* 'findKey': locates index of key in an object.
* 'findKeyByValue': Takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* 'head': removes everything but the head of an array.
* 'letterPositions': will return all the indices (zero-based positions) in the string where each character is found.
* 'map': function allows callback function to alter an array
* 'middle': remove all but the middle of an array. returns [] if less than 3 values are present in array. returns 2 values if array is even.
* 'tail': function is meant to return every element except the head (first element) of the array.
* 'takeUntil':The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* 'without':This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.