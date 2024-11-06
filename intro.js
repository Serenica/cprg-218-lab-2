sheep_button.addEventListener("click",function(){
console.log("started sheep");
document.getElementsById("wrapper").style.backgroundColor="#97bf04";
document.getElementById("hero").src = "sheep.webp";
document.body.classList.toggle('sheep');
})

bear_button.addEventListener("click",function(){
console.log("started bear");
document.getElementById("hero").src = "bear.webp";
document.body.classList.toggle('bear');
})

moose_button.addEventListener("click",function(){
console.log("started moose");
document.getElementById("hero").src = "moose.webp";
document.body.classList.toggle('moose');
})

wolf_button.addEventListener("click",function(){
console.log("started wolf");
document.getElementById("hero").src = "wolf.webp";
document.body.classList.toggle('wolf');
})

elk_button.addEventListener("click",function(){
console.log("started elk");
document.getElementById("hero").src = "elk.webp";
document.body.classList.toggle('elk');
})

