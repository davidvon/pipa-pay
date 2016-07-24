exports.discount = (amount) => {
    if(amount < 500) return amount
    if(amount < 1000) return amount*0.99
    if(amount < 2000) return amount*0.98
    if(amount < 5000) return amount*0.97
    return amount * 0.96
}
