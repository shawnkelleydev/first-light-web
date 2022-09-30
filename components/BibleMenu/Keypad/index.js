import Button from '../Button'

import { KEY_VALUES } from 'utils/constants/bible'

import styles from './styles.module.css'

export default function Keypad({
  idCB,
  list,
  loading,
  onSelect,
  selectedId,
  stateKey,
}) {
  return (
    <ul className={styles.keypad}>
      {list?.map((item, idx) => (
        <Button
          disabled={loading}
          key={idx}
          onClick={onSelect}
          selected={idCB(item) === selectedId}
          stateKey={stateKey}
          value={idCB(item)}
        />
      ))}
    </ul>
  )
}
