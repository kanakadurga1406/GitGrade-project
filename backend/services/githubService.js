import axios from "axios";

export const fetchRepoData = async (repoUrl) => {
  const [, , , owner, repo] = repoUrl.split("/");

  const baseUrl = `https://api.github.com/repos/${owner}/${repo}`;

  const repoRes = await axios.get(baseUrl);
  const commitsRes = await axios.get(`${baseUrl}/commits?per_page=100`);
  const contentsRes = await axios.get(`${baseUrl}/contents`);

  const files = contentsRes.data;

  return {
    name: repoRes.data.name,
    language: repoRes.data.language,
    stars: repoRes.data.stargazers_count,
    forks: repoRes.data.forks_count,
    commitsCount: commitsRes.data.length,
    filesCount: files.length,
    hasReadme: files.some(f => f.name.toLowerCase().includes("readme")),
    hasTests: files.some(f => f.name.toLowerCase().includes("test")),
    hasSrcFolder: files.some(f => f.type === "dir" && f.name === "src")
  };
};
