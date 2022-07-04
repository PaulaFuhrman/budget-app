import { transactionList } from "./transactionList.js"
import { renderTransactionList } from "./newTransaction.js"

export const sortTransactionsByName = () => {
    const sort = transactionList.sort((a, b) => a.name.localeCompare(b.name))

    sort.forEach((transaction, id) => {
        renderTransactionList(transaction, id)
    })
}