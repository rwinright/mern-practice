const router = require('express').Router();

const Item = require('../../models/Item');

// @route  GET api/items
// @desc Get all items
// @access Public

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 }) //Sort descending - Ascending would be 1
    .then(items => res.json(items))
})

// @route  POST api/items
// @desc Post new items
// @access Public

router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

// @route  DELETE api/items
// @desc Delete item
// @access Public

router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted"))
    .catch(err => res.status(404).json({ success: true }))
})


module.exports = router;