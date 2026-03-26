function validateCard(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    
    // المسح من اليمين إلى اليسار
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    // إذا كان المجموع يقبل القسمة على 10، الرقم صحيح تقنياً
    return (sum % 10 === 0);
}
