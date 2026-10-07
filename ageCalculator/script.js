const dob = document.querySelector('#dob')
const calculate = document.querySelector('#calculate')
const result = document.querySelector('#result')
calculate.addEventListener('click',function(){
    const oldDate = new Date(dob.value)
    const todayDate = new Date()
    const age = todayDate.getFullYear()- oldDate.getFullYear()
    result.innerHTML=`Your age is ${age} years`
})