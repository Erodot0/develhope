class BankAccount {
    constructor(value){
        this.balance = value
    }

    deposit(add){
        this.balance += add
    }

    withdraw(draw){
        this.balance -= draw
    }

    view(){
        console.log(this.balance)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();