// 1. ثوابت كلمات المرور (تأكد من مطابقتها تماماً)
const myOTP = "097381";
const myProfilePass = "153576852";

// 2. دالة عرض البطاقات (تسجيل الدخول الأول)
function for (let i = 1; i <= 30; i++) {
            let randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            let randomSuffix = Math.floor(Math.random() * 9000) + 1000;

            outputHTML += `
                <div style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; direction: ltr; align-items: center; cursor: pointer;" 
                     onclick="showCardActions('${randomType}', '${randomSuffix}')">
                    <span style="font-family: monospace; font-weight: bold; background: #eceff1; padding: 4px 8px; border-radius: 5px;">**** ${randomSuffix}</span>
                    <span style="font-size: 13px; color: #1a73e8; font-weight: bold;">${randomType} #${i}</span>
                </div>`;
        }

    // مصفوفة أنواع البطاقات الحقيقية
    const cardTypes = ["Visa Platinum", "MasterCard World", "Mada Debit", "Visa Infinite", "American Express", "MasterCard Gold"];

    if (otpInput === myOTP) {
        let outputHTML = `
            <div style="background: #ffebee; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2; margin-top: 15px; text-align: right;">
                <h4 style="color: #c62828; margin: 0 0 10px 0;">❌ تحذير: تم سحب السجلات!</h4>
                <div id="dynamic-cards" style="max-height: 200px; overflow-y: auto; background: white; border: 1px solid #ddd; margin-top: 10px; border-radius: 5px;">
        `;

        for (let i = 1; i <= 30; i++) {
            let randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            let randomSuffix = Math.floor(Math.random() * 9000) + 1000;

            outputHTML += `
                <div style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; direction: ltr; align-items: center;">
                    <span style="font-family: monospace; font-weight: bold; background: #eceff1; padding: 4px 8px; border-radius: 5px;">**** ${randomSuffix}</span>
                    <span style="font-size: 13px; color: #1a73e8; font-weight: bold;">${randomType} #${i}</span>
                </div>`;
        }

        outputHTML += `
                </div>
                <button onclick="openProfileModal()" style="background-color: #ff9800; color: white; border: none; padding: 12px; border-radius: 8px; width: 100%; margin-top: 15px; cursor: pointer; font-weight: bold;">
                    عرض ملفك الشخصي 👤
                </button>
            </div>
        `;
        resultDiv.innerHTML = outputHTML;
    } else {
        resultDiv.innerHTML = "<p style='color:red; margin-top:15px; text-align:center;'>❌ الرمز غير صحيح!</p>";
    }
}

// 3. دوال نافذة الملف الشخصي
function openProfileModal() {
    document.getElementById('password-form-section').style.display = 'block';
    document.getElementById('profile-data-section').style.display = 'none';
    document.getElementById('profile-pass-error').style.display = 'none';
    document.getElementById('passwordModal').style.display = 'flex';
}

function closeProfileModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

function verifyProfilePassword() {
    const inputPass = document.getElementById('profilePassword').value;
    const errorDiv = document.getElementById('profile-pass-error');

    if (inputPass === myProfilePass) {
        document.getElementById('password-form-section').style.display = 'none';
        document.getElementById('profile-data-section').style.display = 'block';
    } else {
        errorDiv.innerText = "❌ كلمة المرور غير صحيحة!";
        errorDiv.style.display = 'block';
    }
}
function showCardActions(cardName, cardNum) {
    // سنستخدم نافذة مخصصة أو مجرد تنبيه لاختبار الفكرة
    // لجعله احترافياً، سننشئ نافذة HTML سريعة
    const action = confirm(`البطاقة: ${cardName} (**** ${cardNum})\n\nاضغط "موافق" لـ [تحميل بيانات البطاقة]\nاضغط "إلغاء" لـ [الانتقال إلى الدفع المباشر]`);
    
    if (action) {
        alert("جاري تحميل ملف البيانات بصيغة PDF...");
    } else {
        alert("جاري تحويلك إلى بوابة الدفع الآمنة...");
    }
}
