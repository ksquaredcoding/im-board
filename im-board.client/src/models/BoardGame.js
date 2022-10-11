export class BoardGame {


  constructor(data) {

this.id=data.id
this.rating=data.rating
this.coverImg = data.images.original;
this.name=data.name
this.coverImg =
this.description_preview=data.description_preview//not text but HTML
this.categories=data.categories //is array
this.faq = data.faq // not text but HTML
this.official_url = data.official_url
this.min_age=data.min_age
this.name = data.name
this.playtime=data.playtime
this.players = data.players
this.price = data.price
this.primary_publisher=data.primary_publisher
this.year_published = data.year_published
this.average_user_rating=data.average_user_rating
this.average_learning_complexity = data.average_learning_complexity
  }

}