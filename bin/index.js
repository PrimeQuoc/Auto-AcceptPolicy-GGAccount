// console.log("start");
var page = require("webpage").create(), userName, passWd;
var system = require('system');

if (system.args.length !== 3) {
    console.log("phantomjs index.js [username] [password]");
    phantom.exit();
}

userName = system.args[1].toString();
passWd = system.args[2].toString();

var index = 0;
console.log("Username: " + userName);
console.log("Password: " + passWd)    

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';


page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.onLoadFinished = function(status) {  
    
    // page.render('test.png'); 
    console.log(page.url);
    if (page.url === "https://www.google.com/") {
        console.log("Account has accepted");
        phantom.exit();
    }
    if (index === 1)  {
        page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
            page.evaluate(function (passWd) {
                try {
                    $(".whsOnd.zHQkBf").val(passWd);
                    $(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b").click();
                    console.log("add password successfully");
                }
                catch(ex) {
                    console.log("Add password failed");
                    phantom.exit();
                }
            }, passWd);
            index++;
        })
    }
    if (index === 2) {
        page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
            page.evaluate(function () {
                try {
                    $("#accept").click();
                    console.log("Clicked accept button")
                }
                catch(ex) {
                    console.log("Account accepted before");
                    phantom.exit();
                }
            });
            index = -1;
        })
    }
    if (index === -1) {
        phantom.exit();
    }
};

page.open(
    "https://accounts.google.com/signin/v2/identifier?hl=vi&passive=true&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
    function (status) {
        if (status !== "success") {
            console.log("Connection failed");
            phantom.exit();
        }
        page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() {
            var email = page.evaluate(function (userName) {
                try {
                    $("#identifierId").val(userName);
                    $(".VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.qIypjc.TrZEUc.lw1w4b").click();
                    console.log("add username " + userName + " successfully");
                }
                catch(ex) {
                    console.log("Add username failed");
                    phantom.exit();
                }
            }, userName);
            index++;
        })
    }
);
