import { connectDB, disconnectDB } from '../database/conn'
import CourseModel from '../database/models/CourseModel'
import { serializeResponse } from '../utils/serializeResponse'


export const createCourse = async (course) => {
  try {
    await connectDB()
    const newCourse = new CourseModel(course)
    await newCourse.save()
    await disconnectDB()

    return serializeResponse(newCourse)

  } catch (error) {
    console.log('Error createCourse: ', error)
    await disconnectDB()
    throw Error('Internal error')
  }
}

export const getCourses = async (limit = 10, page = 1) => {
  try {
    await connectDB()
    const totalCourses = await CourseModel.countDocuments()
    const courses = await CourseModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
    await disconnectDB()

    return {
      courses: serializeResponse(courses),
      totalCourses,
    }

  } catch (error) {
    console.log('Error getCourses: ', error)
    await disconnectDB()
    throw Error('Internal error')
  }
}

export const searchCourses = async (term) => {
  try {
    await connectDB()
    const courses = await CourseModel
      .find({name: new RegExp(term, 'i')})
      .lean()
    await disconnectDB()
    
    return {
      courses: serializeResponse(courses),
      totalCourses: courses.length,
    }

  } catch (error) {
    console.log('Error searchCourses: ', error)
    await disconnectDB()
    throw Error('Internal error')
  }
}