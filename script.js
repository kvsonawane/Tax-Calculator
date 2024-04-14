document.getElementById('tax-form').addEventListener('submit', function (event) 
{
    event.preventDefault();

    var grossIncome = document.getElementById('gross-income').value;
    var extraIncome = document.getElementById('extra-income').value;
    var deductions = document.getElementById('deductions').value;
    var age = document.getElementById('age').value;

    if (grossIncome === '' || extraIncome === '' || deductions === '' || age === '0') {
        alert('Please fill in all the required fields.');
        return;
    }

    grossIncome = parseFloat(grossIncome);
    extraIncome = parseFloat(extraIncome);
    deductions = parseFloat(deductions);

    if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions)) {
        alert('Please enter valid numbers in the input fields.');
        return;
    }

    var totalIncome = grossIncome + extraIncome - deductions;
    var tax = 0;

    if (totalIncome > 800000) 
    {
        if (age === '1') 
        {
            tax = (totalIncome - 800000) * 0.3;
        } 
        else if (age === '2') 
        {
            tax = (totalIncome - 800000) * 0.4;
        } 
        else if (age === '3') 
        {
            tax = (totalIncome - 800000) * 0.1;
        }

         document.getElementById('result-text').innerText = 'Your total income is: ' + totalIncome + '\n' + 'Your tax amount is: ' + tax;
    $('#result-modal').modal('show');
    }

    else
    {
        document.getElementById('result-text').innerText = 'No tax is applicable for them whose totalIncome is less than 8 lakhs';
        $('#result-modal').modal('show');
    }

   
});