import React from 'react'
import { Box, Button, HStack, Wrap, Text } from '@chakra-ui/react';



export default function ScaleType({scaleType, handleClick}) {

    const scaleTypeHTML = scaleType.map(el => {
        return (
            <Button
            colorScheme='blue'
            variant={el.isSelected ? 'solid' : 'outline'}
            onClick={() => handleClick(el.type, el.isSelected)}
            key={el.type}
        >
            {el.type}
        </Button>
        )
    })

    return (
        <Box>
            <Text fontSize='xl' my='4' fontWeight='700'> Scale Type:</Text>
            <HStack>
                {scaleTypeHTML}
            </HStack>
        </Box>
    )
}