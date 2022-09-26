function computeLone(){
    var amount=document.getElementById('amount').value;
    var intrest_rate = document.getElementById('intrest_rate').value;
    var month_to_pay = document.getElementById('month_to_pay').value;
    var intrest = (amount *(intrest_rate*0.01))/month_to_pay;
    var payment = ((amount/month_to_pay)+intrest).toFixed(2);
    payment=payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment Rs: "+payment;
    

}