//FUNCTION TO ADD OR REMOVE CLASSES ON THE BODY OF THE HTML FROM DEFAULT TO DARK MODE
function toggleBackground(){
    let button = document.querySelector('button');
    document.body.classList.toggle("dark-mode");
    button.classList.toggle("light-mode");
}