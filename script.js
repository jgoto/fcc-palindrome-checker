const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

/* Ensure user enters a value for the text input 
when the submit button is clicked */
checkBtn.addEventListener("click", () => {
    if(textInput.value===""){
        alert("Please fill in a value");
    }
});