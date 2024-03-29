import Image from 'next/image'
import {
  AuthError,
  Container,
  LoginContainer,
  SideImage,
  SocialLogin,
  WelcomeText,
} from './styles'

import HomeImage from '../../../public/images/homeimage.png'
import Logo from '../../../public/icons/logo.svg'
import Google from '../../../public/icons/google-logo.svg'
import Github from '../../../public/icons/github-logo.svg'
import Guest from '../../../public/icons/rocket.svg'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

export default function Login() {
  const router = useRouter()

  const hasAuthError = !!router.query.error

  const { status } = useSession()

  async function handleSocialLogin(provider: 'github' | 'google' | 'guest') {
    if (provider === 'guest') {
      return router.push('/home')
    }

    await signIn(provider)
  }

  useEffect(() => {
    async function redirectWhenLoggedIn() {
      if (status === 'authenticated') {
        await router.push('/home')
      }
    }

    redirectWhenLoggedIn()
  }, [router, status])

  return (
    <>
      <NextSeo title="Login | BookWise" />

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
            {hasAuthError && (
              <AuthError>Falha ao logar, tente novamente.</AuthError>
            )}
            <div className="buttons">
              <SocialLogin onClick={() => handleSocialLogin('google')}>
                <Image src={Google} alt="Google's Logo" />
                Login with Google
              </SocialLogin>
              <SocialLogin onClick={() => handleSocialLogin('github')}>
                <Image src={Github} alt="Github's Logo" />
                Login with Github
              </SocialLogin>
              <SocialLogin onClick={() => handleSocialLogin('guest')}>
                <Image src={Guest} alt="Icon of a rocket" />
                Enter as guest
              </SocialLogin>
            </div>
          </div>
        </LoginContainer>
      </Container>
    </>
  )
}
