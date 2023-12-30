import React, { createContext, useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import click1 from './assets/media/click1.mp3';
import click2 from './assets/media/click2.mp3';
import {
	getScale,
	getSharpOrFlat,
	calcScale,
	chordsFlat,
	chordsSharp,
	stepsCalc,
	generateRandomNotes,
} from './assets/scale-function.js';
import { notation, tone, rootNote, scaleType, calculatedOrAll, duplicateOrNot, WithChildren } from './types';

const initialValue = {
	rootNote: [{ note: 'C', isSelected: true }],
	handleClickRootNote: (note: string, isSelected: boolean) => {},
	scaleType: [{ type: 'Pentatonic', isSelected: true }],
	handleClickScaleType: (type: string, isSelected: boolean) => {},
	tone: [{ tone: 'Minor', isSelected: true }],
	handleClickTone: (tone: string, isSelected: boolean) => {},
	calculatedScale: [''],
	notation: [{ notation: '', isSelected: true }],
	handleClickNotation: (notation: string, isSelected: boolean) => {},
	selectedNotation: '' as notation,
	handleClickShowAllNotes: () => {},
	showAll: false,
	showRootMarker: true,
	handleClickRootMarker: () => {},
	selectedRootNote: '' as rootNote,
	selectedScaleType: '' as scaleType,
	selectedTone: '' as tone,
	scaleIntervals: '',
	nbNotes: 5,
	handleNbRndNotes: (value: number) => {},
	allOrCalculated: '',
	setAllOrCalculated: (() => {}) as Dispatch<SetStateAction<calculatedOrAll>>,
	duplicateOrNot: '',
	setDuplicateOrNot: (() => {}) as Dispatch<SetStateAction<duplicateOrNot>>,
	generatedRandomNotes: [''],
	handleRefresh: () => {},
	handleBPM: (value: number) => {},
	bpm: 0,
	isPlaying: false,
	setIsPlaying: (() => {}) as Dispatch<SetStateAction<boolean>>,
	togglePlay: () => {},
};

const Context = createContext(initialValue);

function ContextProvider({ children }: WithChildren) {
	const [refresh, setRefresh] = useState(true);

	function handleRefresh() {
		setRefresh(!refresh);
	}

	const [NOTES, setNOTES] = useState(chordsSharp.slice(0, 12));

	//// SHOW ALL NOTES

	const [showAll, setShowAll] = useState(false);

	function handleClickShowAllNotes() {
		setShowAll(!showAll);
	}

	//// SHOW  ROOT MARKER

	const [showRootMarker, setShowRootMarker] = useState(true);

	function handleClickRootMarker() {
		setShowRootMarker(!showRootMarker);
	}

	////// NOTATION

	const initialNotation = [
		{
			notation: 'Sharp',
			isSelected: true,
		},
		{
			notation: 'Flat',
			isSelected: false,
		},
	];
	const [notation, setNotation] = useState(initialNotation);

	function handleClickNotation(notation: string, isSelected: boolean) {
		!isSelected &&
			setNotation((el) => {
				return el.map((el) => {
					return el.notation === notation
						? {
								...el,
								isSelected: !isSelected,
						  }
						: {
								...el,
								isSelected: false,
						  };
				});
			});

		!isSelected &&
			setNOTES((prev) =>
				prev[1] === chordsSharp[1] ? chordsFlat.slice(0, 12) : chordsSharp.slice(0, 12)
			);
	}

	useEffect(() => {
		setRootNote((prev) => {
			return prev.map((el, index) => {
				return {
					isSelected: el.isSelected,
					note: NOTES[index],
				};
			});
		});
	}, [NOTES]);

	///// ROOTNOTE

	const initialStateRootNote = NOTES.map((el) => {
		return {
			note: el,
			isSelected: el === 'C' ? true : false,
		};
	});

	const [rootNote, setRootNote] = useState(initialStateRootNote);

	function handleClickRootNote(note: string, isSelected: boolean): void {
		!isSelected &&
			setRootNote((el) => {
				return el.map((el) => {
					return el.note === note
						? {
								...el,
								isSelected: !isSelected,
						  }
						: {
								...el,
								isSelected: false,
						  };
				});
			});
	}

	////// SCALE TYPE

	const initialStateScaleType = [
		{
			type: 'Pentatonic',
			isSelected: true,
		},
		{
			type: 'Diatonic',
			isSelected: false,
		},
	];
	const [scaleType, setScaleType] = useState(initialStateScaleType);

	function handleClickScaleType(type: string, isSelected: boolean) {
		!isSelected &&
			setScaleType((el) => {
				return el.map((el) => {
					return el.type === type
						? {
								...el,
								isSelected: !isSelected,
						  }
						: {
								...el,
								isSelected: false,
						  };
				});
			});
	}

	///// TONE

	const initialStateTone = [
		{
			tone: 'Minor',
			isSelected: true,
		},
		{
			tone: 'Major',
			isSelected: false,
		},
	];
	const [tone, setTone] = useState(initialStateTone);

	function handleClickTone(tone: string, isSelected: boolean) {
		!isSelected &&
			setTone((el) => {
				return el.map((el) => {
					return el.tone === tone
						? {
								...el,
								isSelected: !isSelected,
						  }
						: {
								...el,
								isSelected: false,
						  };
				});
			});
	}

	/// Randomizer Options

	const [nbNotes, setNbNotes] = useState(5);
	const handleNbRndNotes = (value: number) => setNbNotes(value);

	const [allOrCalculated, setAllOrCalculated] = useState<calculatedOrAll>('all');

	const [duplicateOrNot, setDuplicateOrNot] = useState<duplicateOrNot>('noDuplicate');

	/// Metronome option

	const timerID:any = useRef<NodeJS.Timer>();

	const [bpm, setBpm] = useState(90);
	const [isPlaying, setIsPlaying] = useState(false);

	let count = 0;
	let beatsPerMeasure = 4;

	function handleBPM(value: number) {
		if (isPlaying) {
			clearInterval(timerID.current);
			timerID.current = setInterval(playClicks, (60 / bpm) * 1000);
			count = 0;
			setBpm(value);
		} else {
			setBpm(value);
		}
	}

	function togglePlay() {
		if (isPlaying) {
			clearInterval(timerID.current);
			setIsPlaying(false);
		} else {
			setIsPlaying(true);
			timerID.current = setInterval(playClicks, (60 / bpm) * 1000);
		}
	}

	function playClicks() {
		const clickA = new Audio(click1);
		const clickB = new Audio(click2);
		if (count === 0) {
			clickB.currentTime = 0;
			clickB.play();
			setTimeout(() => {
				clickB.pause();
			}, 100);
		} else {
			clickA.currentTime = 0;
			clickA.play();
			setTimeout(() => {
				clickA.pause();
			}, 100);
		}
		count = (count + 1) % beatsPerMeasure;
	}

	/// Final Variables

	const selectedScaleType = scaleType.find((el) => el.isSelected === true)?.type as scaleType;
	const selectedTone = tone.find((el) => el.isSelected === true)?.tone as tone;
	const selectedNotation = notation.find((el) => el.isSelected === true)?.notation as notation;
	const selectedRootNote = rootNote.find((el) => el.isSelected === true)?.note as rootNote;
	const scaleIntervals = stepsCalc(getScale(selectedScaleType, selectedTone));

	const calculatedScale = calcScale(
		getScale(selectedScaleType, selectedTone),
		getSharpOrFlat(selectedNotation),
		selectedRootNote
	);

	const generatedRandomNotes = generateRandomNotes(
		nbNotes,
		allOrCalculated,
		duplicateOrNot,
		selectedNotation,
		calculatedScale
	) as string[];

	return (
		<Context.Provider
			value={{
				rootNote,
				handleClickRootNote,
				scaleType,
				handleClickScaleType,
				tone,
				handleClickTone,
				calculatedScale,
				notation,
				handleClickNotation,
				selectedNotation,
				handleClickShowAllNotes,
				showAll,
				showRootMarker,
				handleClickRootMarker,
				selectedRootNote,
				selectedScaleType,
				selectedTone,
				scaleIntervals,
				nbNotes,
				handleNbRndNotes,
				allOrCalculated,
				setAllOrCalculated,
				duplicateOrNot,
				setDuplicateOrNot,
				generatedRandomNotes,
				handleRefresh,
				handleBPM,
				bpm,
				isPlaying,
				setIsPlaying,
				togglePlay,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
