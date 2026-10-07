const color = document.querySelectorAll('.color')
const body = document.querySelector('#body')
color.forEach(function(e){
    e.addEventListener('click',function(){
        body.style.backgroundColor = e.id
    })
})