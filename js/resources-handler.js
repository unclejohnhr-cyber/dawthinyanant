/**
 * Resources Data & Filtering Logic
 */

const myResources = [
  {
    "id": "r1",
    "title": "Predictive Analytics and Dynamic Segmentation for Social Media Campaigns",
    "category": "PhD Thesis",
    "type": "PDF",
    "desc": "Social Media Marketing အတွက် ကြိုတင်ခန့်မှန်းတွက်ချက်ခြင်းနှင့် Dynamic Segmentation သုတေသန။",
    "link": "#"
  },
  {
    "id": "r2",
    "title": "Myanmar Fake News Dataset 2026",
    "category": "Dataset",
    "type": "Excel",
    "desc": "Information Warfare တွင် Machine Learning ဖြင့် လေ့လာထားသော သတင်းတု၊ သတင်းမှား ဒေတာဆက်။",
    "link": "#"
  },
  {
    "id": "r3",
    "title": "New Public Management & Pressure Groups",
    "category": "Public Policy",
    "type": "PDF",
    "desc": "နိုင်ငံရေးသိပ္ပံ ဒီပလိုမာအတွက် ပြုစုထားသော အများပြည်သူဆိုင်ရာ မူဝါဒရေးရာ လေ့လာချက်။",
    "link": "#"
  }
];

function renderResources(filterCat = 'All') {
    const container = document.getElementById('resourceContainer');
    if (!container) return;

    container.innerHTML = '';
    const filtered = filterCat === 'All' ? myResources : myResources.filter(r => r.category === filterCat);

    filtered.forEach(res => {
        const icon = res.type === 'PDF' ? 'ri-file-pdf-line' : 'ri-table-line';
        container.innerHTML += `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
                <div class="feature-card h-100" style="border-top: 4px solid #6f42c1;">
                    <i class="${icon}" style="font-size: 2rem; color: #6f42c1;"></i>
                    <h5 class="mt-3 fw-bold">${res.title}</h5>
                    <span class="badge bg-light text-dark border mb-3">${res.category}</span>
                    <p class="small text-muted">${res.desc}</p>
                    <a href="${res.link}" class="btn-outline-custom mt-auto d-inline-block" style="font-size: 0.85rem;">Download ${res.type}</a>
                </div>
            </div>`;
    });
}

function filterResources(btn, category) {
    // ခလုတ်အရောင်ပြောင်းရန်
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // ဒေတာပြန်စစ်ထုတ်ရန်
    renderResources(category);
}

document.addEventListener('DOMContentLoaded', () => {
    renderResources('All');
});