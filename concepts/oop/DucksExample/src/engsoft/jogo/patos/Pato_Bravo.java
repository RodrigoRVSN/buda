package engsoft.jogo.patos;

public class Pato_Bravo extends Pato implements Padrao_Grasnar {
	public Pato_Bravo() {
		// Composicao: Compoe o comportamento do pato utilizando a instancia da classe Voaveis_Asa
		setComportamento(new Voaveis_Asa());
	}

	// Herança: herda e modifica o metodo mostrar da Super Classe Pato
	public String mostrar() {
		return "Eu sou o Pato Bravo.";
	}

	// Polimorfismo: Implementa o metodo grasnar da interface Padrao_Grasnar
	public String grasnar() {
		return "Que-Que. Grrrrrrrrr.";
	}

}
