import React from 'react'
import { Box, Button, Stack, Wrap, Text } from '@chakra-ui/react';


export default function Tone({tone, handleClick}) {

    const toneHTML = tone.map(el => {
        return (
            <Button
            colorScheme='blue'
            variant={el.isSelected ? 'solid' : 'outline'}
            onClick={() => handleClick(el.tone, el.isSelected)}
            key={el.tone}
        >
            {el.tone}
        </Button>
        )
    })

    return (
        <Box>
            <Text fontSize='xl' as='b'> Tone:</Text>
            <Box>
                {toneHTML}
            </Box>
        </Box>
    )
}