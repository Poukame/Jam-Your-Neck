import React, { useContext } from 'react';
import { Context } from '../OptionsContext';

import { Icon } from '@iconify/react';
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

export default function Metronome() {
	const { bpm, handleBPM, isPlaying, togglePlay } = useContext(Context);

	return (
		<>
			<NumberInput
				size='md'
				maxW={24}
				defaultValue={90}
				min={20}
				max={190}
				value={bpm}
				onChange={(value) => handleBPM(value)}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			<Button
				leftIcon={isPlaying ? <Icon icon='akar-icons:pause' /> : <Icon icon='akar-icons:play' />}
				colorScheme='blue'
				letterSpacing='wide'
				variant='outline'
				onClick={() => togglePlay()}
			>
				{isPlaying ? 'Pause' : 'Start'}
			</Button>
		</>
	);
}
