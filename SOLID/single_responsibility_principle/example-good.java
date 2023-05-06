// Print Facture now have his own class and responsability!
public class PrintFacture {
  private Facture facture;

  public PrintFacture(Facture facture) {
    this.facture = facture;
  }

  public void printFacture() {
    System.out.println(quantity + "x " + book.nome + " " + book.price + "$");
    System.out.println("Discount percentage: " + percDiscount);
    System.out.println("Tax percentage: " + percTax);
    System.out.println("Total: " + total);
  }
}

// Save Facture now have his own class and responsability!
public class SaveFacture {
  Facture facture;

  public SaveFacture(Facture facture) {
    this.facture = facture;
  }

  public void saveToFile(String filename) {
    // bla bla bla
  }
}