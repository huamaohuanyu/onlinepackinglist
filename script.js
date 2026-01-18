// 从 URL 参数中获取 shipment（批次）、box（箱号）、pw（密码）
const urlParams = new URLSearchParams(window.location.search);
const shipment = urlParams.get('shipment');
const box = urlParams.get('box');
const pw = urlParams.get('pw');

// 预设的密码（可随时修改）
const CORRECT_PASSWORD = '123456'; // 建议定期更换

// 图片基础路径
const IMAGE_BASE = `packing-slips/shipment-${shipment}/box-${box}.jpg`;

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if (input === CORRECT_PASSWORD) {
        document.getElementById('passwordPrompt').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('title').textContent = `批次 ${shipment} - 箱号 ${box}`;
        document.getElementById('packingImage').src = IMAGE_BASE;
    } else {
        document.getElementById('errorMsg').textContent = '密码错误，请重试';
    }
}

// 如果 URL 中已经带了 pw 参数，直接尝试验证
if (pw) {
    if (pw === CORRECT_PASSWORD) {
        document.getElementById('passwordPrompt').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('title').textContent = `批次 ${shipment} - 箱号 ${box}`;
        document.getElementById('packingImage').src = IMAGE_BASE;
    } else {
        document.getElementById('errorMsg').textContent = '密码错误，请重试';
    }
}
