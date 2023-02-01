import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL)
}

export const disconnectDB = async () => {
  await mongoose.connection.close()
}