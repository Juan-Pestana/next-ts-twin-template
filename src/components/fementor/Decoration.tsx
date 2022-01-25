import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import Image from 'next/image'

import sugar from '../../images/desktop/image-gallery-sugarcubes.jpg'
import cone from '../../images/desktop/image-gallery-cone.jpg'
import orange from '../../images/desktop/image-gallery-orange.jpg'
import milk from '../../images/desktop/image-gallery-milkbottles.jpg'

function Decoration() {
  return (
    <div tw="flex">
      <Image src={milk} />
      <Image src={orange} />
      <Image src={cone} />
      <Image src={sugar} />
    </div>
  )
}

export default Decoration
