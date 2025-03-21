
import restaurantImage from "./imagem-restaurante.jpg";

export const imageLoader = () =>  {
    const imagem = document.createElement("img");
    imagem.src = restaurantImage;
    content.appendChild(imagem);
    imagem.id = "restaurant_img";
    
    console.log("image loaded");
   }

// module.exports = {
//     load: imageLoader
// };
//export const imageLoader;
