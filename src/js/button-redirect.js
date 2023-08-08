const buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
        location.href = "sign-up.html";
    });
});