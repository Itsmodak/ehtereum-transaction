var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var sending_address;
const send_address = async () => {
    await web3.eth.getAccounts().then(function(acc){ sending_address = acc });

    var i = 0;
    for (;sending_address[i];) {
        var option = document.createElement("OPTION"),
        txt = document.createTextNode(sending_address[i]);
        option.appendChild(txt);
        option.setAttribute("value", sending_address[i]);
        source.insertBefore(option, source.lastChild);
        i++;
    }

};send_address()

var receiving_address;
const receive_address = async () => {
    await web3.eth.getAccounts().then(function(acc){ receiving_address = acc });

    var i = 0;
    for (;receiving_address[i];) {
        var option = document.createElement("OPTION"),
        txt = document.createTextNode(receiving_address[i]);
        option.appendChild(txt);
        option.setAttribute("value", receiving_address[i]);
        receive.insertBefore(option, receive.lastChild);
        i++;
    }

};receive_address()
