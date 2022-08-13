import React, {useContext} from 'react'
import { Context } from '../OptionsContext'
import { Box, Button } from '@chakra-ui/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'


export default function RootMarkerOption() {

    const {showRootMarker, handleClickRootMarker} = useContext(Context)


    return (
        <Box>
            <Button 
            leftIcon={showRootMarker ? <AiFillEyeInvisible/> : <AiFillEye color='red' />}
            colorScheme='blue'
            letterSpacing='wide'
            variant='outline'
            onClick={() => handleClickRootMarker()}>
                {showRootMarker ? 'Hide' : 'Show'} Root Marker
            </Button>
        </Box>
    )
}