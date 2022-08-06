import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import RootNote from './Components/RootNote';
import Header from './Components/Header';
import ScaleType from './Components/ScaleType';
import Tone from './Components/Tone';
import Neck from './Components/Neck';
import { calcScale, chordsSharp, getScale } from './assets/scale-function';

function App() {
	const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

	const initialStateRootNote = NOTES.map((el) => {
		return {
			note: el,
			isSelected: el === 'C' ? true : false,
		};
	});

	const initialStateScaleType = [
		{
			type: 'Pentatonic',
			isSelected: true,
		},
		{
			type: 'Diatonic',
			isSelected: false,
		},
	];

	const [scaleType, setScaleType] = useState(initialStateScaleType);

	function handleClickScaleType(type, isSelected) {
		!isSelected && setScaleType((el) => {
			return el.map((el) => {
				return el.type === type
					? {
							...el,
							isSelected: !isSelected,
					  }
					: {
							...el,
							isSelected: false,
					  };
			});
		});
	}

	const [rootNote, setRootNote] = useState(initialStateRootNote);

	function handleClickRootNote(note, isSelected) {
		!isSelected && setRootNote((el) => {
			return el.map((el) => {
				return el.note === note
					? {
							...el,
							isSelected: !isSelected,
					  }
					: {
							...el,
							isSelected: false,
					  };
			});
		});
	}

	const initialStateTone = [
		{
			tone: 'Minor',
			isSelected: true,
		},
		{
			tone: 'Major',
			isSelected: false,
		},
	];

	const [tone, setTone] = useState(initialStateTone);

	function handleClickTone(tone, isSelected) {
		!isSelected && setTone((el) => {
			return el.map((el) => {
				return el.tone === tone
					? {
							...el,
							isSelected: !isSelected,
					  }
					: {
							...el,
							isSelected: false,
					  };
			});
		});
	}

	const [mode, setMode] = useState('Dorian');

	const selectedRootNote = rootNote.find((el) => el.isSelected === true).note;
	const selectedScaleType = scaleType.find((el) => el.isSelected === true).type;
	const selectedTone = tone.find((el) => el.isSelected === true).tone;

	const calculatedScale = calcScale(getScale(selectedScaleType, selectedTone), chordsSharp, selectedRootNote);

	return (
		<Box maxW='100%' p='4'>
			<Header />
			<Flex direction='column' gap='6'>
				<RootNote rootNote={rootNote} handleClick={handleClickRootNote} />
				<Flex gap='8' mb='8' alignItems='center'>
					<ScaleType scaleType={scaleType} handleClick={handleClickScaleType} />
					<Tone tone={tone} handleClick={handleClickTone} />
				</Flex>
				<Neck calculatedScale={calculatedScale}/>
			</Flex>
		</Box>
	);
}

export default App;
