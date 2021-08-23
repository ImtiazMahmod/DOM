//getElementsByTagName(apply style use loop)
//getElementsByClassName(apply style use loop)
//getElementById
//querySelector
//querySelectorAll
//create element

//nodelist / html collection
//array like object

//using getElementsByTagName
const tag = document.getElementsByTagName('p');
for(const p of tag){  
    console.log(p); 
}

// using getElementById
const loremText = document.getElementById('lorem');
loremText.style.backgroundColor = 'lightgray';
loremText.style.padding = '26px';
loremText.style.border = '5px solid lightblue'
loremText.style.fontSize = '26px';
loremText.style.textTransform = "uppercase";
loremText.style.color = 'blue';

loremText.getAttribute('id');
loremText.setAttribute('title','this is dummyText');
loremText.parentNode;
// loremText.innerHTML =  `<p>its a good</p>`;

// adding new element by js
//create element
//append element to parent

const article  = document.createElement('article');
article.classList.add('para');
const h3 = document.createElement('h3');
h3.innerText= "this is my favorite tea";

const ul = document.createElement('ul');
ul.innerHTML= `
<ul>
    <li>mango</li>
    <li>apple</li>
    <li>jack fruit</li>
    <li>banana</li>
</ul>
`
//appendChild to parent
article.appendChild(h3);
article.appendChild(ul);

//get parent of article 
const blog = document.getElementById('body');
blog.appendChild(article);

// article.innerHTML = `<p>it is</p>`;


//using getElementsByClassName

const texts = document.getElementsByClassName('para');
// console.log(texts);
for(const text of texts){
    console.log(text);
    text.style.backgroundColor = 'lightyellow';
    text.style.padding = '26px';
    text.style.border = '5px solid lightgreen';
    text.style.fontSize = '24px';
    text.style.textTransform = "lowercase";
}

