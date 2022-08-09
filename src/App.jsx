import { Text, Box, Flex, HStack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from './Components/Header';
import RootNoteOption from './Components/RootNoteOption';
import ToneOption from './Components/ToneOption';
import ScaleTypeOption from './Components/ScaleTypeOption';
import Neck from './Components/Neck';
import NotationOption from './Components/NotationOption';
import ShowAllNotesOption from './Components/ShowAllNotesOption';
import RootMarkerOption from './Components/RootMarkerOption';
import { GoSettings, GoSearch } from 'react-icons/go';

function App() {
	return (
		<Box p='4' minW='800px'>
			<Header />
			<Tabs isFitted variant='enclosed' colorScheme='enclosed-colored' mt='2' >
				<TabList>
					<Tab  _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoSettings />
						<Text ml='10px' letterSpacing='wide'>Options</Text>
					</Tab>
					<Tab _selected={{ color: 'white', bg: 'orange.300' }} >
						<GoSearch />
						<Text ml='10px' letterSpacing='wide'>Search Song to Play</Text>
					</Tab>
				</TabList>

				<TabPanels mb='8'>
					<TabPanel>
						<RootNoteOption />
						<Flex gap='8' mb='8' alignItems='flex-end' flexWrap='wrap' >
							<ScaleTypeOption />
							<ToneOption />
							<NotationOption />
							<HStack>
								<ShowAllNotesOption />
								<RootMarkerOption />
							</HStack>
						</Flex>
					</TabPanel>
					<TabPanel>
						<p>Coming Soon</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
			<Flex direction='column' gap='6'>
				<Neck />
			</Flex>
		</Box>
	);
}

export default App;
