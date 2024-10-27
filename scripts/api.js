const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("a582f2f4ac894c139b5dbad3cc02ed50");

const fetchNews = async () => {
  try {
    const response = await newsapi.v2.topHeadlines({
      language: "en",
      country: "us",
    });
    return response;
  } catch (error) {
    console.error("Error fetching news", error);
    throw error;
  }
};

module.exports = { fetchNews };
