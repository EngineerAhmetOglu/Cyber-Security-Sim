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
    function checkCard() {
    const otpInput = document.getElementById('cardInput').value;
    const cardsContainer = document.getElementById('cards-list');
    const dynamicCardsDiv = document.getElementById('dynamic-cards');
    const resultDiv = document.getElementById('result');

    if (otpInput === "097381") {
        cardsContainer.style.display = "block";
        resultDiv.innerHTML = "✅ تم التحقق! تم استخراج 30 بطاقة بنجاح.";
        resultDiv.style.color = "green";

        // تنظيف القائمة قبل الإضافة (عشان ما تتكرر لو ضغطت مرتين)
        dynamicCardsDiv.innerHTML = "";

        // حلقة تكرار لتوليد 30 بطاقة
        for (let i = 1; i <= 30; i++) {
            let cardNum = Math.floor(Math.random() * 9000) + 1000; // توليد 4 أرقام عشوائية
            let types = ["Visa Silver", "MasterCard Gold", "Visa Platinum", "Amex Black"];
            let randomType = types[Math.floor(Math.random() * types.length)];
            
            // إضافة البطاقة للقائمة
            dynamicCardsDiv.innerHTML += `
                <div style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                    <span>#${i} ${randomType}</span>
                    <span style="font-family: monospace; font-weight: bold;">**** **** **** ${cardNum}</span>
                </div>
            `;
        }
    } else {
        cardsContainer.style.display = "none";
        resultDiv.innerHTML = "❌ الرمز غير صحيح. حاول مرة أخرى.";
        resultDiv.style.color = "red";
    }
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
