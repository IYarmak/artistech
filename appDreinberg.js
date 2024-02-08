AFRAME.registerComponent("mytarget", {
    init: function () {
        const webButton = document.querySelector("#web-button");
        const phoneButton = document.querySelector("#phone-button");
        const messageButton = document.querySelector("#message-button");
        const telegramButton = document.querySelector("#telegram-button");
        const vkButton = document.querySelector("#vk-button");
        const instButton = document.querySelector("#inst-button");
        const video = document.querySelector("#video-TMRS");
        const youtubeButton = document.querySelector("#vid");
        this.el.addEventListener("targetFound", (event) => {
            console.log("target found");
            video.play();

            webButton.addEventListener("click", (event) => {
                window.location.href = "https://tomorrowsrender.com/";
            });
            phoneButton.addEventListener("click", (event) => {
                window.open("tel:+79217900015);
            });
            messageButton.addEventListener("click", (event) => {
                window.location.href = "https://t.me/dreinberg";
            });
            telegramButton.addEventListener("click", (event) => {
                window.location.href = "https://t.me/tomorrowsrender";
            });
            vkButton.addEventListener("click", (event) => {
                window.location.href = "https://vk.com/tomorrowsrender";
            });
            instButton.addEventListener("click", (event) => {
                window.location.href = "https://instagram.com/i.yarmak";
            });
            youtubeButton.addEventListener("click", (event) => {
                window.location.href = "https://www.youtube.com/@tomorrowsrender";
            });
        });

        this.el.addEventListener("targetLost", (event) => {
            console.log("target found");
            video.pause();
        });
        //this.el.emit('targetFound');
    },
});