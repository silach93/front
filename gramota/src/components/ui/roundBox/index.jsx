import styles from './index.module.css'

const RoundBox = ({ text }) => {
  return (
    <div className={styles.RoundBox}>
      <h5 className={styles.BoxTitle}>{text.title}</h5>
      <p className={styles.BoxText}>{text.desc}</p>
    </div>
  );
}

export default RoundBox;