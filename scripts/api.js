const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("a582f2f4ac894c139b5dbad3cc02ed50");

const fetchNews = async () => {
  try {
    const response = await newsapi.v2.everything({
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      language: "en",
      sortBy: "relevancy",
    });
    return response;
  } catch (error) {
    console.error("Error fetching news", error);
    throw error;
  }
};

module.exports = { fetchNews };
