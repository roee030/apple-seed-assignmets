const express = require('express')
const router = express.Router()
const members = require('../../Members')

const idFilter = req => member => member.id === parseInt(req.params.id);


// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

//Create Member 
router.post('/',(req,res)=>{
    res.send(req.body)
})
module.exports = router;