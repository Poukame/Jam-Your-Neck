// @ts-nocheck
import Header from '../src/Components/Header';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../src/theme';

describe('when the page load', () => {
	test('the header is displayed', () => {
		expect(<Header />).toBeDefined();
	});
});

describe('when the user click the toggle', () => {
	beforeEach(() => {
		render(
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Header />
			</ChakraProvider>
		);
	});
	
	test('the theme should toggle between dark and light', async () => {
		const toggleBtn = screen.getByRole('checkbox');
		expect(toggleBtn).not.toBeChecked()
		await userEvent.click(toggleBtn);
		expect(toggleBtn).toBeChecked()
	});
});
