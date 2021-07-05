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
 * 4. A kapott tömböt json formátumra alakítja és beleírja a jsonPath útvonalon 
 * található fájlba.
 * @param {Array} list objektumok tömbje
 * @returns 
 */
const saveList = async (list = []) => {
    await fsp.writeFile(jsonPath, JSON.stringify(list, null, 4), 'utf-8');
    return true;
};

/**
 * 5. Frissíti az id alapján kiválasztott entitást és visszaírja a .json fájlba.
 * A .json állomány írásához a saveList segédfüggvényt használd.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = async (entity = {}) => {

    const list = await getList();

    if (list.length <1 || !entity.id) {
        return false;
    }
    
    const updateObjectIndex = list.findIndex(element => element.id === entity.id);
    list[updateObjectIndex] = {...list[updateObjectIndex], ...entity};
    await saveList(list);
    return list[updateObjectIndex];
};

module.exports = {
    update,
};
