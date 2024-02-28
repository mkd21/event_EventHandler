let btn1 = document.getElementById("btn1");

btn1.addEventListener("click" , function (event){
    alert("Button 1 clicked");
});


function alerter(e)
{
    alert("button 2 clicked");
}

let btn2 = document.getElementById("btn2");

btn2.onclick = alerter;


function alerter3(e)
{
    alert("button 3 clicked");

    console.log(e);
}

let btn3 = document.getElementById("btn3");

btn3.onclick = alerter3;