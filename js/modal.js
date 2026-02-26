function openLogin() {
    document.getElementById('loginModal').showModal();
}

function switchToRegister(event) {
    event.preventDefault();
    document.getElementById('loginModal').close();
    document.getElementById('registerModal').showModal();
}

function switchToLogin(event) {
    event.preventDefault();
    document.getElementById('registerModal').close();
    document.getElementById('loginModal').showModal();
}

document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('dialog');

    modals.forEach(modal => {
        modal.addEventListener('click', function (e) {
            // Если клик вне внутреннего контента модала
            if (e.target === modal) {
                modal.close();
            }
        });
    });

    const forms = document.querySelectorAll('dialog form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Остановить реальную отправку

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Отправка...'; // Лоадер
            submitBtn.disabled = true;

            // Имитация AJAX-запроса (1-2 сек)
            setTimeout(() => {
                // "Успех"
                //  alert('Форма отправлена! (Учебный режим)');
                // или покажите кастомное уведомление
                // Показать уведомление
                 const notification = document.createElement('div');
                notification.textContent = 'Успешная отправка!';
                notification.style.cssText = `
                position: fixed; top: 20px; right: 20px; background: green; 
                color: white; padding: 15px; border-radius: 5px; z-index: 10000;
                `;
                document.body.appendChild(notification);

                setTimeout(() => notification.remove(), 3000);

                this.reset();           // Очистка полей
                this.closest('dialog').close(); // Закрытие модала

                // Восстановление кнопки
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });
});

