/* Tema Light / Dark */

const checkTemaBtn = document.querySelector("#check-tema")

function alternarDarkMode() {
  document.body.classList.toggle("dark");
}

function carregarTema() {

  const darkMode = localStorage.getItem("dark")

  if (darkMode) {
    alternarDarkMode();
  }
}

carregarTema();

checkTemaBtn.addEventListener("change", function () {

  alternarDarkMode();

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", true)
  } else {
    localStorage.removeItem("dark");
  }
});

/* Fontes Adaptativas */
function FontSize(type) {
  var ids = [".pagina-menu", ".sobre-menu", ".servicos-menu", ".adm-menu", ".titulo-pagina", ".titulo-sobre", ".titulo-servicos", ".titulo-agende", ".paragrafo-pagina", ".paragrafo-sobre", ".paragrafo-rodape", ".input-nome", ".input-email", ".input-telefone", ".input-data-nascimento", ".input-data-hora", "#btn-agende-menu", "#btn-agende-pagina", "#btn-agende-agende", ".card-title-1", ".card-title-2", ".card-title-3", ".card-title-4", ".card-a-1", ".card-a-2", ".card-a-3", ".card-a-4"];

  ids.forEach(id => {

    var elemento = document.querySelector(id);
    var size = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    size = parseFloat(size)

    if (type == '+') {

      if (id === '.titulo-pagina' || id === '.titulo-sobre' || id === '.titulo-servicos' || id === '.titulo-agende') {

        if(size < 50) {
          elemento.style.fontSize = (size + 2) + "px";
        }
      }

      if (id === '.pagina-menu' || id === '.sobre-menu' || id === '.servicos-menu' || id === '.adm-menu' || id === '.paragrafo-pagina' || id === '.paragrafo-sobre' || id === '.paragrafo-rodape' || id === '.input-nome' || id === '.input-email' || id === '.input-telefone' || id === '.input-data-nascimento' || id === '.input-data-hora' || id === '#btn-agende-menu' || id === "#btn-agende-pagina" || id === "#btn-agende-agende" || id === ".card-title-1" || id === ".card-title-2" || id === ".card-title-3" || id === ".card-title-4" || id === ".card-a-1" || id === ".card-a-2" || id === ".card-a-3" || id === ".card-a-4") {

        if(size < 26) {
          elemento.style.fontSize = (size + 2) + "px";
        }
      }
    } else {

      if (id === '.titulo-pagina' || id === '.titulo-sobre' || id === '.titulo-servicos' || id === '.titulo-agende') {

        if(size > 42) {
          elemento.style.fontSize = (size - 2) + "px";
        }
      }

      if (id === '.pagina-menu' || id === '.sobre-menu' || id === '.servicos-menu' || id === '.adm-menu' || id === '.paragrafo-pagina' || id === '.paragrafo-sobre' || id === '.paragrafo-rodape' || id === '.input-nome' || id === '.input-email' || id === '.input-telefone' || id === '.input-data-nascimento' || id === '.input-data-hora' || id === '#btn-agende-menu' || id === "#btn-agende-pagina" || id === "#btn-agende-agende" || id === ".card-title-1" || id === ".card-title-2" || id === ".card-title-3" || id === ".card-title-4" || id === ".card-a-1" || id === ".card-a-2" || id === ".card-a-3" || id === ".card-a-4") {

        if(size > 18) {
          elemento.style.fontSize = (size - 2) + "px";
        }
      }
    }
  })
}