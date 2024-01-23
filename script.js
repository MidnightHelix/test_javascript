function generateTriangle() {
    let inputNumber = document.getElementById("inputNumber").value;

    if(!/^\d+$/.test(inputNumber)){
        alert('Input number must be a positive number');
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/generateTriangle',
        data: { inputNumber: inputNumber },
        success: function (response) {
            document.getElementById("result").innerHTML = response;
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
        url: 'http://localhost:3000/generateOddNumbers',
        data: { inputNumber: inputNumber },
        success: function (response) {
            document.getElementById("result").innerHTML = response;
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
        url: 'http://localhost:3000/generatePrimeNumbers',
        data: { inputNumber: inputNumber },
        success: function (response) {
            document.getElementById("result").innerHTML = response;
        }
    });
}