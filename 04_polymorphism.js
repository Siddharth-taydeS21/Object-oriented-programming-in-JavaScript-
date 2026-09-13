class PaymentProcessor {
    constructor(payment) {
        this.payment = payment
    }

    processPayment() {
        return `Thank you so much for choosing our default payment method. Your payment: ${this.payment}$`
    }
}

class processCashOnDeliveryPayment extends PaymentProcessor {
    processPayment() {
        return `20$ extra charges will be charged with Cash on Delivery. Your payment: ${this.payment}$`
    }
}

class processNetBankingPayment extends PaymentProcessor {
    processPayment() {
        return `Congrats! you got 4% discount by making a payment through Net Banking. Your payment: ${this.payment}$`
    }
}

class processCreditCardPayment extends PaymentProcessor {
    processPayment() {
        return `Congrats! you can take benefits of Pay later and EMIs with Credit card payment.  Your payment: ${this.payment}$`
    }
}

class processCryptoCurrencyPayment extends PaymentProcessor {
    processPayment() {
        return `8% conversion fees & 2% merchant fees will be charged additionally. Your payment: ${this.payment}$`
    }
}

const makePayment = (paymentMethod) => {
    console.log(paymentMethod.processPayment())
}

const cashPayment = new processCashOnDeliveryPayment(300)
const upiPayment = new processNetBankingPayment(340)
const creditCardPayment = new processCreditCardPayment(780)
const bitcoinPayment = new processCryptoCurrencyPayment(4000)
const normalPayment = new PaymentProcessor(70)

makePayment(cashPayment)
makePayment(upiPayment)
makePayment(creditCardPayment)
makePayment(bitcoinPayment)
makePayment(normalPayment)