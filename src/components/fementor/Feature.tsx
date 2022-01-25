import React from 'react'
import Image from 'next/image'

import tw, { styled, css, theme } from 'twin.macro'
import egg from '../../images/desktop/image-transform.jpg'

interface StFeatureProps {
  reverse?: boolean
}

const StFeature = styled.div<StFeatureProps>`
  ${tw`flex flex-col  lg:flex-row  `}
  ${props => props.reverse && tw`lg:flex-row-reverse`}
  div {
    ${tw`flex-1 relative width[100vw] `}
  }
  div:nth-child(1) {
    ${tw`m-auto`}
    div {
      ${tw`w-5/6 py-24 lg:py-0`}
      h2 {
        ${tw`text-3xl font-serif font-weight[bold] pb-7 md:text-4xl lg:text-5xl`}
      }
      p {
        ${tw`text-gray-500 pb-7 text-lg leading-relaxed`}
      }
      a {
        ${tw`font-serif font-bold relative `}
        &:before {
          ${css`
            content: '';
            position: absolute;
            width: 110%;
            height: 6px;
            left: 0;
            top: 12px;
            z-index: -1;
            background-color: #edda6d;
          `}
        }
      }
    }
  }
`
interface featureProps {
  image: StaticImageData
  reverse?: boolean
}

function Feature({ image, reverse }: featureProps) {
  return (
    <StFeature reverse={reverse}>
      <div>
        <div>
          <h2>Transform your brand</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut
            officiis incidunt placeat fugit atque recusandae voluptate
            voluptatum consequatur! Optio impedit nemo maiores, neque nesciunt
            distinctio. Accusamus,
          </p>
          <a href="">learn more</a>
        </div>
      </div>
      <div>
        <Image src={image} alt="thats an egg" layout="responsive" />
      </div>
    </StFeature>
  )
}

export default Feature
