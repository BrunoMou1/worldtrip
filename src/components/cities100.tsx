import { Flex, Text, Box, Image } from '@chakra-ui/react'
import { ContinentProps } from '../pages/posts/[slug]'

export function Cities100({ continent }: ContinentProps) {
  return (
    <Flex m='20' w='86vw' mx='auto' flexDirection='column'>
      <Text mb='10' fontSize='3xl' fontWeight='semibold'>Cidades +100</Text>
      {continent.content.map(city => (
        <Box w='280px' border='2px' borderColor='yellow.300'>
          <Image src={city.image} alt={city.city} />
          <Flex align='center' justify='space-around'>
            <Box>
              <Text my='3' fontSize='xl' fontWeight='semibold'>{city.city}</Text>
              <Text mb='6'>{city.country}</Text>
            </Box>
            <Image w='40px' h='40px' src={city.flag} alt={city.city} />
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}