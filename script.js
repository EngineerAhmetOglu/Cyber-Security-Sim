const myOTP = "097381";
const myProfilePass = "153576852";

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
                <div class="card-row" onclick="openCardActions('${type} #${i}')" style="padding:10px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; cursor:pointer; direction:ltr;">
                    <span style="font-family:monospace; font-weight:bold;">**** ${suffix}</span>
                    <span style="color:#1a73e8; font-size:13px;">${type}</span>
                </div>`;
        }

        html += `</div>
            <button onclick="openModal('passwordModal')" style="background-color:#ff9800; margin-top:15px;">عرض ملفك الشخصي 👤</button>
        </div>`;
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = "<p style='color:red; text-align:center; margin-top:10px;'>الرمز غير صحيح!</p>";
    }
}

// دوال النوافذ (Modals)
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
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
        const err = document.getElementById('profile-pass-error');
        err.innerText = "❌ كلمة المرور خاطئة";
        err.style.display = 'block';
    }
}
