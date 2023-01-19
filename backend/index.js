const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Resource = require('../models/resource');

// Create a new resource
router.post('/', (req, res) => {
  const newResource = new Resource({
    name: req.body.name,
    description: req.body.description
  });
  newResource.save()
    .then(resource => res.json(resource))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get all resources
router.get('/', (req, res) => {
  Resource.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a specific resource by id
router.get('/:id', (req, res) => {
  Resource.findById(req.params.id)
    .then(resource => res.json(resource))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a specific resource by id
router.put('/:id', (req, res) => {
  Resource.findById(req.params.id)
    .then(resource => {
      resource.name = req.body.name;
      resource.description = req.body.description;

      resource.save()
        .then(() => res.json('Resource updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a specific resource by id
router.delete('/:id', (req, res) => {
  Resource.findByIdAndDelete(req.params.id)
    .then(() => res.json('Resource deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));