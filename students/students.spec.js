const supertest = require("supertest");

const studentsRouter = require("./students-router.js");
const studentsModel = require("./students-model.js");

const server = require("../api/server.js");

const db = require("../data/db-config.js");

// it("should user the testing environment", () => {
//     expect(process.env.DB_ENV).toBe("testing");
// });

describe("students-router.js", () => {
    beforeEach(async () => {
        await db("students").truncate();
    });

    describe("GET /", () => {
        it("should return 200 OK", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    // jest assertion
                    expect(res.status).toBe(200);
                });
        });


        it("should return 200 OK from student list", () => {
            return supertest(server)
                .get("/students")
                .then(res => {
                    // jest assertion
                    expect(res.status).toBe(200);
                });
        });

        it("should return api: up", () => { //checks server 
            return supertest(server)
                .get("/")
                .then(res => {
                    // jest assertion
                    expect(res.body.api).toBe("up");
                    expect(res.body).toEqual({ api: "up" });
                });
        });

        it("should return JSON", () => {
            return supertest(server)
                .get("/")
                .then(res => {
                    // jest assertion
                    expect(res.type).toMatch(/json/i);
                });
        });
    });


    describe("POST /students", () => {
        describe('insert()', () => {
            it('should insert provided student into db', async () => {
                await studentsModel.insert([{ name: "Tom Riddle", house: "Slytherin", year: 4 }, { name: "Lucius Malfoy", house: "Slytherin", year: 4 }])
                const student = await db('students');


                expect(student).toHaveLength(2)

                expect(student).toEqual([{ id: 1, name: "Tom Riddle", house: "Slytherin", year: 4 }, { id: 2, name: "Lucius Malfoy", house: "Slytherin", year: 4 }])
            })
        })
    })


    describe("DELETE /students/:id", () => {
        describe('remove()', () => {
            it('should delete student with same id from DB', async () => {
                await studentsModel.remove()
                const student = await db('students');


                expect(student).toHaveLength(0)
                expect(student).toEqual([])


            })
        })
    })
});

