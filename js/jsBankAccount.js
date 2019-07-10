var bankAccountModule = function(){
    var privateAccountName = "";
    var privateBalance = 0;
    function createAccount(accountName, balance){
        privateAccountName = accountName;
        privateBalance = balance;
    }
    function toString(){
        return "Account name: " + privateAccountName + "   Balance: " + privateBalance +"\n";
    }

    return{
        createAccount: createAccount,
        toString: toString
    }

};
var accountInfoList = [];

function btnClick(){
    var account = bankAccountModule();
    var accName = document.getElementById("accountName");
    var balance = document.getElementById("deposit");
    account.createAccount(accName.value, balance.value);

    accountInfoList.push(account);

    var txtarea = document.getElementsByTagName("textarea")[0];
    txtarea.append(account.toString());
}

function pageLoad(){
    document.getElementById("btn").onclick = btnClick;
} 
window.onload = pageLoad;