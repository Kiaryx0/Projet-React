import { getSessionUser } from "./DatabaseSession";

import cb from '../Pictures/jcb.png';
import visa from '../Pictures/visa.png';
import mastercard from '../Pictures/master_card.png';
import unionpay from '../Pictures/union_pay.png';
import amex from '../Pictures/american_express.png';

export default function getSessionCards() {
    let user = getSessionUser();
    if (user !== null) {
        var cards = JSON.parse(localStorage.getItem("cards"));
        var array = cards.filter(card => {
            return card.user_id === user.id
        })

        return array;
    }
    return null;
}

export function getCardPictureSrc(card) {
    if (card != null) {
        if (card.brand === "jcb") {
            return cb;
        } else if (card.brand === "visa") {
            return visa;
        } else if (card.brand === "master_card") {
            return mastercard;
        } else if (card.brand === "union_pay") {
            return unionpay;
        } else if (card.brand === "american_express") {
            return amex;
        } else {
            return "";
        }
    }
}

/**
 * Return the card with the given id
 * @param {card id} cardID 
 */
export function getCard(cardID) {
    let cards = JSON.parse(localStorage.getItem("cards"));
    let array = cards.filter(c => {
        return c.id === cardID
    });
    if (array.length === 1) {
        return array[0];
    } else {
        return null;
    }
}