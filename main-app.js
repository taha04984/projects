let pic = document.querySelector('.img');
let next = document.querySelector('.random');
let body = document.body;

function nextRandom(){
    let random = Math.round((Math.random() * 16)+1);
    console.log(random)
    pic.src = `images/${random}.jpg`
}


next.addEventListener('click', ()=>{
    nextRandom();
})

body.addEventListener("keypress", function(e) {
    if(e.keyCode == 13){
        nextRandom();
    }
});
