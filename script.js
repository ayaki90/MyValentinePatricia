document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("hearts-container");
    if (container) {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (3 + Math.random() * 4) + "s";
            heart.style.fontSize = (20 + Math.random() * 30) + "px";
            container.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 7000);
        }, 300);
    }
});

function moveButton() {
    const btn = document.getElementById('noBtn');
    // Flyttar knappen till en slumpmässig plats på skärmen
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'fixed'; // Använd fixed för att den ska kunna flytta överallt
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function goToLovePage() {
    const container = document.getElementById('hearts-container');
    if (container) {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 2 + 1) + 's';
                container.appendChild(heart);
            }, i * 20);
        }
    }
    setTimeout(() => { document.body.classList.add('fade-out'); }, 1500);
    setTimeout(() => { window.location.href = "love.html"; }, 3000);
}