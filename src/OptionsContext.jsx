import React, { createContext, useState, useEffect } from 'react';
import {
	getScale,
	getSharpOrFlat,
	calcScale,
	chordsFlat,
	chordsSharp,
} from '../src/assets/scale-function';

const Context = createContext();

function ContextProvider({ children }) {
	const [NOTES, setNOTES] = useState(chordsSharp.slice(0, 12));

	//// SHOW ALL NOTES

	const [showAll, setShowAll] = useState(false)

	function handleClickShowAllNotes() {
		setShowAll(!showAll)
	}


		//// SHOW  ROOT MARKER

		const [showRootMarker, setShowRootMarker] = useState(true)

		function handleClickRootMarker() {
			setShowRootMarker(!showRootMarker)
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

	function handleClickNotation(notation, isSelected) {
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

	function handleClickRootNote(note, isSelected) {
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

	function handleClickScaleType(type, isSelected) {
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

	function handleClickTone(tone, isSelected) {
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

	const [mode, setMode] = useState('Dorian');

	const selectedScaleType = scaleType.find((el) => el.isSelected === true).type;
	const selectedTone = tone.find((el) => el.isSelected === true).tone;
	const selectedNotation = notation.find((el) => el.isSelected === true).notation;
	const selectedRootNote = rootNote.find((el) => el.isSelected === true).note;

	const calculatedScale = calcScale(
		getScale(selectedScaleType, selectedTone),
		getSharpOrFlat(selectedNotation),
		selectedRootNote
	);

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
				handleClickRootMarker
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
