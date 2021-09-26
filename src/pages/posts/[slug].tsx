import { GetStaticPaths, GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"

import { ContinentBanner } from '../../components/continentBanner/continentBanner'
import { ContinentDescription } from '../../components/continentDescription/continentDescription'
import { Cities100 } from '../../components/cities100/cities100'

export interface ContinentProps {
  continent: {
    slug: string
    title: string
    description: string
    banner: string
    cities: string
    languages: string
    cities100: String
    content: {
      city: string
      country: string
      image: string
      flag: string
    }[]
  }
}

export default function Section({ continent }: ContinentProps) {
  return (
    <>
      <ContinentBanner continent={continent} />
      <ContinentDescription continent={continent} />
      <Cities100 continent={continent} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.predicates.at('document.type', 'section')
  ]);

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid
      }
    }
  })

  return {
    paths,
    fallback: true
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params
  const response = await prismic.getByUID('section', String(slug), {})

  const continent = {
    slug: response.uid,
    banner: response.data.banner.url,
    title: RichText.asText(response.data.title),
    description: RichText.asText(response.data.description),
    cities: response.data.cidades,
    languages: response.data.linguas,
    cities100: response.data.cidades100,
    content: response.data.content.map(item => {
      return {
        city: RichText.asText(item.city),
        country: RichText.asText(item.country),
        image: item.image.url,
        flag: item.flag.url
      }
    })
  }

  response.data.content.map(item => console.log(item.image.url))

  return {
    props: {
      continent
    },
    revalidate: 1000
  }
}