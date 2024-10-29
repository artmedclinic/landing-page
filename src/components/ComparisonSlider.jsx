'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { ReactCompareSlider } from 'react-compare-slider'

export function ComparisonSlider({ beforeImage, afterImage }) {
  return (
    <ReactCompareSlider
      itemOne={<Image src={beforeImage} alt="Before Image" />}
      itemTwo={<Image src={afterImage} alt="After Image" />}
    />
  )
}
