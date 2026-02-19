const URL_BASE = 'http://localhost:3000';

const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`);
            return await response.json();
        } 
        catch (error){
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },

    async salvarPensamento(pensamento){ 
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                method: 'POST', //qual ação a ser feita com essa requisição?
                headers:{
                    "Content-Type": "application/json" //tipo json
                },
                body: JSON.stringify(pensamento) //conteúdo da requisição; objeto JS que contem os dados; conversão da requisição
            });
            return await response.json();
        } 
        catch (error){
            alert('Erro ao salvar pensamento');
            throw error;
        }
    },

    /*async  buscarPensamentoPorId(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`)
            return await response.json()
        } 
        catch (error){
            alert('Erro ao buscar pensamento.')
        }
    },*/
    async buscarPensamentoPorId(id) { //GET com o axios e POST,PUT e DELETE, dispensa-se a parte de method, headers...
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
            return await response.data
        }
        catch (error){
            alert('Erro ao buscar pensamento.')
        }
    },

    async editarPensamento(pensamento){ 
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                method: 'PUT', //qual ação a ser feita com essa requisição?
                headers:{
                    "Content-Type": "application/json" //tipo json
                },
                body: JSON.stringify(pensamento) //conteúdo da requisição; objeto JS que contem os dados; conversão da requisição
            });
            return await response.json();
        } 
        catch (error){
            alert('Erro ao editar pensamentos');
            throw error;
        }
    },

    async excluirPensamento(id){ 
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                method: 'DELETE' //qual ação a ser feita com essa requisição?
            })
        } 
        catch (error){
            alert('Erro ao excluir pensamentos');
            throw error;
        }
    }
}

export default api;