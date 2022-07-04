import { transactionList } from "./transactionList.js"
import { renderTransactionList } from "./newTransaction.js"

export const attachListenersModalBox = () => {
    document.querySelector('#btn-no').addEventListener('click', closeModalBox)

    document.querySelector('#btn-yes').addEventListener('click', deleteTransaction)
}

let buttonDeleteTransaction;

export const showModalBox = (e) => {
    buttonDeleteTransaction = e.target.closest('.delete-icon')

    if (buttonDeleteTransaction) {
        document.querySelector('.modal').style.display = "flex"
        document.querySelector('.budget-app').classList.add('hidden')
    }
}



const deleteTransaction = () => {
    const selectedId = Number(buttonDeleteTransaction.id.replace('trash-', ''))
    const tIdx = transactionList.findIndex(t => t.id === selectedId);

    transactionList.splice(tIdx, 1);

    renderTransactionList()
    closeModalBox()
}


const closeModalBox = () => {
    document.querySelector('.modal').style.display = "none"
    document.querySelector('.budget-app').classList.remove('hidden')
}