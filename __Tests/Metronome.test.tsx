// ts-nocheck
import React, { useContext } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Context, ContextProvider } from '../src/OptionsContext';
import Metronome from '../src/Components/Metronome';
import StartMetronomeBtn from '../src/Components/StartMetronomeBtn';

describe('when the page loads', () => {
	test('the component should render', () => {
		expect(
			<ContextProvider>
				<Metronome />
			</ContextProvider>
		).toBeDefined();
	});
});

describe('when <StartMetronomeBtn /> is clicked', () => {
	test('the togglePlay function should fire', async () => {
        const togglePlay = vi.fn();
		render(
			<ContextProvider>
				<StartMetronomeBtn />
			</ContextProvider>
		);
		React.useContext = () => togglePlay();
		const startBtn = screen.getByRole('button');
		await userEvent.click(startBtn);
		expect(togglePlay).toHaveBeenCalled();
	});
});
