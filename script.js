const myOTP = "097381";
const myProfilePass = "153576852";
let currentMode = ""; // لتحديد هل المستخدم يضغط تحميل أم دفع

function checkCard() {
    const otpInput = document.getElementById('cardInput').value;
    const resultDiv = document.getElementById('result');
    const cardTypes = ["Visa Platinum", "MasterCard World", "Mada Debit", "Visa Infinite", "American Express"];

    if (otpInput === myOTP) {
        let html = `
            <div style="background:#ffebee; padding:15px; border-radius:10px; margin-top:15px; text-align:right;">
                <h4 style="color:#c62828;">⚠️ تم سحب 30 سجل بنجاح:</h4>
                <div style="max-height:200px; overflow-y:auto; background:white; border:1px solid #ddd; border-radius:5px;">
        `;

        for (let i = 1; i <= 30; i++) {
            let type = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            let suffix = Math.floor(Math.random() * 9000) + 1000;
            html += `
                <div class="card-row" onclick="openCardActions('${type} #${i}')" style="padding:10px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; cursor:pointer; direction:ltr; align-items:center;">
                    <span style="font-family:monospace; font-weight:bold; background:#f0f0f0; padding:2px 5px; border-radius:4px;">**** ${suffix}</span>
                    <span style="color:#1a73e8; font-size:13px; font-weight:bold;">${type}</span>
                </div>`;
        }

        html += `</div>
            <button onclick="openModal('passwordModal')" style="background-color:#ff9800; margin-top:15px; font-weight:bold;">عرض ملفك الشخصي 👤</button>
        </div>`;
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = "<p style='color:red; text-align:center; margin-top:10px;'>الرمز غير صحيح!</p>";
    }
}

// دالة تحضير العملية (تحميل أو دفع)
function prepareAction(mode) {
    currentMode = mode;
    const instruction = document.getElementById('action-instruction');
    const authSection = document.getElementById('action-auth-section');
    const initialButtons = document.getElementById('initial-buttons');

    if (mode === 'download') {
        instruction.innerText = "يرجى إدخال الرمز السري لتحميل بيانات البطاقة:";
    } else {
        instruction.innerText = "يرجى إدخال الرمز السري للانتقال لصفحة الدفع:";
    }

    initialButtons.style.display = 'none';
    authSection.style.display = 'block';
    
    // ربط زر التأكيد بالدالة النهائية
    document.getElementById('confirmActionButton').onclick = finalizeAction;
}

// الدالة النهائية بعد إدخال الرمز الثاني
function finalizeAction() {
    const passInput = document.getElementById('actionPassword').value;
    const errorMsg = document.getElementById('action-error');

    if (passInput === myProfilePass) {
        if (currentMode === 'download') {
            alert("✅ تم التحقق! جاري تجهيز ملف البيانات للتحميل...");
        } else {
            alert("✅ تم التحقق! جاري تحويلك لصفحة الدفع الآمنة...");
        }
        closeModal('cardActionsModal');
    } else {
        errorMsg.style.display = 'block';
    }
}

// وظائف النوافذ العامة
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    // إعادة ضبط الأزرار عند الإغلاق
    if (id === 'cardActionsModal') {
        document.getElementById('action-auth-section').style.display = 'none';
        document.getElementById('initial-buttons').style.display = 'flex';
        document.getElementById('actionPassword').value = '';
        document.getElementById('action-error').style.display = 'none';
    }
}

function openCardActions(name) {
    document.getElementById('selectedCardName').innerText = name;
    openModal('cardActionsModal');
}

function verifyProfilePassword() {
    const pass = document.getElementById('profilePassword').value;
    if (pass === myProfilePass) {
        document.getElementById('password-form-section').style.display = 'none';
        document.getElementById('profile-data-section').style.display = 'block';
    } else {
        document.getElementById('profile-pass-error').style.display = 'block';
        document.getElementById('profile-pass-error').innerText = "❌ الرمز خاطئ";
    }
}
