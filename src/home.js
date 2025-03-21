//home.js

import { imageLoader } from "./image-loader";

export function showNavHome() {
    const conteudoDivContent = document.querySelector("#content");
    conteudoDivContent.innerHTML = '';
    
    imageLoader();

    const homeTextDiv = document.createElement("div");
    homeTextDiv.textContent = "Bem-vindo ao nosso restaurante! Aqui, cada refeição é preparada com carinho de forma a oferecer uma experiência única e deliciosa. Sinta-se em casa, explore nosso menu e desfrute de sabores incríveis em um ambiente acolhedor. Estamos felizes em tê-lo conosco e esperamos que sua visita seja inesquecível!";
    homeTextDiv.style.fontSize = '30px';
    content.appendChild(homeTextDiv);
    console.log("rodei a funcao showNavHome dentro do arquivo home.js");

}
