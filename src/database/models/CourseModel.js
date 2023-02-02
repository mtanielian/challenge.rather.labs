import mongoose, { Schema } from 'mongoose'

const CourseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  teacher: { type: 'ObjectId', ref: 'User', required: false },
  students: [{ type: 'ObjectId', ref: 'User' }],
  price: { type: Number, required: true },
  discountedPrice: { type: Number },
  discountRate: { type: Number },
  level: { type: String, required: true, enum: ['0.5','1','1.5','2','2.5','3','3.5','4','4.5','5']},
  levelText: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  duration: { type: Number, required: true },
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date },
  userCreated: { type: 'ObjectId', ref: 'User', required: true },
  userUpdated: { type: 'ObjectId', ref: 'User' },
}, 
{ timestamps: true }
)

const CourseModel = mongoose.models?.Course || mongoose.model('Course', CourseSchema)
export default CourseModel