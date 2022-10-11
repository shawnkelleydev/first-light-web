import styles from './styles.module.css'

export default function Keypad({ idCB, list, onClick, ...rest }) {
  if (!list) return null

  return (
    <ul
      className={styles.keypad}
      {...rest}
    >
      {list.map((item, idx) => (
        <li key={idx}>
          <button onClick={() => onClick(item)}>{idCB(item)}</button>
        </li>
      ))}
    </ul>
  )
}
