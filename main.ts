const checkButton = document.getElementById('check-btn');
const resultPanel = document.getElementById('result-panel');
const testInput = document.getElementById('test-input') as HTMLInputElement;

function checkForPalindrome(inputText: string): string {
    const regex = /[^\s?!,.¿¡:;]/
    
    const loweredString = inputText.toLocaleLowerCase();
    let trimmedString = '';
    for (let i=0; i < loweredString.length; i++) {
        console.log(regex.test(loweredString[i]));
        if (regex.test(loweredString[i])) {
            trimmedString += loweredString[i];
        }
    }
    const reversedString = trimmedString.split("").reverse().join("");
    if (reversedString === trimmedString) {
        return `${inputText} is a palindrome.`
    } else {
        return `${inputText} is not a palindrome.`
    }
}

function printResult(): void {
    if (checkButton && testInput) {
        resultPanel!.innerText = checkForPalindrome(testInput.value)
    }
}

if (checkButton) {
    checkButton.addEventListener('click', printResult);
}
