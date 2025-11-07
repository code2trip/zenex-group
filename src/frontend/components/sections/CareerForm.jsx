'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import '@/styles/sections/career-form.scss';

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

export default function CareerForm() {
  const t = useTranslations('career.form');
  const [uploadState, setUploadState] = useState('static'); // static, done, error
  const [errorMessage, setErrorMessage] = useState({ title: '', description: '' });
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setUploadState('error');
      setErrorMessage({
        title: 'No resume uploaded!',
        description: window.matchMedia('(min-width: 768px)').matches ? 'Drag file here' : 'Tap to upload',
      });
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      setUploadState('error');
      setErrorMessage({
        title: 'Invalid file format!',
        description: 'Allowed: PDF, DOC, DOCX, PNG, JPG, JPEG, WEBP',
      });
      return;
    }

    if (file.size > maxSize) {
      setUploadState('error');
      setErrorMessage({
        title: 'File too large!',
        description: 'Max size 5MB',
      });
      return;
    }

    setUploadState('done');
    setErrorMessage({ title: '', description: '' });
  };

  const handleClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setUploadState('static');
    setErrorMessage({ title: '', description: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      setUploadState('error');
      setErrorMessage({
        title: 'No resume uploaded!',
        description: window.matchMedia('(min-width: 768px)').matches ? 'Drag file here' : 'Tap to upload',
      });
      return;
    }

    try {
      const response = await fetch('/send-form.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Network error');

      const submitButton = form.querySelector('.form__button span');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sent!';

      setTimeout(() => {
        submitButton.textContent = originalText;
        form.reset();
        setUploadState('static');
        form.querySelectorAll('.form__field').forEach((f) => f.classList.remove('fill', 'error'));
      }, 3000);
    } catch (error) {
      alert('Ошибка отправки формы. Попробуйте позже.');
    }
  };

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const fields = form.querySelectorAll('.form__field');
    fields.forEach((field) => {
      const input = field.querySelector('input.form__input, textarea.form__textarea');
      if (!input) return;

      const handleFocus = () => field.classList.add('focus');
      const handleBlur = () => {
        field.classList.remove('focus');
        if (input.value.trim() !== '') {
          field.classList.add('fill');
        } else {
          field.classList.remove('fill');
        }
      };
      const handleInput = () => {
        if (input.value.trim() !== '') {
          field.classList.remove('error');
        }
      };

      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
      input.addEventListener('input', handleInput);

      if (input.tagName === 'TEXTAREA') {
        input.setAttribute('rows', '1');
        input.style.overflow = 'hidden';
        const resizeTextarea = () => {
          input.style.height = 'auto';
          input.style.height = `${input.scrollHeight}px`;
        };
        input.addEventListener('input', resizeTextarea);
        resizeTextarea();
      }

      return () => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
        input.removeEventListener('input', handleInput);
      };
    });
  }, []);

  return (
    <section className="career-form" id="form">
      <img
        src="/images/career-decor-3.svg"
        alt=""
        className="career-form__decor"
      />
      <div className="container">
        <div className="career-form__header">
          <h2 className="career-form__title title">
            <img src="/images/form-icon.svg" alt="" />
            {t('title')} <strong>{t('titleStrong')}</strong>
          </h2>
          <span className="career-form__label label">{t('label')}</span>
        </div>

        <div className="career-form__row">
          <div className="career-form__scheme">
            <ul className="career-form__list">
              {[
                { step: 'step1', title: 'step1Title' },
                { step: 'step2', title: 'step2Title' },
                { step: 'step3', title: 'step3Title' },
                { step: 'step4', title: 'step4Title' },
                { step: 'step5', title: 'step5Title' },
              ].map((item, index) => (
                <li key={index} className="career-form__list-item">
                  <img
                    src={`/images/career-form-icon-${index + 1}.svg`}
                    alt=""
                    className="career-form__list-item-icon"
                  />
                  <div className="career-form__list-item-inner">
                    <span className="career-form__list-item-number">{t(`steps.${item.step}`)}</span>
                    <p className="career-form__list-item-title">{t(`steps.${item.title}`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="career-form__inner">
            <form ref={formRef} className="form" encType="multipart/form-data" onSubmit={handleSubmit} noValidate>
              <div className="form__title">
                <img src="/images/contact-icon.svg" alt="" />
                {t('contactTitle')}
              </div>

              <div className="form__body">
                <div className="form__field">
                  <span className="form__label">{t('fields.name')}</span>
                  <input
                    required
                    type="text"
                    className="form__input"
                    name="name"
                    pattern="^[A-Za-zА-Яа-яЁё\s'-]+$"
                  />
                </div>
                <div className="form__field">
                  <span className="form__label">{t('fields.email')}</span>
                  <input
                    required
                    type="email"
                    className="form__input"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form__field">
                  <span className="form__label">{t('fields.phone')}</span>
                  <input
                    required
                    type="tel"
                    className="form__input"
                    name="phone"
                    pattern="^\+?[0-9\s\-]{10,15}$"
                  />
                </div>
                <div className="form__field">
                  <span className="form__label">{t('fields.position')}</span>
                  <input required type="text" className="form__input" name="position" />
                </div>
                <div className="form__field form__field--textarea">
                  <span className="form__label">{t('fields.message')}</span>
                  <textarea name="message" className="form__textarea"></textarea>
                </div>
                <div className={`upload ${uploadState === 'error' ? 'upload--error' : ''}`}>
                  <div className={`upload__static ${uploadState === 'static' ? 'active' : ''}`}>
                    <div className="upload__static-inner" onClick={() => fileInputRef.current?.click()}>
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="upload__input"
                        name="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp"
                      />
                      <div className="upload__icon">
                        <img src="/images/upload.svg" alt="Upload" />
                      </div>
                      <div className="upload__content">
                        <p className="upload__title">{t('fields.cv')}</p>
                        <p className="upload__description">
                          <span>Tap to upload</span>
                          <span>Drag file here</span>
                        </p>
                      </div>
                    </div>
                    <div className="upload__helper">
                      Choose file
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.10141 10.6267C7.12031 10.6362 7.14866 10.6362 7.14866 10.6362V10.6551C7.17701 10.6551 7.23362 10.6173 7.23362 10.6173L8.25367 9.5972C8.26347 9.5874 8.27318 9.5783 8.28263 9.56946C8.30976 9.54418 8.33408 9.52134 8.34817 9.49334C8.36698 9.45554 8.37643 9.41774 8.35762 9.37994C8.33872 9.34223 8.31037 9.30443 8.27257 9.30443C7.8853 9.21938 7.53584 9.03048 7.25252 8.74716C6.92195 8.42604 6.72359 8.00097 6.67634 7.5193C6.61973 6.92431 6.82754 6.33869 7.25252 5.9137L9.9254 3.2408C10.681 2.48521 12.0033 2.48521 12.7589 3.2408C13.1367 3.62804 13.3445 4.12861 13.3445 4.66698C13.3445 5.20534 13.1367 5.71535 12.7589 6.09315L11.5405 7.30213C11.5122 7.33039 11.5027 7.37764 11.5122 7.41544C11.6255 7.8216 11.6916 8.24658 11.6916 8.67165C11.6916 8.87937 11.6822 9.05883 11.6538 9.20993C11.6538 9.25718 11.6727 9.31388 11.72 9.33278C11.7671 9.36104 11.8238 9.35159 11.8616 9.31388L13.93 7.25488C15.3562 5.81925 15.3562 3.49581 13.93 2.06964C12.5039 0.643455 10.1805 0.643455 8.75424 2.06964L6.08136 4.74253C5.84523 4.97865 5.65634 5.23367 5.51467 5.48868C5.51152 5.49183 5.50732 5.49497 5.50313 5.49812C5.49473 5.50442 5.48634 5.51072 5.48634 5.51701C4.90075 6.5654 4.85352 7.83105 5.37299 8.90772C5.55245 9.27608 5.77912 9.60665 6.08136 9.90887C6.37413 10.2111 6.72359 10.4567 7.10141 10.6267ZM2.07671 13.9315C2.79453 14.6399 3.72957 14.9988 4.66462 14.9988L4.63628 15.0082C5.57132 15.0082 6.51578 14.6493 7.22417 13.941L9.89706 11.2681C10.3882 10.7769 10.7282 10.1725 10.8793 9.50191L10.936 9.0863C10.9549 8.99189 10.9549 8.89739 10.9549 8.80298V8.76518V8.68013V8.42517C10.9549 8.33067 10.9455 8.23626 10.9266 8.16066C10.9171 8.0568 10.8982 7.97184 10.8793 7.88679C10.8605 7.79238 10.8321 7.68843 10.7943 7.57512C10.6338 7.03675 10.3316 6.52672 9.90651 6.10172C9.62319 5.81837 9.27372 5.5728 8.8959 5.39335C8.85811 5.36502 8.76369 5.41224 8.76369 5.41224L7.74364 6.43231C7.71529 6.46066 7.6775 6.49837 7.64923 6.55507C7.63033 6.58342 7.63033 6.62122 7.64923 6.65893C7.66805 6.69673 7.69639 6.72508 7.73419 6.72508C8.12146 6.80068 8.47093 6.9895 8.75424 7.2729C9.13206 7.66008 9.33987 8.17011 9.33042 8.72738C9.32097 9.0674 9.23592 9.39797 9.07536 9.68129C9.03756 9.74743 8.9904 9.82303 8.9148 9.90799C8.877 9.96469 8.82984 10.0308 8.75424 10.1064L6.08135 12.7792C5.70355 13.1476 5.19352 13.3554 4.66462 13.3554C4.1357 13.3554 3.61623 13.1476 3.24788 12.7792C2.87009 12.392 2.66229 11.8914 2.66229 11.3531C2.66229 10.8147 2.87009 10.3047 3.24788 9.92689L4.46627 8.70848C4.49461 8.67068 4.50405 8.62352 4.49461 8.58572C4.30571 8.0001 4.24904 7.40511 4.33404 6.81004C4.34349 6.76288 4.31515 6.70618 4.26793 6.68728C4.23014 6.65893 4.1357 6.70618 4.1357 6.70618L2.07671 8.75573C1.3778 9.44522 1 10.3708 1 11.3437C1 12.3165 1.38724 13.242 2.07671 13.9315Z"
                          fill="#05ACA4"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className={`upload__done ${uploadState === 'done' ? 'active' : ''}`}>
                    <div className="upload__done-inner">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.52535 6.2995C1.94433 10.9303 1.96922 18.4243 6.60004 23.0053C11.2309 27.5863 18.7248 27.5614 23.3058 22.9306C27.8869 18.2998 27.862 10.8058 23.2311 6.22481C18.6003 1.64379 11.1064 1.66869 6.52535 6.2995ZM20.6668 12.3494L14.2434 18.8475C13.6956 19.3952 12.7994 19.3952 12.2516 18.8475L12.0027 18.5985L11.2558 17.8516L9.16442 15.7852C8.61668 15.2375 8.61668 14.3412 9.16442 13.7935C9.71215 13.2457 10.6084 13.2457 11.1562 13.7935L13.2475 15.8599L18.675 10.3826C19.2227 9.83485 20.119 9.83485 20.6668 10.3826C21.2145 10.9054 21.2145 11.8017 20.6668 12.3494Z"
                          fill="#05ACA4"
                        />
                      </svg>
                      <div className="upload__content">
                        <p className="upload__title">File uploaded</p>
                        <p className="upload__description">
                          <span>Time to send!</span>
                        </p>
                      </div>
                    </div>
                    <button type="button" className="upload__clear-button" onClick={handleClear}>
                      <span>Delete</span>
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.43276 8.04245L14.1053 3.36974C14.4094 3.0658 14.4094 2.57438 14.1053 2.27044C13.8014 1.9665 13.3099 1.9665 13.006 2.27044L8.33331 6.94314L3.66074 2.27044C3.35666 1.9665 2.86538 1.9665 2.56144 2.27044C2.25735 2.57438 2.25735 3.0658 2.56144 3.36974L7.234 8.04245L2.56144 12.7152C2.25735 13.0191 2.25735 13.5105 2.56144 13.8145C2.71291 13.9661 2.91207 14.0422 3.11109 14.0422C3.31011 14.0422 3.50913 13.9661 3.66074 13.8145L8.33331 9.14176L13.006 13.8145C13.1576 13.9661 13.3566 14.0422 13.5557 14.0422C13.7547 14.0422 13.9537 13.9661 14.1053 13.8145C14.4094 13.5105 14.4094 13.0191 14.1053 12.7152L9.43276 8.04245Z"
                          fill="#757575"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className={`upload__error ${uploadState === 'error' ? 'active' : ''}`}>
                    <div className="upload__error-inner">
                      <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22.6596 25.5504H17.9724H16.7103H16.4377V19.2633H18.4939C19.0153 19.2633 19.3235 18.6707 19.0153 18.2441L15.0155 12.7095C14.7607 12.354 14.2333 12.354 13.9785 12.7095L9.97875 18.2441C9.67062 18.6707 9.97282 19.2633 10.5002 19.2633H12.5564V25.5504H12.2838H11.0217H5.58786C2.47691 25.3785 0 22.469 0 19.3166C0 17.1419 1.1792 15.2457 2.92726 14.2206C2.76727 13.788 2.68431 13.3258 2.68431 12.8399C2.68431 10.6178 4.47977 8.82233 6.70188 8.82233C7.18186 8.82233 7.64405 8.90529 8.07662 9.06528C9.36248 6.33949 12.1357 4.44922 15.3592 4.44922C19.5309 4.45514 22.9677 7.64906 23.3588 11.72C26.5646 12.271 29 15.2398 29 18.5996C29 22.1905 26.2031 25.3015 22.6596 25.5504Z"
                          fill="#E85143"
                        />
                      </svg>
                      <div className="upload__content">
                        <div className="upload__title">{errorMessage.title || 'No resume uploaded!'}</div>
                        <div className="upload__description">{errorMessage.description || 'Tap to upload'}</div>
                      </div>
                    </div>
                    <div className="upload__helper">
                      Choose file
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.10141 10.6267C7.12031 10.6362 7.14866 10.6362 7.14866 10.6362V10.6551C7.17701 10.6551 7.23362 10.6173 7.23362 10.6173L8.25367 9.5972C8.26347 9.5874 8.27318 9.5783 8.28263 9.56946C8.30976 9.54418 8.33408 9.52134 8.34817 9.49334C8.36698 9.45554 8.37643 9.41774 8.35762 9.37994C8.33872 9.34223 8.31037 9.30443 8.27257 9.30443C7.8853 9.21938 7.53584 9.03048 7.25252 8.74716C6.92195 8.42604 6.72359 8.00097 6.67634 7.5193C6.61973 6.92431 6.82754 6.33869 7.25252 5.9137L9.9254 3.2408C10.681 2.48521 12.0033 2.48521 12.7589 3.2408C13.1367 3.62804 13.3445 4.12861 13.3445 4.66698C13.3445 5.20534 13.1367 5.71535 12.7589 6.09315L11.5405 7.30213C11.5122 7.33039 11.5027 7.37764 11.5122 7.41544C11.6255 7.8216 11.6916 8.24658 11.6916 8.67165C11.6916 8.87937 11.6822 9.05883 11.6538 9.20993C11.6538 9.25718 11.6727 9.31388 11.72 9.33278C11.7671 9.36104 11.8238 9.35159 11.8616 9.31388L13.93 7.25488C15.3562 5.81925 15.3562 3.49581 13.93 2.06964C12.5039 0.643455 10.1805 0.643455 8.75424 2.06964L6.08136 4.74253C5.84523 4.97865 5.65634 5.23367 5.51467 5.48868C5.51152 5.49183 5.50732 5.49497 5.50313 5.49812C5.49473 5.50442 5.48634 5.51072 5.48634 5.51701C4.90075 6.5654 4.85352 7.83105 5.37299 8.90772C5.55245 9.27608 5.77912 9.60665 6.08136 9.90887C6.37413 10.2111 6.72359 10.4567 7.10141 10.6267ZM2.07671 13.9315C2.79453 14.6399 3.72957 14.9988 4.66462 14.9988L4.63628 15.0082C5.57132 15.0082 6.51578 14.6493 7.22417 13.941L9.89706 11.2681C10.3882 10.7769 10.7282 10.1725 10.8793 9.50191L10.936 9.0863C10.9549 8.99189 10.9549 8.89739 10.9549 8.80298V8.76518V8.68013V8.42517C10.9549 8.33067 10.9455 8.23626 10.9266 8.16066C10.9171 8.0568 10.8982 7.97184 10.8793 7.88679C10.8605 7.79238 10.8321 7.68843 10.7943 7.57512C10.6338 7.03675 10.3316 6.52672 9.90651 6.10172C9.62319 5.81837 9.27372 5.5728 8.8959 5.39335C8.85811 5.36502 8.76369 5.41224 8.76369 5.41224L7.74364 6.43231C7.71529 6.46066 7.6775 6.49837 7.64923 6.55507C7.63033 6.58342 7.63033 6.62122 7.64923 6.65893C7.66805 6.69673 7.69639 6.72508 7.73419 6.72508C8.12146 6.80068 8.47093 6.9895 8.75424 7.2729C9.13206 7.66008 9.33987 8.17011 9.33042 8.72738C9.32097 9.0674 9.23592 9.39797 9.07536 9.68129C9.03756 9.74743 8.9904 9.82303 8.9148 9.90799C8.877 9.96469 8.82984 10.0308 8.75424 10.1064L6.08135 12.7792C5.70355 13.1476 5.19352 13.3554 4.66462 13.3554C4.1357 13.3554 3.61623 13.1476 3.24788 12.7792C2.87009 12.392 2.66229 11.8914 2.66229 11.3531C2.66229 10.8147 2.87009 10.3047 3.24788 9.92689L4.46627 8.70848C4.49461 8.67068 4.50405 8.62352 4.49461 8.58572C4.30571 8.0001 4.24904 7.40511 4.33404 6.81004C4.34349 6.76288 4.31515 6.70618 4.26793 6.68728C4.23014 6.65893 4.1357 6.70618 4.1357 6.70618L2.07671 8.75573C1.3778 9.44522 1 10.3708 1 11.3437C1 12.3165 1.38724 13.242 2.07671 13.9315Z"
                          fill="#E85143"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="form__button">
                <span>{t('submit')}</span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 0.5C5.88331 0.5 0.5 5.88331 0.5 12.5C0.5 19.1167 5.88331 24.5 12.5 24.5C19.1167 24.5 24.5 19.1167 24.5 12.5C24.5 5.88331 19.1167 0.5 12.5 0.5ZM12.5 23C6.71019 23 2 18.2898 2 12.5C2 6.71019 6.71019 2 12.5 2C18.2898 2 23 6.71019 23 12.5C23 18.2898 18.2898 23 12.5 23ZM17.5303 11.9698C17.8233 12.2628 17.8233 12.7374 17.5303 13.0303L13.7803 16.7803C13.6338 16.9267 13.4418 17 13.25 17C13.0582 17 12.8662 16.9267 12.7197 16.7803C12.4267 16.4872 12.4267 16.0126 12.7197 15.7197L15.1895 13.25H8C7.58581 13.25 7.25 12.9146 7.25 12.5C7.25 12.0854 7.58581 11.75 8 11.75H15.1895L12.7197 9.28025C12.4267 8.98719 12.4267 8.51262 12.7197 8.21975C13.0128 7.92688 13.4874 7.92669 13.7803 8.21975L17.5303 11.9698Z"
                    fill="white"
                  />
                </svg>
              </button>

              <div className="form__notice">{t('notice')}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

