const btnAbrirModal = document.querySelectorAll(".boton-abrirModal");
const btnCerrarModal = document.querySelectorAll(".boton-cerrarModal");
const modal = document.querySelector(".myModal");
const overlay = document.querySelector(".dark-overlay");

btnAbrirModal.forEach(function (btn){
    btn.onclick = function(){
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).classList.add("active");
    }
})

btnCerrarModal.forEach(function (btn){
    btn.onclick = function(){
        var modal = (btn.closest(".myModal"));
        modal.classList.remove("active");
    }
})




