import styles from './styles.module.css'

export default function Auth({ error, input, onChange, onSubmit }) {
  return (
    <div className={styles.auth}>
      <form onSubmit={onSubmit}>
        <label htmlFor='code'>
          code
          <input
            id='code'
            type='number'
            value={input}
            onChange={onChange}
          />
        </label>
        <button type='submit'>submit</button>
        <span>{error}</span>
      </form>
    </div>
  )
}
