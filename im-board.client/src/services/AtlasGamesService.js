import { atlasApi } from "./AxiosService.js";
import { BoardGame } from "../models/BoardGame/BoardGame.js";
import { ActiveBoardGameImage } from "../models/BoardGame/ActiveBoardGameImage.js";
import { ActiveBoardGameVideo } from "../models/BoardGame/ActiveBoardGameVideo.js";
import { AppState } from "../AppState.js";
import { ABGReviews } from "../models/BoardGame/ABGReviews.js";
import { ActiveBoardGamePrice } from "../models/BoardGame/ActiveBoardGamePrice.js";
import { router } from "../router.js";
import { ForumPost } from "../models/BoardGame/ForumPost.js";
import { BGList } from "../models/BoardGame/BGList.js";
import {  BGCategoriesAndMechanics } from "../models/BoardGame/BGCategories&Mechanics.js";

//  client_id: '2I6DeypMLL';
class AtlasGamesService {
  //fuzzy_match
  async getBoardGamesAll(editable) {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit: 6,
        gt_discount: editable.value.gt_discount,
        lt_year_published: editable.value.yearPublished,
        limit: editable.value.limit,
        skip: editable.value.skip,
        fuzzy_match: true,
        name: editable.value.name,
        categories: editable.value.categories,
        order_by: editable.value.orderBy,
        min_playtime: editable.value.minPlayTime,
      },
    });
    console.log(res.data);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
    console.log(AppState.boardgames);
  }
  async getBoardGames() {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit:60
      
      },
    });
    // console.log(res.data);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
    console.log(AppState.boardgames);
  }

  // SECTION ---------------- FOR HOME PAGE---------------------
  async getBoardGamesByDiscount() {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit: 12,
        gt_discount: 0.5,
      },
    });

    AppState.discountBoardGames = res.data.games.map((b) => new BoardGame(b));

  }

  
  async getBoardGamesByPopularity() {
 
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit: 12,
      },
    });
    AppState.popularBoardGames= res.data.games.map((b) => new BoardGame(b));

  }

  //-----------------------------!SECTION-----------------------------------------------------------
  async getBoardGamesByYear(minYear) {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit: 60,
        lt_year_published: minYear,
        
      },
    });
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesOnScroll() {
    let limit = 20;
    AppState.skip += limit;
    let skip = AppState.skip;
    AppState.skip += limit;
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        limit: limit,
        skip: skip,
      },
    });
    AppState.scrollBoardGames = res.data.games.map((b) => new BoardGame(b));
    AppState.boardgames = [
      ...AppState.boardgames,
      ...AppState.scrollBoardGames,
    ];
  }
  async getBoardGamesByQuery(name = "") {
    router.push({ name: "Search" });
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        fuzzy_match: true,
        name: name,
      },
    });

    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
    // console.log(res.data);
  }

  async getBoardGamesByCategories(categories = "") {
    console.log(categories);
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        categories: categories,
        limit:60
      },
    });
    console.log(res.data.games);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

async getBoardGamesByMechanics(mechanics = ""){
  console.log(mechanics);
  const res = await atlasApi.get('/api/search', {
    params: {
      client_id: '2I6DeypMLL',
      mechanics: mechanics,
      limit:60
    },
  });
  // console.log(res.data.games);
  AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
}


  async getBoardGamesByOrder_By(query = "") {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        order_by: query,
      },
    });
    console.log(res.data.games);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByPlayTime(count) {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        min_playtime: count,
      },
    });
    // console.log(res.data.games);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByMinimumPlayers(count) {
    const res = await atlasApi.get("/api/search", {
      params: {
        client_id: "2I6DeypMLL",
        min_players: count,
      },
    });
    // console.log(res.data.games);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGameDetailsById(id) {
    AppState.activeBoardGame = null;
    const res = await atlasApi.get(`/api/search?${id}`, {
      params: {
        client_id: "2I6DeypMLL",
        ids: id,
      },
    });
    // console.log(res.data.games);
    AppState.activeBoardGame = new BoardGame(res.data.games[0]);
    // console.log(AppState.activeBoardGame);
  }

  async getBoardGameImagesByGameId(id) {
    const res = await atlasApi.get(`api/game/images?`, {
      params: {
        client_id: "2I6DeypMLL",
        game_id: id,
      },
    });
    // console.log(res.data.images);
    AppState.activeBoardGameImages = res.data.images.map(
      (a) => new ActiveBoardGameImage(a)
    );
    // console.log(AppState.activeBoardGameImages);
  }
  async getBoardGamePricesByGameId(id) {
    const res = await atlasApi.get("api/game/prices?", {
      params: {
        client_id: "2I6DeypMLL",
        game_id: id,
      },
    });
    // console.log(res.data.gameWithPrices.us);
    AppState.activeBoardGamePrices = res.data.gameWithPrices.us.map(
      (p) => new ActiveBoardGamePrice(p)
    );
    console.log(AppState.activeBoardGamePrices);
  }
  async getBoardGameVideosByGameId(id) {
    const res = await atlasApi.get("api/game/videos?", {
      params: {
        client_id: "2I6DeypMLL",
        game_id: id,
      },
    });
    // console.log(res.data.videos);
    AppState.activeBoardGameVideos = res.data.videos.map(
      (a) => new ActiveBoardGameVideo(a)
    );
    console.log(AppState.activeBoardGameVideos);
  }

  async getBoardGameReviewsByGameId(id) {
    const res = await atlasApi.get("api/reviews", {
      params: {
        client_id: "2I6DeypMLL",
        game_id: id,
        include_summary: true,
        description_required: true,
      },
    });

    // console.log(res.data.critics.reviews);

    AppState.activeBoardGameReviews = res.data.critics.reviews.map(
      (r) => new ABGReviews(r)
    );
    // console.log(AppState.activeBoardGameReviews);
  }

  async getBoardGameCategoriesList() {
    const res = await atlasApi.get("api/game/categories", {
      params: {
        client_id: "2I6DeypMLL",
      },
    });
    // console.log(res.data);
    AppState.bgCategories= res.data.categories.map((b) => new BGCategoriesAndMechanics(b));
    // console.log(AppState.bgCategories);
  }


  async getBoardGameMechanicsList() {
    const res = await atlasApi.get("api/game/mechanics", {
      params: {
        client_id: "2I6DeypMLL",
      },
    });
    // console.log(res.data);
    AppState.bgMechanics = res.data.mechanics.map((b) => new BGCategoriesAndMechanics(b));
    // console.log(AppState.bgMechanics);
  }




  // SECTION FORUM POSTS ---------------------------!SECTION

  async getForumPosts() {
    const res = await atlasApi.get("api/forum", {
      params: {
        client_id: "2I6DeypMLL",
        limit: 10,
        news: true,
      },
    });
    // console.log(res.data);
    AppState.forumPosts = res.data.posts.map((f) => new ForumPost(f));
    // console.log(AppState.forumPosts);
  }
}

export const atlasGamesService = new AtlasGamesService();
