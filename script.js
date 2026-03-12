// VisionTech interactions
// Simple waitlist interaction feedback

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".waitlist");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = form.querySelector("input[type='email']")?.value?.trim();
        if (!email) return;
        form.reset();
        alert("Thanks for joining the VisionTech waitlist!"); // replace with real integration later
    });
});
