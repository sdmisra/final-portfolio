import React from 'react'
import Image from 'next/image'
// import treeline from '/public/treeline.webp'
import aurelia from '/public/AureliaBackground.png'

const HeroImage = () => {
  return (
    <Image
        src={aurelia}
        loading='lazy'
        style={{objectFit:'cover'}}
        fill={true}
        quality={75}
        alt='an imagined world'
        className="absolute -z-10"
    />
  )
}

export default HeroImage;