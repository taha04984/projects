let login = document.querySelector('.enter');
let pass = document.querySelector('#password');

pass.addEventListener("keypress", function(e) {
    if(e.keyCode == 13){
        if(pass.value === "911"){
            location.href = 'cads.html';
        }else{
            alert("Intruder!!!")
        }
    }
    
});


login.addEventListener('click', ()=>{
    if(pass.value === "911"){
        location.href = 'cads.html';
    }else{
        alert("Intruder!!!")
    }
})