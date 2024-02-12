import { ethers } from "./ethers.min.js";

const accountInput = document.querySelector('#account');
const checkBalanceButton = document.querySelector('#checkBalance');
const displayBalance = document.querySelector('#balance');
const sendTrxButton = document.querySelector('#sendTrx');
const amountInput = document.querySelector('#amount');
const toAcoountInput = document.querySelector('#toAccount')
const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/9963e6e3427443cbbee6173405b34190');
//const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');

let account;
let signer;

function initApp(){
    console.log(ethers);
}
async function checkBalance(){
    account = accountInput.value;
    const balance = await provider.getBalance(account);
    displayBalance.innerHTML = ethers.utils.formatEther(balance);
}

async function sendTransaction(){
    signer = provider.getSigner(account)
    const trx = await signer.sendTransaction({
        to: toAcoountInput.value,
        value: ethers.utils.parseEther(amountInput.value)
    })
    console.log(trx);
}
document.addEventListener('DOMContentLoaded', initApp);
checkBalanceButton.addEventListener('click', checkBalance);
sendTrxButton.addEventListener('click', sendTransaction);
