const express = require('express')

const studentRoutes = express.Router()

const { Student } = require('../models/Student')

studentRoutes.route('/students/').get(async function (req, res) {
  const students = await Student.find()
  return res.status(200).json(students)
})

studentRoutes.route('/students/:id').get(async function (req, res) {
  const { id } = req.params
  const student = await Student.findById(id)
  return res.status(200).json(student)
})

studentRoutes.route('/students/').post(async function (req, res) {
  const newStudent = new Student({ ...req.body })
  try {
    const insertStudent = await newStudent.save()
    return res.status(201).json(insertStudent)
  } catch (error) {
    res.status(400)
    return res.send({ message: 'The student was not saved in the database' })
  }
})

studentRoutes.route('/students/:id').put(async function (req, res) {
  const { id } = req.params
  console.log(req.body)
  console.log()
  try {
    await Student.findByIdAndUpdate(id, req.body)
    const updateStudent = await Student.findById(id)
    return res.status(200).json(updateStudent)
  } catch (error) {
    console.log(error);
    res.status(400)
    return res.send({ message: 'The student was not updated in the database' })
  }
})

studentRoutes.route('/students/:id').delete(async function (req, res) {
  const { id } = req.params
  try {
    const deleteStudent = await Student.findByIdAndDelete(id)
    return res.status(200).json(deleteStudent)
  } catch (error) {
    res.status(400)
    return res.send({ message: 'The student was not deleted in the database' })
  }
})

module.exports = studentRoutes
