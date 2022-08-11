import React, { useEffect, useState } from 'react';
import {
	SimpleGrid,
	Box,
	Image,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Button,
	Spinner,
	Text
} from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';

export default function SongSearch() {
	const key = import.meta.env.VITE_SONG_KEY_URI;

	const [songResult, setSongResult] = useState(null);
	const [songResultHTML, setSongResultHTML] = useState(null);
	const [value, setValue] = useState('Imagine');
	const [toggleSearch, setToggleSearch] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);
	const [displayRoot, setDisplayRoot] = useState({display: false, rootKey: '', BPM: 0})

	const handleChange = (event) => setValue(event.target.value);

	function handleSubmit(event) {
		event.preventDefault();
		setToggleSearch(!toggleSearch);
	}

	function handleClick(event, ID) {
		event.preventDefault
		fetchRootKey(ID)
	}

	async function fetchRootKey(ID) {
		const url = `https://api.getsongbpm.com/song/?api_key=${key}&id=${ID}`;
		const res = await fetch(url);
		const data = await res.json();
		setDisplayRoot({display: true, rootKey: data.song.key_of, BPM: data.song.tempo})
		console.log(data);
	}

	useEffect(() => {
		async function fetchSong() {
			if (value.length > 0) setIsWaiting(true);
			try {
				const url = `https://api.getsongbpm.com/search/?api_key=${key}&limit=12&type=song&lookup=${value}`;
				const res = await fetch(url);
				const data = await res.json();
				setSongResult(data.search);
				setIsWaiting(false);
			} catch (error) {
				console.log('ff', error);
			}
			// const songID = data.search[0].id
			// fetchRootKey(songID)
		}


		fetchSong();
	}, [toggleSearch]);

	useEffect(() => {
		if (songResult !== null && songResult.length > 0) {
			setSongResultHTML(
				songResult.map((el) => {
					return (
						<Box cursor='pointer' bg='blue.100' key={el.id} onClick={() => handleClick(event, el.id)}>
							<HStack>
								<Image src={el.artist.img} alt='Artist Cover' boxSize='80px' />
								<Box>
									<b>Artist:</b> {el.artist.name}
									<br />
									<b>Title:</b> {el.title}
								</Box>
							</HStack>
						</Box>
					);
				})
			);
		}
	}, [songResult]);

	// console.log('file: SongSearch.jsx ~ line 63 ~ songResult', songResult);

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<InputGroup mb='4'>
					<InputLeftElement
					bottom='0'
						pointerEvents='none'
						children={<GoSearch size='30px' color='gray.300' />}
					/>
					<Input
						value={value}
						onChange={handleChange}
						placeholder='Type a song name here'
						size='lg'
					/>
					<InputRightElement bottom='0' children={<Button height='100%' onClick={(e) => handleSubmit(e)}>></Button>} />
				</InputGroup>
			</form>

			{displayRoot.display && <Text bgColor='yellow' my='4'>This song is played in the key of {displayRoot.rootKey} at {displayRoot.BPM} BPM</Text>}

			<SimpleGrid columns='3' spacing='4'>
				{isWaiting ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' /> :
				 songResultHTML}
			</SimpleGrid>
		</>
	);
}
