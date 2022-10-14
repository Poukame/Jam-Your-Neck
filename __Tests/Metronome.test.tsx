import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Context } from '../src/OptionsContext';
import Metronome from '../src/Components/Metronome';
import StartMetronomeBtn from '../src/Components/StartMetronomeBtn';

const togglePlay = vi.fn();
const handleBPM = vi.fn();

function renderMetronome(bpm: number, handleBPM: (value: number) => void) {
	return render(
		// @ts-ignore
		<Context.Provider value={{ bpm, handleBPM }}>
			<Metronome />
		</Context.Provider>
	);
}

function renderMetronomeBtn(bpm: number, isPlaying: boolean, togglePlay: () => void) {
	return render(
		// @ts-ignore
		<Context.Provider value={{ bpm, isPlaying, togglePlay }}>
			<StartMetronomeBtn />
		</Context.Provider>
	);
}

describe('when the page loads', () => {
	test('the play button should render', () => {
		expect(<StartMetronomeBtn />).toBeDefined();
	});

	// test('the slider should be set at 90BPM', () => {
	// 	renderMetronome(90, handleBPM);
	// 	expect(true).toBeTruthy();
	// });

	test('the play button should display 90 BPM', () => {
		renderMetronomeBtn(90, false, togglePlay);

		expect(
			screen.getByRole('button', {
				name: /90 bpm/i,
			})
		).toBeInTheDocument();
	});
});

describe('when <StartMetronomeBtn /> is clicked', () => {
	test('the togglePlay function should fire', async () => {
		renderMetronomeBtn(90, false, togglePlay);
		const startBtn = screen.getByRole('button');
		await userEvent.click(startBtn);

		expect(togglePlay).toHaveBeenCalledTimes(1);
	});

	test('the button text should change to Pause metronome', async () => {
		renderMetronomeBtn(90, false, togglePlay);
		expect(await screen.findByRole('button', { name: /90 bpm/i })).toBeInTheDocument();
		
		renderMetronomeBtn(90, true, togglePlay);
		expect(await screen.findByRole('button', { name: /pause metronome/i })).toBeInTheDocument();
	});
});
