import PageWrapper from 'components/AppPage'
import Verse from 'components/Verse'

import { getEarthPicData } from 'services/nasa'

export default function Home({ backgroundImage }) {
  return (
    <PageWrapper backgroundImage={backgroundImage}>
      <Verse />
    </PageWrapper>
  )
}

export const getStaticProps = async () => {
  const backgroundImage = await getEarthPicData()
  return {
    props: {
      backgroundImage,
    },
    revalidate: 86400,
  }
}
