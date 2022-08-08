import React from 'react';
import { Box, Grid, GridItem, Circle } from '@chakra-ui/react';
import NotesPerChord from './NotesPerChord';
import NeckMarker from './NeckMarker';

export default function Neck() {

	return (
		<>
			<Grid templateColumns='repeat(22, minmax(50px, 100px))' columnGap='0'>
                <NeckMarker stringNb={0} position={'top'}/>
                <NotesPerChord stringNb={0} />
                <NotesPerChord stringNb={1} />
                <NotesPerChord stringNb={2} />
                <NotesPerChord stringNb={3} />
                <NotesPerChord stringNb={4} />
                <NotesPerChord stringNb={5} />
                <NeckMarker stringNb={0} position={'bottom'}/>
			</Grid>
		</>
	);
}
