// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
if(savedTheme === 'light'){ root.classList.add('light'); themeToggle.textContent='☀️'; }

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  const light = root.classList.contains('light');
  themeToggle.textContent = light ? '☀️' : '🌙';
  localStorage.setItem('theme', light ? 'light' : 'dark');
});

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle?.addEventListener('click', () => {
  const open = navMenu.style.display === 'flex';
  navMenu.style.display = open ? 'none' : 'flex';
  navToggle.setAttribute('aria-expanded', String(!open));
});

// Typewriter effect
const roles = [
  'Web Developer (HTML • CSS • JS)',
  'AWS Cloud Enthusiast',
  'Entrepreneur & Trainer'
];
let r = 0, idx = 0, dir = 1;
const tw = document.getElementById('typewriter');
function type() {
  const full = roles[r];
  idx += dir;
  tw.textContent = full.slice(0, idx);
  if (idx === full.length + 10) dir = -1;
  if (idx === 0) { dir = 1; r = (r + 1) % roles.length; }
  setTimeout(type, dir > 0 ? 50 : 30);
}
type();

// Reveal on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('active'); obs.unobserve(e.target); } });
},{ threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle parallax tilt for photo
const tilt = document.querySelector('.tilt');
if(tilt){
  tilt.addEventListener('mousemove', (e)=>{
    const rect = tilt.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transform = `rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  tilt.addEventListener('mouseleave', ()=>{
    tilt.style.transform = 'rotateY(0) rotateX(0)';
  });
}
