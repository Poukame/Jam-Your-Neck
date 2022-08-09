import React from 'react';
import { Text, Flex, Spacer, Switch, useColorMode } from '@chakra-ui/react';
import {MdLightMode, MdModeNight } from 'react-icons/md'
import {FaGuitar} from 'react-icons/fa'

export default function Header() {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
       
		<Flex alignItems='center'  p='4'>
			<FaGuitar size='30px'/>
			<Text fontSize='3xl' fontWeight='700' ml='4'>Jam Your Neck</Text>
            <Spacer/>
			<Flex alignItems='center' gap='4' mt='0'>
                {/* <Text fontSize='xl' flexShrink="0">Install App</Text> */}
					{colorMode === 'dark' ? <MdLightMode size='1.5em'/> : <MdModeNight size='1.5em'/>}
					<Switch size='lg' id='theme-switch' colorScheme='orange' onChange={toggleColorMode} />
			</Flex>
		</Flex>
	);
}
