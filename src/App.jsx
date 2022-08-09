import { useState } from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';
import Header from './Components/Header';
import RootNoteOption from './Components/RootNoteOption';
import ToneOption from './Components/ToneOption';
import ScaleTypeOption from './Components/ScaleTypeOption';
import Neck from './Components/Neck';
import NotationOption from './Components/NotationOption';
import ShowAllNotesOption from './Components/ShowAllNotesOption';
import RootMarkerOption from './Components/RootMarkerOption';

function App() {
	return (
		<Box maxW='100%' p='4'>
			<Header />
			<Flex direction='column' gap='6'>
				<RootNoteOption />
				<Flex gap='8' mb='8' alignItems='flex-end'>
					<ScaleTypeOption />
					<ToneOption />
					<NotationOption />
					<HStack>
						<ShowAllNotesOption />
						<RootMarkerOption />
					</HStack>
				</Flex>
				<Neck />
			</Flex>
		</Box>
	);
}

export default App;
