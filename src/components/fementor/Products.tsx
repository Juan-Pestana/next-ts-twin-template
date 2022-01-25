import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import Image from 'next/image'

import cherrys from '../../images/desktop/image-graphic-design.jpg'
import orange from '../../images/desktop/image-photography.jpg'

const StProducts = styled.div`
  ${tw`flex flex-col lg:flex-row`}
  div {
    ${tw`relative aspect-ratio[1/1] flex flex-col align-items[center] justify-center`} */
    span {
      ${tw`w-full`}
    }
    div {
      ${tw`w-2/3 text-center mt-52 opacity-50 md:(w-1/2 mt-80)`}
      h3 {
        ${tw`text-3xl font-serif font-weight[bold] pb-7`}
      }
      p {
        ${tw`text-sm leading-relaxed `}
      }
    }
  }
`

function Products() {
  return (
    <StProducts>
      <div>
        <Image src={cherrys} layout="fill" />
        <div>
          <h3>Graphic Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magnam, nihil exercitationem voluptates perspiciatis odio ex
            necessitatibus? Amet, error ipsum.
          </p>
        </div>
      </div>
      <div>
        <Image src={orange} layout="fill" />
        <div>
          <h3>Photography</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magnam, nihil exercitationem voluptates perspiciatis odio ex
            necessitatibus? Amet, error ipsum.
          </p>
        </div>
      </div>
    </StProducts>
  )
}

export default Products
