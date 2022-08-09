import React, {useContext} from 'react'
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Context } from '../OptionsContext';

export default function NotationOption() {

    const {notation, handleClickNotation} = useContext(Context)

    const notationHTML = notation.map(el => {
        return (
            <Button
            colorScheme='blue'
            letterSpacing='wider'
            variant={el.isSelected ? 'solid' : 'outline'}
            onClick={() => handleClickNotation(el.notation, el.isSelected)}
            key={el.notation}
        >
            {el.notation === 'Sharp' ? 'Sharp - #' : 'Flat - ♭'}
        </Button>
        )
    })

    return (
        <Box>
            <Text fontSize='xl' my='4' fontWeight='700'> Notation:</Text>
            <HStack>
                {notationHTML}
            </HStack>
        </Box>
    )
}