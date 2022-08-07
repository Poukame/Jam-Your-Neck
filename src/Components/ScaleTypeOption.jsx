import React, {useContext} from 'react'
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Context } from '../OptionsContext';


export default function ScaleTypeOption() {

    const {scaleType, handleClickScaleType} = useContext(Context)

    const scaleTypeHTML = scaleType.map(el => {
        return (
            <Button
            colorScheme='blue'
            variant={el.isSelected ? 'solid' : 'outline'}
            onClick={() => handleClickScaleType(el.type, el.isSelected)}
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