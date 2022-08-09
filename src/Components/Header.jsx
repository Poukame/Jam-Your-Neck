import React from 'react';
import { Text, Flex, Spacer, Switch, useColorMode } from '@chakra-ui/react';
import {MdLightMode, MdModeNight } from 'react-icons/md'

export default function Header() {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
       
		<Flex alignItems='center' bgColor='blue.500' p='4'>
			<Text fontSize='2xl' fontWeight='700'>Know Your Neck</Text>
            <Spacer/>
			<Flex alignItems='center' gap='4' mt='0'>
                <Text fontSize='xl' flexShrink="0">Install App</Text>
					{colorMode === 'dark' ? <MdLightMode size='1.5em'/> : <MdModeNight size='1.5em'/>}
					<Switch size='lg' id='theme-switch' colorScheme='red' onChange={toggleColorMode} />
			</Flex>
		</Flex>
	);
}
