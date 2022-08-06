import React from 'react';
import { Box, Grid, GridItem, Circle } from '@chakra-ui/react';
import NotesPerChord from './NotesPerChord';
import NeckMarker from './NeckMarker';

export default function Neck({calculatedScale}) {

	return (
		<>
			<Grid templateColumns='repeat(22, minmax(50px, 100px))' columnGap='0'>
                <NeckMarker chord={0} position={'top'}/>
                <NotesPerChord chord={0} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={1} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={2} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={3} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={4} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={5} calculatedScale={calculatedScale}/>
                <NeckMarker chord={0} position={'bottom'}/>
			</Grid>
		</>
	);
}
