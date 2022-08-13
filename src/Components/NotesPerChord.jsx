import React, { useContext } from 'react';
import { GridItem, Circle } from '@chakra-ui/react';
import { allNeckNotes } from '../assets/AllNeckNotes';
import { nanoid } from 'nanoid';
import { Context } from '../OptionsContext';

export default function NotesPerChord({ stringNb }) {
	const { calculatedScale, selectedNotation, showAll, showRootMarker } = useContext(Context);
	
	const sharpOrFlatScale =
		selectedNotation === 'Sharp' ? allNeckNotes[stringNb].Sharp : allNeckNotes[stringNb].Flat;

	let styleBottomNeck = {};

	function isBottom() {
		if (stringNb === 5) {
			return (styleBottomNeck = {
				borderBottom: 'none',
				borderRight: 'none',
				borderLeft: 'none',
			});
		}
	}

	const renderStringNotes = sharpOrFlatScale.map((el, index) => {
		
		const isInScale = showAll ? sharpOrFlatScale : calculatedScale.some((note) => note === el);
		const isRoot = showRootMarker && calculatedScale[0];

		return (
			<GridItem
				w='100%'
				h={{base: '7', md: '9', lg:'10'}}
				border='1px solid gray'
				justifyContent='center'
				sx={isBottom()}
				key={nanoid()}
			>
				{index === 0 ? (
					<Circle
						bgColor='gray'
						color='white'
						size={{base: '1rem', md: '1.4rem', lg:'1.8rem'}}
						fontSize={{base: '0.6rem', md: '0.8rem', lg:'1rem'}}
						p={{base: '1', md: '2', lg:'4'}}
						textAlign='center'
						borderRadius='100'
						transform='auto'
						translateY={{base: '-0.5rem', md: '-0.7rem', lg:'-0.9rem'}}
						mx='auto'
					>
						{el}
					</Circle>
				) : (
					isInScale && (
						<Circle
							bgColor={isRoot === el ? 'red' : 'blue.500'}
							color='white'
							size={{base: '1rem', md: '1.4rem', lg:'1.8rem'}}
							fontSize={{base: '0.6rem', md: '0.8rem', lg:'1rem'}}
							p={{base: '1', md: '2', lg:'4'}}
							textAlign='center'
							borderRadius='100'
							transform='auto'
							translateY={{base: '-0.5rem', md: '-0.7rem', lg:'-0.9rem'}}
							mx='auto'
						>
							{el}
						</Circle>
					)
				)}
			</GridItem>
		);
	});

	return <>{renderStringNotes}</>;
}
