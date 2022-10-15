import { atlasApi } from './AxiosService.js';
import { BoardGame } from '../models/BoardGame/BoardGame.js';
import { ActiveBoardGameImage } from '../models/BoardGame/ActiveBoardGameImage.js';
import { ActiveBoardGameVideo } from '../models/BoardGame/ActiveBoardGameVideo.js';
import { AppState } from '../AppState.js';
import { ABGReviews } from '../models/BoardGame/ABGReviews.js';
import { ActiveBoardGamePrice } from '../models/BoardGame/ActiveBoardGamePrice.js';
import { router } from "../router.js";
//  client_id: '2I6DeypMLL';
class AtlasGamesService {
  //fuzzy_match
  async getBoardGames() {
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        limit: 12,
      },
    });
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
    console.log(res.data);
    console.log(AppState.boardgames);
  }

  async getBoardGamesOnScroll() {
    let limit = 20;
    AppState.skip += limit;
    let skip = AppState.skip;
    AppState.skip += limit;
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
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
  async getBoardGamesByQuery(name = '') {
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        fuzzy_match: true,
        name: name,
      },
    });
    router.push({ name: 'Search' });
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
    // console.log(res.data);
  }

  async getBoardGamesByCategories(categories = '') {
    console.log(categories);
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        categories: categories,
      },
    });
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByOrder_By(query = '') {
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        order_by: query,
      },
    });
    console.log(res.data.games);
    AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGamesByMinimumPlayers(count) {
    const res = await atlasApi.get('/api/search', {
      params: {
        client_id: '2I6DeypMLL',
        gt_min_players: count, //	Greater than the provided minimum number of players. The example will return 3 or more.
        // gt_min_playtime: count, //Greater than the provided minimum minutes of playtime. The example will return 11 or more.
        // gt_max_playtime: count, // Greater than the provided maximum minutes of playtime. The example will return 31 or more.
        // gt_min_age: count, //	Greater than the provided minimum recommended player age. The example will return 11 or more.
      },
    });
    console.log(res.data.games);
    // AppState.boardgames = res.data.games.map((b) => new BoardGame(b));
  }

  async getBoardGameDetailsById(id) {
    AppState.activeBoardGame = null;
    const res = await atlasApi.get(`/api/search?${id}`, {
      params: {
        client_id: '2I6DeypMLL',
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
        client_id: '2I6DeypMLL',
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
    const res = await atlasApi.get('api/game/prices?', {
      params: {
        client_id: '2I6DeypMLL',
        game_id: id,
      },
    });
    // console.log(res.data.gameWithPrices.us);
    AppState.activeBoardGamePrices = res.data.gameWithPrices.us.map(
      (p) => new ActiveBoardGamePrice(p)
    );
    // console.log(AppState.activeBoardGamePrices);
  }
  async getBoardGameVideosByGameId(id) {
    const res = await atlasApi.get('api/game/videos?', {
      params: {
        client_id: '2I6DeypMLL',
        game_id: id,
      },
    });
    // console.log(res.data.videos);
    AppState.activeBoardGameVideos = res.data.videos.map(
      (a) => new ActiveBoardGameVideo(a)
    );
    // console.log(AppState.activeBoardGameVideos);
  }

  async getBoardGameReviewsByGameId(id) {
    const res = await atlasApi.get('api/reviews', {
      params: {
        client_id: '2I6DeypMLL',
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

  // SECTION FORUM POSTS ---------------------------!SECTION

  async getForumPosts() {
    const res = await atlasApi.get('api/forum', {
      params: {
        client_id: '2I6DeypMLL',
        
      },
    });
    console.log(res);
  }
}
export const atlasGamesService = new AtlasGamesService();
