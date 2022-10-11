import data from 'utils/data/bible.json'

export const selectRandomVerse = () => {
  const books = Object.keys(data)
  let index = Math.floor(Math.random() * books.length)

  const book = books[index]
  const bookData = data[book]

  index = Math.floor(Math.random() * bookData.length)

  const chapter = index + 1
  const verse = bookData[index]

  return `${book}.${chapter}.${verse}`
}
