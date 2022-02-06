const { sendNotification } = require("../utils")

const checkNotification = (isAdmin, cart) =>{
    if(isAdmin){
        sendNotification(`Borrando ${cart}`, 'usuario');
    }
}

module.exports = {
    checkNotification
}