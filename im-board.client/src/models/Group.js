import { Account } from './Account.js';

export class Group {
  constructor(data) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.groupId = data.groupId;
// this.profile = new Account(data.profile)
this.group=data.group
// this.creator = new Account(data.creator)
    this.coverImg = data.group.coverImg;
    this.name = data.group.name;
    this.groupMemberIds = data.group.groupMemberIds;
  }
}
//  name: { type: String, required: true, maxlength: 50, minlength: 1 },
//     groupMemberIds: [{ type: ObjectId, ref: "Account", require: false }],
//     coverImg: {
//       type: String,
//       required: true,
//       default:
//         "https://roomescapedc.com/wp-content/uploads/2021/01/board-games-background-min-1920x1078.jpg",
//     },
//     creatorId: { type: ObjectId, ref: "Account", required: true },
