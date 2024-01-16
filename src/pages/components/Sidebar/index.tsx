import Image from 'next/image'
import {
  Container,
  LogoutButton,
  Menu,
  MenuButton,
  Profile,
  ProfileIcon,
} from './styles'
import { Binoculars, ChartLineUp, SignOut, User } from '@phosphor-icons/react'

import Logo from '../../../public/icons/logo.svg'

export function Sidebar() {
  return (
    <Container>
      <section className="top">
        <Image src={Logo} alt="" className="logo" width={128} />
        <Menu>
          <li>
            <MenuButton selected>
              <ChartLineUp size={24} />
              <span>Home</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton>
              <Binoculars size={24} />
              <span>Explore</span>
            </MenuButton>
          </li>
          <li>
            <MenuButton>
              <User size={24} />
              <span>Profile</span>
            </MenuButton>
          </li>
        </Menu>
      </section>
      <Profile>
        <ProfileIcon
          src="https://github.com/brunaporato.png"
          alt=""
          width={32}
          height={32}
        />
        <p>Bruna Porato</p>
        <LogoutButton>
          <SignOut size={20} />
        </LogoutButton>
      </Profile>
    </Container>
  )
}
