export class ActiveBoardGamePrice {
  constructor(data) {
    this.id = data.id
    this.store_name = data.store_name
    this.updated_at_ago = data.updated_at_ago
    this.url = data.url
  }
}