import { useState } from 'react';
import {
	Text,
	Box,
	Flex,
	HStack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	keyframes,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AppHeader from './Components/Header';
import RootNoteOption from './Components/RootNoteOption';
import ToneOption from './Components/ToneOption';
import ScaleTypeOption from './Components/ScaleTypeOption';
import Neck from './Components/Neck';
import NotationOption from './Components/NotationOption';
import ShowAllNotesOption from './Components/ShowAllNotesOption';
import RootMarkerOption from './Components/RootMarkerOption';
import SongSearch from './Components/SongSearch';
import About from './Components/About';
import useWindowDimensions from './assets/WindowSizeHook';
import NoteRandomizer from './Components/NoteRandomizer';
import Metronome from './Components/Metronome';
import { Icon } from '@iconify/react';
import {requestWakeLock, handleVisibilityChange} from './assets/pwaPreventScreenLock' 

const animationKeyframes = keyframes`
  100% { opacity: 1 }
  75% { opacity: 0 }
`;

const animation = `${animationKeyframes} 2s infinite both;`;

function App() {
	// Request a screen wake lock…
	requestWakeLock();
	document.addEventListener('visibilitychange', handleVisibilityChange);
	// END OF PWA CODE

	const { width } = useWindowDimensions();
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<Box p='4' maxW='97%' mx='auto'>
			<AppHeader windowWidth={width} />
			<Tabs isFitted variant='enclosed' colorScheme='enclosed-colored' mt='2' onChange={(index) => setTabIndex(index)}>
				<TabList gap='4' flexWrap='wrap'>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100' flexWrap='wrap'>
						<Icon icon='akar-icons:settings-vertical' inline={true} />
						<Text ml='10px' letterSpacing='wide'>
							Options
						</Text>
					</Tab>

					<Tab
						color='black'
						_selected={{ color: 'white', bg: 'orange.300' }}
						bg='orange.100'
						flexWrap='wrap'
						alignItems='flex-end'
					>
						<Icon icon='fad:random-2dice' inline={true} width='35' />
						<Text ml='10px' letterSpacing='wide'>
							Note Randomizer
						</Text>
					</Tab>
					<Tab
						color='black'
						_selected={{ color: 'white', bg: 'orange.300' }}
						bg='orange.100'
						flexWrap='wrap'
						alignItems='flex-end'
					>
						<Icon icon='fad:metronome' inline={true} width='30' />
						<Text ml='10px' letterSpacing='wide'>
							Metronome
						</Text>
					</Tab>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100' flexWrap='wrap'>
						<Icon icon='ant-design:search-outlined' inline={true} width='25' />
						<Text ml='10px' letterSpacing='wide'>
							Find Song Key
						</Text>
					</Tab>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100' flexWrap='wrap'>
						<Icon icon='akar-icons:info' inline={true} />
						<Text ml='10px' letterSpacing='wide'>
							About
						</Text>
					</Tab>
				</TabList>

				<TabPanels mb='8'>
					<TabPanel>
						<RootNoteOption />
						<Flex gap='8' rowGap={{ base: '2', md: '4', lg: '8' }} mb='8' alignItems='flex-end' flexWrap='wrap'>
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
						<NoteRandomizer />
					</TabPanel>
					<TabPanel>
						<Metronome />
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
				{width > 600 ? (
					tabIndex !== 3 && tabIndex !== 4 && <Neck />
				) : (
					<Alert status='error'>
						<AlertIcon as={motion.div} animation={animation} />
						<AlertTitle>The screen is a bit small!</AlertTitle>
						<AlertDescription>Please use your phone in landscape to view the guitar neck</AlertDescription>
					</Alert>
				)}
			</Flex>
		</Box>
	);
}

export default App;
