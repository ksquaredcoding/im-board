import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const GameNightSchema = new Schema(
  {
    groupId: { type: ObjectId, ref: "Group", required: true },
    location: { type: String, required: true, minlength: 1, maxlength: 50 },
    gameId: { type: String, required: true, ref: "Game" },
    groupMemberIdsAttending: [
      { type: Object, ref: "GroupMember", required: false },
    ],
    startDate: { type: Date, required: true },
  },
  SCHEMA_OPTIONS
);

GameNightSchema.virtual("group", {
  localField: "groupId",
  foreignField: "_id",
  justOne: true,
  ref: "Group",
});

// GameNightSchema.virtual("profile", {
//   localField: "groupMemberIdsAttending",
//   foreignField: "_id",
//   justOne: true,
//   ref: "Account",
// });
