import { reactive } from 'vue';

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account | null} */
  activeProfile: null,

  /** @type {import('./models/GroupMembership.js').GroupMemberShip[]} */
  groupMemberShips: [],

  /** @type {import('./models/Group.js').Group[]} */
  groups: [],

  /** @type {import('./models/GroupChat.js').GroupChat[]} */
  groupChats: [],
  /** @type {import('./models/GameNight.js').GameNight[]} */
  groupGameNights: [],

  /** @type {import('./models/GroupMembership.js').GroupMemberShip | null} */
  activeGroup: null,

  /** @type {import('./models/GroupMember.js').GroupMember[]} */
  groupMembers: [],

  /** @type {import('./models/BoardGame/BGList.js').BGList[]} */
  bgLists: [],
  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  boardgames: [],
  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  discountBoardGames: [],

  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame[]} */
  PaginationPendingBoardGames: [],

  /** @type {import('./models/BoardGame/BoardGame.js').BoardGame | null} */
  activeBoardGame: null,

  activeImage: null,

  /** @type {import('./models/BoardGame/ActiveBoardGameImage.js').ActiveBoardGameImage[]} */
  activeBoardGameImages: [],

  /** @type {import('./models/BoardGame/ActiveBoardGameVideo.js').ActiveBoardGameVideo[]} */
  activeBoardGameVideos: [],

  /** @type {import('./models/BoardGame/ActiveBoardGamePrice.js').ActiveBoardGamePrice[]} */
  activeBoardGamePrices: [],

  /** @type {import('./models/BoardGame/ABGReviews.js').ABGReviews[]} */
  activeBoardGameReviews: [],

  /** @type {import('./models/ForumPost.js').ForumPost[]} */
  forumPosts: [],

  /** @type {import('./models/BoardGame/BGCategories&Mechanics.js').BGCategories&Mechanics[]} */
  bgCategories: [],
  /** @type {import('./models/BoardGame/BGCategories&Mechanics.js').BGCategories&Mechanics[]} */
  bgMechanics: [],

  activeCategoryFilters: [],
  activeMechanicsFilters: [],
  categories: [
    { name: 'CardGame', id: 'eX8uuNlQkQ' },
    { name: 'Fantasy', id: 'ZTneo8TaIO' },
    { name: 'Economic', id: 'N0TkEGfEsF' },
    { name: 'Scifi', id: '3B3QpKvXD3' },
    { name: 'City Building', id: 'ODWOjWAJj3' },
    { name: 'Party Game', id: 'X8J7RM6dxX' },
    { name: 'Adventure', id: 'KUBCKBkGxV' },
    { name: 'Bluffing', id: 'PinhJrhnxU' },
    { name: 'Dice', id: 'mavSOM8vjH' },
    { name: 'Horror', id: 'cAIkk5aLdQ' },
    { name: 'Puzzle', id: 'WVMOS3s2pb' },
    { name: 'Cooperative', id: 'ge8pIhEUGE' },
    { name: 'Wargame', id: 'jX8asGGR6o' },
    { name: 'Word game', id: 'rHvAx4hH2f' },
  ],

  order_By: [
    { name: 'rank' },
    { name: 'year_published' },
    { name: 'name' },
    { name: 'min_age' },
    { name: 'min_playtime' },
    { name: 'max_playtime' },
    { name: 'min_players' },
    { name: 'max_players' },
    { name: 'price' },
    { name: 'discount' },
  ],

  articles: [
    {
      name: 'Heres why dice were invented',
      coverImg:
        'https://www.grunge.com/img/gallery/heres-why-dice-were-invented/intro-1656601577.webp',
      url: 'https://www.grunge.com/912859/heres-why-dice-were-invented/',
      credit: '',
    },
    {
      name: 'The Complete History of Board Games',
      coverImg:
        'https://geekgeargalore.com/wp-content/uploads/2019/11/Ancient-Dice.jpg',
      url: 'https://geekgeargalore.com/wp-content/uploads/2019/11/Ancient-Dice.jpg',
      credit: 'Byron Nov 17, 2019',
    },

    {
      name: '6 Fun Facts About the Original Jumanji',
      coverImg:
        'https://www.sheknows.com/wp-content/uploads/2018/08/pd50yqoqpnwixdnavxuf.jpeg',
      url: 'https://www.sheknows.com/entertainment/articles/1137378/fun-facts-about-the-original-jumanji/',
      credit: 'Samantha Puc Dec 18, 2017',
    },

    {
      name: 'The Most Popular Types of Board Games: Board Game Genres, Explained',
      coverImg:
        'https://whatnerd.com/wp-content/uploads/2020/05/board-game-types-genres-explained-featured.jpg',
      url: 'https://www.grunge.com/912859/heres-why-dice-were-invented/',
      credit: 'Joel Lee Mar 10, 2021',
    },

    {
      name: 'Why Do Board Games Matter?',
      coverImg:
        'https://lovethynerd.com/wp-content/uploads/2019/02/Among-The-Stars-822x675.jpg?x99318',
      url: 'https://lovethynerd.com/why-do-board-games-matter/',
      credit: 'Mike Perna Feb 18, 2021',
    },
    {
      name: 'Board games for your health and well-being',
      coverImg:
        'https://www.mcmasteroptimalaging.org/images/default-source/blog-post-images/istock-988544644.tmb-blogpost.jpg?Culture=en&sfvrsn=1c230cd6_6',
      url: 'https://www.mcmasteroptimalaging.org/blog/detail/blog/2020/12/16/board-games-for-your-health-and-well-being',
      credit: 'McMaster University Dec 16, 2020  ',
    },
    {
      name: '35 Best Board Games for Kids That the Whole Family Will Enjoy',
      coverImg:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-021022-kid-board-games-1644597723.png?crop=1.00xw:1.00xh;0,0&resize=980:*',
      url: 'https://www.goodhousekeeping.com/childrens-products/board-games/g32475624/best-board-games-for-kids/',
      credit: ' Marisa Lascala Aug 31, 2022',
    },
    {
      name: 'Add to your dice collection, one of our favorite places',
      coverImg:
        'https://wyrmwoodgames.wpenginepowered.com/wp-content/uploads/2022/08/Prismatic-7-Set-v2-scaled.jpg',
      url: 'https://wyrmwoodgaming.com/dice-collection/',
      credit: 'wyrmwoodgaming.com',
    },
  ],

  // rank, price, discount, reddit_week_count, reddit_day_count, name, year_publisher, min_age, min_playtime, max_playtime, min_players, max_players

  skip: 0,
});
