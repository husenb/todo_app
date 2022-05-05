 document.addEventListener('DOMContentLoaded', function(){
     const submit=document.querySelector('#submit')
     submit.disabled=true;
     document.querySelector('#task').onkeyup=function(){
        if(document.querySelector('#task').value.length > 0){
            submit.disabled=false;
        }
        else{
        submit.disabled=true;
       }
     }
     

    document.querySelector('form').onsubmit = function(){
     const task=document.querySelector('#task').value 
    const li= document.createElement('li') 

    li.textContent=task
    document.querySelector('#tasks').append(li)
    document.querySelector('#task').value=""
    submit.disabled=true;
  
  
    return false


    }
    const ul=document.querySelector('ul')
    ul.addEventListener('click', e =>{
        if(e.target ==='LI'){
            e.target.remove(); 
        }
    })
 

})

