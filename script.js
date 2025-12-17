const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
 //Toggle mobile menu visibility
 document.body.classList.toggle("show-mobile-menu");
});

//Close menu when close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Modal de imagem - Produtos
const imagens = Array.from(document.querySelectorAll(".produto-clicavel"));
const modal = document.getElementById("modal-imagem");
const modalImg = document.getElementById("modal-img");
const fechar = document.querySelector(".modal-fechar");
const prev = document.querySelector(".modal-prev");
const next = document.querySelector(".modal-next");

let indiceAtual = 0;

// Abrir modal
imagens.forEach((img, index) => {
    img.addEventListener("click", () => {
        indiceAtual = index;
        modal.classList.add("ativo");
        atualizarImagem();
        document.body.style.overflow = "hidden";
    });
});

function atualizarImagem() {
    modalImg.style.opacity = 0;
    setTimeout(() => {
        modalImg.src = imagens[indiceAtual].src;
        modalImg.style.opacity = 1;
    }, 120);
}

function fecharModal() {
    modal.classList.remove("ativo");
    document.body.style.overflow = "auto";
}

// Navegação
function proxima() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}

next.addEventListener("click", proxima);
prev.addEventListener("click", anterior);
fechar.addEventListener("click", fecharModal);

// Clique fora
modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
});

// Teclado
document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("ativo")) return;
    if (e.key === "ArrowRight") proxima();
    if (e.key === "ArrowLeft") anterior();
    if (e.key === "Escape") fecharModal();
});

// Swipe mobile
let startX = 0;

modalImg.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

modalImg.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
        diff > 0 ? proxima() : anterior();
    }
});

// ===== CARROSSEL MOBILE - NOSSOS PRODUTOS =====
const menuList = document.querySelector(".menu-section .menu-list");
const menuItems = document.querySelectorAll(".menu-section .menu-item");

let produtoIndex = 0;
let startXProduto = 0;

function irParaProduto(index) {
    if (!menuList) return;

    // Loop infinito
    if (index >= menuItems.length) produtoIndex = 0;
    else if (index < 0) produtoIndex = menuItems.length - 1;
    else produtoIndex = index;

    const largura = menuList.offsetWidth;
    menuList.scrollTo({
        left: largura * produtoIndex,
        behavior: "smooth"
    });
}

// Swipe no mobile
menuList.addEventListener("touchstart", (e) => {
    startXProduto = e.touches[0].clientX;
});

menuList.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXProduto - endX;

    if (Math.abs(diff) > 50) {
        diff > 0 ? irParaProduto(produtoIndex + 1) : irParaProduto(produtoIndex - 1);
    }
});

// Setas do teclado (mobile + desktop)
document.addEventListener("keydown", (e) => {
    if (window.innerWidth > 768) return;
    if (e.key === "ArrowRight") irParaProduto(produtoIndex + 1);
    if (e.key === "ArrowLeft") irParaProduto(produtoIndex - 1);
});


