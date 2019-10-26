

export const users = [
    {   id: 1, first_name: "Louis", last_name: "Deveze", email: "louis.deveze@edu.ece.fr", password: "framboise", isAdmin: true },
    {   id: 2, first_name: "Maxime", last_name: "Tran", email: "maxime.tran@edu.ece.fr", password: "abricot", isAdmin: true },
    {   id: 3, first_name: "Sebastien", last_name: "Ye", email: "sebastien.ye@edu.ece.fr", password: "papaye", isAdmin: false },
    {   id: 4, first_name: "Charlène", last_name: "Bruno", email: "charlene.bruno@edu.ece.fr", password: "pamplemousse", isAdmin: false },
    {   id: 5, first_name: "Kevin", last_name: "Frydman", email: "kevin.frydman@esquad.co", password: "kiwi", isAdmin: false },
]


export const wallets = [
    {   id: 1, balance: 12730, user_id: 1},
    {   id: 2, balance: 0, user_id: 2},
    {   id: 3, balance: 8910, user_id: 3},
    {   id: 4, balance: 21790, user_id: 4},
    {   id: 5, balance: 93150, user_id: 5},
]


export const cards = [
    {   id: 1, last_4: 1234, brand: "master_card", expired_at: "2019-12-01", user_id: 1},
    {   id: 2, last_4: 8904, brand: "visa", expired_at: "2020-04-01", user_id: 1},
    {   id: 3, last_4: 5924, brand: "american_express", expired_at: "2019-11-01", user_id: 1},
    {   id: 4, last_4: 1237, brand: "master_card", expired_at: "2020-02-01", user_id: 2},
    {   id: 5, last_4: 6578, brand: "american_express", expired_at: "2021-12-01", user_id: 3},
    {   id: 6, last_4: 3278, brand: "jcb", expired_at: "2021-12-01", user_id: 3},
    {   id: 7, last_4: 9827, brand: "visa", expired_at: "2020-07-01", user_id: 4},
    {   id: 8, last_4: 3679, brand: "jcb", expired_at: "2020-09-01", user_id: 5},
    {   id: 9, last_4: 1235, brand: "master_card", expired_at: "2021-04-01", user_id: 5},
    {   id: 10, last_4: 3215, brand: "union_pay", expired_at: "2020-05-01", user_id: 5},
    {   id: 11, last_4: 9284, brand: "union_pay", expired_at: "2019-11-01", user_id: 1},
]

export const payins = [
    {   id: 1, wallet_id: 1, amount: 7020 },
    {   id: 2, wallet_id: 1, amount: 3090 },
    {   id: 3, wallet_id: 1, amount: 5720 },
    {   id: 4, wallet_id: 2, amount: 1293 },
    {   id: 5, wallet_id: 2, amount: 12389 },
    {   id: 6, wallet_id: 2, amount: 23890 },
    {   id: 7, wallet_id: 3, amount: 12389 },
    {   id: 8, wallet_id: 3, amount: 59482 },
    {   id: 9, wallet_id: 3, amount: 2938 },
    {   id: 10, wallet_id: 4, amount: 2893 },
    {   id: 11, wallet_id: 4, amount: 5647 },
    {   id: 12, wallet_id: 4, amount: 1039 },
    {   id: 13, wallet_id: 5, amount: 10846 },
    {   id: 14, wallet_id: 5, amount: 1247 },
    {   id: 15, wallet_id: 5, amount: 3966 }
]


export const payouts = [
    {   id: 1, wallet_id: 1, amount: 3290},
    {   id: 2, wallet_id: 2, amount: 3090 },
    {   id: 3, wallet_id: 3, amount: 5720 },
    {   id: 4, wallet_id: 4, amount: 1293 },
    {   id: 5, wallet_id: 5, amount: 12389 },
    {   id: 6, wallet_id: 1, amount: 23890 },
    {   id: 7, wallet_id: 2, amount: 12389 },
    {   id: 8, wallet_id: 3, amount: 59482 },
    {   id: 9, wallet_id: 4, amount: 2938 },
    {   id: 10, wallet_id: 5, amount: 2893 },
    {   id: 11, wallet_id: 1, amount: 5647 },
    {   id: 12, wallet_id: 2, amount: 1039 },
    {   id: 13, wallet_id: 3, amount: 10846 },
    {   id: 14, wallet_id: 4, amount: 1247 },
    {   id: 15, wallet_id: 5, amount: 3966 }
]

export const transfers = [
    {   id: 1, debited_wallet_id: 1, credited_wallet_id: 5, amount: 3290 },
    {   id: 2, debited_wallet_id: 2, credited_wallet_id: 4, amount: 3090 },
    {   id: 3, debited_wallet_id: 3, credited_wallet_id: 2, amount: 5720 },
    {   id: 4, debited_wallet_id: 4, credited_wallet_id: 5, amount: 1293 },
    {   id: 5, debited_wallet_id: 5, credited_wallet_id: 2, amount: 1238 },
    {   id: 6, debited_wallet_id: 1, credited_wallet_id: 3, amount: 2389 },
    {   id: 7, debited_wallet_id: 2, credited_wallet_id: 5, amount: 1238 },
    {   id: 8, debited_wallet_id: 3, credited_wallet_id: 1, amount: 5948 },
    {   id: 9, debited_wallet_id: 4, credited_wallet_id: 2, amount: 2938 },
    {   id: 10, debited_wallet_id: 5, credited_wallet_id: 4, amount: 2893 },
    {   id: 11, debited_wallet_id: 1, credited_wallet_id: 2, amount: 5647 },
    {   id: 12, debited_wallet_id: 2, credited_wallet_id: 4, amount: 1039 },
    {   id: 13, debited_wallet_id: 3, credited_wallet_id: 1, amount: 1084 },
    {   id: 14, debited_wallet_id: 4, credited_wallet_id: 3, amount: 1247 },
    {   id: 15, debited_wallet_id: 5, credited_wallet_id: 2, amount: 3966 }
]

export default users;