import React, { useContext } from 'react';
import { Context } from '../OptionsContext';
import Metronome from './Metronome';
import {
	Button,
	Text,
	Flex,
	HStack,
	Slider,
	SliderFilledTrack,
	SliderTrack,
	SliderThumb,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Radio,
	RadioGroup,
	Stack,
} from '@chakra-ui/react';

export default function NoteRandomizer() {

	// const audio = new Audio(click)
	// audio.play()

	const {
		nbNotes,
		handleNbRndNotes,
		duplicateOrNot,
		setDuplicateOrNot,
		allOrCalculated,
		setAllOrCalculated,
		generatedRandomNotes,
		handleRefresh
	} = useContext(Context);

	const generatedRandomNotesHTML = generatedRandomNotes.map((el, index) => {
		return <span key={index}>{el}</span>;
	});

	return (
		<>
			<Flex>
				<NumberInput
					maxW='100px'
					mr='2rem'
					min={2}
					max={12}
					value={nbNotes}
					onChange={(value) => handleNbRndNotes(value)}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
				<Slider
					flex='1'
					focusThumbOnChange={false}
					min={2}
					max={12}
					value={nbNotes}
					onChange={(value) => handleNbRndNotes(value)}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb fontSize='sm' boxSize='32px' children={nbNotes} />
				</Slider>
			</Flex>

			<RadioGroup onChange={(value) => setAllOrCalculated(value)} value={allOrCalculated} mt='4'>
				<Stack direction='row'>
					<Radio value='all'>Use all notes</Radio>
					<Radio value='calculated'>Use notes from your generated scale</Radio>
				</Stack>
			</RadioGroup>
			<RadioGroup onChange={(value) => setDuplicateOrNot(value)} value={duplicateOrNot} mt='4'>
				<Stack direction='row'>
					<Radio value='noDuplicate'>No duplicate note</Radio>
					<Radio value='allowDuplicate'>Allow duplicate notes</Radio>
				</Stack>
			</RadioGroup>
			<Text mt='4'>
				<em>You can click on the random notes to generate new ones</em>
			</Text>
			<HStack
				justifyContent='center'
				mx='auto'
				mt='8'
				gap='4'
				flexWrap='wrap'
				maxWidth='16ch'
				fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
				fontWeight='700'
				onClick={() => handleRefresh()}
			>
				{generatedRandomNotesHTML}
			</HStack>
			<Metronome />
		</>
	);
}
