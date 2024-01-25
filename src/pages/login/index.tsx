import Image from 'next/image'
import {
  Container,
  LoginContainer,
  SideImage,
  SocialLogin,
  WelcomeText,
} from './styles'

import HomeImage from '../../public/images/homeimage.png'
import Logo from '../../public/icons/logo.svg'
import Google from '../../public/icons/google-logo.svg'
import Github from '../../public/icons/github-logo.svg'
import Guest from '../../public/icons/rocket.svg'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  function handleLoginAsGuest() {
    router.push('/home')
  }

  return (
    <Container>
      <SideImage>
        <Image src={Logo} className="logo" alt="" />
        <Image
          className="background-image"
          src={HomeImage}
          alt="Image of a girl on the couch reading a book"
        />
      </SideImage>
      <LoginContainer>
        <div className="login">
          <WelcomeText>
            <h1>Welcome to BookWise</h1>
            <span>Login into your account or enter as guest</span>
          </WelcomeText>
          <div className="buttons">
            <SocialLogin>
              <Image src={Google} alt="Google's Logo" />
              Login with Google
            </SocialLogin>
            <SocialLogin>
              <Image src={Github} alt="Github's Logo" />
              Login with Github
            </SocialLogin>
            <SocialLogin onClick={handleLoginAsGuest}>
              <Image src={Guest} alt="Icon of a rocket" />
              Login as guest
            </SocialLogin>
          </div>
        </div>
      </LoginContainer>
    </Container>
  )
}
