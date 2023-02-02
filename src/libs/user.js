import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { connectDB, disconnectDB } from '../database/conn'
import { serializeResponse } from '../utils/serializeResponse'
import UserModel from '../database/models/UserModel'

export const loginUser = async ({ email, password }) => {
  try {
    await connectDB()
    const user = await UserModel.findOne({ email }).lean()
    await disconnectDB()
    if (!user)
      return null
    
    if (!bcrypt.compareSync(password, user.password)) {
      return null
    }

    return serializeResponse(user)
  } catch (error) {
    console.log('Error loginUser: ', error)
    await disconnectDB()
    return null
  }
}


export const registerUser = async ({ email, password, name, lastName, role = 'student', birthDate, gender }) => {
  try {
    await connectDB()
    const user = new UserModel({ 
      name, 
      lastName,
      birthDate,
      email,
      role,
      gender,
      password: bcrypt.hashSync(password)
    })

    await user.save()
    await disconnectDB()

    return serializeResponse(user)

  } catch (error) {
    console.log('Error registerUser: ', error)
    await disconnectDB()
    throw Error('Internal error')
  }
}


export const getUsersByRole = async (role) => {
  try {
    await connectDB()
    const users = await UserModel.find({role}).select('-password').lean()
    await disconnectDB()

    return serializeResponse(users)

  } catch (error) {
    console.log('Error getUsersByRole: ', error)
    await disconnectDB()
    return null
  }
}


export const updateRoleUser = async ({ userId, role }) => {
  if (!mongoose.isObjectIdOrHexString(userId)) {
    throw new Error('Invalid userId')
  }

  try {
    await connectDB()
    await UserModel.findByIdAndUpdate({ _id: userId }, {
      $addToSet: { roles: role } 
    })
    await disconnectDB()

  } catch (error) {
    console.log('Error findByIdAndUpdate: ', error)
    await disconnectDB()
    return null
  }
}