//const imgLoader = require("./image-loader");
import { imageLoader } from "./image-loader";

import "./styles.css";
//const styleLoader = require("./styles.css");

import { showNavHome } from "./home.js";
import { showNavAboutUs } from "./aboutUs.js";
import { showNavMenu } from "./menu.js";
import { showNavContact } from "./contact.js";

console.log("log de teste do project restaurant home page que está dentro do index.js que está dentro da pasta src");

imageLoader();

const textoPagInicial = document.createElement("div");
textoPagInicial.textContent = "Bem-vindo ao nosso restaurante! Aqui, cada refeição é preparada com carinho de forma a oferecer uma experiência única e deliciosa. Sinta-se em casa, explore nosso menu e desfrute de sabores incríveis em um ambiente acolhedor. Estamos felizes em tê-lo conosco e esperamos que sua visita seja inesquecível!";
textoPagInicial.style.fontSize = '30px';
content.appendChild(textoPagInicial);

const homeNavBtn = document.querySelector("#homeBtn");
homeNavBtn.addEventListener("click", showNavHome);

const aboutUsNavBtn = document.querySelector("#aboutUsBtn");
aboutUsNavBtn.addEventListener("click", showNavAboutUs);

const menuNavBtn = document.querySelector("#menuBtn");
menuNavBtn.addEventListener("click", showNavMenu);

const contactNavBtn = document.querySelector("#contactBtn");
contactNavBtn.addEventListener("click", showNavContact);
