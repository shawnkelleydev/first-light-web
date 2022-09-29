import PageWrapper from 'components/PageWrapper'
import BibleReader from 'components/BibleReader'
import { NodeNextRequest } from 'next/dist/server/base-http/node'

export default function Bible() {
  return (
    <PageWrapper>
      <h2>Bible</h2>
      <BibleReader />
    </PageWrapper>
  )
}
