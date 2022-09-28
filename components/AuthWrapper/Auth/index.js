import styles from './styles.module.css'

export default function Auth({ error, input, onChange, onSubmit }) {
  return (
    <div className={styles.auth}>
      <form onSubmit={onSubmit}>
        <label htmlFor='code'>
          <span>code</span>
          <input
            id='code'
            type='number'
            value={input}
            onChange={onChange}
          />
        </label>
        <button type='submit'>submit</button>
      </form>
      <span>{error}</span>
    </div>
  )
}
