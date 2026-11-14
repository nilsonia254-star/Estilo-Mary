// Arquivo exigido pelo celular para instalar o painel como aplicativo.
// Ele NÃO guarda cópia das páginas: tudo continua vindo direto do GitHub,
// então qualquer atualização do código aparece na hora.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
