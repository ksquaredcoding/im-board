import { Account } from './Account.js';

export class Group {
  constructor(data) {
    this.id = data.id;
this.creator=new Account(data.creator)
    this.creatorId = data.creatorId;
    this.coverImg = data.coverImg;
    this.name = data.group.name;
    this.groupMemberIds = data.groupMemberIds;
  }
}
