// !!event example
/* 
an html web page has finished loading
an html input was changed 
html button was clicked  

*/

function myFunction() {
    var btn = document.querySelector('button');
    btn.innerHTML = "i clicked";
}

function dateFunction() {
    let btn1 = document.querySelector('.btn1');
    let display = document.querySelector('.displayDate');
    display.innerHTML = Date()
        ;
}