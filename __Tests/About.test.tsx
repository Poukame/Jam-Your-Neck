import About from '../src/Components/About';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('when About page is rendered user', () => {
	beforeEach(() => {
		render(<About />);
	});

	test('should navigate to Github when link is clicked', async () => {
		const linkGithub = screen.getByRole('link', { name: /github/i });
		await userEvent.click(linkGithub);
		expect(linkGithub).toHaveAttribute('href', 'https://github.com/Poukame/Jam-Your-Neck')
	});

	test('should navigate to GetSongKey when link is clicked', async () => {
		const linkGetSongKey = screen.getByRole('link', { name: /getsongkey/i });
		await userEvent.click(linkGetSongKey);
		expect(linkGetSongKey).toHaveAttribute('href', 'https://getsongkey.com/')
	});

	test('should find Credit section on screen', () => {
		screen.getByText(/Credits/);
	});
});
