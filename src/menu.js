//menu.js

export function showNavMenu() {
    const conteudoDivContent = document.querySelector("#content");
    conteudoDivContent.innerHTML = '';
    
    const menuDiv = document.createElement("div");
const menuContent = `
  <h3>Entradas</h3>
  <p>Sopa do Dia - R$ 12,00</p>
  <p>Bruschetta de Tomate e Manjericão - R$ 15,00</p>
  <p>Coxinhas de Frango (6 unidades) - R$ 18,00</p>

  <h3>Pratos Principais</h3>
  <p>Filé Mignon Grelhado com Batatas Rústicas - R$ 45,00</p>
  <p>Peixe ao Molho de Limão Siciliano com Arroz de Coco - R$ 40,00</p>
  <p>Spaghetti à Carbonara - R$ 35,00</p>
  <p>Risoto de Cogumelos - R$ 38,00</p>

  <h3>Sobremesas</h3>
  <p>Tiramisu - R$ 15,00</p>
  <p>Pavê de Chocolate - R$ 12,00</p>
  <p>Mousse de Maracujá - R$ 10,00</p>

  <h3>Bebidas</h3>
  <p>Suco Natural (Laranja, Abacaxi, Limão) - R$ 8,00</p>
  <p>Refrigerante Lata - R$ 5,00</p>
  <p>Cerveja Long Neck - R$ 10,00</p>
`;
    menuDiv.innerHTML = menuContent;
    menuDiv.style.fontSize = '30px';
    content.appendChild(menuDiv);
    console.log("rodei a funcao showNavMenu dentro do arquivo menu.js");

}
