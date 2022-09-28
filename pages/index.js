import PageWrapper from 'components/PageWrapper'
import Verse from 'components/Verse'

import { getEarthPicData } from 'services/nasa'

export default function Home({ earthPic }) {
  return (
    <PageWrapper backgroundImage={earthPic}>
      <Verse />
    </PageWrapper>
  )
}

export const getStaticProps = async () => {
  const earthPic = await getEarthPicData()
  return {
    props: {
      earthPic,
    },
    revalidate: 86400,
  }
}
