//delete button confirmation
///eventListener type: click, keypress, keyup, keydown, focus, blur, change

const deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click',function(){
    ///delete using display none
    document.getElementById('blog').style.display = 'none';
})

//focus on input box
    const inputDelete = document.getElementById('input-delete');

inputDelete.addEventListener('focus',function(){
   deleteBtn.style.backgroundColor= 'lightgray';
   deleteBtn.style.color= 'lightcoral';
})

//click out input box //blur    

inputDelete.addEventListener('blur',function(){
   deleteBtn.style.backgroundColor= 'black';
   deleteBtn.style.color= 'white';
})

/* //keypress   

inputDelete.addEventListener('keypress',function(){
   console.log(inputDelete.value);
}) */

//keydown  

/* inputDelete.addEventListener('keydown',function(){
   console.log(inputDelete.value);
}) */

//keyup

inputDelete.addEventListener('keyup',function(event){
    //console.log(event);
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled',true);
    }
})

//change
inputDelete.addEventListener('change',function(){
   console.log(inputDelete.value);
})


