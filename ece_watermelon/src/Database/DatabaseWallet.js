import { getSessionUser } from "./DatabaseSession";

/// This file contains all the functions related to the wallet data access

/**
 * Returns the wallet of the current session user and return null if no one's logged in
 */
export default function getSessionWallet(){

    let user = getSessionUser();
    let wallets = JSON.parse(localStorage.getItem("wallets"))

    let array = wallets.filter(w=>{
        return w.user_id === user.id;
    });

    // If wallet found return it
    if(array.length === 1){
        return array[0];
    }
    // Else return null
    else{
        return null;
    }
}

/**
 * Return the balance of the wallet as string
 */
export function getWalletAmount(){
    let wallet = getSessionWallet(getSessionUser());
    if(wallet != null){
        return (wallet.balance / 100.0).toFixed(2);
    }
}

/**
 * Make a deposit on the count using the credit card
 * @param {Amount of money in cents '1700' = 17.00€} money 
 * @param {Credit card} card 
 */
export function makeDeposit(money, card){
    
    // Credit wallet
    let wallets = JSON.parse(localStorage.getItem("wallets"));
    let current = null;
    for(var i= 0; i<wallets.length; i++){
        if(wallets[i].user_id === card.user_id){
            wallets[i].balance -= money;
            current = wallets[i];
        }
    }
    localStorage.setItem("wallets", JSON.stringify(wallets));

    // Save Payout
    let payouts = JSON.parse(localStorage.getItem("payouts"));
    payouts.push({   id: payouts.length+1, wallet_id: current.id, amount: money })
    localStorage.setItem("payouts", JSON.stringify(payouts));
}

/**
 * Make a deposit on the count using the credit card
 * @param {Amount of money in cents '1700' = 17.00€} money 
 * @param {Credit card} card 
 */
export function makeWithdrawal(money, card){
    
    // Credit wallet
    let wallets = JSON.parse(localStorage.getItem("wallets"));
    let current = null;
    for(var i= 0; i<wallets.length; i++){
        if(wallets[i].user_id === card.user_id){
            wallets[i].balance += money;
            current = wallets[i];
        }
    }
    localStorage.setItem("wallets", JSON.stringify(wallets));

    // Save Payout
    let payins = JSON.parse(localStorage.getItem("payins"));
    payins.push({   id: payins.length+1, wallet_id: current.id, amount: money })
    localStorage.setItem("payins", JSON.stringify(payins));
}

export function getSessionDeposits(){
    let walletID = getSessionWallet().id;
    let deposit = JSON.parse(localStorage.getItem("payouts"))
    if(deposit !== null){
        deposit.reverse()
        return deposit.filter(d=>{
            return d.wallet_id === walletID;
        })
    }
    return [];
}

export function getSessionWithdrawals(){
    let walletID = getSessionWallet().id;
    let withdrawal = JSON.parse(localStorage.getItem("payins"))
    if(withdrawal !== null){
        withdrawal.reverse()
        return withdrawal.filter(w=>{
            return w.wallet_id === walletID;
        })
    }
    return [];
}

export function getSessionTransfers(){
    let walletID = getSessionWallet().id;
    let transfer = JSON.parse(localStorage.getItem("transfers"))
    if(transfer !== null){
        transfer.reverse()
        return transfer.filter(t=>{
            return t.debited_wallet_id === walletID || t.credited_wallet_id === walletID;
        })
    }
    return [];
    
}

export function getUserWithWallet(walletID){
    let wallets = JSON.parse(localStorage.getItem("wallets"));
    let users = JSON.parse(localStorage.getItem("users"));
    
    let array = wallets.filter((w)=>{
        return w.id === walletID;
    })
    if(array.length === 1){
        let wallet = array[0];
        array = users.filter((u)=>{
            return u.id === wallet.user_id
        })
        if(array.length === 1){
            return array[0].first_name;
        }
    }

    return "";
}