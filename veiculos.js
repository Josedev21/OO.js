/**
    **Class Veiculo retorna apenas o nome e marca do modelo;

 */

    function Veiculo(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        this.infoVeiculo = function() {
            console.log(`Seu carro é um ${nome} ${modelo}`)
        }
    }

    function Carro(motor, ano, preço) {
        this.motor = motor;
        this.ano = ano;
        this.preço = preço

        Veiculo.call(this, nome, modelo)
    }

    const Carro1 = new Carro('Volksvagem', 'Golf', '1.6 Turbo', 2022, 100.000)

    console.log(Carro1)


