sheep_button.addEventListener("click",function(){
console.log("started sheep");
document.getElementById("sheep_button").style.backgroundColor="#97bf04";
document.getElementById("bear_button").style.display = "initial";
document.getElementById("moose_button").style.display = "initial";
document.getElementById("wolf_button").style.display = "initial";
document.getElementById("elk_button").style.display = "initial";
document.getElementById("hero").src = "sheep.webp";
document.body.classList.toggle('sheep');
})

bear_button.addEventListener("click",function(){
console.log("started bear");
document.getElementById("bear_button").style.backgroundColor="#97bf04";
document.getElementById("sheep_button").style.display = "initial";
document.getElementById("moose_button").style.display = "initial";
document.getElementById("wolf_button").style.display = "initial";
document.getElementById("elk_button").style.display = "initial";
document.getElementById("hero").src = "bear.webp";
document.body.classList.toggle('bear');
})

moose_button.addEventListener("click",function(){
console.log("started moose");
document.getElementById("moose_button").style.backgroundColor="#97bf04";
document.getElementById("bear_button").style.display = "initial";
document.getElementById("sheep_button").style.display = "initial";
document.getElementById("wolf_button").style.display = "initial";
document.getElementById("elk_button").style.display = "initial";
document.getElementById("hero").src = "moose.webp";
document.body.classList.toggle('moose');
})

wolf_button.addEventListener("click",function(){
console.log("started wolf");
document.getElementById("wolf_button").style.backgroundColor="#97bf04";
document.getElementById("bear_button").style.display = "initial";
document.getElementById("moose_button").style.display = "initial";
document.getElementById("sheep_button").style.display = "initial";
document.getElementById("elk_button").style.display = "initial";
document.getElementById("hero").src = "wolf.webp";
document.body.classList.toggle('wolf');
})

elk_button.addEventListener("click",function(){
console.log("started elk");
document.getElementById("elk_button").style.backgroundColor="#97bf04";
document.getElementById("bear_button").style.display = "initial";
document.getElementById("moose_button").style.display = "initial";
document.getElementById("wolf_button").style.display = "initial";
document.getElementById("sheep_button").style.display = "initial";
document.getElementById("hero").src = "elk.webp";
document.body.classList.toggle('elk');
})

