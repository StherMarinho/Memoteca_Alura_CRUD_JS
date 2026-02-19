const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            return await response.json();
        } 
        catch {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    },

    async salvarPensamento(pensamento){ 
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: 'POST', //qual ação a ser feita com essa requisição?
                headers:{
                    "Content-Type": "application/json" //tipo json
                },
                body: JSON.stringify(pensamento) //conteúdo da requisição; objeto JS que contem os dados; conversão da requisição
            });
            return await response.json();
        } 
        catch {
            alert('Erro ao salvar pensamento');
            throw error;
        }
    },

    async  buscarPensamentoPorId(id){
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return await response.json()
        } 
        catch {
            alert('Erro ao buscar pensamento.')
        }
    },

    async editarPensamento(pensamento){ 
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: 'PUT', //qual ação a ser feita com essa requisição?
                headers:{
                    "Content-Type": "application/json" //tipo json
                },
                body: JSON.stringify(pensamento) //conteúdo da requisição; objeto JS que contem os dados; conversão da requisição
            });
            return await response.json();
        } 
        catch {
            alert('Erro ao editar pensamentos');
            throw error;
        }
    }
}

export default api;