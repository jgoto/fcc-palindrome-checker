const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

/* Ensure user enters a value for the text input 
when the submit button is clicked */
checkBtn.addEventListener("click", () => {
    if(textInput.value===""){
        alert("Please fill in a value");
    }
});

/* 
1. Validate the text input
2. convert the input to all lowercase and remove whitespace
3. place each letter in an array
4. check front and back, if the letters are the same continue 
    otherwise the input is not a palindrome
*/

function evaluatePalindrome(array){
    for(let i = 0; i < (array.length / 2); i++){
        if(array[i] === array[array.length-i-1])
        {
            console.log("checking");
        }
        else
        {
            console.log("This is not a palindrome");
            return;
        }        
    }
    console.log("This is a palindrome");
}

evaluatePalindrome(['a','b','c','d','d', 'g', 'c','b','a']);