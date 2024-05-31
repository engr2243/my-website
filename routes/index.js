const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', {
        projects: [
            { title: 'Project 1', description: 'Description 1', image: '/images/project1.png' },
            { title: 'Project 2', description: 'Description 2', image: '/images/project2.png' },
            // Add more projects as needed
        ],
        reviews: [
            { user: 'Client 1', review: 'Great work!' },
            { user: 'Client 2', review: 'Excellent service!' },
            // Add more reviews as needed
        ]
    });
});

module.exports = router;
