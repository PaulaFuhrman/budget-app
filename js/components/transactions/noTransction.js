import { transactionList } from "./transactionList.js"

export const noTransactionInformation = () => {
    if(transactionList.length === 0 ) {
      document.querySelector('.no-transactions').innerHTML = `
      <img class="no-transactions__img" src="./img/money-gd726ad2b5_640.png" alt="no-transactions">
      <p class="no-transactions__info">You don't have any transactions!</p>`
 
    } else if(transactionList.length > 0 ) {
        document.querySelector('.no-transactions').innerHTML = ""
        
    }
}