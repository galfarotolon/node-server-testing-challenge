
exports.up = function (knex) {

    return knex.schema
        .createTable("students", tbl => {
            tbl.increments();

            tbl.string("name", 128).notNullable().index();
            tbl.string("house", 255).notNullable();
            tbl.integer("year").notNullable();

        })


};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("students")

};