const db = require('../db/db');

/**
 * 1. Definiáld a getAll nevű metódust, ami az adatbázis kezelő modulod 
 * getAll metódusát hívja meg és visszaadja az értékét.
 */

const getAll = async () => await db.getAll();

/**
 * 3. Exportáld ki a getAll metódust egy objektumban, hogy más fájlokból is 
 * elérhető legyen.
 */

module.exports = { 
    getAll,
}