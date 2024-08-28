/**
    *Class Veiculo retorna apenas o nome e marca do modelo;
 * 
    *A Subclass Carro recebe informações mais detalhadas sobre o tipo do veiculo;
    *A Subclass Moto recebe informações mais detalhadas sobre o tipo do veiculo;   

    *O metodo precoVeiculo informa o valor do veiculo antes do desconto
 */

    //função construtora
    function Veiculo(nome, modelo, preco) {
        this.nome = nome;
        this.modelo = modelo;
        let _preco = preco;

        this.getPreco = function () {
            return _preco
        }

        this.setPreco = function (valor) {
            if(typeof valor === 'number') {
                _preco = valor
            }
        }

        this.descontoPreco = function() {
            let valorDesconto = (_preco * 1.2) / 100
            _preco = _preco - valorDesconto
            console.log(_preco)
        }

        this.infoVeiculo = function() {
            console.log(`Seu Veiculo é um ${modelo} da ${nome}`)
        }

    }

    function Carro(nome, modelo, motor, ano, preco) {
        this.motor = motor;
        this.ano = ano; //this se refere ao Carro
        
        Veiculo.call(this, nome, modelo, preco) //this se refere ao veiculo
    }

    function Moto(nome, modelo, motor, ano, preco) {
        this.motor = motor;
        this.ano = ano;

        Veiculo.call(this, nome, modelo, preco)
    }

    function Bmw(modelo, motor, ano, preco) {
        Carro.call(this, "BMW", modelo, motor, ano, preco)
    } 

    //instancias
    //Carros
    const Carro1 = new Carro('Volksvagem', 'Golf', '1.6 Turbo', 2022, 100000);
    const Carro2 = new Bmw('320i','2.0 turbo', 2023, 200000 );
    //Motos
    const Moto1 = new Moto('BMW', 'GS1200', '4 tempos', 2023, 65000);

    //MELHORAR O CODIGO

    //Chamadas
    console.log(Moto1.descontoPreco())




