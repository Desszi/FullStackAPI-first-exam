/**
 * 1. Töltsd be a szükséges modulokat a http kérésekhez és a jsonDB getAll 
 * függvényét.
 */
const http = require('http');
const { getAll } = require('./jsonDB')

// 2. Definiáld a port értékét 8080 -ra a port változóban.

const port = 8080;
/**
 * 3. Hozz létre egy http szervert.
 * A szerver get kérés esetén a getAll függvény segítségével lekéri a listát, 
 * majd beállítja a headert, hogy json a tartalom típusa, 
 * végül visszaküldi a kliensnek a listában tárolt adatokat.
 */

const httpServer = http.createServer(async(req, res) => {
    const list = await getAll();
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(list));
});

/**
 * 4. Állítsd be, hogy a szerver figyelje a port változóban definiált portot.
 */ 

httpServer.listen(port, () => {
    console.log(`Server is running: http://127.0.0.1:${port} port`);
})