import React from 'react';
import { GridItem, Text } from '@chakra-ui/react';
import { allChordsNotes } from '../assets/AllChordsNotes';
import { nanoid } from 'nanoid';

export default function NeckMarker({ chord, position }) {
	const dotMarkerPosition = [3, 5, 7, 9, 12, 15, 18, 21];

	const neckMarker = allChordsNotes[chord].note.map((el, index) => {
		if (position === 'top') {
			return (
				<GridItem
					w='100%'
					h='10'
					borderBottom='1px solid gray'
					justifyContent='center'
					key={nanoid()}
				>
					<Text transform='auto' translateY='-5px' mx='auto' textAlign='center' color='gray'>
						{index !== 0 ? index : ''}
					</Text>
				</GridItem>
			);
		}
		if (position === 'bottom') {
			const isDotMarker = dotMarkerPosition.some((el) => el === index);

			return (
				<GridItem w='100%' h='10' justifyContent='center' key={nanoid()}>
					<Text
						fontSize='xl'
						transform='auto'
						translateY='-25px'
						mx='auto'
						textAlign='center'
						color='gray'
					>
						{isDotMarker && (index === 12 ? '• •' : '•')}
					</Text>
				</GridItem>
			);
		}
	});

	return <>{neckMarker}</>;
}
