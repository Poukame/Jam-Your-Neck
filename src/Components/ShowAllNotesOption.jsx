import React, {useContext} from 'react'
import { Context } from '../OptionsContext'
import { Box, Button, Text } from '@chakra-ui/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'


export default function ShowAllNotesOption() {

    const {handleClickShowAllNotes, showAll} = useContext(Context)


    return (
        <Box>
            <Text fontSize='xl' my='4' fontWeight='700'> Show All Notes:</Text>
            <Button 
            leftIcon={showAll ? <AiFillEyeInvisible/> : <AiFillEye/>}
            colorScheme='blue'
            variant='outline'
            onClick={() => handleClickShowAllNotes()}>
                {showAll ? 'Hide' : 'Show'} All Notes
            </Button>
        </Box>
    )
}