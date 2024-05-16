let btn = document.querySelector(`.btn`);
let colour = document.querySelector(`.colour`);

btn.addEventListener(`click`, ()=>{
    let red = Math.round(Math.random()* 255);
    let green = Math.round(Math.random()* 255);
    let blue = Math.round(Math.random()* 255);

    colour.style.background =  `rgb(${red}, ${green}, ${blue})`;
  
});
