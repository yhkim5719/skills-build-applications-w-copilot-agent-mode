import { createApp } from './app.js';
const app = createApp();
const PORT = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
    console.log(`API base URL: ${baseUrl}`);
});
