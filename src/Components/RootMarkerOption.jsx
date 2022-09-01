import React, {useContext} from 'react'
import { Context } from '../OptionsContext'
import { Box, Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

export default function RootMarkerOption() {

    const {showRootMarker, handleClickRootMarker} = useContext(Context)


    return (
        <Box>
            <Button 
            leftIcon={showRootMarker ? <Icon icon="ant-design:eye-invisible-filled" /> : <Icon icon="ant-design:eye-filled" color='red' />}
            colorScheme='blue'
            letterSpacing='wide'
            variant='outline'
            onClick={() => handleClickRootMarker()}>
                {showRootMarker ? 'Hide' : 'Show'} Root Marker
            </Button>
        </Box>
    )
}