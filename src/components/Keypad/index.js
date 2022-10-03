import styles from './styles.module.css'

export default function Keypad({ disabled, idCB, list, onClick, ...rest }) {
  return (
    <ul
      className={styles.keypad}
      {...rest}
    >
      {list?.map((item, idx) => (
        <li key={idx}>
          <button
            disabled={disabled}
            onClick={() => onClick(item)}
          >
            {idCB(item)}
          </button>
        </li>
      ))}
    </ul>
  )
}
