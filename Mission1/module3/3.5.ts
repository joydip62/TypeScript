{
    //
    class BankAccount{
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(balance: number) {
            this._balance += balance;
        }

        getBalance(): number { 
            return this._balance;
        }
    }
    
    const newBankAccount = new BankAccount(111, 'new bank account', 20);
    newBankAccount.addDeposit(50);

    const myBalance = newBankAccount.getBalance();
    console.log(myBalance);
    
   
    // 
}