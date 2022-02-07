let notified = document.querySelector('.notified');
let input = document.querySelector('.email');
let error = document.querySelector('.error')

notified.addEventListener('click', (e)=>{
     e.preventDefault();
    let value = input.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
          input.style.border = "1px solid transparent"
          error.style.display="none";
    }else{
         input.style.border = "2px solid red";
         error.style.display = "block";
    }
})