class CreateBankAccount {
    // private fields, direct access is restricted (only accessible in browser's dev tools like console tab)
    #balance;
    #owner;
    #accountNumber;
    // =========================================

    constructor(owner, initialBalance) {
        this.#balance = initialBalance
        this.#owner = owner
        this.#accountNumber = crypto.randomUUID();
    }

    printAccountHolderDetails() {
        return `Account Holder Name: ${this.#owner}
Account No. ${this.#accountNumber}
        `
    }
    checkBalance() {
        return `Your account balance is ${this.#balance}$`
    }
    withdrawBalance(value) {
        if (value > this.#balance) {
            return `insufficient funds! your total balance is only: ${this.#balance}$`
        } else if (!value) {
            return `please enter a valid amount for withdraw`
        } else {
            this.#balance -= value
            return `Amount of $${value} is debited form your Bank account, Your current balance is: ${this.#balance}`
        }
    }
    depositBalance(value) {
        if (!value) {
            return `please enter a valid amount for deposit`
        } else {
            this.#balance += value
            return `Amount of $${value} is credited to your Bank account, Your current balance is: ${this.#balance}`
        }
    }
}

const user1 = new CreateBankAccount('John', 4000)