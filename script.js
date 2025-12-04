// Halaman index
if (document.getElementById("intro-text")) {
    const introText = "Hai Aida... Aku punya sesuatu buat kamu 💖";
    let i = 0;
    const el = document.getElementById("intro-text");
    const btn = document.getElementById("enter-btn");
    const music = document.getElementById("bg-music");

    function typeText() {
        if (i < introText.length) {
            el.textContent += introText.charAt(i);
            el.style.opacity = 1;
            i++;
            setTimeout(typeText, 80);
        } else {
            btn.style.opacity = 1;
        }
    }

    typeText();

    btn.addEventListener("click", () => {
        music.play();
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "main.html";
        }, 1500);
    });
}

// Halaman main
if (document.getElementById("petals")) {
    const petalsContainer = document.getElementById("petals");
    const nextBtn = document.getElementById("next-btn");
    const finalMsg = document.getElementById("final-message");
    const shareBtn = document.getElementById("share-btn");

    // Bunga jatuh
    setInterval(() => {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = 6 + Math.random() * 4 + "s";
        petalsContainer.appendChild(petal);
        setTimeout(() => petal.remove(), 10000);
    }, 300);

    // Typewriter pesan utama
    const text =
        `Terima kasih sudah hadir di hidupku, Aida 🌸

Kamu adalah alasan di balik banyak senyumku hari ini.

Semoga ulang tahunmu penuh tawa, cinta, dan hal-hal manis yang kamu pantas dapatkan 💖`;

    const el = document.getElementById("typewriter");
    let idx = 0;

    function typeEffect() {
        if (idx < text.length) {
            el.textContent += text.charAt(idx);
            idx++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();

    // Confetti function
    function launchConfetti() {
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                spread: 80,
                origin: { y: 0.6 }
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        })();
    }

    // Tombol klik → pesan akhir
    nextBtn.addEventListener("click", () => {
        nextBtn.style.display = "none";
        finalMsg.classList.remove("hidden");
        launchConfetti();
        setTimeout(() => {
            shareBtn.classList.remove("hidden");
        }, 2000);
    });

    // Tombol Share WhatsApp
    shareBtn.addEventListener("click", () => {
        const text = encodeURIComponent("Hai Aida 💖, buka ini deh: [link website kamu]");
        window.open(`https://wa.me/?text=${text}`, "_blank");
    });
}
