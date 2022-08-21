const chordsSharp = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#','A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const chordsFlat =  ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab','A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
const majScale = [0, 2, 4, 5, 7, 9, 11];
const minScale = [0, 2, 3, 5, 7, 8, 10];
const majPentatonic = [0, 2, 4, 7, 9]; // remove 4th and 7th
const minPentatonic = [0, 3, 5, 7, 10]; // remove 2nd and 6th

function stepsCalc(scaleType) {
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

export { getScale, getSharpOrFlat, calcScale, stepsCalc, chordsFlat, chordsSharp };
