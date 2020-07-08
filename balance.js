function balanc()
{
    var address;
    var balances;
    var text = "";
    const balance = async () => {
        await web3.eth.getAccounts().then(function(acc){ address = acc });

        var i = 0;
        for (;address[i];) {
            await web3.eth.getBalance(address[i]).then(function(bal){balances = bal});
            text += '<p style = "border-style: solid; height: 20px; font-size:15px;background-color: #888">' + address[i] + "&nbsp &nbsp" + String(web3.utils.fromWei(balances,"ether") + "Ether" + '</p>');
            i++;
        }

        document.getElementById("bal").innerHTML = text;
    };balance()
}

