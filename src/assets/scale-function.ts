import { notation, tone, rootNote, scaleType } from '../types';
import shuffle from "./shuffleArray";

const chordsSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#','A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const chordsFlat =  ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab','A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
const majScale = [0, 2, 4, 5, 7, 9, 11];
const minScale = [0, 2, 3, 5, 7, 8, 10];
const majPentatonic = [0, 2, 4, 7, 9]; // remove 4th and 7th
const minPentatonic = [0, 3, 5, 7, 10]; // remove 2nd and 6th

function stepsCalc(scaleType:number[]): string {
	const logicPenta = scaleType.every((val, index) => val === minPentatonic[index]);
	const logicDia = scaleType.every((val, index) => val === minScale[index]);

	if (scaleType.length === 5 && logicPenta) {
		return '1.5 W W 1.5 W';
	} else if (scaleType.length === 5 && !logicPenta) {
		return 'W W 1.5 W 1.5';
	} else if (scaleType.length === 7 && logicDia) {
		return 'W H W W H W W';
	}
	return 'W W H W W W H';
}

function getSharpOrFlat(value:notation):string[] {
	return value === 'Sharp' ? chordsSharp : chordsFlat;
}

function getScale(scale:scaleType, tone:tone): number[] {
	if (scale === 'Diatonic') {
		if (tone === 'Major') {
			return majScale;
		}
		return minScale;
	} else if (tone === 'Major') {
		return majPentatonic;
	}
	return minPentatonic;
}

function calcScale(scaleType:number[], chordsType:string[], rootNote:rootNote):string[] {
	const startNb = chordsType.indexOf(rootNote);
	const result:string[] = [];
	scaleType.forEach((interval) => {
		result.push(chordsType[startNb + interval]);
	});
	return result;
}


function generateRandomNotes(nbNotes:number, allOrCalculated:string, duplicateOrNot:string, selectedNotation:notation, calculatedScale:string[]) {
	let array = []

	if(allOrCalculated === 'all') {
		array = (selectedNotation === 'Sharp') ? chordsSharp : chordsFlat
	} else {
		array = calculatedScale
	}
	
	const notesArray = new Array(...array).slice(0, 12)

    let result = []
	
	if(duplicateOrNot === 'noDuplicate') {
		
		for (let i = 0; i < nbNotes; i++) { 
			shuffle(notesArray)
			result.push(notesArray.pop())        
		}
	} else {

		for (let i = 0; i < nbNotes; i++) { 
			shuffle(notesArray)
			result.push(notesArray[0])    
		}
	}

    return result.filter(notes => notes !== undefined)
}


export { getScale, getSharpOrFlat, calcScale, stepsCalc, generateRandomNotes, chordsFlat, chordsSharp };
