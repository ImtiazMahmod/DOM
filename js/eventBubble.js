//event type: mousemove, mouseenter, mouseout
//event bubble
//event delegate


//blogs
document.getElementById('blogs').addEventListener('click',function(){
    console.log('this is blog section');
})

//bubble heading
document.getElementById('bubble').addEventListener('click',function(){
    console.log('this is bubble heading');
})

//blog
document.getElementById('blog').addEventListener('click',function(event){
    console.log('this is blog');
    //event.stopPropagation();
    //stop event this level
})

//blog
document.getElementById('blog').addEventListener('click',function(event){
    console.log('this is a immediate blog');
    event.stopImmediatePropagation();
    //stop event this level but capture all event in immediate level
})

//event delegate
