import styles from './styles.module.css'

export default function Keypad({ idCB, list, onClick, stateKey, ...rest }) {
  return (
    <ul
      className={styles.keypad}
      {...rest}
    >
      {list?.map((item, idx) => (
        <li key={idx}>
          <button
            data-key={stateKey}
            data-value={idCB(item)}
            onClick={onClick}
          >
            {idCB(item)}
          </button>
        </li>
      ))}
    </ul>
  )
}
