import { Schema, model } from "mongoose";

const FocosTimeSchema = new Schema(
  {
    timeFrom: Date,
    timeTo: Date,
    userId: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)
export const focusTimeModel = model('FocusTime', FocosTimeSchema)