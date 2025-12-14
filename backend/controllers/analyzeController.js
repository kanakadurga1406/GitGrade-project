import { fetchRepoData } from "../services/githubService.js";
import { calculateScore } from "../services/scoringService.js";
import { generateAISummary } from "../services/aiService.js";

export const analyzeRepository = async (req, res) => {
  try {
    const { repoUrl } = req.body;

    console.log("Repo URL:", repoUrl);

    const repoData = await fetchRepoData(repoUrl);
    console.log("Repo Data:", repoData);

    const scoreDetails = calculateScore(repoData);
    console.log("Score Details:", scoreDetails);

    const aiResult = await generateAISummary(scoreDetails, repoData);
    console.log("AI Result:", aiResult);

    res.json({
      score: scoreDetails.totalScore,
      summary: aiResult.summary,
      roadmap: aiResult.roadmap
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
