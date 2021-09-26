import { Flex, Box, Text, Icon, Tooltip } from '@chakra-ui/react'
import { FiAlertCircle } from 'react-icons/fi'
import { ContinentProps } from '../../pages/posts/[slug]'

export function ContinentDescription({ continent }: ContinentProps) {
  return (
    <Flex w='86vw' mx='auto' align='center' justify='space-between' my='16'>
      <Text w='500px' textAlign='justify' fontWeight='medium' fontSize='xl'>{continent.description}</Text>
      <Flex ml='20' flex='1' textAlign='center' justify='space-between'>
        <Box>
          <Text color='yellow.400' fontWeight='semibold' fontSize='4xl'>{continent.cities}</Text>
          <Text fontSize='2xl'>Países</Text>
        </Box>
        <Box>
          <Text color='yellow.400' fontWeight='semibold' fontSize='4xl'>{continent.languages}</Text>
          <Text fontSize='2xl'>Linguas</Text>
        </Box>
        <Box>
          <Text color='yellow.400' fontWeight='semibold' fontSize='4xl'>{continent.cities100}</Text>
          <Flex align='center'>
            <Tooltip label="As 100 cidades mais visitadas do mundo">
              <Text fontSize='2xl' mr='2'>Cidades +100 </Text>
            </Tooltip>
            <Icon as={FiAlertCircle} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}