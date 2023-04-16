package engsoft.jogo.patos;

// Herança: Herda a super classe Pato
public class Pato_Borracha extends Pato {
	public Pato_Borracha() {
		// Composicao: Compoe o comportamento do pato utilizando a instancia da classe Nao_Voa
		setComportamento(new Nao_Voa());		
	}
	
	public String mostrar() {
		return "Ol�, eu sou de Boarracha.";
	} 
}
