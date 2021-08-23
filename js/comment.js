//comment box input & display input on comment blog

// add event listener
document.getElementById('add-comment').addEventListener('click', function () {

    //get user comment 
    const getter = document.getElementById('comment-getter');

    //create comment paragraph for each click
    const updateComment = document.createElement('p');
        ///take value from input 
    updateComment.innerText = getter.value;


    ///append comment
    const article = document.getElementById('comment-container');

    article.appendChild(updateComment);

    //clear comment field
    getter.value = '';



})