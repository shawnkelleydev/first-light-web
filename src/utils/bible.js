import data from 'utils/data/bible.json'

export const selectRandomVerse = () => {
  const books = data.reduce(
    (accumulator, value) => accumulator.concat(Object.keys(value)),
    []
  )

  let index = Math.floor(Math.random() * books.length)

  const book = books[index]
  const bookData = () => {
    let bkData
    data.forEach(testament =>
      testament[book] ? (bkData = testament[book]) : null
    )
    return bkData
  }

  index = Math.floor(Math.random() * bookData().length)

  const chapter = index + 1
  const verse = bookData()[index]

  return `${book}.${chapter}.${verse}`
}
