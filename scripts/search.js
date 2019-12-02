let parameters = location.search.substring(1).split("&");
let temp = parameters[0].split("=");
let l = unescape(temp[1]);
url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=' + l + '&api_token=T7JtbwspsklqkIUjah5rzhr9cRBU7BI5TpZxd9Nc9oUxO7qwkVFYEGi68ON5';
let app = document.getElementById('root');
let request = new XMLHttpRequest();

request.open('GET', url);

request.onload = function () {
    let data2 = JSON.parse(this.response);
    let stockData = data2.data;

    try {
        //take in each stock data object one by one
        stockData.forEach(stock => {
            let name = document.createElement('h3');
            name.textContent = stock.name;

            let symbol = document.createElement('p');
            symbol.textContent = "Symbol: " + stock.symbol;

            let price = document.createElement('p');
            price.textContent = "Price: $" + stock.price;

            app.appendChild(name);
            app.appendChild(symbol);
            app.appendChild(price);

            for(let index = 0; index < 1000; index++) {
                if(localStorage.getItem('symbol' + index) === null) {
                    localStorage.setItem('symbol' + index, stock.symbol);
                    localStorage.setItem('name' + index, stock.name);
                    localStorage.setItem('price' + index, stock.price);
                    break;
                }
            }
        })
    } catch (error) {
        let exceptionError = document.createElement('p');
        exceptionError.textContent = l.toUpperCase() + " is not a stock, return to the search to continue.";
        app.appendChild(exceptionError);
    }
};

request.send();