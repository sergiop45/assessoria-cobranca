let btnslide_one = document.getElementsByClassName("btn-slide");
let img_slide = document.querySelector("#slide img");
let text_slide = document.querySelector("#text-slide");
let btns_slide = document.querySelectorAll(".btn-slide");
let btn_menu = document.querySelector("#btn-menu");
let menu = document.querySelector("#menu");

slideum();

btn_menu.addEventListener("click", () => {
    let count_menu = menu.childElementCount;
    if (count_menu == 0) {
        criamenu();
    } else {
        apagamenu();
    }
});

function criamenu() {
    menu.innerHTML = "<li><ol>Home</ol><ol>Sobre</ol><ol>Serviços</ol><ol>Contato</ol></li>";
}
function apagamenu() {
    menu.removeChild(menu.firstChild);
}



function slideum() {
    for (let index = 0; index < btns_slide.length; index++) {
        btns_slide[index].style = "color: #fff;";
    }
    btns_slide[0].style = "color: rgb(82,101,143);";
    img_slide["src"] = "images/escritorio.jpg";
    let label_slide = document.getElementById("label_slide");
    label_slide.style.color = "rgb(82,101,143)";
    setTimeout(() => {
        slidedois();
    }, [5000])
}

function slidedois() {
    for (let index = 0; index < btns_slide.length; index++) {
        btns_slide[index].style = "color: #fff;";
    }
    btns_slide[1].style = "color: rgb(82,101,143);";
    img_slide["src"] = "images/businessman-front.jpg";
    text_slide.firstElementChild.innerHTML = "<label id='label_slide'>Eficiência</label> para atender bem";
    text_slide.children[1].textContent = "Com um atendimento personificado, estudamos a realidade do seu cliente para gerar a melhor solução.";
    let label_slide = document.getElementById("label_slide");
    label_slide.style.color = "#000";
    setTimeout(() => {
        slidetres();
    }, [6000])
}

function slidetres() {
    for (let index = 0; index < btns_slide.length; index++) {
        btns_slide[index].style = "color: #fff;";
    }
    btns_slide[2].style = "color: rgb(82,101,143);";
    img_slide["src"] = "images/mulher-escritorio.jpg";
    text_slide.firstElementChild.innerHTML = "Cobrança que aproxima <label id='label_slide'>Pessoas</label>";
    text_slide.children[1].textContent = "Tornamos a sua recuperação de crédito um processo mais eficiente por meio do atendimento personificado.";
    let label_slide = document.getElementById("label_slide");
    label_slide.style.color = "rgb(82,101,143)";
    setTimeout(() => {
        slidequatro();
    }, [6000])
}

function slidequatro() {
    for (let index = 0; index < btns_slide.length; index++) {
        btns_slide[index].style = "color: #fff;";
    }
    btns_slide[3].style = "color: rgb(82,101,143);";
    img_slide["src"] = "images/businessman-back.jpg";
    text_slide.firstElementChild.innerHTML = "<label id='label_slide'>Especialistas</label> em negociação";
    text_slide.children[1].textContent = "Resolução de dívidas por profissionais especializados, de forma direta, rápida e segura.";
    let label_slide = document.getElementById("label_slide");
    label_slide.style.color = "rgb(82,101,143)";
    setTimeout(() => {
        slideum();
    }, [6000])
}

btnslide_one[0].addEventListener("click", () => {
   slideum();
});

btnslide_one[1].addEventListener("click", () => {
    slidedois();
});

btnslide_one[2].addEventListener("click", () => {
   slidetres();
});

btnslide_one[3].addEventListener("click", () => {

    slidequatro();
});

