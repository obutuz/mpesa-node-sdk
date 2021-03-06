var mpesa = require('mpesa');

/**
 * Set the request options
 */
const request_options={
    "Initiator":" ",
    "SecurityCredential":" ",
    "CommandID":"AccountBalance",
    "PartyA":" ",
    "IdentifierType":"4",
    "Remarks":" ",
    "QueueTimeOutURL":"https://ip_address:port/timeout_url",
    "ResultURL":"https://ip_address:port/result_url"
};

/**
 * Call the api and pass the options as the first parameter
 */
mpesa.accountBalance(request_options,function(data){

    console.log(data);
})