{
    // getter and setter 
    
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
      }
    
      // getter
      get balance() {
        return this._balance;
      }

      //   setter
      set deposit(amount: number) {
          this._balance = this.balance + amount
      }

    // addDeposit(balance: number) {
    //   this._balance += balance;
    // }

    // getBalance(): number {
    //   return this._balance;
    // }
  }

  const newBankAccount = new BankAccount(111, "new bank account", 20);
//   newBankAccount.addDeposit(50);

    // set
    newBankAccount.deposit = 80;
    
    // get
  const myBalance = newBankAccount.balance;
  console.log(myBalance);

  //
}
