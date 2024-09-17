/** @jest-environment jsdom */

const evaluatePalindrome = require('../script.js');

describe("Evaluate Palindrome TestCases", ()=>{
    test("valid palindrome", () =>{
        // call function
        var palindrome = evaluatePalindrome(["l", "e", "v", "e", "l"])
        // assertions
        expect(palindrome).toBe(true);
    });    
});