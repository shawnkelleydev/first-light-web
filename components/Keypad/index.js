import styles from './styles.module.css'

export default function Keypad({
  idCB,
  list,
  loading,
  onClick,
  selectedId,
  stateKey,
}) {
  return (
    <ul className={styles.keypad}>
      {list?.map((item, idx) => (
        <li key={idx}>
          <button
            data-selected={idCB(item) === selectedId}
            data-key={stateKey}
            data-value={idCB(item)}
            disabled={loading}
            onClick={onClick}
          >
            {idCB(item)}
          </button>
        </li>
      ))}
    </ul>
  )
}
