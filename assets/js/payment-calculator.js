function calculatePayment() {
    const errorMessage = 'Invalid input. Please check your entries.';
    const el = document.getElementById('payment-result');
    const r = document.getElementById('rate').value;
    const m = ocument.getElementById('minutes').value;
    if (isNaN(r) || isNaN(m)) {
        el.innerHTML = errorMessage;
        return;
    }
    const rate = parseFloat(r);
    const minutes = parseFloat(m);
    const result = minutes * (rate / 60.0);
    if (!isNaN(result)) {
        el.innerHTML = '$' + result.toFixed(2);
    } else {
        el.innerHTML = errorMessage;
    }
}