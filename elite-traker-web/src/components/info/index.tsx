import styles from "./styles.module.css";

type InfoProps = {
  value: string;
  laber: string;
};

export function Info({ value, laber }: InfoProps) {
  return (
    <div className={styles.container}>
      <strong>{value} </strong>
      <span>{laber} </span>
    </div>
  );
}
