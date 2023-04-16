package engsoft.jogo.patos;

public class Pato_Ruivo extends Pato implements Padrao_Grasnar {
	public Pato_Ruivo() {
		// Composicao: Compoe o comportamento do pato utilizando a instancia da classe
		// Voaveis_Asa
		setComportamento(new Voaveis_Asa());
	}

	// Heranca: sobrescrita do método mostrar da superclasse Pato.
	public String mostrar() {
		return "Eu sou o Pato Ruivo.";
	}

	// Polimorfismo: sobrescrita do método mostrar da superclasse Pato.
	public String grasnar() {
		return "Que-Que.";
	}
}
