const btn = document.getElementById('btn');
let hex = document.getElementById('hexCode');

// console.log(Math.random(Math.random) * 16);
function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
btn.addEventListener("click", ()=> {
    document.body.style.backgroundColor = randomColor();
    hex.innerHTML = randomColor();
})
