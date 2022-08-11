import React, { useEffect, useState } from 'react';
import {
	SimpleGrid,
	Box,
	Image,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
    Button,
} from '@chakra-ui/react';
import { GoSearch } from 'react-icons/go';

export default function SongSearch() {
	const key = import.meta.env.VITE_SONG_KEY_URI;

	const [songResult, setSongResult] = useState(null);
	const [songResultHTML, setSongResultHTML] = useState(null);
	const [value, setValue] = useState('Imagine');
       
	const handleChange = (event) => setValue(event.target.value);


	useEffect(() => {
        
		async function fetchSong() {
            if(value.length > 0)
			try {
				const url = `https://api.getsongbpm.com/search/?api_key=${key}&limit=12&type=song&lookup=${value}`;
				const res = await fetch(url);
				const data = await res.json();
				setSongResult(data.search);
			}
            catch(error) {
                console.log('ff', error)
            }
			// const songID = data.search[0].id
			// fetchRootKey(songID)
		}

		async function fetchRootKey(ID) {
			console.log('trig');
			const url = `https://api.getsongbpm.com/song/?api_key=${key}&limit=18&id=${ID}`;
			const res = await fetch(url);
			const data = await res.json();
			console.log(data.song.key_of);
		}

		fetchSong();
	}, [value]);

	useEffect(() => {
		if (songResult !== null && songResult.length > 0) {
			setSongResultHTML(
				songResult.map((el) => {
					return (
						<Box bg='blue.100'>
							<HStack>
								<Image src={el.artist.img} alt='Artist Cover' boxSize='70px' />
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

	console.log('file: SongSearch.jsx ~ line 63 ~ songResult', songResult);

	return (
		<>
			<InputGroup mb='4'>
				<InputLeftElement pointerEvents='none' children={<GoSearch size='30px' color='gray.300' />} />
				<Input
					value={value}
					onChange={handleChange}
					placeholder='Type a song name here'
					size='lg'
                    />
			</InputGroup>
			<SimpleGrid columns='3' spacing='4'>
				{songResultHTML}
			</SimpleGrid>
		</>
	);
}
