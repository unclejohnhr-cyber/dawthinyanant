/**
 * Main JavaScript File
 * Global Functions: Language Toggle, Location Fetch, AOS & Chart.js Data
 */

// --- ၁။ Language Toggle (မြန်မာ / English ပြောင်းရန်) ---
function toggleLanguage() {
    document.body.classList.toggle('myanmar-active');
    const isMyanmar = document.body.classList.contains('myanmar-active');
    localStorage.setItem('preferredLang', isMyanmar ? 'mm' : 'en');
}

// --- ၂။ Visitor Location Fetch (တည်နေရာ ရယူရန်) ---
async function fetchVisitorLocation() {
    const visitorInfoBox = document.getElementById('visitor-info');
    if (!visitorInfoBox) return;

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        if (data.city && data.country_name) {
            const locationText = `${data.city}, ${data.country_name}`;
            visitorInfoBox.innerHTML = `
                <span class="lang-en">${locationText}</span>
                <span class="lang-mm">${locationText}</span>
            `;
        } else {
            visitorInfoBox.innerHTML = `<span class="lang-en">Location unavailable</span><span class="lang-mm">တည်နေရာ မရရှိပါ</span>`;
        }
    } catch (error) {
        visitorInfoBox.innerHTML = `<span class="lang-en">Location unavailable</span><span class="lang-mm">တည်နေရာ မရရှိပါ</span>`;
    }
}

// --- ၃။ Myanmar Education Insights (2025) Data Charts (ဂရပ်ဖ်များ ဆွဲရန်) ---
function initEducationCharts() {
    // Chart တွေဆွဲမည့် နေရာ (Canvas) မရှိပါက အလုပ်မလုပ်စေရန်
    if (!document.getElementById('enrollmentChart')) return;

    // (၁) Student Enrollment (Bar Chart)
    new Chart(document.getElementById('enrollmentChart'), {
        type: 'bar',
        data: {
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'Enrollment (Millions)',
                data: [9.2, 8.5, 7.8, 8.1, 8.4],
                backgroundColor: '#6f42c1',
                borderRadius: 4
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // (၂) Literacy Rates (Line Chart)
    new Chart(document.getElementById('literacyChart'), {
        type: 'line',
        data: {
            labels: ['Urban', 'Rural', 'National Avg'],
            datasets: [{
                label: 'Literacy Rate (%)',
                data: [94, 83, 89],
                borderColor: '#4b2354',
                backgroundColor: 'rgba(75, 35, 84, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // (၃) Level Enrollment (Doughnut Chart)
    new Chart(document.getElementById('levelChart'), {
        type: 'doughnut',
        data: {
            labels: ['Primary', 'Middle', 'High School'],
            datasets: [{
                data: [62, 26, 12],
                backgroundColor: ['#6f42c1', '#4b2354', '#ffde59']
            }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    // (၄) Student-Teacher Ratio (Bar Chart)
    new Chart(document.getElementById('ratioChart'), {
        type: 'bar',
        data: {
            labels: ['Primary', 'Middle', 'High'],
            datasets: [{
                label: 'Students per Teacher',
                data: [28, 34, 42],
                backgroundColor: '#ffde59',
                borderRadius: 4
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } } }
    });
}

// --- ၄။ Page Load ဖြစ်ချိန်တွင် အလိုအလျောက် လုပ်ဆောင်မည့် အရာများ ---
document.addEventListener('DOMContentLoaded', () => {
    // Language ပြန်ခေါ်ခြင်း
    if (localStorage.getItem('preferredLang') === 'mm') {
        document.body.classList.add('myanmar-active');
    }

    // Animation စတင်ခြင်း
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 50 });
    }

    // တည်နေရာရယူခြင်း နှင့် Data Charts များဆွဲခြင်း
    fetchVisitorLocation();
    initEducationCharts();
});