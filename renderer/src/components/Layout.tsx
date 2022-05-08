import NavBar from '@/components/NavBar';
import RouteTransition from '@/components/RouteTransition'
import { Fragment, ReactNode } from 'react'
import GameplexLoader from '@/components/GameplexLoader'
import Head from 'next/head';
import { useSnapshot } from 'valtio'
import NavigationStore from '@/store/NavigationStore'


/**
 * Types
 */
interface Props {
  initialized: boolean
  children: ReactNode | ReactNode[]
}

/**
 * Container
 */
export default function Layout({ children, initialized }: Props) {
  const { active, data } = useSnapshot(NavigationStore.state)
  const initialState = {
    MyCollection: {
        name: 'My Collection',
        href: '/home', 
        active: true
    },
    Activity: {
        name: 'Activity', 
        href: '/activity', 
        active: false 
    },
    Settings: {
        name: 'Settings',
        href: '/settings',
        active: false
    }
} 
  
  return (
    <Fragment>
      <Head>
        <title>Gameplex Wallet</title>
      </Head>
      <div>
        <div className='w-full min-h-screen bg-[#1e1e1e]'>
          
          {initialized ? (
            <Fragment>
              <NavBar navigation={initialState} showBrand={true} active={active}></NavBar>

              <RouteTransition>
                {children}
              </RouteTransition>
                
            </Fragment>
          ) : (
            <div className='container mx-auto min-h-screen flex justify-center items-center'>
              <div className='w-32 h-32 place-content-center'>
                <GameplexLoader />
              </div>
            </div>
          )}

        </div>
      </div>
        
    </Fragment>
  )
}
