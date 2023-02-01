import mongoose, { Schema } from 'mongoose'

const CourseSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  teacher: { type: 'ObjectId', ref: 'User' },
  students: [{ type: 'ObjectId', ref: 'User' }],
  price: { type: Number, required: true },
  priceDiscount: { type: Number },
  discountRate: { type: Number },
  level: { type: String, required: true, enum: ['0.5','1','1.5','2','2.5','3','3.5','4','4.5','5']},
  levelText: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  duration: { type: Number, required: true },
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date }
}, 
{ timestamps: true }
)

const CourseModel = mongoose.models?.Course || mongoose.model('Course', CourseSchema)
export default CourseModel