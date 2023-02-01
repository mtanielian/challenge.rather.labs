import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, emal: ['F', 'M'], required: true },
  email: { type: String, unique: true ,required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'student', 'teacher'], required: true },
  courses: [{ type: 'ObjectId', ref: 'Course' }],
}, 
{ timestamps: true }
)

const UserModel = mongoose.models?.User || mongoose.model('User', UserSchema)
export default UserModel