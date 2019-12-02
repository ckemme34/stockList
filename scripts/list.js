let request = new XMLHttpRequest();
let app = document.getElementById('root');
let totalPriceValue = 0;
let totalPrice = document.createElement('p');

for(let i = 0; i < 100; i++) {

    if (localStorage.getItem('symbol' + 0) === null) {
        alert("Your list is empty! Return to the search to add items to list!");
        break;
    }

        if (localStorage.getItem('symbol' + i) != null) {
            let stockName = document.createElement('h9');
            stockName.textContent = localStorage.getItem('name' + i);

            let stockSymbol = document.createElement("p");
            stockSymbol.textContent = "Symbol: " + localStorage.getItem('symbol' + i);

            let stockPrice = document.createElement("p");
            stockPrice.textContent = "Value: $" + localStorage.getItem('price' + i);

            app.appendChild(stockName);
            app.appendChild(stockSymbol);
            app.appendChild(stockPrice);

            totalPriceValue += parseFloat(localStorage.getItem('price' + i));
        } else
            break;
}
let result = "Portfolio Value: $" + (totalPriceValue.toFixed(2).toString());
totalPrice.textContent = result;
app.appendChild(totalPrice);
alert(result);
request.send();










