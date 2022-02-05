const sendNotification = (message, to) => {
    if (typeof message === 'string' && typeof to === 'string') {
        return console.log(
            `To: ${to}
            Message: ${message}`
        );
    }

    return new Error('Unsopported data');
}

module.exports = {
    sendNotification
}