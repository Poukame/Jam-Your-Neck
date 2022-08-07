import React from 'react';
import { Box, Grid, GridItem, Circle } from '@chakra-ui/react';
import NotesPerChord from './NotesPerChord';
import NeckMarker from './NeckMarker';

export default function Neck() {

	return (
		<>
			<Grid templateColumns='repeat(22, minmax(50px, 100px))' columnGap='0'>
                <NeckMarker chord={0} position={'top'}/>
                <NotesPerChord chord={0} />
                <NotesPerChord chord={1} />
                <NotesPerChord chord={2} />
                <NotesPerChord chord={3} />
                <NotesPerChord chord={4} />
                <NotesPerChord chord={5} />
                <NeckMarker chord={0} position={'bottom'}/>
			</Grid>
		</>
	);
}
