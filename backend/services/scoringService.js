export const calculateScore = (repo) => {
  let score = 0;

  // Code structure
  if (repo.hasSrcFolder) score += 15;
  else score += 5;

  // Documentation
  if (repo.hasReadme) score += 15;
  else score += 5;

  // Commits
  if (repo.commitsCount > 20) score += 15;
  else if (repo.commitsCount > 5) score += 10;
  else score += 5;

  // Tests
  if (repo.hasTests) score += 15;

  // Tech stack relevance
  if (repo.language) score += 20;

  // Project depth
  if (repo.filesCount > 5) score += 20;
  else score += 10;

  return {
    totalScore: score
  };
};
