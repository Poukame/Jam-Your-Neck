import React from 'react';
import { Box, Grid, GridItem, Circle } from '@chakra-ui/react';
import NotesPerChord from './NotesPerChord';

export default function Neck({calculatedScale}) {

	const style = 'red';
    
	return (
		<>
			<Grid templateColumns='repeat(22, 50px)' columnGap='0' justifyContent='center'>
                <NotesPerChord chord={0} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={1} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={2} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={3} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={4} calculatedScale={calculatedScale}/>
                <NotesPerChord chord={5} calculatedScale={calculatedScale}/>
			</Grid>
		</>
	);
}
