import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const InboxSchema = new Schema(
  {
    groupId: { type: ObjectId, ref: "Group", required: true },
    creatorId: { type: ObjectId, ref: "Account", required: true },
    toAccountId: { type: ObjectId, ref: "Account", required: true },
    invitation: { type: String, required: true, minlength: 1, maxlength: 500 },
  },
  SCHEMA_OPTIONS
);

InboxSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

InboxSchema.virtual("toAccount", {
  localField: "toAccountId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

InboxSchema.virtual("group", {
  localField: "groupId",
  foreignField: "_id",
  justOne: true,
  ref: "Group",
});
