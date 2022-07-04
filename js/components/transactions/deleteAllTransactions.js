import { transactionList } from "./transactionList.js"
import { renderTransactionList } from './newTransaction.js'

export const attachListenersSetting = () => {
    document.querySelector('#setting-btn').addEventListener('click', showSetting)
    document.querySelector('#close-setting').addEventListener('click', closeSetting)
    document.querySelector('#remove-all-transactions').addEventListener('click', deleteAllTransactions)
}

const showSetting = () => {
    document.querySelector('.setting').style.display = "flex"
    document.querySelector('.budget-app').classList.add('hidden')
}

const closeSetting = () => {
    document.querySelector('.setting').style.display = "none"
    document.querySelector('.budget-app').classList.remove('hidden')
}

const deleteAllTransactions = () => {
    transactionList.length = 0
    
    closeSetting()
    renderTransactionList()
}

