const TextGroup = ({ label, text, styles }: { label: string; text: string; styles: any }) => (
  <div className={styles.profile__group}>
    <h5 className={styles.profile__group_title}>{label}</h5>
    <p className={styles.profile__group_value}>{text}</p>
  </div>
);

export default TextGroup;
