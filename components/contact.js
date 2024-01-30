import Social from 'components/social'
import styles from 'styles/contact.module.css'

const Contact = () => {
  return (
    <div className={styles.sttack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>cube@web.mail.address</address>
    </div>
  )
}
export default Contact
