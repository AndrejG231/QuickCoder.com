import { api } from "../static";
import { leaderboardItem } from "../types";

const getLeaderBoardQuery = `
  query practiceLeaderboard($category: String!, $index: Int!) {
    practiceLeaderboard(category: $category, index: $index) {
      username
      score
      cpm
      errors_rate
      index
    }
  }
`;

const getLeaderBoard = async (index: number, category: string) => {
  try {
    const result = await api.post("", {
      query: getLeaderBoardQuery,
      variables: { index, category },
    });

    if (result.data?.data?.practiceLeaderboard.length > 1) {
      return result.data.data.practiceLeaderboard as leaderboardItem[];
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getLeaderBoard;