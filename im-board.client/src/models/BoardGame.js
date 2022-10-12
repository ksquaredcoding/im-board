export class BoardGame {


  constructor(data) {

    this.id = data.id
    this.rating = data.average_user_rating
    // this.coverImg = data.images.original;
    this.name = data.name
    this.coverImg = data.images.original
    this.description_preview = data.description_preview//not text but HTML
    this.description = data.description
    this.categories = data.categories //is array
    this.faq = data.faq // not text but HTML
    this.official_url = data.official_url
    this.rules_url = data.rules_url
    this.min_age = data.min_age
    this.name = data.name
    this.playtime = data.playtime
    this.players = data.players
    this.price = data.price
    this.primary_publisher = data.primary_publisher.name
    this.year_published = data.year_published
    this.average_user_rating = data.average_user_rating
    this.average_learning_complexity = data.average_learning_complexity
    this.video_links = data.video_links
    this.artists = data.artists
    this.commentary = data.commentary
  }

}