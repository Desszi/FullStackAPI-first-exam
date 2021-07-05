/**
 * 1. A fájlok kezeléséhez az fs modul promise alapú verzióját használd.
 */
 const fsp = require('fs').promises;
/**
 * 2. Állítsd be az azonos mappában található .json fájl elérési útját a path 
 * modul join metódusának segítségével.
 */
 const { join } = require('path');

 const jsonPath = join(__dirname, 'db', 'products.json');


/**
 * 3. A jsonPath útvonalon található fájl tartalmát beolvassa és értelmezi, 
 * majd visszaadja a kapott tömböt.
 * @returns objektumok tömbje
 */
const getList = async () => {
    return JSON.parse(await fsp.readFile(jsonPath, "utf-8"));
};

/**
 * 4. A .json fájlban tárolt termékeket olvassa be és adja vissza. 
 * A fájl beolvasását és értelmezését a getList segédfüggvény végzi.
 * 
 * @returns a termékek objektumai egy tömbben
 */
 const getAll = async () => {
     return await getList();
};

module.exports = {
    getAll,
};
