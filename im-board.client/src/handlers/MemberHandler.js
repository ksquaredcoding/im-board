import { AppState } from "../AppState.js";
import { socketService } from "../services/SocketService.js";
import Pop from "../utils/Pop.js";
function toggleMemberOffline(groupMember) {
  const active = AppState.groupMembers.find(
    (m) => m.accountId == groupMember.id
  );
  active.isOnline = false;
  Pop.toast(`${groupMember.name} is offline`, "warning");
}
function toggleMemberOnline(groupMember) {
  const active = AppState.groupMembers.find(
    (m) => m.accountId == groupMember.id
  );
  active.isOnline = true;
  Pop.success(`${groupMember.name} is online`);
}
class MemberHandler {
  constructor() {
    socketService
      .on("userDisconnected", toggleMemberOffline)
      .on("userConnected", toggleMemberOnline);
  }
}
export const memberHandler = new MemberHandler();
