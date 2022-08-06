import React from 'react';
import { Box, Text, Flex, Spacer, HStack, Switch, FormControl, FormLabel } from '@chakra-ui/react';

export default function Header() {
	return (
       
		<Flex alignItems='center' bgColor='gray.100' p='2'>
			<Text fontSize='2xl'>KYN</Text>
            <Spacer/>
			<Flex alignItems='center' gap='4' mt='0'>
                <Text flexShrink="0">Install App</Text>
				<FormControl display='flex' alignItems='center'>
					<FormLabel htmlFor='theme-switch' mb='0'>
						Switch Theme
					</FormLabel>
					<Switch id='theme-switch' />
				</FormControl>
			</Flex>
		</Flex>
	);
}
