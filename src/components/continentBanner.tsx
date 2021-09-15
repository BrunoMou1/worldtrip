import { Flex, Image, Text } from '@chakra-ui/react'
import { ContinentProps } from '../pages/posts/[slug]'

export function ContinentBanner({ continent }: ContinentProps) {
  return (
    <Flex  align='flex-end'>
      <Image src={continent.banner} alt={continent.title} />
      <Text fontSize='4xl' ml='20' mb='10' color='gray.100' fontWeight='semibold' position="absolute">
        {continent.title}
      </Text>
    </Flex>
  )
}