const TextGroup = ({ label, text, styles }: { label: string; text: string; styles: any }) => (
  <div className={styles.group}>
    <h5 className={styles.group_title}>{label}</h5>
    <p className={styles.group_value}>{text}</p>
  </div>
);

export default TextGroup;
