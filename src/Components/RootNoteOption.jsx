import React, { useContext } from 'react';
import { Box, Button, Stack, Wrap, Text } from '@chakra-ui/react';
import { Context } from '../OptionsContext';

export default function RootNoteOption() {
	
	const {rootNote, handleClickRootNote} = useContext(Context)

	const notesHTML = rootNote.map(el => {
		return (
			<Button
				colorScheme='blue'
				variant={el.isSelected ? 'solid' : 'outline'}
				onClick={() => handleClickRootNote(el.note, el.isSelected)}
				key={el.note}
			>
				{el.note}
			</Button>
		);
	});

	return (
		<Box>
			<Text fontSize='xl' my='4' fontWeight='700'>Notes:</Text>
			<Stack direction='row'>
				<Wrap>{notesHTML}</Wrap>
			</Stack>
		</Box>
	);
}
