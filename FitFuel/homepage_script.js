document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = question.querySelector('.arrow');

        // Set initial state for arrows based on pre-set display style
        if (answer.style.display === 'block') {
            arrow.innerHTML = '▲'; // Up arrow
        } else {
            arrow.innerHTML = '▼'; // Down arrow
        }

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            arrow.innerHTML = isOpen ? '▼' : '▲';
        });
    });
});