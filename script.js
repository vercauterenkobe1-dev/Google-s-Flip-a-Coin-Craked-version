const coin = document.getElementById("coin");
const button = document.getElementById("spin");
const result = document.getElementById("result");

function animate(text){
    coin.classList.add("spin");

    setTimeout(()=>{
        coin.classList.remove("spin");
        result.textContent = text;
    },600);
}

// Klik op de munt => altijd Kop
coin.addEventListener("click", ()=>{
    animate("Kop");
});

// Klik op de knop => altijd Munt
button.addEventListener("click", ()=>{
    animate("Munt");
});
