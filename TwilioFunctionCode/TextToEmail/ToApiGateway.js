const got = require('got');

exports.handler = function (context, event, callback) {
    console.log(event)

    const requestBody = {
        subject:
            `New SMS message from: ${event.From}`,
        text: event.Body,
    }
    // post to api gateway url
    got.post('https://yourapigatewayurl', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            let twiml = new Twilio.twiml.MessagingResponse();
            callback(null, twiml);
        })

};
