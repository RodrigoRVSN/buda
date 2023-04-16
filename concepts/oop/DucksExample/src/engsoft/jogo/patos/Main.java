package engsoft.jogo.patos;

public class Main {

	public static void main(String[] args) {
		// Delegação: instanciando um objeto da classe Pato_Ruivo, em uma variável de
		// classe abstrata Pato e delega para a classe Pato_Ruivo implementar
		Pato pt = new Pato_Ruivo();

		System.out.println(pt.mostrar());
		System.out.println(pt.nadar());
		System.out.println(pt.comportamento_pato());

		pt.setComportamento(new Voar_Foguete());

		System.out.println(pt.comportamento_pato());

	}

}
