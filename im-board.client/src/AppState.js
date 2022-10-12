import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/BoardGame.js').BoardGame[]} */
  boardgames: [],

  /** @type {import('./models/BoardGame.js').BoardGame | null} */
  activeBoardGame: null,

  activeCategoryFilters: [],
  categories: [
    { name: "cardGame", id: "eX8uuNlQkQ" },
    { name: "fantasy", id: "ZTneo8TaIO" },
    { name: "economic", id: "N0TkEGfEsF" },
    { name: "scifi", id: "3B3QpKvXD3" },
    { name: "cityBuilding", id: "ODWOjWAJj3" },
    { name: "medieval", id: "QAYkTHK1Dd" },
    { name: "adventure", id: "KUBCKBkGxV" },
  ],
});
