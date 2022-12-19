import styles from '@styles/footer.module.scss';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p>Designed &amp; Built by Christopher Bowers</p>
      <span style={{ display: 'none' }}>
        <a rel="me" href="https://webperf.social/@christopherbowers">
          Mastodon
        </a>
      </span>
    </section>
  );
}
