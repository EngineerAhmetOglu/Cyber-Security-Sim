const secretProfilePass = "153576852";

function openProfileModal() {
    document.getElementById('password-form-section').style.display = 'block';
    document.getElementById('profile-data-section').style.display = 'none';
    document.getElementById('passwordModal').style.display = 'flex';
}

function closeProfileModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

function verifyProfilePassword() {
    const input = document.getElementById('profilePassword').value;
    if (input === secretProfilePass) {
        document.getElementById('password-form-section').style.display = 'none';
        document.getElementById('profile-data-section').style.display = 'block';
    } else {
        const err = document.getElementById('profile-pass-error');
        err.innerHTML = "❌ كلمة المرور غير صحيحة!";
        err.style.display = 'block';
    }
}

function checkCard() {
    const otp = document.getElementById('cardInput').value;
    const result = document.getElementById('result');

    if (otp === "097381") {
        let html = `
            <div style="background: #ffebee; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2; margin-top: 15px; text-align: right;">
                <h4 style="color: #c62828;">❌ تحذير: تم سحب البيانات!</h4>
                <div style="max-height: 200px; overflow-y: auto; background: white; border: 1px solid #ddd; margin: 10px 0;">
        `;
        
        for (let i = 1; i <= 30; i++) {
            html += `<div style="padding: 8px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; direction: ltr;">
                <span>**** ${Math.floor(Math.random() * 9000) + 1000}</span>
                <span style="color: #1a73e8; font-weight: bold;">Visa Platinum #${i}</span>
            </div>`;
        }

        html += `</div>
            <button onclick="openProfileModal()" class="profile-btn">عرض ملفك الشخصي 👤</button>
        </div>`;
        result.innerHTML = html;
    } else {
        result.innerHTML = "<p style='color:red; text-align:center;'>الرمز غير صحيح!</p>";
    }
}
