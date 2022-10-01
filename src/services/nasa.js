export const getEarthPicData = async () => {
  let url = 'https://epic.gsfc.nasa.gov/api/natural'

  const response = await fetch(url).catch(error => console.error(error))
  const data = await response.json()

  const n = Math.floor(Math.random() * data.length)
  const pic = data[n]

  let { date, image } = pic
  date = date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/g)[0].split('-')

  url = `https://epic.gsfc.nasa.gov/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${image}.png`

  pic.url = url

  return pic
}
