import { socketService } from '../services/SocketService.js';

export class InboxHandler {
  static UpdateInbox(accountId) {
    socketService.emit('UPDATE_INBOX', accountId);
  }

}
