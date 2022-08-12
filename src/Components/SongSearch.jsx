import React, { useEffect, useState } from 'react';
import {
	SimpleGrid,
	Box,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Button,
	Spinner,
	Text,
	Link,
	Flex,
} from '@chakra-ui/react';
import { ExternalLinkIcon, AddIcon } from '@chakra-ui/icons';
import { Icon } from '@iconify/react';

export default function SongSearch() {
	const key = import.meta.env.VITE_SONG_KEY_URI;

	const [songResult, setSongResult] = useState(null);
	const [songResultHTML, setSongResultHTML] = useState(null);
	const [searchQuery, setSearchQuery] = useState(null);
	const [isError, setIsError] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);
	const [displayRoot, setDisplayRoot] = useState({
		display: false,
		rootKey: '',
		BPM: 0,
		artist: '',
		title: '',
		searchString: '',
	});

	const { title, artist, BPM, rootKey, searchString } = displayRoot;
	const handleChange = (event) => setSearchQuery(event.target.value);


	function handleSubmit(event) {
		event.preventDefault();

		if (searchQuery.trim() !== '' && searchQuery !== null && searchQuery !== '' && !(/^[\W]+/gi).test(searchQuery)) {
			setDisplayRoot({ ...displayRoot, display: false });
			setToggleSearch(!toggleSearch);
		}
	}

	function handleClick(event, ID) {
		event.preventDefault;
		fetchRootKey(ID);
	}

	async function fetchRootKey(ID) {
		setIsError(false);
		try {
			const url = `https://api.getsongbpm.com/song/?api_key=${key}&id=${ID}`;
			const res = await fetch(url);
			const data = await res.json();
			setDisplayRoot({
				display: true,
				rootKey: data.song.key_of,
				BPM: data.song.tempo,
				artist: data.song.artist.name,
				title: data.song.title,
				searchString: (data.song.artist.name + ' ' + data.song.title).replaceAll(' ', '+'),
			});
		} catch (error) {
			setIsError(true);
		}
	}

	useEffect(() => {
		async function fetchSong() {
			if (searchQuery.length > 0 || searchQuery !== null)
			setIsError(false);
			setIsWaiting(true);
			try {
				const url = `https://api.getsongbpm.com/search/?api_key=${key}&limit=12&type=song&lookup=${searchQuery}`;
				const res = await fetch(url);
				const data = await res.json();
				setSongResult(data.search);
				setIsWaiting(false);
			} catch (error) {
				setIsWaiting(false);
				setIsError(true);
			}
		}
		fetchSong();
	}, [toggleSearch]);

	useEffect(() => {
		if (songResult !== null && songResult.length > 0) {
			setSongResultHTML(
				songResult.map((el) => {
					return (
						<Box
							cursor='pointer'
							borderRadius='8'
							border='2px solid'
							borderColor='orange.200'
							overflow='hidden'
							key={el.id}
							onClick={() => handleClick(event, el.id)}
						>
							<Flex alignItems='center' gap='4' justifyContent='center'>
								{el.artist.img ? (
									<Image src={el.artist.img} alt='Artist Cover' boxSize='80px' />
								) : (
									<Icon icon='emojione:bust-in-silhouette' width='80' />
								)}
								<Box mr='auto' p='2'>
									<b>Artist:</b> {el.artist.name}
									<br />
									<b>Title:</b> {el.title}
								</Box>
								<AddIcon mr='4' />
							</Flex>
						</Box>
					);
				})
			);
		}
	}, [songResult]);

	const rootKeyandSearchHTML = (
		<Text p='4' my='4' borderRadius='8' bgColor='orange.400' fontSize='xl'>
			{rootKey !== 'm'
				? `'${title}' by ${artist} is played in the key of ${rootKey} at ${BPM} BPM. `
				: `Sorry, the key of this song hasn't been found. `}

			<Link
				href={`https://www.youtube.com/results?search_query=${searchString}`}
				isExternal
				textDecoration='underline'
			>
				Listen to it on YouTube <ExternalLinkIcon mx='2px' />
			</Link>
		</Text>
	);

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<InputGroup mb='4'>
					<InputLeftElement
						bottom='0'
						pointerEvents='none'
						height='100%'
						children={<Icon icon='carbon:search' width='30' />}
					/>
					<Input
						value={searchQuery}
						onChange={handleChange}
						placeholder='Type a song name here'
						size='lg'
						type='text'
						required
					/>
					<InputRightElement
						bottom='0'
						width='fit-content'
						height='100%'
						children={<Button isDisabled={searchQuery !== '' && searchQuery !== null  ? false : true} onClick={(e) => handleSubmit(e)}>Search</Button>}
					/>
				</InputGroup>
			</form>
			{isError && (
				<Text p='4' my='4' borderRadius='8' bgColor='red' fontSize='xl'>
					Sorry 😕, an error occured while connecting to the database. Please try again.
				</Text>
			)}
			{displayRoot.display && rootKeyandSearchHTML}

			<SimpleGrid columns='3' spacing='4'>
				{isWaiting ? (
					<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
				) : (
					songResultHTML
				)}
			</SimpleGrid>
		</>
	);
}
