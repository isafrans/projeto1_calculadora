// criando a Classe da calculadora
class Calculator{
    constructor(){
    //aqui é a propriedade (ou atributo) que receberá os valores digitados
        this.displayValue = " ";
    }
    //este método adiciona os valores à propriedade displayValue
    //permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value){
        this.displayValue += value;
        // chamamos o método updateDisplay dentro do método
        // appendToDisplay para que quando o usuário digitar alguma tecla da calculadora
        // o valor que foi armazenado na propriedade displayValue seja
        // exibida na tela
        //<3
        this.updateDisplay();
    }
    // este método atualiza o elemento input no HTML com o valor atual que está armazenado em displayValue
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }
    // este método limpa o valor que está armazenado em displayValue e chama a função updateDisplay para
    // atualizar a tela com um valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }
    // o método try catch executa o cálculo da expressão matemática contida
    // em displayValue. Esse método utiliza a função eval() para avaliar a expressão e, se for bem sucecida
    // atualiza o displayValue com o resultado e chama a função updateDisplay(). Se ocorrer um erro durante
    // a avaliaçáo, ele atualiza o displayValue com a mensagem "erro" e chama a função updateDisplay.
    calculate(){
        try{
            const result = math.evaluate(this.displayValue);
            this.displayValue = result.toString();
            this.updateDisplay();  
        } catch(error){
            this.displayValue = "ERRO"
            this.updateDisplay();
        }
    }
}

// criando o objeto ou instanciando a classe
// objeto chamado calc
const calc = new Calculator();