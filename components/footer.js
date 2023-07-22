import React, { } from 'react';
import { Box, Link,} from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box  align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} HarrisK. All Rights Reserved.
      Inspired by  
      <Link href=""> Takuya_Matsuyama</Link>
    </Box>
  )
}

export default Footer
