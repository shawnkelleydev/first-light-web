import styles from './styles.module.css'

export default function Auth({ blocked, error, input, onChange, onSubmit }) {
  if (blocked)
    return (
      <div className={styles.auth}>
        <p>{error}</p>
      </div>
    )

  return (
    <div
      className={styles.auth}
      data-error={!!error.length}
    >
      <form onSubmit={onSubmit}>
        <label htmlFor='code'>
          access code
          <input
            id='code'
            type='text'
            value={input}
            onChange={onChange}
            pattern='\d*'
          />
        </label>
        <button type='submit'>submit</button>
        <span>{error}</span>
      </form>
    </div>
  )
}
