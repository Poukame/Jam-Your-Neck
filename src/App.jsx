import { Text, Box, Flex, HStack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AppHeader from './Components/Header';
import RootNoteOption from './Components/RootNoteOption';
import ToneOption from './Components/ToneOption';
import ScaleTypeOption from './Components/ScaleTypeOption';
import Neck from './Components/Neck';
import NotationOption from './Components/NotationOption';
import ShowAllNotesOption from './Components/ShowAllNotesOption';
import RootMarkerOption from './Components/RootMarkerOption';
import { GoSettings, GoSearch, GoInfo } from 'react-icons/go';
import SongSearch from './Components/SongSearch';
import About from './Components/About';

function App() {
	return (
		<Box p='4' minW='800px'>
			<AppHeader />
			<Tabs isFitted variant='enclosed' colorScheme='enclosed-colored' mt='2'>
				<TabList gap='4'>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoSettings />
						<Text ml='10px' letterSpacing='wide'>Options</Text>
					</Tab>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoSearch />
						<Text ml='10px' letterSpacing='wide'>Search Song to Play</Text>
					</Tab>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoInfo />
						<Text ml='10px' letterSpacing='wide'>About</Text>
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
						<SongSearch />
					</TabPanel>
					<TabPanel>
						<About />
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
