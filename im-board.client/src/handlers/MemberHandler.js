import { AppState } from "../AppState.js";
import { socketService } from "../services/SocketService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
function toggleMemberOffline(groupMember) {
  const active = AppState.groupMembers.find(
    (m) => m.accountId == groupMember.id
  );
  active.isOnline = false;
  logger.log(active);
  Pop.toast(`${groupMember.profile.name.split("@")[0]} is offline`, "warning");
}
function toggleMemberOnline(groupMember) {
  const active = AppState.groupMembers.find(
    (m) => m.accountId == groupMember.id
  );
  active.isOnline = true;
  logger.log(active);
  Pop.success(`${groupMember.profile.name}} is online`);
}
class MemberHandler {
  constructor() {
    socketService
      .on("userDisconnected", toggleMemberOffline)
      .on("userConnected", toggleMemberOnline);
  }
}
export const memberHandler = new MemberHandler();
