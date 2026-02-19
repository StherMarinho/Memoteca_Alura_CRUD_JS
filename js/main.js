import ui from "./ui.js";
import api from "./api.js";

document.addEventListener('DOMContentLoaded', () => { //quando a pag for carregada
    ui.renderizarPensamentos();

    const formularioPensamento = document.getElementById('pensamento-form')
    const botaoCancelar = document.getElementById('botao-cancelar')

    formularioPensamento.addEventListener('submit', manipilarSubmissaoFormulario);
    botaoCancelar.addEventListener('click', manipilarCancelamento)
});

async function manipilarSubmissaoFormulario(evento) {
    evento.preventDefault();
    const id = document.getElementById('pensamento-id').value
    const conteudo = document.getElementById('pensamento-conteudo').value
    const autoria = document.getElementById('pensamento-autoria').value

    try{
        if(id){
            await api.editarPensamento({id, conteudo,autoria})
        }
        else{
            await api.salvarPensamento({conteudo,autoria})
        }
        ui.renderizarPensamentos()
    }
    catch{
        alert('Erro ao salvar pensamento.')
    }
}

function manipilarCancelamento(){
    ui.limparFormulario();
}