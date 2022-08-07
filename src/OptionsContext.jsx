import React, { createContext, useState } from 'react';
import { getScale, getSharpOrFlat, calcScale } from '../src/assets/scale-function';

const Context = createContext();

function ContextProvider({ children }) {
	////// ROOT NOTE

	const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

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

	///// TONE

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

	const [sharpOrFlat, setSharpOrFlat] = useState('Sharp');

	const selectedRootNote = rootNote.find((el) => el.isSelected === true).note;
	const selectedScaleType = scaleType.find((el) => el.isSelected === true).type;
	const selectedTone = tone.find((el) => el.isSelected === true).tone;

	const calculatedScale = calcScale(
		getScale(selectedScaleType, selectedTone),
		getSharpOrFlat(sharpOrFlat),
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
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
