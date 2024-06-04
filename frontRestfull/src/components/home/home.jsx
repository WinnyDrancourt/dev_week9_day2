import { useState, useEffect } from "react";
import { getArticles } from "../../api/fetch.js";

export default function Home() {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles();
        setArticles(data.data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}
