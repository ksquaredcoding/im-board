import mongoose from "mongoose";
import { ObjectId, SCHEMA_OPTIONS } from "../db/DbUtils.js";
const Schema = mongoose.Schema;

export const GroupMemberSchema = new Schema(
  {
    accountId: { type: ObjectId, ref: "Account", required: true },
    groupId: { type: ObjectId, ref: "Group", required: true },
  },
  SCHEMA_OPTIONS
);
GroupMemberSchema.index({ groupId: 1, accountId: 1 }, { unique: true });

GroupMemberSchema.virtual("profile", {
  localField: "accountId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

GroupMemberSchema.virtual("group", {
  localField: "groupId",
  foreignField: "_id",
  justOne: true,
  ref: "Group",
});
