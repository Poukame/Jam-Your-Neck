import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { ContextProvider } from './OptionsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<ContextProvider>
				<App />
			</ContextProvider>
		</ChakraProvider>
	</React.StrictMode>
);
