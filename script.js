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
function checkCard() {
    const otpValue = document.getElementById('cardInput').value;
    const resultDiv = document.getElementById('result');

    if (otpValue.length < 6) {
        resultDiv.innerHTML = "⚠️ يرجى إدخال الرمز المكون من 6 أرقام.";
        resultDiv.style.color = "orange";
    } else {
        // الرسالة التعليمية الصادمة
        resultDiv.innerHTML = `
            <div style="background: #ffebee; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2; margin-top: 15px;">
                <h4 style="color: #c62828;">❌ تحذير أمني!</h4>
                <p style="color: #333;">لقد قمت بإدخال رمز الـ OTP الخاص بك. في هجوم حقيقي، سيتمكن المخترق الآن من الوصول إلى حسابك البنكي بالكامل.</p>
                <strong>تذكر: البنوك لا تطلب منك الـ OTP لاستخراج بطاقات!</strong>
            </div>
        `;
    }
}
