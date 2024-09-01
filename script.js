// 단순히 스크롤 시 애니메이션 추가
window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill');
    const triggerBottom = window.innerHeight / 5 * 4;

    skills.forEach(skill => {
        const boxTop = skill.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            skill.classList.add('show');
        } else {
            skill.classList.remove('show');
        }
    });
});

// 버튼 클릭 시 스크롤 이동
document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.getElementById('dark-mode-button');
    const body = document.body;
    const footer = document.querySelector('footer');

    // 다크모드 상태 저장
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        footer.classList.add('dark-mode');
    }

    darkModeButton.addEventListener('click', (event) => {
        event.preventDefault(); // 버튼 클릭 시 기본 링크 동작 방지
        body.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        // 다크모드 상태 저장
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });
});
