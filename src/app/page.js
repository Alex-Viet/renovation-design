'use client';
import Link from 'next/link';
import styles from './styles/page.module.scss';
import { useState } from 'react';

export default function Home() {
  const [btnIndex, setBtnIndex] = useState(null);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isPhoneHovered, setIsPhoneHovered] = useState(false);

  const renderTitle = () => {
    switch (btnIndex) {
      case 1:
        return 'Услуги по ремонту';
      case 2:
        return 'Виды работ по ремонту';
      case 3:
        return 'Дизайн интерьера';
      case 4:
        return 'Ремонт помещений';
      default:
        return (
          <>
            Ремонт <span className={styles.transparentText}>и</span> дизайн
          </>
        );
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper} ${btnIndex ? styles.whiteText : ''}`}>
        <header className={styles.header}>
          <div
            className={styles.svgContainer}
            onMouseEnter={() => setIsLocationHovered(true)}
            onMouseLeave={() => setIsLocationHovered(false)}
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.74963 17.426C8.84247 17.5004 8.91603 17.558 8.96712 17.5975L9.499 17.9965L10.0309 17.5975C10.082 17.558 10.1555 17.5004 10.2484 17.426C10.434 17.2773 10.697 17.0608 11.0116 16.7861C11.6399 16.2375 12.4794 15.4522 13.3213 14.506C14.9702 12.6529 16.773 10.024 16.773 7.274C16.773 3.25668 13.5163 0 9.499 0C5.48168 0 2.225 3.25668 2.225 7.274C2.225 10.024 4.02782 12.6529 5.67669 14.506C6.51856 15.4522 7.3581 16.2375 7.98635 16.7861C8.30101 17.0608 8.56403 17.2773 8.74963 17.426ZM9.499 1.5C6.31011 1.5 3.725 4.08511 3.725 7.274C3.725 9.43188 5.18417 11.696 6.7973 13.5089C7.58643 14.3958 8.3779 15.1367 8.97289 15.6561C9.17391 15.8317 9.35188 15.9814 9.499 16.1023C9.64611 15.9814 9.82409 15.8317 10.0251 15.6561C10.6201 15.1367 11.4116 14.3958 12.2007 13.5089C13.8138 11.696 15.273 9.43188 15.273 7.274C15.273 4.08511 12.6879 1.5 9.499 1.5Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.49901 4.762C8.11167 4.762 6.98701 5.88666 6.98701 7.274C6.98701 8.66134 8.11167 9.786 9.49901 9.786C10.8863 9.786 12.011 8.66134 12.011 7.274C12.011 5.88666 10.8863 4.762 9.49901 4.762ZM5.48701 7.274C5.48701 5.05823 7.28324 3.262 9.49901 3.262C11.7148 3.262 13.511 5.05823 13.511 7.274C13.511 9.48976 11.7148 11.286 9.49901 11.286C7.28324 11.286 5.48701 9.48976 5.48701 7.274Z"
              />
            </svg>
          </div>
          {!isLocationHovered && !isPhoneHovered && (
            <nav className={styles.nav}>
              <div className={styles.navContainer}>
                <Link href="/">Главная</Link>
                <Link href="#">О компании</Link>
                <Link href="#">Услуги</Link>
              </div>
              <Link href="/">
                <div className={styles.logoBox}>
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.09126 5.47032L8.32414 7.7032C9.93067 6.32652 11.9689 5.43704 14.2074 5.26597V2.10826C11.0996 2.28924 8.27658 3.52768 6.09126 5.47032ZM15.7926 2.10826V5.26597C18.0311 5.43704 20.0693 6.32652 21.6759 7.7032L23.9087 5.47032C21.7234 3.52768 18.9004 2.28924 15.7926 2.10826ZM25.0297 6.59126L22.7968 8.82414C24.1735 10.4307 25.063 12.4689 25.234 14.7074H28.3917C28.2108 11.5996 26.9723 8.77658 25.0297 6.59126ZM28.3917 16.2926H25.234C25.063 18.5311 24.1735 20.5693 22.7968 22.1759L25.0297 24.4087C26.9723 22.2234 28.2108 19.4004 28.3917 16.2926ZM23.9087 25.5297L21.6759 23.2968C20.0693 24.6735 18.0311 25.563 15.7926 25.734V28.8917C18.9004 28.7108 21.7234 27.4723 23.9087 25.5297ZM14.2074 28.8917V25.734C11.9689 25.563 9.93067 24.6735 8.32414 23.2968L6.09126 25.5297C8.27658 27.4723 11.0996 28.7108 14.2074 28.8917ZM4.97032 24.4087L7.2032 22.1759C5.82652 20.5693 4.93704 18.5311 4.76597 16.2926H1.60826C1.78924 19.4004 3.02768 22.2234 4.97032 24.4087ZM1.60826 14.7074H4.76597C4.93704 12.4689 5.82652 10.4307 7.2032 8.82414L4.97032 6.59126C3.02768 8.77658 1.78924 11.5996 1.60826 14.7074ZM4.3934 4.8934C7.107 2.1798 10.8581 0.5 15 0.5C19.1419 0.5 22.893 2.1798 25.6066 4.8934C28.3202 7.607 30 11.3581 30 15.5C30 19.6419 28.3202 23.393 25.6066 26.1066C22.893 28.8202 19.1419 30.5 15 30.5C10.8581 30.5 7.107 28.8202 4.3934 26.1066C1.6798 23.393 0 19.6419 0 15.5C0 11.3581 1.6798 7.607 4.3934 4.8934ZM15 6.82104C12.6032 6.82104 10.4345 7.79159 8.86305 9.36305C7.29159 10.9345 6.32104 13.1032 6.32104 15.5C6.32104 17.8968 7.29159 20.0655 8.86305 21.637C10.4345 23.2084 12.6032 24.179 15 24.179C17.3968 24.179 19.5655 23.2084 21.137 21.637C22.7084 20.0655 23.679 17.8968 23.679 15.5C23.679 13.1032 22.7084 10.9345 21.137 9.36305C19.5655 7.79159 17.3968 6.82104 15 6.82104ZM13.8983 9.94698V13.3291H12.3131V12.6138C11.5397 13.3341 11.0568 14.3611 11.0568 15.5C11.0568 16.6389 11.5397 17.6659 12.3131 18.3862V17.6709H13.8983V21.053L12.7883 20.5681C10.8375 19.7157 9.47159 17.7682 9.47159 15.5C9.47159 13.2318 10.8375 11.2843 12.7883 10.4319L13.8983 9.94698ZM16.1017 9.94698L17.2117 10.4319C19.1625 11.2843 20.5284 13.2318 20.5284 15.5C20.5284 17.7682 19.1625 19.7157 17.2117 20.5681L16.1017 21.053L16.1017 17.6709H17.6869V18.3862C18.4603 17.6659 18.9432 16.6389 18.9432 15.5C18.9432 14.3611 18.4603 13.3341 17.6869 12.6138V13.3291H16.1017V9.94698Z"
                    />
                  </svg>
                </div>
              </Link>
              <div className={styles.navContainer}>
                <Link href="#">Цены</Link>
                <Link href="#">Портфолио</Link>
                <Link href="#">Контакты</Link>
              </div>
            </nav>
          )}
          {isLocationHovered && (
            <div className={styles.infoBox}>
              <p>
                <span>Адрес:</span> Москва, ул. Уличная, д. 1, оф. 1
              </p>
              <p>
                <span>Режим работы офиса:</span> Пн-Вт: 10<sup>00</sup> — 19
                <sup>00</sup>; Сб-Вс: 10<sup>00</sup> — 15<sup>00</sup>
              </p>
            </div>
          )}
          {isPhoneHovered && (
            <div
              className={styles.phoneContainer}
              onMouseEnter={() => setIsPhoneHovered(true)}
              onMouseLeave={() => setIsPhoneHovered(false)}
            >
              <div className={styles.phoneBox}>
                <p>8 (800) 900-00-00</p>
                <button className={styles.button}>Заказать звонок</button>
              </div>
            </div>
          )}
          <div
            className={styles.svgContainer}
            onMouseEnter={() => setIsPhoneHovered(true)}
            onMouseLeave={() => setIsPhoneHovered(false)}
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_688)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9711 0.0389886C13.2495 -0.126998 12.5202 0.250129 12.2292 0.920535L12.2279 0.923517L10.6794 4.53387C10.4123 5.15691 10.589 5.88378 11.1182 6.31271L12.605 7.53089C11.5779 9.44779 9.98201 11.06 8.03224 12.103L6.81202 10.6144C6.38278 10.0907 5.66154 9.90894 5.03467 10.1775L1.42713 11.7223L1.42081 11.7251C0.752455 12.0186 0.37211 12.7489 0.539244 13.4702L1.31175 16.8214C1.47107 17.5095 2.08354 18.0002 2.79564 18.0002C11.4612 18.0002 18.4982 10.9796 18.5 2.30201C18.5049 1.58874 18.0162 0.973905 17.3229 0.814566L13.9711 0.0389886ZM13.6052 1.51777L12.0581 5.12485L14.4714 7.12098L14.2233 7.64964C12.9892 10.2787 10.8358 12.4629 8.15037 13.7212L7.62201 13.9687L5.62545 11.5562L2.02273 13.099C2.01354 13.1034 2.00715 13.11 2.00325 13.1176C1.99923 13.1255 2.00037 13.131 2.00037 13.131L2.00064 13.1321L2.77309 16.4831C2.77544 16.493 2.78366 16.5002 2.79564 16.5002C10.635 16.5002 17 10.1483 17 2.29866V2.29196C17.0001 2.28769 16.9992 2.28464 16.9992 2.28464L16.9976 2.28176L16.9949 2.27939C16.9949 2.27939 16.9919 2.2776 16.9876 2.27662L16.9862 2.27629L13.6348 1.50081C13.6315 1.50008 13.6272 1.50031 13.6272 1.50031C13.625 1.5006 13.6221 1.50138 13.619 1.50296C13.6129 1.50607 13.6081 1.51126 13.6052 1.51777Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_688">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </header>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            {renderTitle()}
            <br />
            <span className={styles.transparentText}>
              в Москве и Московской области
            </span>
          </h1>
          <div>
            <a className={styles.button} href="#">
              Оставить заявку
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
            </a>
          </div>
          <div className={styles.services}>
            <div className={styles.adsContainer}>
              <div
                onMouseEnter={() => setBtnIndex(1)}
                onMouseLeave={() => setBtnIndex(null)}
              >
                Услуги по ремонту
                {btnIndex === 1 && (
                  <div className={styles.adsBlock}>
                    <div>Услуги по ремонту</div>
                    <p>
                      С другой стороны реализация намеченных плановых заданий
                      требуют от нас анализа.
                    </p>
                    <a href="#">
                      <div className={styles.arrowSvg}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5591_54)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.62439 8.75V7.25L8.62439 7.25L8.62439 1.74934L15.6251 8.75L0.62439 8.75Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5591_54">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0.625 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setBtnIndex(2)}
                onMouseLeave={() => setBtnIndex(null)}
              >
                Виды работ
                {btnIndex === 2 && (
                  <div className={styles.adsBlock}>
                    <div>Виды работ</div>
                    <p>
                      С другой стороны реализация намеченных плановых заданий
                      требуют от нас анализа.
                    </p>
                    <a href="#">
                      <div className={styles.arrowSvg}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5591_54)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.62439 8.75V7.25L8.62439 7.25L8.62439 1.74934L15.6251 8.75L0.62439 8.75Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5591_54">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0.625 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setBtnIndex(3)}
                onMouseLeave={() => setBtnIndex(null)}
              >
                Дизайн интерьера
                {btnIndex === 3 && (
                  <div className={styles.adsBlock}>
                    <div>Дизайн интерьера</div>
                    <p>
                      С другой стороны реализация намеченных плановых заданий
                      требуют от нас анализа.
                    </p>
                    <a href="#">
                      <div className={styles.arrowSvg}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5591_54)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.62439 8.75V7.25L8.62439 7.25L8.62439 1.74934L15.6251 8.75L0.62439 8.75Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5591_54">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0.625 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setBtnIndex(4)}
                onMouseLeave={() => setBtnIndex(null)}
              >
                Ремонт помещений
                {btnIndex === 4 && (
                  <div className={styles.adsBlock}>
                    <div>Ремонт помещений</div>
                    <p>
                      С другой стороны реализация намеченных плановых заданий
                      требуют от нас анализа.
                    </p>
                    <a href="#">
                      <div className={styles.arrowSvg}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5591_54)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.62439 8.75V7.25L8.62439 7.25L8.62439 1.74934L15.6251 8.75L0.62439 8.75Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5591_54">
                              <rect
                                width="15"
                                height="15"
                                fill="white"
                                transform="translate(0.625 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.arrowContainer}>
              <a href="#">
                <div className={styles.arrowSvg}>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_5514_39)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.25 0H8.75V8H14.2507L7.25 15.0007V0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5514_39">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
            <div className={styles.bgContainer} />
          </div>
        </div>
        <div
          className={`${styles.bgWrapper} ${btnIndex ? styles.bgWrapper_visible : ''}`}
          style={
            btnIndex && {
              backgroundImage: `url(/img/background_0${btnIndex}.jpg)`,
            }
          }
        />
      </div>

      <main className={styles.main}>
        <div className={styles.portfolio}>
          <h2 className={styles.heading}>
            Примеры <span className={styles.transparentText}>выполненных</span>{' '}
            работ
          </h2>
          <div className={styles.cases}>
            <div className={styles.case}>
              <div>Новостройка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Новостройка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Вторичка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Вторичка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Новостройка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Вторичка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Вторичка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
            <div className={styles.case}>
              <div>Новостройка</div>
              <div className={styles.caseInfo}>
                <div>
                  <div>Сроки</div>
                  <div>4 — 5 дней</div>
                </div>
                <div>
                  <div>Стоимость</div>
                  <div>Нет данных</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a className={styles.button} href="#">
              Все проекты
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
            </a>
          </div>
        </div>
        <div className={styles.contacts}>
          <h2 className={styles.heading}>
            Связаться <span className={styles.transparentText}>с нами</span>
          </h2>
          <div className={styles.contactsContainer}>
            <div>
              Офис
              <p>Москва, ул. Уличная, д. 1, оф. 1</p>
            </div>
            <div>
              Режим работы
              <p>
                Пн-Вт: 10<sup>00</sup> — 19<sup>00</sup>; Сб-Вс: 10<sup>00</sup>{' '}
                — 15<sup>00</sup>
              </p>
            </div>
            <div className={styles.formContainer}>
              Остались вопросы?
              <form className={styles.form} action="#">
                <label>
                  Ваше имя
                  <input
                    type="text"
                    name="userName"
                    placeholder="Иван Иванов"
                    required
                  />
                </label>
                <label>
                  Телефон / E-mail
                  <input
                    type="text"
                    name="contact"
                    placeholder="example@example.com"
                    required
                  />
                </label>
                <div className={styles.labelContainer}>
                  <label>
                    Ваше сообщение
                    <input
                      type="text"
                      name="message"
                      placeholder="Текст обращения"
                      required
                    />
                  </label>
                  <label htmlFor="file" data-file>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5536_312)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.6088 1.94152C13.0709 0.479453 15.4414 0.479453 16.9034 1.94152C18.3655 3.40359 18.3655 5.77408 16.9034 7.23615L16.4801 7.65954C16.1872 7.95244 15.7123 7.95244 15.4194 7.65954C15.1265 7.36665 15.1265 6.89178 15.4194 6.59888L15.8428 6.17549C16.7191 5.2992 16.7191 3.87847 15.8428 3.00218C14.9665 2.1259 13.5458 2.1259 12.6695 3.00218L5.47174 10.1999C5.06313 10.6085 5.06313 11.271 5.47174 11.6796C5.88035 12.0883 6.54285 12.0883 6.95146 11.6796L12.4556 6.17549C12.7485 5.8826 13.2234 5.8826 13.5163 6.17549C13.8092 6.46838 13.8092 6.94325 13.5163 7.23615L8.01212 12.7403C7.01772 13.7347 5.40548 13.7347 4.41108 12.7403C3.41668 11.7459 3.41668 10.1337 4.41108 9.13926L11.6088 1.94152ZM8.85891 2.36492C9.15181 2.65781 9.15181 3.13269 8.85891 3.42558L2.50797 9.77653C1.16401 11.1205 1.16401 13.2995 2.50797 14.6434C3.85192 15.9874 6.0309 15.9874 7.37486 14.6434L13.7258 8.29247C14.0187 7.99958 14.4936 7.99958 14.7865 8.29247C15.0794 8.58536 15.0794 9.06024 14.7865 9.35313L8.43552 15.7041C6.50577 17.6338 3.37705 17.6338 1.44731 15.7041C-0.482435 13.7743 -0.482436 10.6456 1.44731 8.71587L7.79825 2.36492C8.09115 2.07203 8.56602 2.07203 8.85891 2.36492Z"
                          fill="#909090"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5536_312">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </label>
                  <input type="file" name="file" id="file" hidden />
                </div>
                <p>
                  Нажимая на кнопку «Получить консультацию», вы соглашаетесь
                  <br /> на <a href="#">обработку персональных данных</a>
                </p>
                <div>
                  <a className={styles.button} href="#">
                    Получить консультацию
                    <svg>
                      <rect
                        x="0"
                        y="0"
                        fill="none"
                        width="100%"
                        height="100%"
                      />
                    </svg>
                  </a>
                </div>
              </form>
            </div>
            <div>
              E-mail
              <a href="mailto:company@company.ru">company@company.ru</a>
            </div>
            <div>
              Телефон
              <a href="tel:88009000000">8 (800) 900-00-00</a>
            </div>
            <div>
              Социальные сети
              <div className={styles.socials}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div />
        <div className={styles.info}>
          <p>
            © 2022 Сompany.{' '}
            <span>
              Соглашение об обработке персональных данных и политика
              конфиденциальности
            </span>
          </p>
          <p>
            <span>Сделано в</span> <a href="#">Palladiumlab</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
