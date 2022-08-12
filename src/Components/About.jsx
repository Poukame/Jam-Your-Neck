import React from 'react';
import { Text, HStack, Heading, Link, Container } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Icon } from '@iconify/react';

export default function About() {
	return (
		<>
			<Container fontSize='xl' ml='0' p='0' width='70ch'>
				<Text mb='4'>
					Hi, I'm Guillaume. I created this app because while playing on backing tracks from
					Youtube, I was tired of searching on Google for an image of the neck with the scale of the
					track I was playing over.
				</Text>
				<Text mb='4'>This app allows you to get the notes on the neck in a couple of clicks.</Text>
				<Text mb='4'>
					It helped me save time and play more. I hope it can help other fellow guitarists also.
					Have fun playing scales!
				</Text>
				<HStack my='8'>
					<Icon icon='akar-icons:github-fill' width='30' />
					<Link
						href='https://github.com/Poukame/Jam-Your-Neck'
						isExternal
						textDecoration='underline'
					>
						Code on GitHub <ExternalLinkIcon mx='2px' />
					</Link>
				</HStack>
				<Heading size='lg' mb='4'>
					Credits
				</Heading>
				This app is fetching the songs' data from{' '}
				<Link href='https://getsongkey.com/' isExternal textDecoration='underline'>
					GetSongKey.com <ExternalLinkIcon mx='2px' />
				</Link>
				. Thanks to them.
			</Container>
		</>
	);
}
