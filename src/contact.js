//contact.js


export function showNavContact() {
    const conteudoDivContent = document.querySelector("#content");
    conteudoDivContent.innerHTML = '';
    
    const contactDiv = document.createElement("div");
    const contactContent = `
  <div id="contact">
    <h3>Contato</h3>
    <p>Fale conosco! Estamos à disposição para qualquer dúvida ou sugestão.</p>
    
    <p><strong>Telefone:</strong> (11) 1234-5678</p>
    <p><strong>Email:</strong> contato@restauranteexemplo.com</p>
    
    <p>Nos siga nas redes sociais:</p>
    <p>
      <a href="https://facebook.com/restauranteexemplo" target="_blank">Facebook</a> | 
      <a href="https://instagram.com/restauranteexemplo" target="_blank">Instagram</a>
    </p>
  </div>
`;
    contactDiv.innerHTML = contactContent;
    contactDiv.style.fontSize = '30px';
    content.appendChild(contactDiv);
    console.log("rodei a funcao showNavContact dentro do arquivo contact.js");
    
}

    
