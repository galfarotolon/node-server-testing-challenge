const express = require('express');

const Students = require('./students-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Students.getAll()
        .then(students => {
            res.status(200).json(students);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get student list' });
        });
});



router.get('/:id', (req, res) => {
    const { id } = req.params;

    Students.findById(id)

        .then(project => {
            if (project) {
                res.json(project);
            } else {
                res.status(404).json({ message: 'Could not find student with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get students' });
        });
});



router.post('/', (req, res) => {
    const data = req.body;

    Students.insert(data)
        .then(newStudent => {
            res.status(201).json(newStudent);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add new Student' });
        });
});


router.delete("/:id", (req, res) => {
    Students.remove(req.params.id)
        .then(count => {
            if (count) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: "not found" });
            }
        })
        .catch(error => next(error));
});

module.exports = router;

