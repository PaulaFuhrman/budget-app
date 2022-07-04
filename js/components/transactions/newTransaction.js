import {
    transactionList
} from "./transactionList.js"
import {
    renderBalanceView
} from "./balance.js"
import {
    sortTransactionsByName
} from './sortTransactions.js'
import {
    noTransactionInformation
} from "./noTransction.js"
import {
    showModalBox
} from './deleteOneTransaction.js'

export const initNewTransaction = () => {
    attachListenersNewTransaction()
    renderTransactionList()
}

const attachListenersNewTransaction = () => {
    document.querySelectorAll('.add-transaction').forEach(btn => {
        btn.addEventListener('click', showContainerNewTransaction)
    })
    document.querySelector('#cancel').addEventListener('click', closeContainerNewTransaction)
    document.querySelector('#close').addEventListener('click', closeContainerNewTransaction)
    document.querySelector('.new-transaction__type').addEventListener('click', handleType)
    document.querySelector('.new-transaction__category').addEventListener('click', handleCategory)
    document.querySelector('#add').addEventListener('click', createNewTransaction)
    document.querySelector('#search-name').addEventListener('keyup', renderTransactionList)
    document.querySelector('#sort').addEventListener('click', sortTransactionsByName)
    document.querySelector('tbody').addEventListener('click', showModalBox)
}


const newTransactionContainer = document.querySelector('.new-transaction')
const inputValue = document.querySelector('#new-transaction__value')
const inputName = document.querySelector('#new-transaction__name')
const inputDate = document.querySelector('#new-transaction__date')




const showContainerNewTransaction = () => {
    document.querySelector('.budget-app').classList.add('hidden')
    newTransactionContainer.style.display = "flex"
}

const closeContainerNewTransaction = () => {
    document.querySelector('.budget-app').classList.remove('hidden')
    newTransactionContainer.style.display = "none"

    clearForm()
}

const handleType = (e) => {
    const buttonType = e.target.closest('button')

    if (buttonType) {

        newTransactionContainer
            .querySelectorAll('.new-transaction__type button')
            .forEach(el => el.classList.remove('active'))

        buttonType.classList.add('active')
    }
}

const handleCategory = (e) => {
    const buttonCategory = e.target.closest('button')

    if (buttonCategory) {

        newTransactionContainer
            .querySelectorAll('.new-transaction__category button')
            .forEach(el => el.classList.remove('active'))

        buttonCategory.classList.add('active')
    }
}

const clearForm = () => {
    newTransactionContainer
        .querySelectorAll('.new-transaction__type button')
        .forEach(el => el.classList.remove('active'))

    newTransactionContainer
        .querySelectorAll('.new-transaction__category button')
        .forEach(el => el.classList.remove('active'))

    inputDate.value = ""
    inputName.value = ""
    inputValue.value = ""
    document.querySelector('#error').style.visibility = "hidden"
}

const checkType = (type) => {
    return (type === 'income' ? '+' : '-')
}

let currentId = 4

const createNewTransaction = () => {

    const activeType = newTransactionContainer.querySelector('.new-transaction__type button.active')
    const activeCategory = newTransactionContainer.querySelector('.new-transaction__category button.active')


    if (inputDate.value !== "" && inputName.value !== "" && inputValue.value !== "" && activeType && activeCategory) {

        transactionList.push({
            date: inputDate.value,
            category: activeCategory.dataset.category,
            name: inputName.value,
            type: checkType(activeType.id),
            typeName: activeType.id,
            amount: inputValue.value,
            id: currentId
        })

        currentId += 1
        renderTransactionList()
        closeContainerNewTransaction()
    } else {
        document.querySelector('#error').style.visibility = "visible"
    }

}


export const renderTransactionList = () => {
    document.querySelectorAll('tbody').forEach(element => {
        element.innerHTML = '';
    });

    const search = document.querySelector('#search-name').value.toLowerCase()
    const filtredList = transactionList.filter((transaction) => transaction.name.toLowerCase().indexOf(search) !== -1)


    filtredList.forEach((transaction) => {
        const newTransaction = document.createElement('tr')

        newTransaction.setAttribute('id', transaction.id)
        newTransaction.innerHTML = `
        <td>${transaction.date}</td>
        <td><i class="fa-solid ${transaction.category}"></i></td>
        <td>${transaction.name}</td>
        <td class="${transaction.type === '+' ? 'positive' : 'negative'}">${transaction.type} ${transaction.amount}</td>
        <td>
        <i class="fa-solid fa-trash delete-icon" id="trash-${transaction.id}" data-bs-toggle="tooltip"
        data-bs-placement="bottom" title="Delete"></i>
        </td>
        `

        document.querySelector('tbody').appendChild(newTransaction)

    })

    noTransactionInformation()
    renderBalanceView()
    initTransactionListTooltips()
}

const initTransactionListTooltips = () => {
    const transactionListTooltips = document.querySelectorAll('.transaction-list tbody [data-bs-toggle="tooltip"]')
    const tooltipList = [...transactionListTooltips].map(tooltip => new bootstrap.Tooltip(tooltip))
}