import React, { useContext } from 'react';
import { Context } from '../OptionsContext';
import StartMetronomeBtn from './StartMetronomeBtn';
import {
	Text,
	Flex,
	HStack,
	VStack,
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
import { calculatedOrAll, duplicateOrNot } from '../types';

function NoteRandomizer() {
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
					onChange={(value) => handleNbRndNotes(+value)}
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

			<RadioGroup onChange={(value:calculatedOrAll) => setAllOrCalculated(value)} value={allOrCalculated} mt='4'>
				<Stack direction='row'>
					<Radio value='all'>Use all notes</Radio>
					<Radio value='calculated'>Use notes from your generated scale</Radio>
				</Stack>
			</RadioGroup>
			<RadioGroup onChange={(value:duplicateOrNot) => setDuplicateOrNot(value)} value={duplicateOrNot} mt='4'>
				<Stack direction='row'>
					<Radio value='noDuplicate'>No duplicate note</Radio>
					<Radio value='allowDuplicate'>Allow duplicate notes</Radio>
				</Stack>
			</RadioGroup>
			<Text mt='4'>
				<em>You can click on the random notes to generate new ones</em>
			</Text>
			<VStack mb='-10'>
				<StartMetronomeBtn />
				<HStack
					justifyContent='center'
					_hover={{cursor:'pointer'}}
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
			</VStack>
		</>
	);
}

export default NoteRandomizer;
