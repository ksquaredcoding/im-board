import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { socketService } from '../services/SocketService.js';

function toggleMemberOffline(groupMember) {
  const active = AppState.groupMembers.find(
    (g) => g.accountId == groupMember.id
  );
  active.isOnline = false;
  Pop.toast(`${groupMember.email.split('@')[0]} is offline`, 'warning');
}

function toggleMemberOnline(groupMember) {
  const active = AppState.groupMembers.find(
    (g) => g.accountId == groupMember.id
  );
  active.isOnline = true;
  Pop.success(`${groupMember.email.split('@')[0]} is online`);
}

class MemberHandler {
  constructor() {
    socketService
      .on('userDisconnected', toggleMemberOffline)
      .on('userConnected', toggleMemberOnline);
  }
}

export const memberHandler = new MemberHandler();
