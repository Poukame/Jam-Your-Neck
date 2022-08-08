import React from 'react';
import { Text, Flex, Spacer, Switch, useColorMode } from '@chakra-ui/react';
import {MdLightMode, MdModeNight } from 'react-icons/md'

export default function Header() {

	const { colorMode, toggleColorMode } = useColorMode()

	return (
       
		<Flex alignItems='center' bgColor='blue.500' p='2'>
			<Text fontSize='2xl'>KYN</Text>
            <Spacer/>
			<Flex alignItems='center' gap='4' mt='0'>
                <Text flexShrink="0">Install App</Text>
					{colorMode === 'dark' ? <MdLightMode/> : <MdModeNight/>}
					<Switch id='theme-switch' colorScheme='red' onChange={toggleColorMode} />
			</Flex>
		</Flex>
	);
}
