import Pop from "../utils/Pop";
import { SocketHandler } from "../utils/SocketHandler.js";

class SocketService extends SocketHandler {
  constructor() {
    super(true);
    this.on("error", this.onError);
  }

  onError(e) {
    Pop.toast(e.message, "error");
  }
}

export const socketService = new SocketService();
