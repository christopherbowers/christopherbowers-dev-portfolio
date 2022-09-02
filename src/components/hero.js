import styles from '@styles/hero.module.scss'

export default function Hero() {
  const one = <span className={styles['small-heading']}>Hi, my name is</span>
  const two = <span className={styles['big-heading']}>Christopher Bowers</span>
  const three = <span className={styles['medium-heading']}>I make things for the web.</span>

  const items = [one, two, three]

  return (
    <section className={styles.hero}>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </section>
  )
}
