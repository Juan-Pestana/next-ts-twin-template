import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'

import Navbar from '../src/components/fementor/Navbar'
import HeadOrange from '../src/components/fementor/HeadOrange'
import Feature from '../src/components/fementor/Feature'
import Products from '../src/components/fementor/Products'
import Testimonials from '../src/components/fementor/Testimonials'
import Decoration from '../src/components/fementor/Decoration'
import Footer from '../src/components/fementor/Footer'
import egg from '../src/images/desktop/image-transform.jpg'
import cup from '../src/images/desktop/image-stand-out.jpg'

const StBgImage = styled.div`
  ${css`
    background-image: url(https://res.cloudinary.com/hrbotfactory-com/image/upload/v1639251061/image-header_afgpb5.jpg);
    background-position: center;
    background-size: cover;
  `};
  ${tw`h-screen`}
`

function fementor() {
  return (
    <>
      <StBgImage>
        <Navbar />
        <HeadOrange />
      </StBgImage>
      <Feature image={egg} />
      <Feature image={cup} reverse={true} />
      <Products />
      <Testimonials />
      <Decoration />
      <Footer />
    </>
  )
}

export default fementor
