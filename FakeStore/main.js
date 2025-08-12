let url = "https://fakestoreapi.com/products";






fetch(url)
.then(res => res.json())
.then(data => {
    for (let product of data) {
        Comprar(product);
    }
})

function Comprar(){

    alert("Probando");
    
    let div = document.querySelector(".container");
    div.innerHTML = '';
    
    let container = document.querySelectorAll(".productos");
    
    let img = document.createElement("img");
    img.src = data.image;
    
    let h2 = document.createElement("h2");
    h2.textContent = data.title;
    
    let precio = document.createElement("h4");
    precio.textContent = data.price;
    
    let button = document.createElement("button");
      
    
    div.append(img, h2, precio, button);
    
    container.append(div);
    }
