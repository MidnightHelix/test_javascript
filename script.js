function generateTriangle() {
    let inputNumber = document.getElementById("inputNumber").value;

    if(!/^\d+$/.test(inputNumber)){
        alert('Input number must be a positive number');
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/generateTriangle',
        data: { inputNumber: inputNumber },
        success: function (response) {
            document.getElementById("result").innerText = response;
        }
    });
}

function generateOddNumbers() {
    let inputNumber = document.getElementById("inputNumber").value;

    if(!/^\d+$/.test(inputNumber)){
        alert('Input number must be a positive number');
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/generateOddNumbers',
        data: { inputNumber: inputNumber },
        success: function (response) {
            document.getElementById("result").innerText = response;
        }
    });
}

function generatePrimeNumbers() {
    let inputNumber = document.getElementById("inputNumber").value;

    if(!/^\d+$/.test(inputNumber)){
        alert('Input number must be a positive number');
        return;
    }

    $.ajax({
        type: 'POST',
        url: '/generatePrimeNumbers',
        data: { inputNumber: inputNumber },
        success: function (response) {
            document.getElementById("result").innerText = response;
        }
    });
}