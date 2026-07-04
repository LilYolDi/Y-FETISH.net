// Главное видео
const video = document.getElementById("video");

if (video) {

    const source = video.querySelector("source");
    const cards = document.querySelectorAll(".card");

    // Переключение видео
    cards.forEach(card => {
        card.addEventListener("click", () => {

            const newSource = card.querySelector("source").getAttribute("src");

            source.src = newSource;

            video.load();
            video.play();

            const title = document.querySelector(".info h1");
            if (title) {
                title.textContent = card.querySelector("h3").textContent;
            }

            const desc = document.querySelector(".description p");
            if (desc) {
                desc.textContent = "Сейчас воспроизводится: " + card.querySelector("h3").textContent;
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    });

    // Кнопки управления
    const play = document.getElementById("play");
    if (play) play.onclick = () => video.play();

    const pause = document.getElementById("pause");
    if (pause) pause.onclick = () => video.pause();

    const mute = document.getElementById("mute");
    if (mute) {
        mute.onclick = () => {
            video.muted = !video.muted;
        };
    }

    const fullscreen = document.getElementById("fullscreen");
    if (fullscreen) {
        fullscreen.onclick = () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            }
        };
    }
}

// Лайки
let likes = Number(localStorage.getItem("likes")) || 352;

const likesSpan = document.getElementById("likes");

if (likesSpan) {
    likesSpan.textContent = likes;

    const likeBtn = document.getElementById("like");

    if (likeBtn) {
        likeBtn.onclick = () => {
            likes++;
            likesSpan.textContent = likes;
            localStorage.setItem("likes", likes);
        };
    }
}

// Дизлайки
let dislikes = Number(localStorage.getItem("dislikes")) || 18;

const dislikesSpan = document.getElementById("dislikes");

if (dislikesSpan) {
    dislikesSpan.textContent = dislikes;

    const dislikeBtn = document.getElementById("dislike");

    if (dislikeBtn) {
        dislikeBtn.onclick = () => {
            dislikes++;
            dislikesSpan.textContent = dislikes;
            localStorage.setItem("dislikes", dislikes);
        };
    }
}

// Просмотры
const viewsEl = document.getElementById("views");

if (viewsEl) {
    let views = Number(localStorage.getItem("views")) || 1523;
    views++;
    viewsEl.textContent = "👁 " + views;
    localStorage.setItem("views", views);
}

// Поиск
const search = document.querySelector(".search input");

if (search) {

    const cards = document.querySelectorAll(".card");

    search.addEventListener("input", () => {

        const value = search.value.toLowerCase();

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";

        });

    });

}

// =======================
// БОКОВОЕ МЕНЮ
// =======================

const menu = document.getElementById("sideMenu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

if (menu && menuBtn && overlay) {

    menuBtn.onclick = function () {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    overlay.onclick = function () {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    };

}