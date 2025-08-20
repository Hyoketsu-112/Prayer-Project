// Countdown Timer (11PM - 12AM daily)
const timerEl = document.getElementById("timer");

function updateCountdown() {
  const now = new Date();
  let target = new Date();

  // Set target to today's 11PM
  target.setHours(23, 0, 0, 0);

  // If already past 11PM, set to tomorrow at 11PM
  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target - now;

  // If between 11PM and 12AM, show LIVE message
  if (now.getHours() === 23) {
    timerEl.textContent = "🙏 The Service is LIVE (11PM - 12AM)";
    return;
  }

  // Calculate remaining time
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerEl.textContent = `⏳ Next Service starts in: ${hours}h ${minutes}m ${seconds}s`;
}

// Run every second
setInterval(updateCountdown, 1000);
updateCountdown();


// Fade-in Scroll Effect
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add("show");
    }
  });
});
