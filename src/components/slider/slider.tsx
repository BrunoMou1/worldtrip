import Link from 'next/link'

import { Box, Text, Image } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SectionProps {
  slug: string
  title: string
  banner: string
  description: string
}

interface Sections {
  results: SectionProps[]
}

export function Slider({ results }: Sections) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ disabledClass: 'button-disabled' }}
      pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
      className='swipper'
    >
      {results.map(section => (
        <SwiperSlide className='swiperSlide' key={section.slug}>
          <Image src={section.banner} alt={section.title} borderRadius='20px' />
          <Link href={`/posts/${section.slug}`}>
            <Box position='absolute' color='gray.100' _hover={{ cursor: 'pointer' }}>
              <Text fontSize='4xl' mb='2' fontWeight='600'>{section.title}</Text>
              <Text fontSize='2xl' fontWeight='400' >{section.description}</Text>
            </Box>
          </Link>
        </SwiperSlide>
      ))
      }
      <p>oi</p>

    </Swiper >
  )
}

