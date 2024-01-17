import styles from './aboutme.module.css';

export default function AboutMe() {
  return (
    <>
      <h1 className={styles.h1}>Немного о себе</h1>
      <section className={styles.section}>
        <h3>Грачев Алексей </h3>
        <p>Россия, Москва</p>
      </section>
      <section className={styles.section}>
        <h3>Сфера деятельности:</h3>
        <p>
          Разрабатываю кроссплатформенные (в том числе для загрузки в AppStore и Google
          Play) web приложений с использованием технологического стека:
        </p>
        <ul className={styles.ul}>
          {[
            'JavaScript',
            'TypeScript',
            'React',
            'Node.js',
            'MongoDB',
            'PostgreSQL',
            'Express.js',
          ].map((item) => (
            <li key={item} className={styles.li}>
              {item}
            </li>
          ))}
          {/* <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li> */}
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Образование:</h3>
        <ul>
          <li className={styles.li}>
            Московский энергетический институт (в настоящее время НИУ МЭИ) по
            специальности инженер-электрик.
          </li>
          <li className={styles.li}>
            Курсы Skillbox по направлениям: Javascript, React, Node.js Веб-вёрстка.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Текущие проекты:</h3>
        <ul>
          <li className={styles.li}>Система мониторинга систем учета электроэнергии</li>
          <li className={styles.li}>Визуализация объемов потребления электроэнергии</li>
          <li className={styles.li}>
            CRM для самозанятых и индивидуальных предпринимателей
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>
          Перечень основных библиотек и фреймворков используемых мной в различных
          проектах:
        </h3>
        <ul>
          <li className={styles.li}>языки: TypeScript, JavaScript</li>
          <li className={styles.li}>
            библиотеки и фреймворки: React, React-Router, Redux, Redux-RTK, Zustand,
            Express.js,Classnames, Recharts, Styled-components, Next.js, MUI,
            React-beautiful-dnd,
          </li>
          <li className={styles.li}>базы данных: MongoDB, PostgreSQL, </li>
          <li className={styles.li}>система сборки: Webpack</li>
          <li className={styles.li}>серверное ПО: Node.js, Linux</li>
          <li className={styles.li}>система версионирования Git.</li>
          <li className={styles.li}>а также HTML, CSS, WebSocket, SSH, tmux.</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h3>Контакты </h3>
        <ul>
          <li>
            telegram:{' '}
            <a className={styles.a} href='https://t.me/alex80231'>
              @alex80231
            </a>
          </li>
          <li>
            email:{' '}
            <a className={styles.a} href='mailto:alex8023@yandex.ru'>
              {' '}
              alex8023@yandex.ru{' '}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
