export class Inbox {
  constructor(data) {
    this.id = data.id;
    this.accountId = data.toAccountId;
    this.groupId = data.groupId;
    this.groupName = data.group.name;
    this.description = data.description;
    this.senderName = data.creator.name;
  }
}
