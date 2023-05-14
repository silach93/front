import styles from './textround.module.css'

function TextRound (h1,text) {
  return (
    <div className={styles.TextRound}>
        <h1>{h1}</h1>
        <p>{text}</p>
    </div>
  );
}

export default TextRound;