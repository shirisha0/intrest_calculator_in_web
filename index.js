function calculator(){

    loanamountvalue=document.getElementById("loan-amount").value;
 
    interestvalue=document.getElementById("interest-rate").value;

    monthstopay=document.getElementById("months-to-pay").value;

    interesttopay=((loanamountvalue*monthstopay*interestvalue)/100).toFixed(2);
    document.getElementById("interest-to-pay").value=String(interesttopay);
        
}