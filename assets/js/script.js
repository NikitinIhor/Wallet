const walletClosed = document.querySelector('.wallet-closed');
const walletOpened = document.querySelector('.wallet-opened');
const walletBox = document.querySelector('.wallet-box');
const moneyBody = document.querySelector('.money-body');

const addTransaction = document.querySelector('.add');
const deleteTransaction = document.querySelector('.delete');
const popupSave = document.querySelector('.popup-save');
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('#title');
const popupSum = document.querySelector('#sum');
const popupCategory = document.querySelector('#category');
const errorTitle = document.querySelector('.error-title');
const errorSum = document.querySelector('.error-sum');
const errorCategory = document.querySelector('.error-category');

let myInterval

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
    clearInterval(myInterval)

};

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
    
};

popupSave.addEventListener('click', () => {
    if (popupTitle.value !== '') { errorTitle.style.visibility = 'hidden' }
    else { errorTitle.style.visibility = 'visible' }

    if (popupSum.value !== '') { errorSum.style.visibility = 'hidden' }
    else { errorSum.style.visibility = 'visible' }

    if (popupCategory.value !== 'none') { errorCategory.style.visibility = 'hidden' }
    else { errorCategory.style.visibility = 'visible' }

    if (popupTitle.value !== '' && popupSum.value !== '' && popupCategory !== 'none') {
        checkForm()
    }
})