import { Flex, Box, Image, Text } from '@chakra-ui/react'
export function Banner() {
  return (
    <Flex justify='center' flex='1'>
      <Image src="Background.png" alt="backgroundBanner" w='100vw'/>
      <Flex justify='space-between' w='86vw' position='absolute'>
        <Box my='auto'>
          <Text fontSize='3xl' fontWeight='normal' color='gray.100' mb='8'>5 Continentes, <br />
            infinitas possibilidades.</Text>
          <Text fontSize='xl' fontWeight='light' maxW='520px' color='gray.300'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
          <Image src='Airplane.svg' alt='airplane' transform="translateY(46px)"/>
      </Flex>
    </Flex>
  )
}