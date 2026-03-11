const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 70}ms`;
  observer.observe(item);
});

const weekMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');

  document.getElementById('clock').textContent = `${hh}:${mm}:${ss}`;
  document.getElementById('date').textContent = `${y}年${m}月${d}日 ${weekMap[now.getDay()]}`;
  document.getElementById('year').textContent = y;
}

updateClock();
setInterval(updateClock, 1000);
