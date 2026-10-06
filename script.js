const allKeys = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`#key-${e.keyCode}`);

    if (!audio || !key) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add("play");

    setTimeout(() => {
        key.classList.remove("play");
    }, 100);
});

allKeys.forEach(key => {
    key.addEventListener("click", () => {

        const keyCode = key.getAttribute("data-key");
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

        key.classList.add("play");

        setTimeout(() => {
            key.classList.remove("play");
        }, 100);
    });
});
