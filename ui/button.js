import Link from "next/link";
import styles from "./button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <div>
        <Link href={props.link} className={styles.btn}>
          {props.children}
        </Link>
      </div>
    );
  } else
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
};

export default Button;
