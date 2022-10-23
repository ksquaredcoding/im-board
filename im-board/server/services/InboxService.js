// @ts-nocheck
import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";

class InboxService {
  // await account.save();
  async clearInbox(recipientId) {
    const inbox = await dbContext.Inbox.find({ recipientId }).remove();
    if (!inbox) {
      throw new BadRequest("your inbox is empty");
    }
    return "inbox cleared";
  }
  async deleteInvite(accountId, id) {
    // debugger;
    const invite = await dbContext.Inbox.findById(id);
    // @ts-ignore
    const account = await dbContext.Account.findById(accountId);
    if (invite.recipientId.toString() !== account.id) {
      throw new BadRequest("not your invite");
    }
    await invite.remove();

    // let hello = await account.inbox.findIndex((p) => p.id == id);
    // account.inbox.splice(hello, 1);
    // await account.save();
    return invite;
  }
  async sendInvite(body) {
    // debugger;
    if (body.senderId == body.recipientId) {
      throw new Forbidden("why are you inviting yourself");
    }
    const invite = await dbContext.Inbox.create(body);
    if (!invite) {
      throw new BadRequest("no invite");
    }
    // let accountInbox = await dbContext.Account.findById(body.recipientId);
    // // @ts-ignore
    // accountInbox.inbox.push(invite);
    // await accountInbox.save();
    return invite;
  }
  async getInbox(accountId) {
    // debugger;

    const box = await dbContext.Inbox.find({ recipientId: accountId })
      .populate("group", "name coverImg")
      .populate("sender", "name picture");

    return box;
  }

  //
}
export const inboxService = new InboxService();
