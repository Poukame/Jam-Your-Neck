import React, {useContext} from 'react'
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Context } from '../OptionsContext';

export default function ToneOption() {

    const {tone, handleClickTone} = useContext(Context)

    const toneHTML = tone.map(el => {
        return (
            <Button
            colorScheme='blue'
            letterSpacing='wider'
            variant={el.isSelected ? 'solid' : 'outline'}
            onClick={() => handleClickTone(el.tone, el.isSelected)}
            key={el.tone}
        >
            {el.tone}
        </Button>
        )
    })

    return (
        <Box>
            <Text fontSize='xl' my='4' fontWeight='700'> Tone:</Text>
            <HStack>
                {toneHTML}
            </HStack>
        </Box>
    )
}