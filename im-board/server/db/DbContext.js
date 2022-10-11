import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { BoardGameSchema } from "../models/boardgame.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  BoardGame = mongoose.model('BoardGame', BoardGameSchema);
}

export const dbContext = new DbContext()
