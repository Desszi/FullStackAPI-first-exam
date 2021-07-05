/**
 * 1. Objektumok tömbjéből egy elem kiválasztása az id alapján.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {Number} id az id, ami alapján keresünk a tömbben
 * @returns a tömbnek az az eleme, amelynek az id -je megegyezik a kapottal
 */
const get = (list = [], id = 0) => {
    return list.find(element => element.id === id);
};

/**
 * 2. Új objektum beszúrása a kapott tömbbe.
 * @param {Array} list egy objektumokat tartalmazó tömb
 * @param {*} entity egy objektum, amelyet be szeretnénk szúrni a tömbbe
 * @returns a létrehozott, beszúrt és id -vel ellátott objektum
 */
const create = (list = [], entity = null) => {
    const lastId = list[list.length -1 ].id + 1;
    const newObject = {...entity, lastId};
    list.push(newObject);
    return newObject; 
};

/**
 * 3. Egy meglévő objektum frissítése a kapott tömbben.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns a frissített objektum ha sikerült a frissítés, egyébként false
 */
const update = (list = [], entity = {}) => {
   if (list.length <1 || !entity.id) {
       return false;
   }

   const updateObjectIndex = list.findIndex(element => element.id === entity.id);
   list[updateObjectIndex] = {...list[updateObjectIndex], ...entity};

   return list[updateObjectIndex];
};

/**
 * 4. Eltávolít a paraméterként kapott tömbből egy elemet az id alapján.
 * @param {Array} list objektumok tömbje
 * @param {*} entity egy id tulajdonsággal rendelkező objektum
 * @returns true ha sikeres volt a törlés, egyébként false
 */
const remove = (list = [], id = 0) => {
    if (list.length <1 || !id) {
        return false;
    }
    const removeObjectIndex = list.findIndex(element => element.id === id);
    list.splice(removeObjectIndex, 1);
    return true; 
};

/**
 * 5. Exportáld ki a négy függvényt, hogy más fájlokból is elérhetőek legyenek.
 */

module.exports = {
    get,
    create,
    update,
    remove,
};