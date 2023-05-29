let divChanged = document.getElementById("general-area-2");
let newText = document.getElementById("encrypt-area-1");
let newButton = document.getElementById("copyButton");
let textEncrypt = document.getElementById("encrypt-area-2");
let innerArea1 = document.getElementById("inner-1");
let innerArea2 = document.getElementById("inner-2");

const Encrypt = () => {
  let message = document.getElementById("messageInput").value;
  if (message){
    let messageChanged = message.replaceAll(/[eioua]/g, (match) => {
      switch (match) {
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "a":
          return "ai";
        case "o":
          return "ober";
        case "u":
          return "ufat";
        default:
          return match;
      }
    });
    console.log(messageChanged)
     /*Nuevo metodo*/
     let divChanged = document.getElementById("general-area-2");
     let textEncrypt = document.getElementById("encrypt-area-2");
     let innerArea1 = document.getElementById("inner-1");
     let innerArea2 = document.getElementById("inner-2");
     divChanged.style.justifyContent = "flex-end";
     divChanged.style.flexDirection = "column";
     divChanged.style.alignItems = "flex-start";

     innerArea1.classList.add("ocultar");  
     innerArea2.classList.remove("ocultar");

     textEncrypt.textContent = messageChanged;
    
     return messageChanged;
  }
  
  /* let divChanged = document.getElementById("general-area-2");
  let newText = document.createElement("h1");
  newText.setAttribute("id","encrypt-1");
  let newButton = document.createElement("button");
  newButton.setAttribute("id", "copyButton");
  newButton.textContent = "Copiar"
  newButton.classList.add("c-button");

  newText.textContent = messageChanged;
  newText.classList.add("text-encrypt", "area-2");
  divChanged.style.justifyContent = "flex-end";
  divChanged.style.flexDirection = "column";
  divChanged.style.alignItems = "flex-start";
  

  divChanged.innerHTML ="";
  divChanged.appendChild(newText);
  divChanged.appendChild(newButton);

  newButton.addEventListener("click",function copy(){
    navigator.clipboard.writeText(newText.textContent);
  }); */
  
}

const Decrypt = () =>{
  let messageCrypt = document.getElementById("messageInput").value;
  if(messageCrypt){
  let messageDecrypted = messageCrypt.replaceAll(/enter|imes|ai|ober|ufat/g, (match) => {
    switch (match) {
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ai":
        return "a";
      case "ober":
        return "o";
      case "ufat":
        return "u";
      default:
        return match;
    }
  });
  console.log(messageDecrypted);
  console.log(messageCrypt);
  /*Nuevo metodo*/
  let divChanged = document.getElementById("general-area-2");
  let textEncrypt = document.getElementById("encrypt-area-2");
  let innerArea1 = document.getElementById("inner-1");
  let innerArea2 = document.getElementById("inner-2");
  divChanged.style.justifyContent = "flex-end";
  divChanged.style.flexDirection = "column";
  divChanged.style.alignItems = "flex-start";

  innerArea1.classList.add("ocultar");  
  innerArea2.classList.remove("ocultar");

  textEncrypt.textContent = messageDecrypted;

  return messageDecrypted;
  }
}

const copy = ()=>{
  let textEncrypt = document.getElementById("encrypt-area-2");
  if(textEncrypt.textContent){
    navigator.clipboard.writeText(textEncrypt.textContent)
  } 
}