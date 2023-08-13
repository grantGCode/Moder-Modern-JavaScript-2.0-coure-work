const express = require('express');
const router = express.Router();

const ideas = [
    {
        id: 1,
        text: 'Positive NewsLetter, a newsletter that only shares positive, uplifitng new',
        tag: 'Technology',
        username: 'TonnyStark',
        date: '2022-01-02'
    },
    {
        id: 2,
        text: 'Milk cartion that turns a different clolor to older that your milk is getting',
        tag: 'Inventions',
        username: 'SteveRogers',
        date: '2022-01-02'
    },
    {
        id: 3,
        text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
        tag: 'Sofware',
        username: 'BruceBanner',
        date: '2022-01-02'
    },
];


//Get all Ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas });
});
// Get single idea
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
       return res.status(404).json({ success: false, error: 'Resource not found' });
    }    

    res.json({ success: true, data: idea });
});

//adding an new idea
router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    };

  ideas.push(idea);

    res.json({ success: true, data: idea });
});


module.exports = router;