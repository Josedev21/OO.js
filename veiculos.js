/**
    *Class Veiculo retorna apenas o nome e marca do modelo;
 * 
    *A Subclass Carro recebe informações mais detalhadas sobre o tipo do veiculo;
    *A Subclass Moto recebe informações mais detalhadas sobre o tipo do veiculo;   

    *O metodo precoVeiculo informa o valor do veiculo antes do desconto

    *Veiculos premium como Mercedes e Bmw, possuem um desconto menor que os demais veiculos populares

    *Com a função mostrarChamadas e o uso do forEach , foi diminuido o uso do console.log, e apresentando todos os dados de forma mais limpa
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
            let valorDesconto = (_preco * 20) / 100
            _preco = _preco - valorDesconto
            return _preco;
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

    //Configura a herança do prototype
    Carro.prototype = Object.create(Veiculo.prototype);
    Carro.prototype.constructor = Carro

    function Moto(nome, modelo, motor, ano, preco) {
        this.motor = motor;
        this.ano = ano;

        Veiculo.call(this, nome, modelo, preco)
    }

    //Configura a herança do prototype
    Moto.prototype = Object.create(Veiculo.prototype);
    Moto.prototype.constructor = Moto

    function Bmw(modelo, motor, ano, preco) {
        Carro.call(this, "BMW", modelo, motor, ano, preco)

        this.descontoPreco = function() {
            const valorDesconto = (this.getPreco() * 10) / 100
            const precoDesconto = this.getPreco() - valorDesconto
            this.setPreco(precoDesconto)
            return this.getPreco();
        }
    }
    
    //Configura a herança do prototype
    Bmw.prototype = Object.create(Carro.prototype);
    Bmw.prototype.constructor = Bmw

    function Mercedes(modelo, motor, ano, preco) {
        Carro.call(this, "Mercedes", modelo, motor, ano, preco)

        this.descontoPreco = function() {
            const valorDesconto = (this.getPreco() * 10) / 100
            const precoDesconto = this.getPreco() - valorDesconto
            this.setPreco(precoDesconto)
            return precoDesconto;
        }
    }
    
    //Configura a herança do prototype
    Mercedes.prototype = Object.create(Carro.prototype);
    Mercedes.prototype.constructor = Carro

    //instancias
    //Carros
    const Carro1 = new Carro('Volksvagem', 'Golf', '1.6 Turbo', 2022, 100000);
    const Carro2 = new Bmw('320i','2.0 turbo', 2023, 230000 );
    const Carro3 = new Mercedes('C63', '2.0 turbo', 2022, 300000)
    //Motos
    const Moto1 = new Moto('BMW', 'GS1200', '4 tempos', 2023, 65000);


    //Chamadas
    function mostrarChamadas(veiculo) {
        console.log(veiculo)
        console.log(`O preço inicial do veiculo é de R$` + veiculo.getPreco());
        console.log('O preço do veiculo após o desconnto é de R$' + veiculo.descontoPreco())
        console.log('-----------------------------------------------')
    }

    const veiculos = [Carro1, Carro2, Carro3, Moto1]

    veiculos.forEach((veiculo) => {
        mostrarChamadas(veiculo)
    });

    




