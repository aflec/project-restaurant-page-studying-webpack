//aboutUs.js

export function showNavAboutUs() {
    const conteudoDivContent = document.querySelector("#content");
    conteudoDivContent.innerHTML = '';
    
    const aboutUsDiv = document.createElement("div");
    aboutUsDiv.textContent = "No nosso restaurante nossa missão é oferecer uma experiência gastronômica única e acolhedora. Combinamos ingredientes frescos e de alta qualidade para criar pratos deliciosos e autênticos, preparados com carinho e dedicação. Seja para um jantar casual ou uma ocasião especial, estamos aqui para proporcionar momentos memoráveis. Venha nos visitar e descubra o sabor da tradição e da inovação!";
    aboutUsDiv.style.fontSize = '30px';
    content.appendChild(aboutUsDiv);
    console.log("rodei a funcao showNavAboutUs dentro do arquivo aboutUs.js");

}
