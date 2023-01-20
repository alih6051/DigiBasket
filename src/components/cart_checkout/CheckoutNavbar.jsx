import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const CheckoutNavbar = () => {
  return (
    <Box>
        <Box
        display="flex"
        justifyContent="space-between"
        ml={20}
        mt={5}
        mr={20}
        mb={5}
      >
        <Image
          src="https://www.bigbasket.com/static/v2626/common/img/bb_logo.png"
          alt="bigbasket Logo"
        />
        <Heading display="flex" flexDirection="column-reverse" color="gray.500">
          8094941896
        </Heading>
      </Box>
      <hr />
    </Box>
  )
}

export default CheckoutNavbar