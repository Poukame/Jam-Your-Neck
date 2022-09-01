import React, { useContext } from 'react';
import { Context } from '../OptionsContext';
import StartMetronomeBtn from './StartMetronomeBtn';
import {
	Flex,
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

function Metronome() {
	const { bpm, handleBPM } = useContext(Context);

	return (
		<>
        <Flex>

			<NumberInput
				size='md'
                mr='2rem'
				maxW='130px'
				defaultValue={90}
				min={20}
				max={190}
				value={`${bpm} BPM`}
				onChange={(value) => handleBPM(value)}
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
					min={20}
					max={190}
					value={bpm}
					onChange={(value) => handleBPM(value)}
                    >
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb fontSize='sm' boxSize='32px' children={bpm} />
				</Slider>
                </Flex>
            <StartMetronomeBtn />
		</>
	);
}

export default Metronome
