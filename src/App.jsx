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
	keyframes
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
import { GoSettings, GoSearch, GoInfo } from 'react-icons/go';
import SongSearch from './Components/SongSearch';
import About from './Components/About';
import useWindowDimensions from './assets/WindowSizeHook';


const animationKeyframes = keyframes`
  0% {  }
  50% {  }
  100% { opacity: 1 }
  25% {  }
  75% { opacity: 0 }
`;

const animation = `${animationKeyframes} 2s infinite both;`;

function App() {
	const { width } = useWindowDimensions();

	return (
		<Box p='4' maxW='97%' mx='auto'>
			<AppHeader />
			<Tabs isFitted variant='enclosed' colorScheme='enclosed-colored' mt='2'>
				<TabList gap='4'>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoSettings />
						<Text ml='10px' letterSpacing='wide'>
							Options
						</Text>
					</Tab>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoSearch />
						<Text ml='10px' letterSpacing='wide'>
							Find Song Key
						</Text>
					</Tab>
					<Tab color='black' _selected={{ color: 'white', bg: 'orange.300' }} bg='orange.100'>
						<GoInfo />
						<Text ml='10px' letterSpacing='wide'>
							About
						</Text>
					</Tab>
				</TabList>

				<TabPanels mb='8'>
					<TabPanel>
						<RootNoteOption />
						<Flex
							gap='8'
							rowGap={{ base: '2', md: '4', lg: '8' }}
							mb='8'
							alignItems='flex-end'
							flexWrap='wrap'
						>
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
				{width > 600 ? (
					<Neck />
				) : (
					<Alert status='error' >
						<AlertIcon as={motion.div} animation={animation}/>
						<AlertTitle>The screen is a bit small!</AlertTitle>
						<AlertDescription>Please use your phone in landscape to view the guitar neck</AlertDescription>
					</Alert>
				)}
			</Flex>
		</Box>
	);
}

export default App;
