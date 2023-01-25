import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <p>Home Page</p>
    </GeneralLayout>
  )
}

export default Home