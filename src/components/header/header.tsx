import { useRouter } from 'next/router'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Flex, Image, Icon } from '@chakra-ui/react'

export function Header() {
  const router = useRouter()
  const iconBack = router.asPath !== '/'

  return (
    <Flex flex='1' align='center' p='2'>
      {iconBack && (
        <Icon
          as={BsArrowLeftShort}
          position='absolute'
          ml='44'
          color='gray.700'
          h='30px'
          w='30px'
          title='iconBack'
          _hover={{ cursor: 'pointer' }}
          onClick={() => router.push('/')}
        />
      )}
      <Image src="Logo.svg" alt="logo-worldtrip" mx='auto' />
    </Flex>
  )
}