import React, { useContext } from 'react';
import { Text, Grid, HStack } from '@chakra-ui/react';
import NotesPerChord from './NotesPerChord';
import NeckMarker from './NeckMarker';
import { Context } from '../OptionsContext';

export default function Neck() {
	const { selectedRootNote, selectedScaleType, selectedTone, scaleIntervals } = useContext(Context);

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
			<HStack mt='-10' gap='8' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight='700'>
				<Text>
					{selectedScaleType} of {selectedRootNote}
					{selectedTone === 'Minor' ? 'm' : ' '}
				</Text>
				<Text color='gray.400'>Intervals: {scaleIntervals}</Text>
			</HStack>
		</>
	);
}
