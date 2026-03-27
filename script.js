// كلمات المرور المطلوبة
const otpCorrect = "097381";
const profilePassCorrect = "153576852";

// دالة فتح نافذة الملف الشخصي
const secretProfilePass = "153576852";

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
    if (inputPass === profilePassCorrect) {
        document.getElementById('password-form-section').style.display = 'none';
        document.getElementById('profile-data-section').style.display = 'block';
    } else {
        const err = document.getElementById('profile-pass-error');
        err.style.display = 'block';
        err.innerText = "❌ كلمة المرور غير صحيحة!";
    }
}

function checkCard() {
    const val = document.getElementById('cardInput').value;
    const res = document.getElementById('result');

    // مصفوفة أنواع البطاقات الحقيقية
    const cardTypes = [
        "Visa Gold", 
        "MasterCard World", 
        "Mada Debit", 
        "Visa Signature", 
        "MasterCard Titanium", 
        "Visa Infinite", 
        "American Express"
    ];

    if (val === "097381") {
        let cardsHTML = `
            <div style="margin-top:20px; text-align: right; border-top: 1px solid #eee; padding-top: 15px;">
                <p style="color: #d32f2f; font-weight: bold; font-size: 13px;">⚠️ تم استخراج 30 سجل بنجاح:</p>
                <div style="max-height: 200px; overflow-y: auto; background: #fafafa; border: 1px solid #ddd; border-radius: 5px;">
        `;
        
        for (let i = 1; i <= 30; i++) {
            // اختيار نوع بطاقة عشوائي لكل سطر
            let randomType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            let randomSuffix = Math.floor(Math.random() * 9000) + 1000;

            cardsHTML += `
                <div style="padding: 10px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; direction: ltr; align-items: center;">
                    <span style="font-family: monospace; background: #eceff1; padding: 2px 6px; border-radius: 4px;">**** ${randomSuffix}</span>
                    <span style="font-size: 13px; color: #1a73e8; font-weight: bold;">${randomType} #${i}</span>
                </div>`;
        }

        cardsHTML += `
                </div>
                <button onclick="openProfileModal()" class="profile-btn">عرض ملفك الشخصي 👤</button>
            </div>
        `;
        res.innerHTML = cardsHTML;
    } else {
        res.innerHTML = "<p style='color:red; margin-top:15px; text-align:center;'>الرمز غير صحيح!</p>";
    }
}
}
