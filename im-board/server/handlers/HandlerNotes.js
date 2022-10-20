import { SocketHandler } from "../utils/SocketHandler";

let lightIsOn = false;

//NOTE make sure to change the class name
export class HandlerNotes extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket); //NOTE STAYS THE SAME
    this.on("TOGGLE_LIGHT", this.toggleLight); //NOTE SOCKET_TEST MAGIC WORD, ANY WORD YOU CHOOSE
  }

  async toggleLight() {
    lightIsOn = !lightIsOn;
    this.socket.emit("LIGHT_STATE", lightIsOn); //NOTE sends the state of the light back to the client who toggled it
  }
}

//NOTE On Client side create new folder named handlers and create a filer within ex.. LightHandler.js
//NOTE import socketService in that folder
//NOTE static method, another way to organize code, don't have to do "new" lightHandler and using it basically as a utlity class
