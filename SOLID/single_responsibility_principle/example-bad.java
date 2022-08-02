public class Facture {
	private Book book;
	private int quantity;
	private double percDiscount;
	private double percTax;
	private double total;

	public Facture(Book book, int quantity, double percDiscount, double percTax) {
		this.book = book;
		this.quantity = quantity;
		this.percDiscount = percDiscount;
		this.percTax = percTax;
		this.total = this.calculateTotal();
	}

	public double calculateTotal() {
    double price = ((book.price - book.price * percDiscount) * this.quantity);
		double taxPrice = price * (1 + percTax);
		return taxPrice;
	}

  // Print facture should not be the Facture class responsability!
	public void printFacture() {
    System.out.println(quantity + "x " + book.nome + " " + book.price + "$");
    System.out.println("Discount percentage: " + percDiscount);
    System.out.println("Tax percentage: " + percTax);
    System.out.println("Total: " + total);
	}

  // Save facture should not be the Facture class responsability!
  public void salveToFile(String nomeArquivo) {
    // bla bla bla
	}
}