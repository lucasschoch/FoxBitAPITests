//testnet base URL endpoint is https://api.testnet.blinktrade.com
//prod base URL endpoint is https://api.blinktrade.com

//A chave 'exchangetests' foi criada com sucesso. Por favor, armazene as credênciais abaixo em um lugar seguro.


var BlinkTradeRest = require("blinktrade").BlinkTradeRest;
var blinkTrade = new BlinkTradeRest({
    prod: true,
    key: "XXXXXXXXXXXXXXXXXXX",
    secret: "XXXXXXXXXXXXXXXXXXX",
    currency: "BRL",
});

function GetBallance() {
       
    blinkTrade.balance().then(function (balance) {
        console.log(balance);
    });
}

function Ticker() {
    blinkTrade.ticker().then(function (ticker) {
        console.log(ticker);
    });
}

function OrderBook() {
    blinkTrade.orderbook().then(function (orderbook) {
        console.log(orderbook);
    });
}

function Trades() {
    blinkTrade.trades({ limit: 2 }).then(function (trades) {
        console.log(trades);
    });
}

function HeartBeat() {

    blinkTrade.heartbeat().then(function (heartbeat) {
        console.log(heartbeat.Latency);
    });
}

function MyOrders() {
    blinkTrade.myOrders().then(function (myOrders) {
        console.log(myOrders);
    });
}


