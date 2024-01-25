import Image from 'next/image'
import { Container, Menu, MenuButton, Profile, SidebarButton } from './styles'
import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'

import Logo from '../../../public/icons/logo.svg'
import { Avatar } from '../Avatar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface SidebarProps {
  isSessionActive: boolean
}

export function Sidebar({ isSessionActive }: SidebarProps) {
  const [activePage, setActivePage] = useState('home')
  const router = useRouter()

  function handleClickMenu(page: string) {
    router.push(`/${page}`)
  }

  function handleGuestSignIn() {
    router.push('/')
  }

  useEffect(() => {
    setActivePage(router.pathname.substring(1))
  }, [router.pathname])

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
          <li>
            <MenuButton
              selected={activePage === 'profile'}
              onClick={() => handleClickMenu('profile')}
            >
              <User size={24} />
              <span>Profile</span>
            </MenuButton>
          </li>
        </Menu>
      </section>
      <Profile>
        {isSessionActive ? (
          <>
            <Avatar
              avatar="https://github.com/brunaporato.png"
              onClick={() => handleClickMenu('profile')}
            />
            <p>Bruna Porato</p>
            <SidebarButton>
              <SignOut size={20} />
            </SidebarButton>
          </>
        ) : (
          <>
            <p>Sign In</p>
            <SidebarButton userState="guest" onClick={handleGuestSignIn}>
              <SignIn size={20} />
            </SidebarButton>
          </>
        )}
      </Profile>
    </Container>
  )
}
