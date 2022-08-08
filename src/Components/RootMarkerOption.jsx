import React, {useContext} from 'react'
import { Context } from '../OptionsContext'
import { Box, Button, Text } from '@chakra-ui/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'


export default function RootMarkerOption() {

    const {showRootMarker, handleClickRootMarker} = useContext(Context)


    return (
        <Box>
            <Text fontSize='xl' my='4' fontWeight='700'> Show Root Marker:</Text>
            <Button 
            leftIcon={showRootMarker ? <AiFillEyeInvisible/> : <AiFillEye/>}
            colorScheme='blue'
            variant='outline'
            onClick={() => handleClickRootMarker()}>
                {showRootMarker ? 'Hide' : 'Show'} Root Marker
            </Button>
        </Box>
    )
}