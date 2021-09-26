import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { Flex } from '@chakra-ui/react'

import { Banner } from "../components/banner/banner";
import { Divisor } from '../components/divisor/divisor';
import { Slider } from '../components/slider/slider';
import { TravelTypes } from "../components/travelTypes/travelTypes";

interface SectionProps {
  slug: string
  title: string
  banner: string
  description: string
}

interface Sections {
  results: SectionProps[]
}

export default function Home({ results }: Sections) {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Divisor />
      <Flex fontSize='3xl' textAlign='center' justify='center'>
        Vamos Nessa? <br />
        Escolha seu continente
      </Flex>
      <Slider results={results} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const sections = await prismic.query([
    Prismic.predicates.at('document.type', 'section')
  ])

  const results = sections.results.map(item => {
    return {
      slug: item.uid,
      title: RichText.asText(item.data.title),
      description: RichText.asText(item.data.descriptionslide),
      banner: item.data.bannerslide.url
    }
  })

  return {
    props: {
      results
    }
  }
}

