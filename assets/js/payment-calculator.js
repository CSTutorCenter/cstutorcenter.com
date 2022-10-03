
function calculatePayment() {
    const rate = parseFloat(document.getElementById('rate').value);
    const minutes = parseFloat(document.getElementById('minutes').value);
    const result = minutes * (rate / 60.0);
    if (isNaN(result)) {
        document.getElementById('payment-result').innerHTML = 'Invalid input. Please check your entries.';
    } else {
        document.getElementById('payment-result').innerHTML = '$' + result.toFixed(2);
    }
}