package wallet

import "testing"

func TestWallet(t *testing.T) {
	t.Run("Deposit", func(t *testing.T) {
		wallet := Wallet{}
		wallet.Deposit(Bitcoin(10))
		want := Bitcoin(10)
		assertBalance(t, wallet, want)
	})

	t.Run("Withdraw", func(t *testing.T) {
		wallet := Wallet{Bitcoin(30)}
		err := wallet.Withdraw(Bitcoin(10))
		want := Bitcoin(20)
		assertBalance(t, wallet, want)
		assertNoError(t, err)
	})

	t.Run("Withdraw with insufficient balance", func(t *testing.T) {
		initialBalance := Bitcoin(30)
		wallet := Wallet{initialBalance}
		err := wallet.Withdraw(Bitcoin(50))
		assertBalance(t, wallet, initialBalance)
		assertError(t, err, ErrInsufficientFunds)
	})
}

func assertBalance(t *testing.T, wallet Wallet, want Bitcoin) {
	t.Helper()
	got := wallet.Balance()
	if got != want {
		t.Errorf("got %s want %s", got, want)
	}
}

func assertNoError(t *testing.T, err error) {
	t.Helper()
	if err != nil {
		t.Errorf("should not throw an error, got %q", err.Error())
	}
}

func assertError(t *testing.T, got, want error) {
	t.Helper()
	if got == nil {
		t.Fatal("expected to throw an error") // stop the test instead throwing a pointer error below
	}
	if got.Error() != want.Error() {
		t.Errorf("got %q, want %q", got.Error(), want)
	}
}
