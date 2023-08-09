let display = document.querySelector('.displayscreen')
let btn = document.querySelectorAll('button')
let s ="";
let result ="";

function addtoDisplay()
{
  display.value = s ;
}

btn.forEach((b)=>{b.addEventListener('click',(e)=>{
   if(e.target.innerText != 'DEL' && e.target.innerText != 'AC' && e.target.innerText != '=')
    s += e.target.innerText;
addtoDisplay();
})})
btn.forEach((b)=>{b.addEventListener('click',
(e)=>{ 
    try{
    if(e.target.value == 'c')
       {   
        let temp = s.slice(0,s.length-1);
        s = temp;
        temp = result.slice(0,result.length-1);
        result = temp;
        console.log(s);
        console.log(result);
        addtoDisplay();
       }

     else if(e.target.value == 'ac')
     { s = "";
      result ="";
      addtoDisplay();
     }
     else if(e.target.value == 'π')
     result = result + "3.14159265358";
     else if(e.target.value == '=')
     {
        
        result = eval(result).toString();
        s = result;
        addtoDisplay();
        
     }
     else
     result += e.target.value;
    }
  
     catch(p)
     {
        s = "";
         result ="";
         addtoDisplay();
        alert("Invalid operation");
     }

})})
