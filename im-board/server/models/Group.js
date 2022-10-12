import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const GroupSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 50, minlength: 1 },
    groupMemberIds: { type: Array },
    coverImg: {
      type: String,
      required: true,
      default:
        "https://roomescapedc.com/wp-content/uploads/2021/01/board-games-background-min-1920x1078.jpg",
    },
    creatorId: { type: ObjectId, ref: "Account", required: true },
  },
  SCHEMA_OPTIONS
);

GroupSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})