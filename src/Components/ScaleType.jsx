import React from 'react'
import { Box, Button, Stack, Wrap, Text } from '@chakra-ui/react';



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
            <Text fontSize='xl' as='b'> Scale Type:</Text>
            <Box>
                {scaleTypeHTML}
            </Box>
        </Box>
    )
}