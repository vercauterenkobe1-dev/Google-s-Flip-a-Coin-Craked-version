const coin=document.getElementById("coin");
const button=document.getElementById("spin");
const result=document.getElementById("result");

button.addEventListener("click",()=>{

    coin.classList.add("spin");

    setTimeout(()=>{
        coin.classList.remove("spin");
        result.innerText="Munt";
    },1000);

});

coin.addEventListener("click",()=>{

    coin.classList.add("spin");

    setTimeout(()=>{
        coin.classList.remove("spin");
        result.innerText="Kop";
    },1000);

});
