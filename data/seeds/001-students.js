exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("students").insert([
    { name: "Harry Potter", house: "Gryffindor", year: 6 },
    { name: "Hermione Granger", house: "Gryffindor", year: 6 },
    { name: "Ronald Weasley", house: "Gryffindor", year: 6 },
    { name: "Draco Malfoy", house: "Slytherin", year: 6 },


  ]);
};
