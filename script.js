const mathexample=document.querySelector('.mathexample')
const input=document.querySelector('.input')
const button=document.querySelector('.button')
let scor= localStorage.getItem('score')
     
const score=document.querySelector('.score')
score.innerHTML=`Бали:${scor}`

let sum1=Math.floor(Math.random()*100)
let sum2=Math.floor(Math.random()*100)
let arr=`${sum2}+${sum1}`
let sum=sum1+sum2
arr= localStorage.getItem('example') 
sum=localStorage.getItem('sum') 

creat()
 button.addEventListener('click',()=>{
    let val=input.value
    console.log(val)
    if(val==sum){
        console.log('win')
      let scor=localStorage.getItem('score')
      scor=+scor+1
      console.log(scor)
      localStorage.setItem('score',scor)
      score.innerHTML=` Бали:${scor}`
      sum1=Math.floor(Math.random()*100)
      sum2=Math.floor(Math.random()*100)
    sum=sum1+sum2
       arr=`${sum2}+${sum1}`
       localStorage.setItem('example',arr) 
       localStorage.setItem('sum',sum) 
      creat()
    }else{
      sum1=Math.floor(Math.random()*100)
      sum2=Math.floor(Math.random()*100)
     
      arr=`${sum2}+${sum1}`
      localStorage.setItem('example',arr) 
      sum=sum1+sum2
      localStorage.setItem('sum',sum) 
      creat()
    }
 })
 function creat(){
    
    input.value=''
     mathexample.innerHTML=''
      mathexample.innerHTML=`${arr}`
      
}