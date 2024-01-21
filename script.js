document.getElementById('calculateBtn').addEventListener('click', function() {
    const investment = document.getElementById('investmentInput').value;
    if (investment) {
        calculateHoldings(investment);
    } else {
        alert("Please enter your investment amount.");
    }
});

function calculateHoldings(investment) {
    fetch('sp500.json')
        .then(response => response.text())
        .then(text => {
            const data = text.trim().split('\n').map(JSON.parse);
            displayResults(data, investment);
        })
        .catch(error => console.error('Error:', error));
}

function displayResults(data, investment) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>You own:</p>';

    data.forEach(stock => {
        const weight = parseFloat(stock["Portfolio%"].replace('%', ''));
        const amount = (investment * (weight / 100)).toFixed(2);
        resultsContainer.innerHTML += `<p>$${amount} of ${stock.Company} (${stock.Symbol})</p>`;
    });
}


function displayResults(data, investment) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<p>You own:</p>';

    data.forEach(stock => {
        const weight = parseFloat(stock["Portfolio%"].replace('%', ''));
        const amount = (investment * (weight / 100)).toFixed(2);
        resultsContainer.innerHTML += `
            <div class="result-item">
                <span class="result-amount">$${amount}</span>
                <span class="result-name">${stock.Company} (${stock.Symbol})</span>
            </div>`;
    });
}
