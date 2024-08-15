const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("resultText");
const inputArray = [];
let isPalindrome = false;

/* Ensure user enters a value for the text input 
when the submit button is clicked */
checkBtn.addEventListener("click", () => {
    if(textInput.value===""){
        alert("Please fill in a value");
    }
    else{
        const input = textInput.value.replace(/\s/g,"");
        input.split('').forEach(char => {
            inputArray.push(char);
        });
        evaluatePalindrome(inputArray);
        result.innerText = inputArray;
    }
});

/* 
1. Validate the text input
2. convert the input to all lowercase and remove whitespace
3. place each letter in an array
4. check front and back, if the letters are the same continue 
    otherwise the input is not a palindrome
*/



/** strip whitespace and place in array*/




function evaluatePalindrome(array){
    console.log("checking to see if this is a palindrome");
    for(let i = 0; i < (array.length / 2); i++){
        console.log("checking " + i + " " + array[i] + array[array.length-i-1]);
        if(array[i] === array[array.length-i-1])
        {
            isPalindrome = true;
        }
        else
        {
            isPalindrome = false;
            return;
        }        
    }
    isPalindrome?console.log("This is a palindrome"):console.log("This is not a palindrome");
}