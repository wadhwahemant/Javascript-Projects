const length = document.querySelector('#length')
const width = document.querySelector('#width')
const result = document.querySelector('#result')
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const lengthvalue = parseInt(length.value)
    const widthvalue = parseInt(width.value)
    const area = lengthvalue*widthvalue
    result.innerHTML = area
})