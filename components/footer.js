import React, { useState } from 'react';
import { Box, Link, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';


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
