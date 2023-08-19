# Single Responsibility Principle (SRP)

## What is this?

- This principle say: 
  
`A class should do just one thing, and should have just one motive to be changed`

___

## Why?

- Helps the maintenance
- Help to refactor
- Help to make a reusable code
- Less git conflicts

## Examples (Java)

### Bad example

```js
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
```

### Good example

```js
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
```