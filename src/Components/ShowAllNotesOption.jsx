import React, {useContext} from 'react'
import { Context } from '../OptionsContext'
import { Box, Button } from '@chakra-ui/react';
import { Icon } from '@iconify/react';


export default function ShowAllNotesOption() {

    const {handleClickShowAllNotes, showAll} = useContext(Context)


    return (
        <Box>
            
            <Button 
            leftIcon={showAll ? <Icon icon="ant-design:eye-invisible-filled" /> : <Icon icon="ant-design:eye-filled" />}
            colorScheme='blue'
            letterSpacing='wide'
            variant='outline'
            onClick={() => handleClickShowAllNotes()}>
                {showAll ? 'Hide' : 'Show'} All Notes
            </Button>
        </Box>
    )
}