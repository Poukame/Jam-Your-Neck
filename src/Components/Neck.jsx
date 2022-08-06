import React from 'react'
import { Box, Button, Stack, Wrap, Text, Circle } from '@chakra-ui/react';

export default function Neck() {

    const style = 'red'


    return (
       <Box border='2px blue solid'>
        <Circle bgColor={style} size='40px' p='2' textAlign='center' borderRadius='1000' transform="auto" translateY="-20px">A</Circle>
       </Box>
    )
}