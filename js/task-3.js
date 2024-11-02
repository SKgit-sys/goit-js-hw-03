function checkForSpam(message) {
message = message.toUpperCase();
let forbidWord1 = "spam";
let forbidWord2 = "sale";
forbidWord1 = forbidWord1.toUpperCase();
forbidWord2 = forbidWord2.toUpperCase();
    if (message.includes(forbidWord1) || message.includes(forbidWord2)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
