import React, {useContext} from 'react';
import { GridItem, Circle } from '@chakra-ui/react';
import { allNeckNotes } from '../assets/AllNeckNotes';
import { nanoid } from 'nanoid';
import { Context } from '../OptionsContext';

export default function NotesPerChord({ chord }) {

	const {calculatedScale, selectedNotation} = useContext(Context)
	const sharpOrFlatScale = (selectedNotation === 'Sharp') ? allNeckNotes[chord].Sharp : allNeckNotes[chord].Flat

	const allNeckNote = sharpOrFlatScale.map((el, index) => {
		
		const isInScale = calculatedScale.some((note) => note === el);
		const isRoot = calculatedScale[0];

		let styleBottomNeck = {};

		function isBottom() {
			if (chord === 5) {
				return (styleBottomNeck = { borderBottom: 'none', borderRight: 'none', borderLeft: 'none' });
			}
		}


		return (
			<GridItem
				w='100%'
				h='10'
				border='1px solid gray'
				justifyContent='center'
				sx={isBottom()}
				key={nanoid()}
			>
				{index === 0 ? (
					<Circle
						bgColor='gray'
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

	return <>{allNeckNote}</>;
}
