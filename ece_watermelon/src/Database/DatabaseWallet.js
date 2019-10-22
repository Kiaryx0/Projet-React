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

