const express = require('express')

const teacherRoutes = express.Router()

const { Teacher } = require('../models/Teacher')

teacherRoutes.route('/teachers/').get(async function (req, res) {
  const teachers = await Teacher.find()
  return res.status(200).json(teachers)
})

teacherRoutes.route('/teachers/:id').get(async function (req, res) {
  const { id } = req.params
  const teacher = await Teacher.findById(id)
  return res.status(200).json(teacher)
})

teacherRoutes.route('/teachers/').post(async function (req, res) {
  const newTeacheer = new Teacher({ ...req.body })
  try {
    const insertTeacher = await newTeacheer.save()
    return res.status(201).json(insertTeacher)
  } catch (error) {
    res.status(400)
    return res.send({ message: 'The teacher was not saved in the database'})
  }
})

teacherRoutes.route('/teachers/:id').put(async function (req, res) {
  const { id } = req.params
  try {
    await Teacher.findByIdAndUpdate(id, req.body)
    const updateTeacher = await Teacher.findById(id)
    return res.status(200).json(updateTeacher)
  } catch (error) {
    res.status(400)
    return res.send({ message: 'The teacher was not updated in the database'})
  }
})

teacherRoutes.route('/teachers/:id').delete(async function (req, res) {
  const { id } = req.params
  try {
    const deleteTeacher = await Teacher.findByIdAndDelete(id)
    return res.status(200).json(deleteTeacher)
  } catch (error) {
    res.status(400)
    return res.send({ message: 'The teacher was not deleted in the database'})
  }
})

module.exports = teacherRoutes;
