import Image from 'next/image'
import { Container, Menu, MenuButton, Profile, SidebarButton } from './styles'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'

import Logo from '../../../../public/icons/logo.svg'
import { Avatar } from '../Avatar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut } from 'next-auth/react'

// TODO: fix session.user.id - does not recognize the type although there is id comming from session

export function Sidebar() {
  const [activePage, setActivePage] = useState('home')
  const router = useRouter()

  const { data: session, status } = useSession()

  function handleClickMenu(page: string) {
    router.push(`/${page}`)
  }

  function handleReturnToLogin() {
    router.push('/')
  }

  async function handleSignOut() {
    await signOut()
    handleReturnToLogin()
  }

  useEffect(() => {
    const currentPath = router.pathname

    if (currentPath === '/profile/[userId]') {
      const routeId = router.query.userId
      const isOwnProfile = routeId === session?.user?.id
      isOwnProfile && setActivePage('profile/me')
      return
    }

    setActivePage(router.pathname.substring(1))
  }, [router.pathname, router.query.userId, session?.user?.id])

  return (
    <Container>
      <section className="top">
        <Image src={Logo} alt="" className="logo" width={128} />
        <Menu>
          <li>
            <MenuButton
              selected={activePage === 'home'}
              onClick={() => handleClickMenu('home')}
            >
              <ChartLineUp size={24} />
              <span>Home</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton
              selected={activePage === 'explore'}
              onClick={() => handleClickMenu('explore')}
            >
              <Binoculars size={24} />
              <span>Explore</span>
            </MenuButton>
          </li>
          {status === 'authenticated' && (
            <li>
              <MenuButton
                selected={activePage === 'profile/me'}
                onClick={() => handleClickMenu(`profile/${session?.user?.id}`)}
              >
                <User size={24} />
                <span>Profile</span>
              </MenuButton>
            </li>
          )}
        </Menu>
      </section>
      <Profile>
        {status === 'authenticated' ? (
          <>
            <Avatar
              avatar={String(session?.user?.image)}
              onClick={() => handleClickMenu(`profile/${session?.user?.id}`)}
            />
            <p>{session?.user?.name}</p>
            <SidebarButton onClick={handleSignOut}>
              <SignOut size={20} />
            </SidebarButton>
          </>
        ) : (
          <>
            <p>Sign In</p>
            <SidebarButton userState="guest" onClick={handleReturnToLogin}>
              <SignIn size={20} />
            </SidebarButton>
          </>
        )}
      </Profile>
    </Container>
  )
}
