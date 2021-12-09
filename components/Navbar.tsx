import React from 'react'
import Logo from './Logo'
import Button from './Button'

import tw, { styled, css, theme } from 'twin.macro'

const StNav = styled.nav`
  ${tw`flex flex-row py-1 justify-between items-center w-full max-w-screen-2xl m-auto`}
  div:nth-child(2) {
    ${tw`flex-1 ml-3`}
    ul {
      ${tw`flex`}
      li {
        ${tw`ml-3`}
      }
    }
  }
  div:nth-child(3) {
    ${tw`mx-6 flex justify-between`}
    div {
      ${tw`mx-3`}
    }
  }
`

const Navbar = function Navbar() {
  return (
    <div tw="bg-gray-100 flex flex-row items-center">
      <StNav>
        <div>
          <Logo />
        </div>
        <div>
          <ul>
            <li>estos </li>
            <li>podrían </li>
            <li> suer unos</li>
            <li>links</li>
          </ul>
        </div>
        <div>
          <div>
            <a href="#">
              <Button variant="secondary" isSmall>
                Otras cosas
              </Button>
            </a>
          </div>
          <div>
            <a href="#">
              <Button variant="primary" isSmall>
                Otras cosas
              </Button>
            </a>
          </div>
        </div>
      </StNav>
    </div>
  )
}

export default Navbar
