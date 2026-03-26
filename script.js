function checkCard() {
    const otpInput = document.getElementById('cardInput').value;
    const resultDiv = document.getElementById('result');

    // سنعتبر أن أي رمز مكون من 6 أرقام سيعمل للمحاكاة
    if (otpInput.length === 6) {
        
        // 1. بناء رسالة التحذير وقائمة البطاقات معاً
        let outputHTML = `
            <div style="background: #ffebee; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2; margin-top: 15px; text-align: right;">
                <h4 style="color: #c62828;">❌ تحذير أمني!</h4>
                <p>لقد قمت بإدخال رمز الـ OTP. في هجوم حقيقي، سحب المخترق الآن البيانات التالية:</p>
                
                <div id="dynamic-cards" style="max-height: 200px; overflow-y: auto; background: white; border: 1px solid #ddd; margin-top: 10px; font-family: monospace;">
        `;

        // 2. حلقة لتوليد 30 بطاقة وهمية
        for (let i = 1; i <= 30; i++) {
            let randomSuffix = Math.floor(Math.random() * 9000) + 1000;
            outputHTML += `
                <div style="padding: 8px; border-bottom: 1px solid #eee; font-size: 13px; display: flex; justify-content: space-between;">
                    <span>Card #${i}</span>
                    <span>**** **** **** ${randomSuffix}</span>
                </div>`;
        }

        // 3. إغلاق الوسوم وإضافة النصيحة النهائية
        outputHTML += `
                </div>
                <p style="margin-top: 10px; font-weight: bold;">تذكر: البنك لن يطلب OTP لاستخراج بطاقات أبداً!</p>
            </div>
        `;

        resultDiv.innerHTML = outputHTML;
    } else {
        resultDiv.innerHTML = "<p style='color:red;'>يرجى إدخال رمز مكون من 6 أرقام</p>";
    }
}
