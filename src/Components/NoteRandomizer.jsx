import React, { useState, useContext } from 'react';
import { Context } from '../OptionsContext';
import {
    Text,
	Flex,
	HStack,
	Heading,
	Link,
	Container,
	Box,
	Slider,
	SliderFilledTrack,
	SliderTrack,
	SliderThumb,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from '@chakra-ui/react';

export default function NoteRandomizer() {

    const {selectedNotation} = useContext(Context)

	const [nbNotes, setNbNotes] = useState(5);
	const handleChange = (value) => setNbNotes(value);

	return (
		<>
			<Text fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} fontWeight='700' textAlign='center'>
				A B C D E F
			</Text>
            
			<Flex>
				<NumberInput maxW='100px' mr='2rem' min={2} max={10} value={nbNotes} onChange={handleChange}>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
				<Slider flex='1' focusThumbOnChange={false} min={2} max={10} value={nbNotes} onChange={handleChange}>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb fontSize='sm' boxSize='32px' children={nbNotes} />
				</Slider>
			</Flex>
		</>
	);
}
