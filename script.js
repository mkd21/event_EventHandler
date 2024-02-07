        // EVENT HANDLERS 


            // way 1
// let clickProperty = document.getElementById("first");

// clickProperty.addEventListener("click" , ()=> {
//     console.log("clicked");
// });


//                 // way 2  adding attribute in HTML direclty and accessing as event

function directExecutor()
{
    console.log("Hovered on me");
}



//         // way 3  shorthand for writing event handlers

// clickProperty.onclick = function exec(){
//     console.log("Type 3 of execution");
// }





            // if we want to access the element by class then we will need to mention the index because class in not unique and hence it will return in array with all the elements with that class 

// so we need to select any one element to execute the event 


        // way 1

// let multiStorage = document.getElementsByClassName("divs")[2];

// multiStorage.addEventListener("click" , () => {
//     console.log("accessing by class");
// });


            // way 2 

// let multiStorage = document.getElementsByClassName("divs");

// multiStorage[3].addEventListener("click" , () => {
//     console.log("accessing by class");
// });


// way 3 

let multiStorage = document.getElementsByClassName("divs")[3];

multiStorage.onclick = () => {
    console.log("class accessing");
}