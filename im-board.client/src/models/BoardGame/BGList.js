import { Account } from "../Account.js"

export class BGList {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.account = new Account(data.account)
    this.accountId = data.accountId
    this.createdAt = data.createdAt
    this.gameId = data.gameId
    this.rating = data.rating
    this.type = data.type
    this.updatedAt = data.updatedAt
  }
}