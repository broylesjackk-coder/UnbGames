// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background-overlay');
    if (!background) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const moveX = (x - 0.5) * 30;
    const moveY = (y - 0.5) * 30;
    
    background.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
});

// Initialization and Global Settings
window.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background-overlay');
    const loadingScreen = document.getElementById('loading-screen');
    const navTrigger = document.getElementById('navTrigger');
    const floatingNav = document.getElementById('floatingNav');

    // 1. Load Background Image
    const savedBg = localStorage.getItem('mist_bg');
    if (savedBg && background) {
        background.style.backgroundImage = `url('${savedBg}')`;
    }

    // 2. Handle Loading Screen
    const loadingEnabled = localStorage.getItem('loadingToggle') !== 'false';
    if (loadingScreen) {
        if (loadingEnabled) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 1200);
        } else {
            loadingScreen.style.display = 'none';
        }
    }

    // 3. Tab Closing Confirmation
    const closeConfirmEnabled = localStorage.getItem('closeConfirmToggle') === 'true';
    if (closeConfirmEnabled) {
        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            e.returnValue = '';
        });
    }

    // 4. Bottom Nav Trigger Logic
    if (navTrigger && floatingNav) {
        navTrigger.addEventListener('click', () => {
            floatingNav.classList.toggle('visible');
            navTrigger.classList.toggle('active');
        });
    }
});

console.log('Mist Experience Loaded.');
