/**
    **Class Veiculo retorna apenas o nome e marca do modelo;

    
 */

    function Veiculo(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        // this.infoVeiculo = function() {
        //     console.log(this.nome + ' Veiculo registrado')
        // }
    }

    const Carro = new Veiculo("Golf", "volkswagen")
    console.log(Carro)
    console.log(Carro.nome)
    // Carro.infoVeiculo();