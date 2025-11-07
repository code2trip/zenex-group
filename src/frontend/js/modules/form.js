export function initForm() {
  // Upload initialization
  document.querySelectorAll('.upload').forEach((upload) => {
    const input = upload.querySelector('.upload__input');
    const staticView = upload.querySelector('.upload__static');
    const doneView = upload.querySelector('.upload__done');
    const errorView = upload.querySelector('.upload__error');
    const clearBtn = upload.querySelector('.upload__clear-button');

    // Prevent the native file input click from bubbling up and reopening
    input.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Инициализация
    staticView.classList.add('active');
    doneView.classList.remove('active');
    errorView.classList.remove('active');

    function resetUpload() {
      input.value = '';
      staticView.classList.add('active');
      doneView.classList.remove('active');
      errorView.classList.remove('active');
      upload.classList.remove('upload--error');
    }

    // Сброс по кнопке «×»
    clearBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      resetUpload();
      upload.classList.remove('upload--error');
    });

    // Клик по зоне аплоада → открытие селектора
    upload.addEventListener('click', (e) => {
      if (
        !e.target.closest('.upload__clear-button') &&
        !doneView.classList.contains('active')
      ) {
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
        errorView.classList.add('active');
        staticView.classList.remove('active');
        doneView.classList.remove('active');
        upload.classList.add('upload--error');
        input.value = '';
        return;
      }

      // 2) Неверный формат и 3) Слишком большой
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/webp',
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        errorView.querySelector('.upload__title').textContent =
          'Invalid file format!';
        errorView.querySelector('.upload__description').textContent =
          'Allowed: PDF, DOC, DOCX, PNG, JPG, JPEG, WEBP';
        errorView.classList.add('active');
        staticView.classList.remove('active');
        doneView.classList.remove('active');
        upload.classList.add('upload--error');
        input.value = '';
        return;
      }

      if (file.size > maxSize) {
        errorView.querySelector('.upload__title').textContent =
          'File too large!';
        errorView.querySelector('.upload__description').textContent =
          'Max size 5MB';
        errorView.classList.add('active');
        staticView.classList.remove('active');
        doneView.classList.remove('active');
        upload.classList.add('upload--error');
        input.value = '';
        return;
      }

      // 4) Успех
      doneView.classList.add('active');
      upload.classList.remove('upload--error');
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

  document.querySelectorAll('.form__field').forEach((field) => {
    const input = field.querySelector(
      'input.form__input, textarea.form__textarea',
    );

    if (!input) return;

    input.addEventListener('focus', () => {
      field.classList.add('focus');
    });

    input.addEventListener('blur', () => {
      field.classList.remove('focus');

      if (input.value.trim() !== '') {
        field.classList.add('fill');
      } else {
        field.classList.remove('fill');
      }
    });

    if (input.value.trim() !== '') {
      field.classList.add('fill');
    }
    // Remove error when user inputs valid data
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        field.classList.remove('error');
      }
    });

    // Auto-resize textarea
    if (input.tagName === 'TEXTAREA') {
      input.setAttribute('rows', '1');
      input.style.overflow = 'hidden';

      const resizeTextarea = () => {
        input.style.height = 'auto';
        input.style.height = `${input.scrollHeight}px`;
      };

      input.addEventListener('input', resizeTextarea);
      resizeTextarea(); // initial call
    }
  });

  const form = document.querySelector('.form');
  form.noValidate = true;
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Reset upload views
    const uploadContainer = form.querySelector('.upload');
    const staticView = uploadContainer.querySelector('.upload__static');
    const doneView = uploadContainer.querySelector('.upload__done');
    const errorView = uploadContainer.querySelector('.upload__error');
    staticView.classList.remove('active');
    doneView.classList.remove('active');
    errorView.classList.remove('active');

    let valid = true;

    // Сброс предыдущих ошибок
    form
      .querySelectorAll('.form__field')
      .forEach((f) => f.classList.remove('error'));

    // Валидация input и textarea с учётом pattern
    form
      .querySelectorAll('input[required], textarea[required]')
      .forEach((field) => {
        const wrapper = field.closest('.form__field');
        const value = field.value.trim();
        const pattern = field.getAttribute('pattern');
        // Проверка на непустое значение
        if (!value) {
          wrapper.classList.add('error');
          valid = false;
          return;
        }
        // Проверка на соответствие pattern, если он есть
        if (pattern && !new RegExp(pattern).test(value)) {
          wrapper.classList.add('error');
          valid = false;
        }
      });

    // Валидация аплоада
    const uploadInput = uploadContainer.querySelector('.upload__input');
    const file = uploadInput.files[0];

    if (!file) {
      errorView.querySelector('.upload__title').textContent =
        'No resume uploaded!';
      const descEl = errorView.querySelector('.upload__description');
      if (window.matchMedia('(min-width: 768px)').matches) {
        descEl.textContent = 'Drag file here';
      } else {
        descEl.textContent = 'Tap to upload';
      }
      staticView.classList.remove('active');
      doneView.classList.remove('active');
      errorView.classList.add('active');
      uploadContainer.classList.add('upload--error');
      valid = false;
    } else if (!allowedTypes.includes(file.type)) {
      errorView.querySelector('.upload__title').textContent =
        'Invalid file format!';
      errorView.querySelector('.upload__description').textContent =
        'Allowed: PDF, DOC, DOCX, PNG, JPG, JPEG, WEBP';
      staticView.classList.remove('active');
      doneView.classList.remove('active');
      errorView.classList.add('active');
      uploadContainer.classList.add('upload--error');
      valid = false;
    } else {
      uploadContainer.classList.remove('upload--error');
    }

    if (valid) {
      const formData = new FormData(form);
      const submitButton = form.querySelector('.form__button');
      const span = submitButton.querySelector('span');
      const originalText = span.textContent;

      fetch('/send-form.php', {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          if (!res.ok) throw new Error('Network error');
          return res.text();
        })
        .then(() => {
          span.textContent = 'Sent!';
          setTimeout(() => {
            span.textContent = originalText;
            form.reset();

            form
              .querySelectorAll('.form__field')
              .forEach((f) => f.classList.remove('fill'));

            const uploadInputField = form.querySelector('.upload__input');
            uploadInputField.value = '';
            form.querySelector('.upload__static')?.classList.add('active');
            form.querySelector('.upload__done')?.classList.remove('active');
            form.querySelector('.upload__error')?.classList.remove('active');
          }, 3000);
        })
        .catch(() => {
          alert('Error sending form. Try again later.');
        });
    }
  });
}
