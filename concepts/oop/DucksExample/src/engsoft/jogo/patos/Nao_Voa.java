package engsoft.jogo.patos;

// Programação orientada a interface: implementa a interface Padrao_Voaveis
public class Nao_Voa implements Padrao_Voaveis {
	public Nao_Voa() { }
	
	// Polimorfismo: implementa um metodo da interface Padrao_Voaveis para patos que nao voam.
	public String voar() {
		return "Esse pato n�o Voa. Velocidade: " + getVelocidade();
	}

	public double getVelocidade() {
		return 0;
	}
}
