import HeadData from 'next/head'

import { META } from 'utils/constants/meta'

export default function Head() {
  return (
    <HeadData>
      <title>{META.TITLE}</title>
      <meta
        name='description'
        content={META.DESCRIPTION}
      />
      <meta
        name='keywords'
        content={META.KEYWORDS}
      />
      {/* TODO: Add custom favicon to public */}
      <link
        rel='icon'
        href='/favicon.ico'
      />
    </HeadData>
  )
}
