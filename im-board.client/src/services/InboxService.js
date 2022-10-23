import { AppState } from "../AppState.js";
import { Inbox } from "../models/Inbox.js";
import { api } from "./AxiosService.js";

class InboxService {
  async getInvites() {
    let id = AppState.account.id;
    console.log(id);
    const res = await api.get(`/api/inbox/${id}`);
    console.log(res.data, "hello");
    AppState.inbox = res.data.map((i) => new Inbox(i));
    console.log(AppState.inbox);
    // return AppState.inbox;
  }
  async deleteInvite(id) {
    const res = await api.delete(`/api/inbox/${id}`);
    console.log(res.data);
    AppState.inbox = AppState.inbox.filter((i) => i.id != id);
  }
}
export const inboxService = new InboxService();
