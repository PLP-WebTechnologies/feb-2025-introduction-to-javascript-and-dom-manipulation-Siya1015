//  Add a new paraggraph by clicking on a button

const add = document.getElementById('add');
add.addEventListener("click", function () {
    const aboutSection = document.getElementById('about');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This is a new paragraph that got added.";
    aboutSection.appendChild(newParagraph); 
});


// Remove the last added paragraph by clicking on a button

const remove = document.getElementById("remove");
remove.addEventListener("click", function (){
    const aboutSection = document.getElementById("about");
    if (aboutSection.lastChild){
        aboutSection.removeChild(aboutSection.lastChild);
    }
});

// Confirming that you have been through the page by clicking on a button

const button = document.getElementById("confirmation");
const message = document.getElementById("confirmationMessage");
button.addEventListener("click",function(){
    message.textContent = "You have confirmed that you have been through the page.";
    message.style.color = "lightgreen";
    button.style.color = "black";
    button.style.backgroundColor = "lightgreen";
})

