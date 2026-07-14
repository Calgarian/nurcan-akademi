// Kartlara tıklandığında açılacak geçici açıklamalar
const programContents = {
    "robotik": {
        title: "Robotik Kodlama",
        desc: "Buraya açıklamalar girilecek"
    },
    "yapay-zeka": {
        title: "Yapay Zekâ",
        desc: "Buraya açıklamalar girilecek"
    },
    "stem": {
        title: "STEM",
        desc: "Buraya açıklamalar girilecek"
    },
    "sanat": {
        title: "Sanat ve Yaratıcılık",
        desc: "Buraya açıklamalar girilecek"
    }
};

// HTML Elemanlarının Seçilmesi
const modal = document.getElementById("programModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");
const cards = document.querySelectorAll(".card");

// Kartlara Tıklama Olayı Dinleyicisi
cards.forEach(card => {
    card.addEventListener("click", () => {
        const programKey = card.getAttribute("data-program");
        if (programContents[programKey]) {
            modalTitle.textContent = programContents[programKey].title;
            modalDesc.textContent = programContents[programKey].desc;
            
            // Açılır pencereyi aktif et
            modal.style.display = "flex";
            document.body.style.overflow = "hidden"; // Arka planın kaymasını önler
        }
    });
});

// Kapatma Butonu İşlevi
closeBtn.addEventListener("click", () => {
    closeModal();
});

// Pencerenin Dışına Tıklanınca Kapatma İşlevi
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Kaydırmayı tekrar aktif et
}