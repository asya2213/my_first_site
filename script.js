// Ждем, пока загрузится страница (событие DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {

    // --- ПРАКТИКА 1: Кнопка "Подробнее" (для index.html) ---
    const btnShowMore = document.querySelector('#showMore');
    const moreText = document.querySelector('#moreText');

    if (btnShowMore && moreText) {
        btnShowMore.addEventListener('click', () => {
            moreText.classList.toggle('d-none');
            btnShowMore.textContent = moreText.classList.contains('d-none') 
                ? 'Подробнее' 
                : 'Скрыть';
        });
    }

    // --- ПРАКТИКА 2: Активная навигация ---
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        // Если ссылка ведет на текущую страницу, делаем её активной
        if (link.href === window.location.href) {
            link.classList.add('active-link'); // добавим стиль в CSS
        }
    });

    // --- ПРАКТИКА 3: Валидация формы (для contacts.html) ---
    const contactForm = document.querySelector('#contactForm');
    const formMessage = document.querySelector('#formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Отключаем перезагрузку страницы

            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const comment = document.querySelector('#comment').value;

            // Проверка полей
            if (!name || !email.includes('@') || !comment) {
                formMessage.textContent = 'Заполни все поля и проверь email';
                formMessage.className = 'text-danger mt-3'; // Bootstrap класс для красного текста
                return;
            }

            // Если всё ок
            formMessage.textContent = `Спасибо, ${name}! Твое сообщение отправлено.`;
            formMessage.className = 'text-success mt-3'; // Bootstrap класс для зеленого текста
            contactForm.reset(); // Очистить форму
        });
    }

    // --- ПРАКТИКА 4: Вывод карточек проектов (для index.html или about.html) ---
    const projectsList = document.querySelector('#projects');
    if (projectsList) {
        // Пока используем локальный массив, как в презентации
        const projects = [
            { title: 'Первый сайт', tech: 'HTML + CSS' },
            { title: 'Мой проект', tech: 'Bootstrap + JavaScript' }
        ];

        projectsList.innerHTML = projects.map(project => `
            <article class="card p-3 mb-3 shadow-sm">
                <h3>${project.title}</h3>
                <p class="mb-0">${project.tech}</p>
            </article>
        `).join('');
    }
});