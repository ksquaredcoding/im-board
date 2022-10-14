import { Account } from './Account.js';

export class Group {
  constructor(data) {
    this.id = data.id;
    this.createdAt = data.createdAt;

this.creator = new Account(data.creator)
this.creatorId=data.creatorId
  this.coverImg=data.coverImg
    this.name = data.name;
    this.groupMemberIds = data.groupMemberIds;
  }
}
