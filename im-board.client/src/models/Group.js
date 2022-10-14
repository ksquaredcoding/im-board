import { Account } from './Account.js';

export class Group {
  constructor(data) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.groupId = data.groupId;
// this.profile = new Account(data.profile)
this.group=data.group
// this.creator = new Account(data.creator)
  this.coverImg=data.coverImg
    this.name = data.name;
    this.groupMemberIds = data.groupMemberIds;
  }
}

// coverImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f0a725a-f4cb-40da-8b5b-e68167c5d154/dbac3c9-ac379980-882e-4910-833f-a9ed2a8f8a13.jpg/v1/fill/w_1600,h_747,q_75,strp/warstones_box_art_by_nightblue_art_dbac3c9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ3IiwicGF0aCI6IlwvZlwvNWYwYTcyNWEtZjRjYi00MGRhLThiNWItZTY4MTY3YzVkMTU0XC9kYmFjM2M5LWFjMzc5OTgwLTg4MmUtNDkxMC04MzNmLWE5ZWQyYThmOGExMy5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7324Zi2naxUsv_nWwpbFI_emlfvZrfyt5AQV4VZRfgc';
// createdAt: '2022-10-13T18:18:11.644Z';
// creatorId: '63484f66033597ebc43c5e5a';
// groupMemberIds: ['63484f66033597ebc43c5e5a'];
// id: '63485663901c93d70bdc7d64';
// name: 'GAMERS UNITE';
// updatedAt: '2022-10-13T18:18:11.891Z';
// __v: 1;
// _id: '63485663901c93d70bdc7d64';
//  name: { type: String, required: true, maxlength: 50, minlength: 1 },
//     groupMemberIds: [{ type: ObjectId, ref: "Account", require: false }],
//     coverImg: {
//       type: String,
//       required: true,
//       default:
//         "https://roomescapedc.com/wp-content/uploads/2021/01/board-games-background-min-1920x1078.jpg",
//     },
//     creatorId: { type: ObjectId, ref: "Account", required: true },
