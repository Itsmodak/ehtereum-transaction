function send() {
    var variable1 = document.getElementById("source");
    var source_address = variable1.options[variable1.selectedIndex].text;
    var variable2 = document.getElementById("receive");
    var receive_address = variable2.options[variable2.selectedIndex].text;
    var input = document.getElementById("userInput").value;
    var Token = document.getElementById("selToken").value;
    var error = document.getElementById("error");

    web3.eth.getBalance(String(source_address), function (err, result) {
        if (err) {
            console.log(err);
        }

        else if (source_address == receive_address) {
            error.textContent = "Please select another address"
            error.style.color = "red";
            error.style.fontWeight = "bold";
        }

        else if (input.length == 0) {
            error.textContent = "Please enter a valid amount";
            error.style.color = "red";
            error.style.fontWeight = "bold";
        }
        else {
            error.textContent = "";
            web3.eth.sendTransaction({
                from: source_address, to: receive_address, value: web3.utils.toWei(String(input), String(Token))
            });
            cuteAlert({
                type: "success",
                title: "Congratulation",
                message: "Transaction successful",
                buttonText: "Okay"
            })

        }


    })
}
