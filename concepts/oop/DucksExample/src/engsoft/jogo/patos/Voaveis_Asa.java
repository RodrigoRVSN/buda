package engsoft.jogo.patos;

// Programação orientada a interface: implementa a interface Padrao_Voaveis
public class Voaveis_Asa implements Padrao_Voaveis {
	private double velocidade;

	public Voaveis_Asa() {
		velocidade = 10;
	}

	// Polimorfismo: implementa o metodo definido pela interface
	public String voar() {
		return "Voando como um p�ssaro que voa. Velocidade: " + getVelocidade();
	}

	// Polimorfismo: implementa o metodo definido pela interface
	public double getVelocidade() {
		return velocidade;
	}

}
