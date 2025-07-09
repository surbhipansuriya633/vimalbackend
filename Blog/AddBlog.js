import express from 'express'
import { Blogschema } from './schema.js'

const AddBlog = express.Router()
AddBlog.get('/', async (req, res) => {
    const data = await Blogschema.find()

    res.send(data)
})

AddBlog.post('/', async (req, res) => {
    const data = new Blogschema(req.body)
    await data.save()
    res.status(201).json({ message: "Product added successfully", Blog: data });
})


export default AddBlog;