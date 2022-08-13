const chordsSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#','A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const chordsFlat =  ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab','A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
const majScale = [0, 2, 4, 5, 7, 9, 11];
const minScale = [0, 2, 3, 5, 7, 8, 10];
const majPentatonic = [0, 2, 4, 7, 9]; // remove 4th and 7th
const minPentatonic = [0, 3, 5, 7, 10]; // remove 2nd and 6th

const stepsCalc = minPentatonic
	.map((value, index, array) => {
		if (value - (array[index - 1] || 0) === 2) {
			return 'W';
		} else if (value - (array[index - 1] || 0) === 3) {
			return '1.5';
		}
		return 'H';
	})
	.slice(1);


function getSharpOrFlat(value) {
	return value === 'Sharp' ? chordsSharp : chordsFlat;
}

function getScale(scale, tone) {
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

function calcScale(scaleType, chordsType, rootNote) {
	const startNb = chordsType.indexOf(rootNote);
	const result = [];
	scaleType.forEach((interval) => {
		result.push(chordsType[startNb + interval]);
	});
	return result;
}

// calcScale(getScale(selectedPentaDia, selectedTone), chordsFlat, 'E')

export { getScale, getSharpOrFlat, calcScale, chordsFlat, chordsSharp };

// switch(selectedMode) {
//     case 'Ionian':
//     break;
//     case 'Dorian': modeShift += 7;
//     break;
//     case 'Phrygian': modeShift += 2;
//     break;
//     case 'Lydian': modeShift += -3;
//     break;
//     case 'Mixolydian': modeShift += 7;
//     break;
//     case 'Acolian': modeShift += 7;
//     break;
//     case 'Locrian': modeShift += 7;
//     break;
//     default: modeShift += 0
// }