const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const data = await Category.findAll({
    include: Product
  });
  return res.status(200).json(data);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const data = await Category.findByPk(req.params.id, {
    include: Product
  });
  return res.status(200).json(data);
});

router.post('/', (req, res) => {
  // create a new category
  const cat = await Category.create(req.body);
  return res.status(201).json(cat); 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  return res.status(200).send();
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  return res.status(200).send();
});

module.exports = router;
