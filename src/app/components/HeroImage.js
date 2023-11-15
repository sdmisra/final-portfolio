import React from 'react'
import Image from 'next/image'
import treeline from '/public/treeline.webp'

const HeroImage = () => {
  return (
    <Image
        src={treeline}
        loading='lazy'
        style={{objectFit:'cover'}}
        fill={false}
        quality={100}
        alt='a misty treeline'
        className="-z-10"
    />
  )
}

export default HeroImage;