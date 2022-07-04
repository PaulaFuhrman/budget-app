import { transactionList } from "./transactionList.js"

const calculateTotalBalance = (type) => {
    return transactionList
        .filter(transaction => transaction.type === type)
        .map(transaction => Number(transaction.amount))
        .reduce((prev, curr) => prev + curr, 0)
}

export const renderBalanceView = () => {
    const totalIncome = calculateTotalBalance('+').toFixed(2)
    const totalExpenses = calculateTotalBalance('-').toFixed(2)
    const balance = (totalIncome - totalExpenses).toFixed(2)

    document.querySelector('.balance').innerHTML = `
        <div class="balance__total">
            <h2>Balance</h2>
            <p id="balance-total">${balance}</p>
        </div>
    
        <div class="balance__type">
            <div class="balance__group">
                <div class="balance__group--title">
                     <h3>Income</h3>
                    <i class="fa-solid fa-arrow-down"></i>
                </div>
                <p>+<span id="balance__income--value">${totalIncome}</span></p>
        </div>
    
            <div class="balance__group">
                <div class="balance__group--title">
                    <h3>Expenses</h3>
                    <i class="fa-solid fa-arrow-up"></i>
                </div>
                <p>- <span id="balance__expenses--value">${totalExpenses}</span></p>
            </div>
        </div>`
}