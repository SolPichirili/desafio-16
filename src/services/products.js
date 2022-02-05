const { sendNotification } = require("../utils")

const checkNotification = (isAdmin, cart) =>{
    if(!isAdmin){
        sendNotification(`Borrando ${cart}`)
    }
}

module.exports = {
    checkNotification
}