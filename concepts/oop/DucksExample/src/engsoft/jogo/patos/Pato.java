package engsoft.jogo.patos;

// Classe Abstrata: Define a estrutura base para a criacao de outras classes
public abstract class Pato {
	// Composição: Atributo que sera utilizado pela classe
	protected Padrao_Voaveis comportamento_pato;

	// Metodo abstrato: precisa ser implementado pelas classes filhas
	abstract String mostrar();

	// Metodo concreto: implementado e utilizado pelas classes
	public String nadar() {
		return "Pato Nadando.";
	}

	// Delegacao: Define o comportamento atraves do objeto recebido no metodo
	public void setComportamento(Padrao_Voaveis padrao) {
		comportamento_pato = padrao;
	}

	// Polimorfismo: implementa o metodo de acordo com o que foi definido
	public String comportamento_pato() {
		return comportamento_pato.voar();
	}
}
