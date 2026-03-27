// 1. مصفوفة لأنواع البطاقات الحقيقية
const cardProviders = ["Visa Platinum", "MasterCard World", "Mada Debit", "American Express", "Visa Signature", "MasterCard Gold"];

// 2. داخل حلقة الـ for (توليد 30 سجل)
for (let i = 1; i <= 30; i++) {
    // اختيار نوع بطاقة عشوائي من المصفوفة أعلاه
    let randomProvider = cardProviders[Math.floor(Math.random() * cardProviders.length)];
    
    // اختيار اسم عميل عشوائي (من مصفوفة الأسماء التي وضعناها سابقاً)
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomSuffix = Math.floor(Math.random() * 9000) + 1000;

    outputHTML += `
        <div class="card-item">
            <div style="text-align: right;">
                <span style="font-size: 10px; color: #888;">سجل رقم #${i}</span><br>
                <strong style="color: #1a73e8; font-size: 14px;">${randomProvider}</strong><br>
                <span style="color: #444; font-size: 12px;">العميل: ${randomName}</span>
            </div>
            <div style="text-align: left;">
                <span style="font-family: monospace; font-weight: bold; background: #eceff1; padding: 4px 8px; border-radius: 5px; color: #263238;">
                    **** ${randomSuffix}
                </span><br>
                <small style="color: #1a73e8; cursor: pointer; text-decoration: underline;" onclick="showCardDetails('${randomProvider}', '${randomName}', '${randomSuffix}')">عرض التفاصيل</small>
            </div>
        </div>`;
}
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
