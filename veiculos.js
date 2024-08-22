/**
    *Class Veiculo retorna apenas o nome e marca do modelo;
 * 
    *A Subclass Carro recebe informações mais detalhadas sobre o tipo do veiculo;
    *A Subclass Moto recebe informações mais detalhadas sobre o tipo do veiculo;   
 */

    function Veiculo(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        this.infoVeiculo = function() {
            console.log(`Seu Veiculo é um ${nome} ${modelo}`)
        }

    }

    function Carro(nome, modelo, motor, ano, preco) {
        this.motor = motor;
        this.ano = ano;
        this.preco = preco;
        
        this.precoVeiculo = function() {
            console.log('R$' + this.preco)
        }

        Veiculo.call(this, nome, modelo)
    }

    function Moto(nome, modelo, motor, ano, preco) {
        this.motor = motor;
        this.ano = ano;
        this.preco = preco;

        this.precoVeiculo = function() {
            console.log('R$' + this.preco)
        }

        Veiculo.call(this, nome, modelo)
    }

    const Carro1 = new Carro('Volksvagem', 'Golf', '1.6 Turbo', 2022, 100000);
    const Moto1 = new Moto('BMW', 'GS1200', '4 tempos', 2023, 65000)

    console.log(Carro1)
    Carro1.precoVeiculo();
    console.log(Moto1)
    Moto1.precoVeiculo();



