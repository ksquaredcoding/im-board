import { reactive } from 'vue';

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  
  
  
  /** @type {import('./models/Group.js').Group[]} */
  groups:[],
  
  /** @type {import('./models/Group.js').Group | null} */
activeGroup:null,






  /** @type {import('./models/BoardGame.js').BoardGame[]} */
  boardgames: [],

  /** @type {import('./models/BoardGame.js').BoardGame | null} */
  activeBoardGame: null,

  activeImage: null,

  /** @type {import('./models/ActiveBoardGameImage.js').ActiveBoardGameImage[]} */
  activeBoardGameImages: [],

  /** @type {import('./models/ActiveBoardGameVideo.js').ActiveBoardGameVideo[]} */
  activeBoardGameVideos: [],

  /** @type {import('./models/ActiveBoardGamePrice.js').ActiveBoardGamePrice[]} */

  activeBoardGamePrices: [],
  /** @type {import('./models/ABGReviews.js').ABGReviews[]} */

  activeBoardGameReviews: [],

  activeCategoryFilters: [],
  categories: [
    { name: 'cardGame', id: 'eX8uuNlQkQ' },
    { name: 'fantasy', id: 'ZTneo8TaIO' },
    { name: 'economic', id: 'N0TkEGfEsF' },
    { name: 'scifi', id: '3B3QpKvXD3' },
    { name: 'city_Building', id: 'ODWOjWAJj3' },
    { name: 'party_Game', id: 'X8J7RM6dxX' },
    { name: 'adventure', id: 'KUBCKBkGxV' },
    { name: 'bluffing', id: 'PinhJrhnxU' },
    { name: 'dice', id: 'mavSOM8vjH' },
    { name: 'horror', id: 'cAIkk5aLdQ' },
    { name: 'puzzle', id: 'WVMOS3s2pb' },
    { name: 'cooperative', id: 'ge8pIhEUGE' },
    { name: 'wargame', id: 'jX8asGGR6o' },
    { name: 'word_game', id: 'rHvAx4hH2f' },
  ],
});
