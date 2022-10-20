import { socketService } from "../services/SocketService.js";

export class GroupHandler {
  static EnterGroup(groupId) {
    socketService.emit("ENTER_GROUP", groupId);
  }
  static EnterGroup(groupId) {
    socketService.emit("LEAVE_GROUP", groupId);
  }
}
