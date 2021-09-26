import { Flex, Image, Text } from '@chakra-ui/react'

export function TravelTypes() {
  return (
    <Flex w='86vw' mx='auto' mt='20' justify='space-between' >
      <Flex w='160px' flexDirection='column' align='center'>
        <Image src='cocktail 1.svg' alt='cocktail' />
        <Text fontSize='xl' mt='4' fontWeight='semibold'>
          vida norturna
        </Text>
      </Flex>
      <Flex w='160px' flexDirection='column' align='center'>
        <Image src='surf 1.svg' alt='surf' />
        <Text fontSize='xl' mt='4' fontWeight='semibold'>
          praia
        </Text>
      </Flex>
      <Flex w='160px' flexDirection='column' align='center'>
        <Image src='building 1.svg' alt='building' />
        <Text fontSize='xl' mt='4' fontWeight='semibold'>
          moderno
        </Text>
      </Flex>
      <Flex w='160px' flexDirection='column' align='center'>
        <Image src='museum 1.svg' alt='museum' />
        <Text fontSize='xl' mt='4' fontWeight='semibold'>
          clássico
        </Text>
      </Flex>
      <Flex w='160px' flexDirection='column' align='center'>
        <Image src='earth 1.svg' alt='earth' />
        <Text fontSize='xl' mt='4' fontWeight='semibold'>
          e mais...
        </Text>
      </Flex>
    </Flex>
  )
}