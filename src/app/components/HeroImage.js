import React from 'react'
import Image from 'next/image'
import treeline from '/public/treeline.webp'

const HeroImage = () => {
  return (
    <Image
        src={treeline}
        loading='lazy'
        style={{objectFit:'cover'}}
        fill={true}
        quality={100}
        alt='a misty treeline'
        className="absolute -z-10"
    />
  )
}

export default HeroImage;