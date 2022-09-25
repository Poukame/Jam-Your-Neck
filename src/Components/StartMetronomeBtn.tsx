import React, { useContext } from 'react';
import { Context } from '../OptionsContext';
import { Icon } from '@iconify/react';
import { Button } from '@chakra-ui/react';

function StartMetronomeBtn() {
	const { bpm, isPlaying, togglePlay } = useContext(Context);

	return (
		<Button
			leftIcon={
				isPlaying ? (
					<Icon icon='akar-icons:pause' />
				) : (
					<Icon icon='akar-icons:play' />
				)
			}
			colorScheme='blue'
			letterSpacing='wide'
			variant='outline'
            mt='8'
			onClick={() => togglePlay()}
		>
			{isPlaying ? 'Pause Metronome' : `Start Metronome @ ${bpm} BPM`}
		</Button>
	);
}

export default StartMetronomeBtn;
