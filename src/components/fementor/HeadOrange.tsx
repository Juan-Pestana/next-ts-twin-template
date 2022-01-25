import React from 'react'
import tw, { styled, css, theme } from 'twin.macro'

const StHeader = styled.div`
  ${tw`flex 
  flex-col 
  align-items[center] 
  text-center text-4xl md:text-6xl 
  font-serif 
  text-transform[uppercase] 
  letter-spacing[5px] 
  font-weight[bolder] 
  color[#f2f2f2] 
  mt-20 
  pt-10`}
  svg {
    ${tw`mt-24`}
  }
`

function HeadOrange() {
  return (
    <StHeader>
      <h1>we are creatives</h1>
      <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="#FFF"
          strokeWidth="6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg>
    </StHeader>
  )
}

export default HeadOrange
