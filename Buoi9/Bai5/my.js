let buttonsNumber = document.querySelectorAll(".number,.oparator");
let message = document.getElementById("input");

// Xử lý bấm nút số và toán tử
buttonsNumber.forEach(button => {
    button.addEventListener('mouseup', () => button.style.backgroundColor = 'white');
    button.addEventListener('mousedown', () => button.style.backgroundColor = 'gray');
    button.addEventListener('click', () => {
        message.value += button.textContent;
    });
});

// Reset
let buttonsReset = document.getElementById('reset');
buttonsReset.addEventListener('click', () => message.value = '');
buttonsReset.addEventListener('mousedown', () => buttonsReset.style.backgroundColor = 'gray');
buttonsReset.addEventListener('mouseup', () => buttonsReset.style.backgroundColor = 'white');

// Toán tử hợp lệ
function isOperator(ch) {
    return ['+', '-', 'x', '/'].includes(ch);
}

// Thứ tự ưu tiên
function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === 'x' || op === '/') return 2;
    return 0;
}

// Chuyển infix → postfix (có xử lý ++, --, -3...)
function infixToPostfix(expression) {
    let output = [];
    let operatorStack = [];
    let num = '';
    let i = 0;

    while (i < expression.length) {
        let ch = expression[i];

        // Xử lý số âm hoặc chuỗi dấu
        if ((ch === '+' || ch === '-') &&
            (i === 0 || isOperator(expression[i - 1]))) {
            num += ch; // gán vào số
            i++;
            continue;
        }

        // Số (bao gồm cả --3, -3, +4)
        if (!isNaN(ch)) {
            num += ch;
            i++;
            continue;
        }

        // Khi gặp toán tử thực sự
        if (isOperator(ch)) {
            if (num !== '') {
                output.push(num);
                num = '';
            }

            while (
                operatorStack.length > 0 &&
                precedence(ch) <= precedence(operatorStack[operatorStack.length - 1])
                ) {
                output.push(operatorStack.pop());
            }
            operatorStack.push(ch);
        }

        i++;
    }

    if (num !== '') {
        output.push(num);
    }

    while (operatorStack.length > 0) {
        output.push(operatorStack.pop());
    }

    return output;
}

// Tính toán biểu thức hậu tố
function evaluatePostfix(postfix) {
    let stack = [];

    for (let token of postfix) {
        if (!isNaN(token) || /^[-+]{1,2}\d+$/.test(token)) {
            stack.push(Number(token));
        } else {
            if (stack.length < 2) throw new Error("Lỗi: Biểu thức không hợp lệ");
            let b = stack.pop();
            let a = stack.pop();

            if (token === '/' && b === 0) {
                throw new Error("Lỗi: Chia cho 0");
            }

            let result;
            switch (token) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case 'x': result = a * b; break;
                case '/': result = a / b; break;
                default: throw new Error(`Lỗi: Toán tử không hợp lệ '${token}'`);
            }
            stack.push(result);
        }
    }

    if (stack.length !== 1) throw new Error("Lỗi: Biểu thức chưa hợp lệ");
    return stack.pop();
}

// Gọi khi nhấn "="
function calculate() {
    try {
        let expr = message.value.replace(/\s+/g, '');
        let postfix = infixToPostfix(expr);
        let result = evaluatePostfix(postfix);
        message.value = result;
    } catch (e) {
        message.value = e.message;
    }
}
