import {
    toggleTheme
} from "./header/themeSwitcher.js"
import {
    renderBalanceView
} from "./transactions/balance.js"
import {
    attachListenersSetting
} from "./transactions/deleteAllTransactions.js"
import {
    initNewTransaction
} from "./transactions/newTransaction.js"
import {
    attachListenersModalBox
} from "./transactions/deleteOneTransaction.js"

export const init = () => {
    renderBalanceView()
    attachListenersSetting()
    initNewTransaction()
    attachListenersModalBox()
}