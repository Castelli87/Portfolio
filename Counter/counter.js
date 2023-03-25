console.log('ciao')

i = 0;
function increase(){    
    i++
    num.innerHTML= i
    if (i<0){
        num.style.color = "red";
    }
    if (i>0){
        num.style.color = 'green'
    }
    if (i===0){
        num.style.color = 'black'
    }
    
    console.log(i)
}
function decrease(){
    
    i--
    num.innerHTML= i
    if (i<0){       
        num.style.color = "red";
    }
    if (i>0){
        num.style.color = 'green'
    }
    if (i===0){
        num.style.color = 'black'
    }

    console.log(i)
}
function reset(){    
    i=0
    num.innerHTML= i
    if (i<0){        
        num.style.color = "red";
    }
    if (i>0){
        num.style.color = 'green'
    }
    if (i===0){
        num.style.color = 'black'
    }
    console.log(i)
}
const decreaseBtn= document.querySelector('.decrease').addEventListener('click',decrease)
const increaseBtn= document.querySelector('.increase').addEventListener('click',increase)
const resetBtn= document.querySelector('.reset').addEventListener('click',reset)

const num = document.querySelector('.number')


