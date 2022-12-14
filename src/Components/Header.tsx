import { Text, Flex, Spacer, Switch, useColorMode, Button, Tooltip } from '@chakra-ui/react';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import { Icon } from '@iconify/react';
import {IPropsHeader} from '../types'

export default function Header({ windowWidth }:IPropsHeader) {
	const { colorMode, toggleColorMode } = useColorMode();

	let deferredPrompt:any ;

	window.addEventListener('beforeinstallprompt', (e) => {
		deferredPrompt = e;
	});

	async function installApp() {
		if (deferredPrompt !== null) {
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			if (outcome === 'accepted') {
				deferredPrompt = null;
			}
		}
	}

	return (
		<Flex alignItems='center' p='4'>
			<Icon icon='fluent-emoji-flat:guitar' width='50' height='50' />
			<Text fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} fontWeight='700' ml='4'>
				Jam Your Neck
			</Text>
			<Spacer />
			<Flex alignItems='center' gap='4' mt='0'>
				{windowWidth > 600 && (
					<Tooltip
						hasArrow
						label={`This will install this app on your computer or phone and it will behave just like a regular app in its own window.
					You can also click on your browser's menu and click on "Install Jam Your Neck"`}
						bg='blue.400'
					>
						<Button mr='8' onClick={() => installApp()}>
							Install App
						</Button>
					</Tooltip>
				)}
				{colorMode === 'dark' ? <MdLightMode size='1.5em' /> : <MdModeNight size='1.5em' />}
				<Switch
					aria-label='Click this toggle to switch between light and dark mode'
					size='lg'
					id='theme-switch'
					colorScheme='orange'
					onChange={toggleColorMode}
				/>
			</Flex>
		</Flex>
	);
}
