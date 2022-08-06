import React from 'react';
import { GridItem, Circle } from '@chakra-ui/react';
import { allChordsNotes } from '../assets/AllChordsNotes';
import { nanoid } from 'nanoid';

export default function NotesPerChord({ chord, calculatedScale }) {

	const allChordNotes = allChordsNotes[chord].note.map((el, index) => {
		const isInScale = calculatedScale.some((note) => note === el);
		const isRoot = calculatedScale[0];

		return (
			<GridItem w='100%' h='10' border='1px solid gray' justifyContent='center' key={nanoid()}>
				{index === 0 ? (
					<Circle
						bgColor='gray'
						// border='1px red solid'
						color='white'
						size='30px'
						p='2'
						textAlign='center'
						borderRadius='100'
						transform='auto'
						translateY='-15px'
						mx='auto'
					>
						{el}
					</Circle>
				) : (
					isInScale && (
						<Circle
							bgColor={isRoot === el ? 'red' : 'blue.500'}
							// border='1px red solid'
							color='white'
							size='30px'
							p='2'
							textAlign='center'
							borderRadius='100'
							transform='auto'
							translateY='-15px'
							mx='auto'
						>
							{el}
						</Circle>
					)
				)}
			</GridItem>
		);
	});

	return <>{allChordNotes}</>;
}
