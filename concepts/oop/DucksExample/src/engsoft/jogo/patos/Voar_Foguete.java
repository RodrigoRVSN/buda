package engsoft.jogo.patos;

// Programação orientada a interface: implementa a interface Padrao_Voaveis
public class Voar_Foguete implements Padrao_Voaveis {
	private double velocidade;

	public Voar_Foguete() {
		velocidade = 1000;
	}

	// Polimorfismo: implementa o metodo definido pela interface
	public String voar() {
		return "Voando como um foguete. Velocidade: " + getVelocidade();
	}

	// Polimorfismo: implementa o metodo definido pela interface
	public double getVelocidade() {
		return velocidade;
	}
}
