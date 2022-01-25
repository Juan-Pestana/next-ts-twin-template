import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'
import emily from '../../images/image-emily.jpg'
import jennie from '../../images/image-jennie.jpg'
import thomas from '../../images/image-thomas.jpg'

import Image from 'next/image'

const StTestimonials = styled.section`
  ${tw`text-center flex items-center justify-center py-10 lg:(h-screen)`}
  h3 {
    ${tw`font-extrabold text-xl text-transform[uppercase] font-serif opacity-60 tracking-widest`}
  }

  .testimonials {
    ${tw`flex flex-col m-auto max-w-screen-2xl gap-8 py-14 md:(flex-row py-20)`}
    article {
      ${tw`flex flex-col`}
      .imageCont {
        ${tw`rounded-full overflow-hidden relative w-1/4 mx-auto my-5 aspect-ratio[1/1]`}
      }
      p {
        ${tw`font-bold text-lg opacity-60 p-8 font-serif max-w-prose`}
      }
      .name {
        ${tw`opacity-80 text-xl`}
      }
      small {
        ${tw`text-lg font-serif opacity-40`}
      }
    }
  }
`

function Testimonials() {
  return (
    <>
      <StTestimonials>
        <div>
          <h3>client testimonials</h3>
          <div className="testimonials">
            <article>
              <div className="imageCont">
                <Image src={thomas} alt="" layout="fill" />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde ducimus aut et facere voluptate maiores odio blanditiis
              </p>
              <p className="name">Thomas P.</p>
              <small>Sales</small>
            </article>
            <article>
              <div className="imageCont">
                <Image src={jennie} alt="" layout="fill" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde ducimus aut et facere voluptate maiores odio blanditiis
              </p>
              <p className="name">Jennie S.</p>
              <small>Design & product</small>
            </article>
            <article>
              <div className="imageCont">
                <Image src={emily} alt="" layout="fill" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                unde ducimus aut et facere voluptate maiores odio blanditiis
              </p>
              <p className="name">Emily T.</p>
              <small>Marketing Director</small>
            </article>
          </div>
        </div>
      </StTestimonials>
    </>
  )
}

export default Testimonials
