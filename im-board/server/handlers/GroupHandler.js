import { SocketHandler } from '../utils/SocketHandler';

export class GroupHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket,true); //NOTE STAYS THE SAME
    this
    .on('ENTER_GROUP', this.enterGroup)
    .on('LEAVE_GROUP', this.leaveGroup);
  }

  enterGroup(groupId) {
    this.socket.join(groupId);
  }
  leaveGroup(groupId) {
    this.socket.leave(groupId);
  }

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload);
  }
}
