AFRAME.registerComponent("mytarget", {
    init: function () {
        const webButton = document.querySelector("#web-button");
        const phoneButton = document.querySelector("#phone-button");
        const telegramButton = document.querySelector("#telegram-button");
        const instButton = document.querySelector("#inst-button");
        const video = document.querySelector("#video-TMRS");
        const youtubeButton = document.querySelector("#vid");
        this.el.addEventListener("targetFound", (event) => {
            console.log("target found");
            video.play();

            webButton.addEventListener("click", (event) => {
                window.location.href = "https://www.spatial.io/s/Brand-Pilots-cockpit-64eb1a031be2c36e18f7ea23?share=6860202082644910490";
            });
            phoneButton.addEventListener("click", (event) => {
                window.open("tel:+79052247573");
            });
            telegramButton.addEventListener("click", (event) => {
                window.location.href = "https://t.me/annrymareva";
            });
            instButton.addEventListener("click", (event) => {
                window.location.href = "https://www.instagram.com/annrymareva";
            });
            youtubeButton.addEventListener("click", (event) => {
                window.location.href = "https://youtube.com/@Brand-Pilot-Cockpit";
            });
        });

        this.el.addEventListener("targetLost", (event) => {
            console.log("target found");
            video.pause();
        });
        //this.el.emit('targetFound');
    },
});