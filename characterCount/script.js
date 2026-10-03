const textArea=document.querySelector('#text')
const counter = document.querySelector('#count')
textArea.addEventListener('input',function(){
    counter.innerText = textArea.value.length
})