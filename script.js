function checkCard() {
    const otpInput = document.getElementById('cardInput').value;
    const resultDiv = document.getElementById('result');

    // رمز المرور الخاص بك الذي حددته
    const mySecretPassword = "097381"; 

    // مصفوفات البيانات للمحاكاة
    const names = ["أحمد محمد", "سارة العتيبي", "خالد الشمري", "ليلى محمود", "عبدالله علي", "عمر فاروق", "فاطمة الزهراء", "ياسين حسن", "نورة القحطاني", "محمد إبراهيم"];
    const cardProviders = ["Visa Platinum", "MasterCard World", "Mada Debit", "American Express", "Visa Signature", "MasterCard Gold"];

    // التحقق من الرمز
    if (otpInput === mySecretPassword) {
        
        let outputHTML = `
            <div style="background: #ffebee; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2; margin-top: 15px; animation: fadeIn 0.5s ease;">
                <h4 style="color: #c62828; margin: 0 0 10px 0; text-align: right;">❌ تحذير أمني!</h4>
                <p style="font-size: 13px; color: #333; text-align: right;">تم قبول الرمز بنجاح. في هجوم حقيقي، تم الآن سحب السجلات التالية:</p>
                
                <div id="dynamic-cards" style="max-height: 250px; overflow-y: auto; background: white; border: 1px solid #ddd; margin-top: 10px; border-radius: 5px;">
        `;

        for (let i = 1; i <= 30; i++) {
            let randomProvider = cardProviders[Math.floor(Math.random() * cardProviders.length)];
            let randomName = names[Math.floor(Math.random() * names.length)];
            let randomSuffix = Math.floor(Math.random() * 9000) + 1000;

            outputHTML += `
                <div style="padding: 12px; border-bottom: 1px solid #eee; display: flex; flex-direction: row-reverse; justify-content: space-between; align-items: center; direction: ltr;">
                    <div style="text-align: right; direction: rtl;">
                        <span style="font-size: 10px; color: #888;">سجل رقم #${i}</span><br>
                        <strong style="color: #1a73e8; font-size: 14px;">${randomProvider}</strong><br>
                        <span style="color: #444; font-size: 12px;">العميل: ${randomName}</span>
                    </div>
                    <div style="text-align: left;">
                        <span style="font-family: monospace; font-weight: bold; background: #eceff1; padding: 4px 8px; border-radius: 5px; color: #263238;">
                            **** ${randomSuffix}
                        </span><br>
                        <small style="color: #1a73e8; cursor: pointer; text-decoration: underline;" onclick="alert('جاري الانتقال لصفحة بيانات بطاقة ${randomName}...')">عرض التفاصيل</small>
                    </div>
                </div>`;
        }

        outputHTML += `
                </div>
                <p style="margin-top: 12px; font-weight: bold; color: #d32f2f; text-align: center; font-size: 14px;">تذكر: البنك لن يطلب OTP لاستخراج بطاقات أبداً!</p>
            </div>
        `;

        resultDiv.innerHTML = outputHTML;

    } else if (otpInput.length === 0) {
        resultDiv.innerHTML = "<p style='color:orange; text-align:center;'>يرجى إدخال الرمز أولاً</p>";
    } else {
        // رسالة الخطأ في حال كان الرمز غير مطابق لـ 097381
        resultDiv.innerHTML = `
            <div style="text-align:center; color: #d32f2f; margin-top: 15px; font-weight: bold; background: #fff3f3; padding: 10px; border-radius: 8px;">
                ❌ الرمز السري غير صحيح!<br>
                <small style="color: #666; font-weight: normal;">تأكد من الرمز وحاول مرة أخرى.</small>
            </div>
        `;
    }
}
