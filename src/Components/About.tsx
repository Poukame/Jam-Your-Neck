import React from 'react';
import { Text, HStack, Heading, Link, Container } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Icon } from '@iconify/react';

export default function About() {
	return (
		<>
			<Container fontSize='xl' ml='0' p='0' maxW='70ch'>
				<Heading size='lg' mb='4'>
					Why this app?
				</Heading>
				<Text mb='4'>
					Hi, I'm Guillaume. I created this app because while playing on backing tracks from Youtube, I was tired of
					searching on Google for an image of the neck with the scale of the track I was playing over.
				</Text>
				<Text mb='4'>
					This app allows you to get the notes on the neck in a couple of clicks. It helped me save time and play more.
					I hope it can help other fellow guitarists as well. Have fun playing scales!
				</Text>
				<Text mb='4' fontWeight='bold'>
					Latest Update: when you install the PWA, your screen won't lock or go into screen saver mode as long as the
					app is open. This means you can play without your screen locking!
				</Text>
				<HStack my='8'>
					<Icon icon='akar-icons:github-fill' width='30' />
					<Link href='https://github.com/Poukame/Jam-Your-Neck' isExternal textDecoration='underline'>
						Code on GitHub <ExternalLinkIcon mx='2px' />
					</Link>
				</HStack>
				<Heading size='lg' mb='4'>
					Limitations
				</Heading>
				<Text mb='4'>
					If you use the app on your smartphone, use it in landscape mode. The guitar neck can't be wrapped, I've done
					my best to make it useable down to 600px width, which should accommodate most nowadays phones.
				</Text>
				<Text mb='4'>
					When searching for a song, you might not always get the result you want. This is due to the API I use.
					Unfortunately, I can't sort the songs by popularity. If you want to find the key of a song, please use the
					link below to GetSongKey.
				</Text>
				<Text mb='4'>
					On smartphone the metronone doesn't work properly. I have no idea why 🤷. If you happen to know please contact
					me.
				</Text>
				<Heading size='lg' mb='4'>
					Credits
				</Heading>
				This app is fetching the songs' data from{' '}
				<Link href='https://getsongkey.com/' isExternal textDecoration='underline'>
					GetSongKey.com <ExternalLinkIcon mx='2px' />
				</Link>{' '}
				API . Thanks to them.
			</Container>
		</>
	);
}
