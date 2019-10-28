import {users} from './DatabaseDefault';
import {wallets} from './DatabaseDefault';
import {cards} from './DatabaseDefault';
import {payins} from './DatabaseDefault';
import {payouts} from './DatabaseDefault';
import {transfers} from './DatabaseDefault';

export function importDatabase(){
    var usersData = JSON.stringify(users);
    localStorage.setItem("users", usersData);

    var walletData = JSON.stringify(wallets);
    localStorage.setItem("wallets", walletData);

    var cardData = JSON.stringify(cards);
    localStorage.setItem("cards", cardData);

    var payinData = JSON.stringify(payins);
    localStorage.setItem("payins", payinData);

    var payoutData = JSON.stringify(payouts);
    localStorage.setItem("payouts", payoutData);

    var transferData = JSON.stringify(transfers);
    localStorage.setItem("transfers", transferData);

    // localStorage.setItem("session", null);
}


export default importDatabase;