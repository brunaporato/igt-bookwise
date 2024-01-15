import Image from 'next/image'
import { Container, Menu, Profile, ProfileIcon } from './styles'

import Logo from '../../../public/icons/logo.svg'

export function Sidebar() {
  return (
    <Container>
      <section className="top">
        <Image src={Logo} alt="" className="logo" width={128} />
        <Menu>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </Menu>
      </section>
      <Profile>
        <ProfileIcon src="" alt="" />
        <p>Name</p>
        <button>logout</button>
      </Profile>
    </Container>
  )
}
