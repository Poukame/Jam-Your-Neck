import React, {useContext} from 'react';
import { GridItem, Text } from '@chakra-ui/react';
import { allNeckNotes } from '../assets/AllNeckNotes';
import { nanoid } from 'nanoid';
import { Context } from '../OptionsContext';

export default function NeckMarker({ chord, position }) {
	const dotMarkerPosition = [3, 5, 7, 9, 12, 15, 18, 21];

	const {selectedNotation} = useContext(Context)
	const sharpOrFlatScale = (selectedNotation === 'Sharp') ? allNeckNotes[chord].Sharp : allNeckNotes[chord].Flat

	const neckMarker = sharpOrFlatScale.map((el, index) => {
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
						fontSize='3xl'
						transform='auto'
						translateY='-30px'
						mx='auto'
						textAlign='center'
						color='black'
					>
						{isDotMarker && (index === 12 ? '• •' : '•')}
					</Text>
				</GridItem>
			);
		}
	});

	return <>{neckMarker}</>;
}
