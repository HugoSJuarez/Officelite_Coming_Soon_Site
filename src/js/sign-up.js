const email = document.querySelector("#email");
const isValidEmail = (email)=>{
    return email.match(    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
}

const selectPackage = document.querySelectorAll(".selection-display-box, #selection");
const optionsMenu = document.querySelector("#options");
const selectionText = document.querySelector("#selection");
const selectionInput = document.querySelector("#package");
const options = document.querySelectorAll(".option");

// Email Validation
email.addEventListener("input", (e)=>{
    const value = e.target.value; 
    
    if( (!isValidEmail(value)) && (value != "") ) {
        email.parentElement.classList.add("wrong");
    }
    else{
        email.parentElement.classList.remove("wrong");
    }
    
});

// Display and hide options
selectPackage.forEach(element =>{
    element.addEventListener("click", ()=>{
        optionsMenu.classList.toggle("hidden");
        selectionText.classList.toggle("down");
    });
});

// Select default value;
selectionInput.value="basic";

// Select an option
options.forEach(option =>{
    option.addEventListener("click", (e)=>{
        const previousSelectedOption = document.querySelector(".selected-option");
        previousSelectedOption.classList.remove("selected-option");

        const target= e.target;
        target.classList.add("selected-option");
        selectionText.childNodes.forEach((text, i) =>{
            text.textContent = target.childNodes[i].textContent;
        });

        selectionInput.value=target.dataset.package;

        optionsMenu.classList.add("hidden");
    });
});