import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { ContextProvider } from './OptionsContext';
import theme from './assets/theme'
import { ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider value={theme}>
			<ContextProvider>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</ContextProvider>
		</ChakraProvider>
	</React.StrictMode>
);
