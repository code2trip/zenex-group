// /src/js/modules/upload.js
export function initUpload() {
  document.querySelectorAll('.upload').forEach((upload) => {
    const input = upload.querySelector('.upload__input');
    const staticView = upload.querySelector('.upload__static');
    const doneView = upload.querySelector('.upload__done');
    const errorView = upload.querySelector('.upload__error');
    const clearBtn = upload.querySelector('.upload__clear-button');

    // Инициализация
    staticView.classList.add('active');
    doneView.classList.remove('active');
    errorView.classList.remove('active');

    function resetUpload() {
      input.value = '';
      staticView.classList.add('active');
      doneView.classList.remove('active');
      errorView.classList.remove('active');
    }

    // Сброс по кнопке «×»
    clearBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      resetUpload();
    });

    // Клик по зоне аплоада → открытие селектора
    upload.addEventListener('click', (e) => {
      if (!e.target.closest('.upload__clear-button')) {
        input.click();
      }
    });

    // Обработка выбора файла
    input.addEventListener('change', () => {
      const file = input.files[0];
      // Скрываем все виды
      staticView.classList.remove('active');
      doneView.classList.remove('active');
      errorView.classList.remove('active');

      // 1) Нет файла
      if (!file) {
        errorView.querySelector('.upload__title').textContent =
          'No resume uploaded!';
        errorView.querySelector('.upload__description').textContent =
          'Tap to upload';
        return errorView.classList.add('active');
      }

      // 2) Неверный формат и 3) Слишком большой
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        errorView.querySelector('.upload__title').textContent =
          'Invalid file format!';
        errorView.querySelector('.upload__description').textContent =
          'Allowed: PDF, DOC, DOCX';
        return errorView.classList.add('active');
      }

      if (file.size > maxSize) {
        errorView.querySelector('.upload__title').textContent =
          'File too large!';
        errorView.querySelector('.upload__description').textContent =
          'Max size 5MB';
        return errorView.classList.add('active');
      }

      // 4) Успех
      doneView.classList.add('active');
    });

    // Drag & drop
    upload.addEventListener('dragover', (e) => {
      e.preventDefault();
      upload.classList.add('upload--dragover');
    });
    upload.addEventListener('dragleave', () => {
      upload.classList.remove('upload--dragover');
    });
    upload.addEventListener('drop', (e) => {
      e.preventDefault();
      upload.classList.remove('upload--dragover');
      if (e.dataTransfer.files.length > 0) {
        input.files = e.dataTransfer.files;
        input.dispatchEvent(new Event('change'));
      }
    });
  });
}
