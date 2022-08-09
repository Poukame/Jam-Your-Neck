import React, { useContext } from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import NotesPerChord from './NotesPerChord';
import NeckMarker from './NeckMarker';
import { Context } from '../OptionsContext';

export default function Neck() {
	const { selectedRootNote, selectedScaleType, selectedTone } = useContext(Context);

	return (
		<>
			<Grid templateColumns='repeat(22, minmax(10px, 100px))' columnGap='0' mx='auto'>
				<NeckMarker stringNb={0} position={'top'} />
				<NotesPerChord stringNb={0} />
				<NotesPerChord stringNb={1} />
				<NotesPerChord stringNb={2} />
				<NotesPerChord stringNb={3} />
				<NotesPerChord stringNb={4} />
				<NotesPerChord stringNb={5} />
				<NeckMarker stringNb={0} position={'bottom'} />
			</Grid>
			<Box>
				<Text fontSize='2xl' fontWeight='700' mt='-10'>
					{selectedScaleType} of {selectedRootNote}
					{selectedTone === 'Minor' ? 'm' : ''}{' '}
				</Text>
			</Box>
		</>
	);
}
