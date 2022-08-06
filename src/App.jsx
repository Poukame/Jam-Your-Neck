import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import RootNote from './Components/RootNote';
import Header from './Components/Header';
import ScaleType from './Components/ScaleType';
import Tone from './Components/Tone';
import Neck from './Components/Neck';

function App() {
	type initialStateRootNote = { note: string; isSelected: boolean }[];
	type initialStateScaleType = { type: string; isSelected: boolean }[];
	type initialStateTone = { tone: string; isSelected: boolean }[];

	const NOTES: readonly string[] = [
		'A',
		'A#',
		'B',
		'C',
		'C#',
		'D',
		'D#',
		'E',
		'F',
		'F#',
		'G',
		'G#',
	];

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

	function handleClickScaleType(type: string, isSelected: boolean) {
		setScaleType((el) => {
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

	function handleClickRootNote(note: string, isSelected: boolean) {
		setRootNote((el) => {
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

	function handleClickTone(tone: string, isSelected: boolean) {
		setTone((el) => {
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

	return (
		<Box maxW='1200px' border='2px solid red'>
			<Header />
			<Flex direction='column' gap='6'>
				<RootNote rootNote={rootNote} handleClick={handleClickRootNote} />
				<Flex gap='8'>
					<ScaleType scaleType={scaleType} handleClick={handleClickScaleType} />
					<Tone tone={tone} handleClick={handleClickTone} />
				</Flex>
      <Neck />
			</Flex>
		</Box>
	);
}

export default App;