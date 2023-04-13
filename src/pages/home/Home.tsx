import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <div className='min-h-screen'>Home Page</div>
    </GeneralLayout>
  )
}

export default Home