function calculate() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let result;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Please enter numbers";
        return;
    }

    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b === 0 ? "Cannot divide by zero" : a / b;
            break;
        case "%":
            result = a % b;
            break;
    }

    document.getElementById("result").innerText = "Result: " + result;
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
