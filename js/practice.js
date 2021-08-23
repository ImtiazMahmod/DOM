//get first name
//get last name
//get full name //concate first last name

//first name
document.getElementById('f-btn').addEventListener('click',function(){
    const fName = document.getElementById('f-name');
    console.log(fName.value);
    fName.value = "";
})

//last name
document.getElementById('l-btn').addEventListener('click',function(e){
    const lName = document.getElementById('l-name');
    // console.log(lName.value);
    console.log(e.target.value);
    lName.value = "";
})

//full name
document.getElementById('full-name').addEventListener('click',function(){
    const fName = document.getElementById('f-name');
    const lName = document.getElementById('l-name');
    const fullName= fName.value + " " + lName.value; 
    console.log(fullName);
})


//event handler mouseenter then change image

// double click then change background
