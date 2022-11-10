import { socketService } from '../services/SocketService.js';

class InboxHandler {
  static UpdateInbox(accountId) {
    socketService.emit("UPDATE_INBOX", accountId);
  }

  constructor() {
    socketService
      .on("userDisconnected", toggleMemberOffline)
      .on("userConnected", toggleMemberOnline);
  }
}


export const inboxHandler = new InboxHandler();
