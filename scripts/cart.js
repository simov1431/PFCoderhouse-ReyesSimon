const nothingAddedBody = document.querySelector(".nothingAdded");
const cartProducto = document.querySelector(".cart-producto");
const rowProducto = document.querySelector(".cart-row");
const listaProductos = document.querySelector(".container-productos");

let allProducts = [];
const valorTotal = document.querySelector(".precio-total-producto");
const countProducts = document.querySelector(".contador-productos");

listaProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("boton-addToCart")) {
    const product =
      e.target.parentElement.parentElement.querySelector(".modal-body");

    const productInfo = {
      quantity: 1,
      title: product.querySelector("h3").textContent,
      price: product.querySelector(".precio-producto").textContent,
    };

    const exits = allProducts.some(
      (product) => product.title === productInfo.title
    );

    if (exits) {
      const products = allProducts.map((product) => {
        if (product.title === productInfo.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, productInfo];
    }

    showHtml();
  }
});

rowProducto.addEventListener("click", (e) => {
  if (e.target.classList.contains("remover-carrito")) {
    const product = e.target.parentElement;
    const title = product.querySelector(".titulo-producto-carrito").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);
    showHtml();
  }
});

//funcion para mostrar html

const showHtml = () => {
  if (!allProducts.length) {
    document.querySelector(".nothingAdded").classList.add("active");
  } else {
    document.querySelector(".nothingAdded").classList.remove("active");
  }

  rowProducto.innerHTML = "";
  let total = 0;
  let totalProducts = 0;
  allProducts.forEach((product) => {
    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-producto");
    containerProduct.innerHTML = `
        <div class="cart-producto">
            <div class="info-producto">
              <span class="cantidad-producto-carrito">Cantidad: ${product.quantity}</span>
              <span class="titulo-producto-carrito">${product.title}</span>
              <span class="precio-producto-carrito">${product.price}</span> 
            </div>
            <button class="remover-carrito boton-cerrar">&times;</button>
        </div>
        `;
    rowProducto.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1));
    totalProducts = totalProducts + product.quantity;
  });

  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalProducts;
};
