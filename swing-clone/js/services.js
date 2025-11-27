/**
 * Services Modal Functionality
 */

// Service details data
const servicesData = {
    content: {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>`,
        title: 'إنتاج المحتوى',
        description: 'نحن متخصصون في صناعة محتوى إبداعي يروي قصتك بطريقة فريدة ومؤثرة. من النصوص الإبداعية إلى السيناريوهات المبتكرة، نضمن أن رسالتك تصل إلى جمهورك بأقوى تأثير ممكن.',
        features: [
            'كتابة محتوى إبداعي ومبتكر',
            'تطوير سيناريوهات احترافية',
            'إنتاج محتوى متعدد الوسائط',
            'استشارات استراتيجية للمحتوى',
            'تحسين المحتوى لمحركات البحث (SEO)'
        ]
    },
    marketing: {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>`,
        title: 'التسويق الرقمي',
        description: 'نقدم استراتيجيات تسويقية رقمية متكاملة تساعدك على الوصول إلى جمهورك المستهدف وتحقيق أهدافك التجارية. من التخطيط إلى التنفيذ والتحليل، نكون معك في كل خطوة.',
        features: [
            'تطوير استراتيجيات تسويقية شاملة',
            'إدارة حملات إعلانية مدفوعة (PPC)',
            'تحسين محركات البحث (SEO)',
            'التسويق عبر وسائل التواصل الاجتماعي',
            'تحليل البيانات وقياس الأداء'
        ]
    },
    branding: {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
        </svg>`,
        title: 'تصميم الهوية البصرية',
        description: 'نبني هوية بصرية قوية ومتماسكة تعكس شخصية علامتك التجارية وتميزك عن المنافسين. من الشعار إلى دليل الهوية الكامل، نصمم كل عنصر بعناية فائقة.',
        features: [
            'تصميم الشعارات الاحترافية',
            'تطوير دليل الهوية البصرية',
            'تصميم المواد التسويقية',
            'تصميم الباترن والأيقونات',
            'تصميم العبوات والمطبوعات'
        ]
    },
    social: {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>`,
        title: 'إدارة وسائل التواصل الاجتماعي',
        description: 'ندير حساباتك على وسائل التواصل الاجتماعي بشكل احترافي، مع محتوى جذاب يزيد من تفاعل جمهورك ويعزز حضورك الرقمي. من التخطيط إلى النشر والمتابعة.',
        features: [
            'تطوير استراتيجية المحتوى',
            'إنشاء ونشر محتوى يومي',
            'إدارة التفاعل مع المتابعين',
            'إنشاء حملات تفاعلية',
            'تقارير أداء شهرية'
        ]
    },
    photography: {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
        </svg>`,
        title: 'التصوير والإنتاج',
        description: 'فريقنا المحترف يلتقط أجمل اللحظات بأعلى جودة ممكنة. من التصوير الفوتوغرافي إلى إنتاج الفيديو، نستخدم أحدث المعدات والتقنيات لإنتاج محتوى بصري استثنائي.',
        features: [
            'التصوير الفوتوغرافي الاحترافي',
            'إنتاج الفيديو والأفلام القصيرة',
            'التصوير الجوي (Drone)',
            'المونتاج والتحرير الاحترافي',
            'تصوير المنتجات والطعام'
        ]
    },
    motion: {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>`,
        title: 'الموشن جرافيك',
        description: 'نحول أفكارك إلى رسوم متحركة مذهلة تجذب الانتباه وتوصل رسالتك بطريقة مبتكرة وممتعة. من الفيديوهات التوضيحية إلى الإعلانات المتحركة، نصنع محتوى يترك أثراً.',
        features: [
            'إنتاج فيديوهات موشن جرافيك',
            'تصميم إنفوجرافيك متحرك',
            'إنتاج فيديوهات توضيحية (Explainer Videos)',
            'تصميم مقدمات وخواتم احترافية',
            'أنيميشن شخصيات ثنائي وثلاثي الأبعاد'
        ]
    }
};

// Open modal function
function openServiceModal(serviceType) {
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    const service = servicesData[serviceType];

    if (!service) return;

    // Build modal content
    const featuresHTML = service.features.map(feature =>
        `<li>${feature}</li>`
    ).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">
                ${service.icon}
            </div>
            <h2 class="modal-title">${service.title}</h2>
        </div>
        <p class="modal-description">${service.description}</p>
        <div class="modal-features">
            <h4>ما نقدمه:</h4>
            <ul class="feature-list">
                ${featuresHTML}
            </ul>
        </div>
        <div class="modal-cta">
            <button class="modal-cta-btn" onclick="window.location.href='#contact'">
                ابدأ مشروعك الآن
            </button>
        </div>
    `;

    // Show modal
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close modal function
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.classList.remove('active');

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);

    // Restore body scroll
    document.body.style.overflow = '';
}

// Initialize modal event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Service cards click
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function () {
            const serviceType = this.getAttribute('data-service');
            openServiceModal(serviceType);
        });
    });

    // Close button
    const closeBtn = document.getElementById('modalClose');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeServiceModal);
    }

    // Overlay click
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeServiceModal);
    }

    // ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });
});
