

//Portfolio Browser

//Caret for Tree View
function toggleList(listName) {
    
    const subTreeName = document.getElementById(`${listName}NestedList`);
    const treeName = document.getElementById(listName);
    /* const treeName = subTreeName.parentElement; */
    subTreeName.classList.toggle("activeList");
    subTreeName.classList.toggle("nestedList");
    treeName.classList.toggle("caretDown");
    // console.log(subTreeName);
    // console.log(treeName);
}

function updateContentDisplay(fileName){
    const contentDisplay = document.getElementById("contentDisplay");
    const contentDisplayTitle = document.getElementById("contentDisplayTitle");
    
    //Returns the Folder name of the project from the onclick pass.
    const newTitle = String(fileName).slice(fileName.indexOf("/") + 1, fileName.lastIndexOf("/")); 
    
    //Capitalizes first letter of folder name and updates contentDisplayTitle.
    contentDisplayTitle.textContent = newTitle.charAt(0).toUpperCase() + String(newTitle).slice(1);
    contentDisplay.src = `projects/software/${fileName}.html`; //Changes source to proper selection of treestyle menu.
    

    // console.log(newTitle);
    // console.log(contentDisplay);
    // console.log(contentDisplayTitle.textContent);

}
//.charAt(0).toUpperCase() + String(newTitle).slice(1);
function previousProjectButton(){

}

function nextProjectButton(){

}

const portfolioHamMenu = document.querySelector('.contentHamburgerMenu');
const menuTableOfContents = document.querySelector(`.menuTableOfContents`);
const contentsDisplayContainer = document.querySelector(`.contentsDisplayContainer`);
const prevNextSelectors = document.getElementById(`prevNextSelectors`);
const contentDisplayTitle = document.getElementById(`contentDisplayTitle`);

portfolioHamMenu.addEventListener("click", () => {
    portfolioHamMenu.classList.toggle('active');
    menuTableOfContents.classList.toggle('active');
    contentsDisplayContainer.classList.toggle('active');
    prevNextSelectors.classList.toggle('active');
    contentDisplayTitle.classList.toggle('active');
})

document.querySelectorAll(".nestedList").forEach(interact => interact.addEventListener("click", () => {
    portfolioHamMenu.classList.toggle('active');
    menuTableOfContents.classList.toggle('active');
    contentsDisplayContainer.classList.toggle('active');
    prevNextSelectors.classList.toggle('active');
    contentDisplayTitle.classList.toggle('active');
}))