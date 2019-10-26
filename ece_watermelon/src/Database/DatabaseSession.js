
/**
 * Function connecting the user owning the mail address and the password to the local database
 * @param {mail of the user} mail 
 * @param {password of the user} pswrd 
 */
export function loginUser(mail, pswrd){
    var users = JSON.parse(localStorage.getItem("users"));
    var check = false;
    var array = users.filter(user=>{
        return user.email === mail && user.password === pswrd
    })
    
    if(array.length === 0){
        logoutUser();
    }else{
        check = true;
        let logged = array[0];
        localStorage.setItem("session", JSON.stringify(logged));
    }
    return check;
}

/**
 * This function sets the current user of the session to null
 */
export function logoutUser(){
    var logged = null;
    localStorage.setItem("session", JSON.stringify(logged));
}

/**
 * This function returns the user currently connected to this session
 */
export function getSessionUser(){
    return JSON.parse(localStorage.getItem("session"));
}

export default loginUser;