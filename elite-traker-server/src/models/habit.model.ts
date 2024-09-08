import { Schema, model } from "mongoose";

const HabilSchema = new Schema(
  {
    name: String,
    completedDates: [Date],
    userId: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)
export const habitModel = model('habit', HabilSchema)