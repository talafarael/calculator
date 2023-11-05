const mathexample=document.querySelector('.mathexample')
const input=document.querySelector('.input')
const button=document.querySelector('.button')
let scor=  localStorage.getItem('score',)
     
const score=document.querySelector('.score')
score.innerHTML=`${scor}`

let sum1=Math.floor(Math.random()*100)
let sum2=Math.floor(Math.random()*100)
let arr=`${sum2}+${sum1}`

let sum=sum1+sum2
creat()
 button.addEventListener('click',()=>{
    let val=input.value
    console.log(val)
    if(val==sum){
      let scor=  localStorage.getItem('score',)
      scor=+scor+1
      localStorage.setItem('score',scor)
      score.innerHTML=`${scor}`
      sum1=Math.floor(Math.random()*100)
      sum2=Math.floor(Math.random()*100)
     
       arr=`${sum2}+${sum1}`
      creat()
    }else{
      sum1=Math.floor(Math.random()*100)
      sum2=Math.floor(Math.random()*100)
     
      arr=`${sum2}+${sum1}`
      creat()
    }
 })
 function creat(){ input.value=''
   mathexample.innerHTML=''
      mathexample.innerHTML=`${arr}`  
}