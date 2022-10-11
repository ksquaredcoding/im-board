import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { BoardGameSchema } from "../models/boardgame.js";
import { GroupSchema } from "../models/Group.js";
import { GroupMemberSchema } from "../models/GroupMember.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  BoardGames = mongoose.model('BoardGame', BoardGameSchema);
  Groups = mongoose.model('Group', GroupSchema);
  GroupMembers = mongoose.model('GroupMember', GroupMemberSchema);
}
// TODO add schemas to DbContext
export const dbContext = new DbContext()
