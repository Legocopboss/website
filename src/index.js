import { createRoot } from "react-dom/client";
import { MantineProvider } from '@mantine/core';
import App from "./App";
import "./index.css";
import '@mantine/carousel/styles.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
		<App />
	</MantineProvider>
);