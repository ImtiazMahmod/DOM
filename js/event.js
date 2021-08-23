//  event handler
/*  event handler by setting function name
    event handler by setting function 
    anonymous function
    addEventListener function
    addEventlistener function Anonymously
    addEventlistener function directly***
     */

    ///eventListener always on which to change another

//event handler by setting function 
function colorChange(){
    const color = document.getElementsByTagName('h1');
    
for(const textColor of color){
    textColor.style.backgroundColor='lightblue';
    textColor.innerText = 'this inner text';
}
}
// console.log(color);

// event handler by setting function name
const color = document.getElementsByTagName('h1');
// just set function name
color.onclick = specialColor;

function specialColor(){   
for(const textColor of color){
    textColor.style.backgroundColor='lightgreen';
}
}

// event handler by anonymous function

const lightyellow = document.getElementById('lightyellow');
const heading = document.getElementById('h1');
// not declare any fucntion name
lightyellow.onclick = function (){
   //heading style change by click button
    heading.style.backgroundColor='lightyellow';
    //body style change by click button
    document.body.style.background = 'lightgray'
}

// event handler by addEventListener function

const goldenrod = document.getElementById('goldenrod');

goldenrod.addEventListener('click',golden);

function golden(){
    document.body.style.background = 'goldenrod'
}

// event handler by addEventListener function anonymously

const hotpink = document.getElementById('hotpink');

hotpink.addEventListener('click',function (){
    document.body.style.background = 'hotpink';
})


// event handler by addEventlistener function directly anonymously

document.getElementById('tomato').addEventListener('click',function (){
    document.body.style.background = 'tomato';
})


//commonly used event Handler

    /* just function
    eventlistener directly */

    //just function
    const p = document.getElementById('highlighted');
 function highlighted(){
     p.innerText = 'this is highlighted by function';

}

    //eventlistener directly

document.getElementById('event').addEventListener('click',function ()
{
    const text = document.getElementById('highlighted');
    text.innerText = 'this is highlighted by eventListener';
})

///update as input
///value 

document.getElementById('update-text').addEventListener('click',function()
{
    const fname = document.getElementById('first-name');
   
   const nameUpdate = document.getElementById('f-name-update');
   nameUpdate.innerText = fname.value;
   fname.value = "";
})

