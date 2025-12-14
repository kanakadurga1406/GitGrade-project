# GitGrade – Repository Mirror

GitGrade is an AI-powered system that evaluates a GitHub repository and provides a **Score, Summary, and Personalized Roadmap** for improvement. It helps students and developers understand the strengths and weaknesses of their projects, simulating a recruiter or mentor’s perspective.

---

## 🧩 Features

* Accepts a **GitHub repository URL** as input.
* Automatically analyzes repository data, including:

  * Number of files and folder structure
  * Code quality (linting, complexity)
  * README & documentation quality
  * Test coverage (if available)
  * Commit history & contribution consistency
  * Language/tech stack usage
  * Version control best practices
* Evaluates the repository across multiple dimensions:

  * Code quality & readability
  * Project structure & organization
  * Documentation & clarity
  * Test coverage & maintainability
  * Real-world relevance & usefulness
  * Commit & development consistency
* Generates three key outputs:

  * **Score** (0–100)
  * **Summary** of the repository
  * **Personalized roadmap** with actionable improvements

---

## 💻 Folder Structure

```
gitgrade/
├── backend/          # Node.js API server
├── frontend/         # React frontend
├── .gitignore        # Ignored files (node_modules, .env)
├── README.md
```

---

## ⚡ Technology Stack

* **Frontend:** React.js
* **Backend:** Node.js + Express
* **AI Analysis:** OpenAI API
* **Version Control:** GitHub

---

## 🚀 Installation & Setup

### Backend

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Set your OpenAI API key in `.env`:

```env
OPENAI_API_KEY=your_api_key_here
```

4. Start the backend server:

```bash
npm start
```

The backend will run on `http://localhost:5000`.

---

### Frontend

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

The frontend will run on `http://localhost:3000`.

---

## 🖼 Usage

1. Open the app in your browser.
2. Paste a **public GitHub repository URL**.
3. Click **Analyze Repository**.
4. View:

   * **Score**
   * **Summary**
   * **Personalized roadmap** for improvement

---

## 📈 Sample Output

**Input:** `https://github.com/username/sample-project`

**Score:** `78 / 100`
**Summary:** "Code structure is clean and consistent, but documentation and tests need improvement."
**Roadmap:**

* Add unit tests
* Improve README with project instructions
* Introduce CI/CD using GitHub Actions

---

## 🔧 Notes

* Ensure the repository is **public**; private repositories require authentication.
* `node_modules` are **not included** in GitHub — dependencies are installed via `npm install`.
