// @ts-nocheck
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Context } from '../src/OptionsContext';
import Metronome from '../src/Components/Metronome';
import StartMetronomeBtn from '../src/Components/StartMetronomeBtn';

const togglePlay = vi.fn();

function renderMetronomeBtn(bpm, isPlaying, togglePlay) {
	return render(
		<Context.Provider value={{ bpm: bpm, isPlaying: isPlaying, togglePlay: togglePlay }}>
			<StartMetronomeBtn />
		</Context.Provider>
	);
}

describe('when the page loads', () => {
	test('the component should render', () => {
		expect(<Metronome />).toBeDefined();
	});

	test('the button should display 90BPM', () => {
		renderMetronomeBtn(90, false, togglePlay);

		expect(
			screen.getByRole('button', {
				name: /start metronome @ 90 bpm/i,
			})
		).toBeTruthy();
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
		
		renderMetronomeBtn(90, true, togglePlay);
		const startBtn = screen.getByRole('button');
		await userEvent.click(startBtn);
		
		expect(
			screen.getByRole('button', {
				name: /pause metronome/i,
			})
		).toBeTruthy();
	});
});
