import { useEffect, useState } from 'react'

import PageWrapper from 'components/PageWrapper'
import Verse from 'components/Verse'

import { getEarthPicData } from 'services/nasa'

export default function Home() {
  const [pic, setPic] = useState(null)

  useEffect(() => {
    const getPic = async () => {
      const pic = await getEarthPicData()
      setPic(pic)
    }
    getPic()
  }, [])

  return (
    <PageWrapper backgroundImage={pic}>
      <Verse />
    </PageWrapper>
  )
}
