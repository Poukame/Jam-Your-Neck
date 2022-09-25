import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ContextProvider } from './OptionsContext';
import theme from './theme'
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ContextProvider>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</ContextProvider>
		</ChakraProvider>
	</React.StrictMode>
);
