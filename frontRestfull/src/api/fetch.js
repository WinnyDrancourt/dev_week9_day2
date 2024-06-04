import api from "./axios-config.js";

const getArticles = async () => {
  return await api.get("/articles");
};

const postLogin = async (email, password) => {
  return await api.post("/login", { email, password });
};

export { getArticles, postLogin };
