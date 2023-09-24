# Single Responsibility Principle (SRP)

## What is this?

This principle says: 
  
> A module should have one, and just one reason to be changed

___

## Why use this ?

- Helps the maintenance
- Help to make a reusable code
- Less git conflicts

## Examples (Java)

### Bad example

```java
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
		// do something to print the facture
	}

	// Save facture should not be the Facture class responsability!
	public void saveToFile(String nomeArquivo) {
		// do something to save the file
	}
}
```

### Good example

```java
// Print Facture now have his own class and responsability!
public class PrintFacture {
  private Facture facture;

  public PrintFacture(Facture facture) {
    this.facture = facture;
  }

  public void printFacture() {
		// do something to print the facture
  }
}

// Save Facture now have his own class and responsability!
public class SaveFacture {
  Facture facture;

  public SaveFacture(Facture facture) {
    this.facture = facture;
  }

  public void saveToFile(String filename) {
		// do something to save the file
  }
}
```