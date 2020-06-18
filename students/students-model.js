const db = require("../data/db-config.js");

module.exports = {
    insert,
    remove,
    getAll,
    findById,
};

function insert(student) {
    return db("students")
        .insert(student, "id")
        .then(([id]) => {
            return findById(id);
        });
}


function remove(id) {
    return db('students')
        .where('id', Number(id))
        .del();
}
function getAll() {
    return db("students");
}

function findById(id) {
    return db("students").where({ id }).first();
}
