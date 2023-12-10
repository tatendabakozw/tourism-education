import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <div className='min-h-screen max-w-7xl w-full mx-auto'>
      </div>
    </GeneralLayout>
  )
}

export default Home