const walletClosed = document.querySelector('.wallet-closed');
const walletOpened = document.querySelector('.wallet-opened');
const walletBox = document.querySelector('.wallet-box');
const moneyBody = document.querySelector('.money-body');

let myInterval

walletClosed.addEventListener('click', () => {
    walletClosed.classList.add('close')
    walletOpened.classList.add('open')
    setTimeout(walletMove, 1000)
    setTimeout(openWalletBox, 3300)
   
    myInterval = setInterval(moneyFall,100)
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