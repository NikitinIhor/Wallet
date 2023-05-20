const walletClosed = document.querySelector('.wallet-closed img');
const walletOpened = document.querySelector('.wallet-opened');
const walletBox = document.querySelector('.wallet-box');
const walletCloseBtn = document.querySelector('.wallet-close-btn');
const moneyBody = document.querySelector('.money-body');
const myCash = document.querySelector('.my-cash');

const page = document.querySelector('.page');

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

const exchangeRate = document.querySelector('.exchange-rate');
const exchangeBody = document.querySelector('.exchange-body');
const exchangeBtnOpen = document.querySelector('.exchange-button-open');
const exchangeBtnClose = document.querySelector('.exchange-button-close');

let myInterval
let ID = 0
let transactionIcon
let selectedIcon
let moneyArr = [0]

exchangeBtnOpen.addEventListener('click', ()=> {
    exchangeRate.classList.add('exchange-open')
    exchangeBody.classList.add('show-background-color')
    exchangeBtnOpen.style.opacity = '0'
    exchangeBtnClose.style.opacity = '1'
})
exchangeBtnClose.addEventListener('click', ()=> {
    exchangeRate.classList.remove('exchange-open')
    exchangeBody.classList.remove('show-background-color')
    exchangeBtnOpen.style.opacity = '1'
    exchangeBtnClose.style.opacity = '0'
})

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
    exchangeBtnOpen.style.display='block'
    exchangeBtnClose.style.display='block'
    clearInterval(myInterval)
};

walletCloseBtn.addEventListener('click', ()=> {
    walletCloseBtn.style.display = 'none'
    walletBox.style.display = 'none'
    walletOpened.classList.remove('move-left')
    walletOpened.classList.remove('open')
    walletClosed.classList.remove('close')
    exchangeRate.classList.remove('exchange-open')
    exchangeBody.classList.remove('show-background-color')
    exchangeBtnOpen.style.display = 'none'
    exchangeBtnClose.style.display = 'none'
    exchangeBtnOpen.style.opacity = '1'
    exchangeBtnClose.style.opacity = '0'
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
    exchangeRate.classList.add('exchange-open')
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
    exchangeBody.style.display = 'block'
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
// --------------------------------------------------

// const currencyOne = document.querySelector('#currency-one');
// const amountOne = document.querySelector('.amount-one');
// const currencyTwo = document.querySelector('#currency-two');
// const amountTwo = document.querySelector('.amount-two');
// const swapBtn = document.querySelector('.swap');
// const rateInfo = document.querySelector('.rate-info');

// const calculate = () => {

//     fetch(`https://api.ratesapi.io/api/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
//         .then(res => res.json())
//         .then(data => {

//             const currency1 = currencyOne.value;
//             const currency2 = currencyTwo.value;

//             const rate = data.rates[currency2];
//             rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
//             amountTwo.value = (amountOne.value * rate).toFixed(2)
//         })
// }

// const swap = () => {
//     const oldValue = currencyOne.value;
//     currencyOne.value = currencyTwo.value;
//     currencyTwo.value = oldValue;
//     calculate();
// }

// currencyOne.addEventListener('change', calculate);
// currencyTwo.addEventListener('change', calculate);
// amountOne.addEventListener('input', calculate);
// swapBtn.addEventListener('click', swap)

// calculate();