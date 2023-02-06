import bcrypt from 'bcryptjs'
import { connectDB, disconnectDB } from '../database/conn'
import UserModel from '../database/models/UserModel'
import { serializeResponse } from '../utils/serializeResponse'

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

export const createUser = async ({ 
  name, lastName, birthDate, gender, 
  email, password, role = 'student'
}) => {
  try {
    await connectDB()
    const user = new UserModel({ 
      name, 
      lastName,
      birthDate,
      gender,
      email,
      password: bcrypt.hashSync(password),
      role
    })

    await user.save()
    await disconnectDB()

    return serializeResponse(user)

  } catch (error) {
    console.log('Error createUser: ', error)
    await disconnectDB()
    throw Error('Internal error')
  }
}

export const getUsersByProp = async ({ prop, value }) => {
  try {
    await connectDB()
    const users = await UserModel.find({ [prop]: value }).select('-password').lean()
    await disconnectDB()
    
    return serializeResponse(users)

  } catch (error) {
    console.log(`Error getUsersByProp - ${prop}: `, error)
    await disconnectDB()
    return null
  }
}

export const getUserById = async (_id) => {
  try {
    await connectDB()
    const users = await UserModel.findById(_id).select('-password').lean()
    await disconnectDB()

    return serializeResponse(users)

  } catch (error) {
    console.log('Error getUserById: ', error)
    await disconnectDB()
    return null
  }
}

export const deleteUserById = async (_id) => {
  try {
    await connectDB()
    const user = await UserModel.findByIdAndDelete(_id)
    await disconnectDB()

    return serializeResponse(user)

  } catch (error) {
    console.log('Error getUsersByRole: ', error)
    await disconnectDB()
    return null
  }
}