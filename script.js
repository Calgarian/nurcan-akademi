document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. PROGRAM KARTLARI MODAL (AÇILIR PENCERE) KODLARI
    // ==========================================
    const modal = document.getElementById("programModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = document.querySelector(".close-btn");
    const cards = document.querySelectorAll(".grid-programs .card");

    const programData = {
        "lego-stem": {
            title: "LEGO & STEM",
            desc: "Erken yaşta mühendislik becerileri! LEGO Education setleri ile çocuklarımız algoritma kurmayı, 3 boyutlu düşünmeyi ve fiziksel mekanizmaları eğlenerek tasarlamayı öğreniyor."
        },
        "kodlama-robotik": {
            title: "KODLAMA & ROBOTİK",
            desc: "Geleceğin dilini bugünden yazıyoruz. Arduino, mBot ve Scratch platformları eşliğinde temel programlama mantığından sensör entegrasyonuna kadar kapsamlı bir yazılım eğitimi sunulmaktadır."
        },
        "bilim-atolyeleri": {
            title: "BİLİM ATÖLYELERİ",
            desc: "Merak eden, sorgulayan zihinler için! Kimya, fizik ve biyoloji temelli interaktif deneyler sayesinde çocuklarımız bilimin temel kurallarını laboratuvar ortamında yaşayarak tecrübe ediyor."
        },
        "akil-oyunlari": {
            title: "AKIL VE ZEKA OYUNLARI",
            desc: "Stratejik düşünme, odaklanma ve problem çözme becerilerini geliştiriyoruz. Mangala, Satranç, Abalone ve çeşitli görsel-uzamsal zeka kutu oyunlarıyla zihinsel sınırları zorluyoruz."
        }
    };

    if (cards && modal) {
        cards.forEach(card => {
            card.addEventListener("click", () => {
                const programId = card.getAttribute("data-program");
                if (programData[programId]) {
                    modalTitle.textContent = programData[programId].title;
                    modalDescription.textContent = programData[programId].desc;
                    modal.style.display = "flex";
                }
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }


    // ==========================================
    // 2. EKİP KARTLARINA TIKLANDIĞINDA BÜYÜME (ZOOM) KODLARI
    // ==========================================
    
    // Arka planı karartmak için dinamik olarak bir overlay (karartma katmanı) oluşturup sayfaya ekliyoruz
    const overlay = document.createElement("div");
    overlay.className = "team-overlay";
    document.body.appendChild(overlay);

    const teamCards = document.querySelectorAll(".team-card");

    teamCards.forEach(card => {
        card.addEventListener("click", (e) => {
            // Eğer kart zaten büyükse, tekrar tıklandığında küçülsün
            if (card.classList.contains("active")) {
                closeActiveCard();
            } else {
                // Önce açıkta başka kart varsa onu kapatıyoruz
                closeActiveCard();
                
                // Tıklanan kartı büyüt ve arkasını karart
                card.classList.add("active");
                overlay.classList.add("show");
                // Sayfanın arkada kaymasını engellemek için scroll'u kilitleyebilirsin (isteğe bağlı):
                document.body.style.overflow = "hidden";
            }
            // Tıklama olayının dışarıya sızıp anında kapanmasını önlüyoruz
            e.stopPropagation();
        });
    });

    // Aktif kartı kapatan genel fonksiyon
    function closeActiveCard() {
        const activeCard = document.querySelector(".team-card.active");
        if (activeCard) {
            activeCard.classList.remove("active");
        }
        overlay.classList.remove("show");
        document.body.style.overflow = ""; // Kaydırmayı tekrar aktif et
    }

    // Kartın dışındaki boş bir alana veya karartılmış overlay'e tıklandığında kartı küçült
    overlay.addEventListener("click", closeActiveCard);
    
    // Klavyeden ESC tuşuna basıldığında da kartı kapat
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeActiveCard();
        }
    });
});