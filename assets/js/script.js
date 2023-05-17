const walletClosed = document.querySelector('.wallet-closed');
const walletOpened = document.querySelector('.wallet-opened');
const walletBox = document.querySelector('.wallet-box');
const walletCloseBtn = document.querySelector('.wallet-close-btn');
const moneyBody = document.querySelector('.money-body');
const myCash = document.querySelector('.my-cash');

const income = document.querySelector('.income'); 
const expense = document.querySelector('.expense'); 

const addTransaction = document.querySelector('.add');
const clearAllTransactions = document.querySelector('.delete');
const popupSave = document.querySelector('.popup-save');
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('#title');
const popupSum = document.querySelector('#sum');
const popupCategory = document.querySelector('#category');
const errorTitle = document.querySelector('.error-title');
const errorSum = document.querySelector('.error-sum');
const errorCategory = document.querySelector('.error-category');
const deleteTransaction = document.querySelector('.transaction-delete');

let myInterval
let ID = 0
let transactionIcon
let selectedIcon
let moneyArr = [0]

walletClosed.addEventListener('click', () => {
    walletClosed.classList.add('close')
    walletOpened.classList.add('open')
    setTimeout(walletMove, 1000)
    setTimeout(openWalletBox, 3300)

    myInterval = setInterval(moneyFall, 100)
})
const walletMove = () => {
    walletOpened.classList.add('move-left')
};
const openWalletBox = () => {
    walletBox.style.display = 'flex'
    walletCloseBtn.style.display = 'block'
    clearInterval(myInterval)

};

walletCloseBtn.addEventListener('click', ()=> {
    walletCloseBtn.style.display = 'none'
    walletBox.style.display = 'none'
    walletOpened.classList.remove('move-left')
    walletOpened.classList.remove('open')
    walletClosed.classList.remove('close')
})

const moneyFall = () => {
    const moneyItem = document.createElement('money-item')
    moneyItem.classList.add('money')
    moneyItem.textContent = '💵'
    document.body.append(moneyItem)

    moneyItem.style.left = Math.random() * window.innerWidth + 'px'
    moneyItem.style.animationDuration = Math.random() * 5 + 3 + 's'
};

addTransaction.addEventListener('click', () => {
    popup.style.display = 'grid'
})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none'
})

const checkForm = () => {
    let newTransaction = document.createElement('div')
    newTransaction.classList.add('transaction')
    newTransaction.setAttribute('id', ID)
    newTransactionIcon(selectedIcon)

    newTransaction.innerHTML = `
    <div class="transaction-name">${transactionIcon} ${popupTitle.value}</div>
    <div class="transaction-result">
    <div class="transaction-amount">${popupSum.value}$</div>
    <button class="transaction-delete" onclick="transactionToDelete(${ID})">x</button>
    `
    if(popupSum.value>0) {
        income.appendChild(newTransaction)&&newTransaction.classList.add('1')
    }
    if(popupSum.value<0) {
        expense.appendChild(newTransaction)&&newTransaction.classList.add('2')
    }
    moneyArr.push(parseFloat(popupSum.value))
    moneyCount(moneyArr)

    popup.style.display = 'none'
    clear()
    ID++
};

const transactionToDelete = (id) => {
    const deleteTransaction = document.getElementById(id)
 if(deleteTransaction.classList.contains('2')) {
    expense.removeChild(deleteTransaction)
 }else{
    income.removeChild(deleteTransaction)
 }

 const transactionAmount = parseFloat(deleteTransaction.childNodes[3].innerText)
 const transactionIndex = moneyArr.indexOf(transactionAmount)
 moneyArr.splice(transactionIndex,1)
 moneyCount(moneyArr)
};

const moneyCount = (money) => {
   const newMoney = money.reduce((a,b) => a+b)
   myCash.textContent = `${newMoney} $`
};

const clear = () => {
    popupSum.value = ''
    popupTitle.value = ''
    popupCategory.selectedIndex = 0
};

const selectedIcons = () => {
    selectedIcon = category.options[category.selectedIndex].text
};

const newTransactionIcon = (transaction) => {
    switch (transaction) {
        case '[ + ] income':
            transactionIcon = '<i class="fa-solid fa-money-bill"></i>'
            break;
        case '[ - ] shopping':
            transactionIcon = '<i class="fa-solid fa-cart-shopping"></i>'
            break;
        case '[ - ] cinema':
            transactionIcon = '<i class="fa-solid fa-film"></i>'
            break;
        case '[ - ] food':
            transactionIcon = '<i class="fa-solid fa-bowl-food"></i>'
            break;
    }
};

popupSave.addEventListener('click', () => {
    if (popupTitle.value !== '') { errorTitle.style.visibility = 'hidden' }
    else { errorTitle.style.visibility = 'visible' }

    if (popupSum.value !== '') { errorSum.style.visibility = 'hidden' }
    else { errorSum.style.visibility = 'visible' }

    if (popupCategory.value !== 'none') { errorCategory.style.visibility = 'hidden' }
    else { errorCategory.style.visibility = 'visible' }

    if (popupTitle.value !== '' && popupSum.value !== '' && popupCategory.value !== 'none') {
        checkForm()
    }
})

clearAllTransactions.addEventListener('click', ()=> {
   income.innerHTML = '<h3 class="income-title">income:</h3>' 
   expense.innerHTML = '<h3 class="expense-title">expense:</h3>'
   moneyArr = [0]
   myCash.textContent = '0 $'
})