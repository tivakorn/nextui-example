// Dependencies
import type { NextPage } from 'next'
import { Text } from '@nextui-org/react'

const CompanyPage: NextPage = () => {

  return (
    <Text
      h1
      size={60}
      css={{
        textGradient: '45deg, $blue600 -20%, $pink600 50%'
      }}
      weight='bold'
    >
      Page : Company
    </Text>
  )
}

export default CompanyPage
