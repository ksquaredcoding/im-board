import { Account } from "./Account.js"

export class GroupChat {


  constructor(data) {
this.id = data.id
this.groupId=data.groupId
this.creatorId=data.creatorId
this.body=data.body
this.creator = new Account(data.creator)
  }

}