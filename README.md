# 🤖 AI Interview Platform

An AI-powered **full-stack mock interview platform** that uses **Google Gemini AI** to generate personalized interview questions based on a candidate's job role, job description, and resume.

The platform conducts an interactive voice-based interview and generates an AI-powered performance report at the end.

---

## ✨ Features

- 🤖 AI-generated interview questions
- 📄 Resume-based interview questions
- 💼 Job-specific interview questions
- 🎤 Voice-based interview
- 🔊 Text-to-Speech for AI questions
- 🗣️ Speech-to-Text for candidate answers
- ⏭️ Skip interview questions
- 🛑 End interview anytime
- 📊 AI-generated interview score
- ✅ Correct answer count
- 💡 AI-generated improvement suggestions
- 📑 PDF resume parsing
- ⚡ React + Vite frontend
- 🚀 FastAPI backend
- 🧠 Google Gemini AI

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Axios
- CSS
- Web Speech API
  - Speech Recognition
  - Speech Synthesis

### Backend

- Python
- FastAPI
- Uvicorn
- Google Gemini API
- Google GenAI SDK
- PyPDF2
- Pydantic
- python-dotenv
- python-multipart

---

## 📂 Project Structure

```text
AI-Interview-Platform/
│
├── Backend/
│   ├── models/
│   │   └── interview.py
│   │
│   ├── request_model/
│   │   └── AnswerRequest.py
│   │
│   ├── response_model/
│   │   └── AnswerResponse.py
│   │
│   ├── routers/
│   │   └── interview.py
│   │
│   ├── services/
│   │   ├── ai_services.py
│   │   └── interview_service.py
│   │
│   ├── store/
│   │   └── session_store.py
│   │
│   ├── util/
│   │   └── file_util.py
│   │
│   ├── .env
│   ├── main.py
│   └── requirements.txt
│
└── Frontend/
    ├── public/
    │
    ├── src/
    │   ├── Hooks/
    │   │   └── UseSpeechToText.jsx.jsx
    │   │
    │   ├── assets/
    │   │   ├── images/
    │   │   ├── Interview.css
    │   │   ├── InterviewPage.css
    │   │   ├── Report.css
    │   │   └── StartInterview.css
    │   │
    │   ├── components/
    │   │   ├── Interview.jsx
    │   │   ├── Report.jsx
    │   │   └── Start_Interview.jsx
    │   │
    │   ├── pages/
    │   │   └── InterviewPage.jsx
    │   │
    │   ├── services/
    │   │   └── Interview.jsx
    │   │
    │   ├── util/
    │   │   ├── audio.jsx
    │   │   └── constant.jsx
    │   │
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── eslint.config.js
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have:

- Node.js
- npm
- Python
- Google Gemini API Key
- A modern browser with microphone and Web Speech API support

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/RhydamKumar/Ai-Interview-Platform.git
```

Go into the project directory:

```bash
cd Ai-Interview-Platform
```

---

# 🔑 2. Add Gemini API Key

The backend uses **Google Gemini** to generate interview questions and evaluate answers.

Open:

```text
Backend/.env
```

Add your Gemini API key:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Replace `YOUR_GEMINI_API_KEY` with your actual Gemini API key.

### Example

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ **Important:** Never expose your real Gemini API key or commit it to a public repository.

---

# 🐍 3. Run the Backend

Open a terminal and navigate to the backend:

```bash
cd Backend
```

The repository contains a Python environment. If it works on your system, you can use it directly.

If dependencies are missing, install them using:

```bash
pip install -r requirements.txt
```

You can also create a new virtual environment if required:

```bash
python -m venv myenv
```

### Windows

```bash
myenv\Scripts\activate
```

### macOS / Linux

```bash
source myenv/bin/activate
```

Then install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will normally run at:

```text
http://127.0.0.1:8000
```

FastAPI Swagger documentation is available at:

```text
http://127.0.0.1:8000/docs
```

---

# ⚛️ 4. Run the Frontend

Open a **new terminal**.

Navigate to the frontend:

```bash
cd Frontend
```

Install the frontend dependencies if required:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the frontend URL in the terminal.

Usually:

```text
http://localhost:5173
```

Open that URL in your browser.

---

# ▶️ Quick Start

Once everything is installed, you only need two terminals.

### Terminal 1 — Backend

```bash
cd Backend
uvicorn main:app --reload
```

### Terminal 2 — Frontend

```bash
cd Frontend
npm run dev
```

Then open the frontend URL shown by Vite.

---

# 🎯 How to Use

## 1. Enter Job Information

Enter the target job title.

Example:

```text
Frontend Developer
```

Then enter the job description.

Example:

```text
We are looking for a frontend developer with experience
in React, JavaScript, HTML, CSS and REST APIs.
```

---

## 2. Upload Resume

Upload your resume in **PDF format**.

The backend extracts the resume text using **PyPDF2**.

The current application supports PDF resumes up to approximately **5 MB**.

---

## 3. Start the Interview

Click the **Start Interview** button.

The application sends the following information to the backend:

- Job title
- Job description
- Resume

The backend processes the resume and sends the relevant information to Gemini.

Gemini generates personalized interview questions.

---

## 4. AI Interview

The AI interviewer asks the generated questions.

Questions are spoken using the browser's **Text-to-Speech** functionality.

The candidate can answer using their microphone.

---

## 5. Voice Answers

The browser's **Speech Recognition API** converts the candidate's speech into text.

The application automatically submits the answer after a short period of silence.

The candidate can also skip a question.

---

## 6. Interview Evaluation

After the interview is completed, the candidate's answers are sent to Gemini.

Gemini evaluates the answers and generates:

- Overall score
- Correct answer count
- Improvement areas

---

## 7. Interview Report

The final report is displayed to the candidate after the interview.

Example:

```text
Score: 75%

Correct Answers: 2

Areas for Improvement:
- Improve explanation of core concepts
- Provide more concrete examples
```

---

# 🧠 How the Application Works

```text
                    Candidate
                       │
                       │
          Job Details + Resume
                       │
                       ▼
              ┌────────────────┐
              │ React Frontend │
              │     + Vite     │
              └───────┬────────┘
                      │
                      │ HTTP API
                      ▼
              ┌────────────────┐
              │ FastAPI Backend│
              └───────┬────────┘
                      │
                      │ Resume Processing
                      ▼
              ┌────────────────┐
              │     PyPDF2     │
              └───────┬────────┘
                      │
                      │ Resume Text
                      ▼
              ┌────────────────┐
              │  Google Gemini │
              │      AI        │
              └───────┬────────┘
                      │
                      │ Questions
                      ▼
              ┌────────────────┐
              │ AI Interview   │
              │                │
              │ Text → Speech  │
              │ Speech → Text  │
              └───────┬────────┘
                      │
                      │ Answers
                      ▼
              ┌────────────────┐
              │  Google Gemini │
              │   Evaluation   │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │ Interview      │
              │ Report         │
              └────────────────┘
```

---

# 🔌 Backend API

The backend is built using **FastAPI**.

The main interview endpoints are:

### Generate Interview Questions

```http
POST /interview/generate-question
```

This endpoint receives:

- Job title
- Job description
- Resume PDF

and creates an interview session.

---

### Start Interview

```http
GET /interview/start/{session_id}
```

Returns the interview introduction and the first question.

---

### Submit Answer

```http
POST /interview/submit
```

Submits the candidate's answer and returns the next question.

---

### End Interview

```http
PUT /interview/end/{session_id}
```

Ends the current interview session.

---

### Generate Report

```http
GET /interview/report/{session_id}
```

Generates the final AI-powered interview evaluation.

---

# 📄 Resume Requirements

The application currently accepts:

```text
PDF
```

Maximum supported file size:

```text
5 MB
```

The backend uses **PyPDF2** to extract text from the resume.

For best results, use a text-based PDF rather than a scanned image-only PDF.

---

# 🎤 Voice Features

The frontend uses the browser's Web Speech APIs.

## Text-to-Speech

AI-generated interview questions are spoken using:

```javascript
window.speechSynthesis
```

---

## Speech-to-Text

Candidate answers are captured using:

```javascript
window.SpeechRecognition
```

or:

```javascript
window.webkitSpeechRecognition
```

---

## 🎙️ Microphone Permission

The browser must have permission to access the microphone.

If speech recognition does not work:

1. Check browser microphone permissions.
2. Allow microphone access for the application.
3. Reload the page.
4. Use a browser that supports the Web Speech API.

---

# 🔐 Environment Variables

The backend requires one environment variable:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

File location:

```text
Backend/.env
```

The Gemini API key is used only by the backend.

### Security

Never commit your real `.env` file containing secrets.

Add the following to `.gitignore`:

```gitignore
.env
*.env
```

If a real API key is accidentally pushed to GitHub, revoke it and create a new one.

---

# 📦 Dependencies

## Frontend

The frontend dependencies are managed using `npm`.

Install them with:

```bash
cd Frontend
npm install
```

Run with:

```bash
npm run dev
```

---

## Backend

The backend dependencies are listed in:

```text
Backend/requirements.txt
```

Install them with:

```bash
cd Backend
pip install -r requirements.txt
```

Run with:

```bash
uvicorn main:app --reload
```

---

# 🧰 Main Technologies

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Frontend development/build tool |
| JavaScript | Frontend logic |
| Axios | Frontend API requests |
| CSS | Styling |
| Python | Backend |
| FastAPI | REST API |
| Uvicorn | Backend server |
| Google Gemini | AI interview generation and evaluation |
| Google GenAI SDK | Gemini integration |
| PyPDF2 | PDF resume text extraction |
| Pydantic | Data validation |
| python-dotenv | Environment variables |
| python-multipart | File uploads |
| Web Speech API | Voice interview |

---

# 💾 Session Storage

The current application stores interview sessions in memory.

The session store is located at:

```text
Backend/store/session_store.py
```

Because the sessions are stored in memory, restarting the backend will clear active interview sessions.

For a production application, persistent storage such as PostgreSQL, MongoDB, MySQL, or Redis could be added.

---

# ⚙️ Frontend ↔ Backend

The React frontend communicates with the FastAPI backend through HTTP requests.

The backend is expected to run at:

```text
http://127.0.0.1:8000
```

The frontend API service is located at:

```text
Frontend/src/services/Interview.jsx
```

---

# 🐛 Troubleshooting

## Backend Does Not Start

Install the backend dependencies:

```bash
cd Backend
pip install -r requirements.txt
```

Then run:

```bash
uvicorn main:app --reload
```

---

## Frontend Does Not Start

Install frontend dependencies:

```bash
cd Frontend
npm install
```

Then:

```bash
npm run dev
```

---

## Gemini API Is Not Working

Check:

```text
Backend/.env
```

Make sure it contains:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Then restart the backend.

---

## Frontend Cannot Connect to Backend

Make sure the backend is running:

```bash
uvicorn main:app --reload
```

Check that:

```text
http://127.0.0.1:8000
```

is accessible.

---

## Resume Upload Fails

Make sure:

- The file is a PDF.
- The file is not larger than 5 MB.
- The backend is running.
- The PDF contains readable text.

---

## Microphone Does Not Work

Make sure:

- Microphone permission is enabled.
- Your browser supports Speech Recognition.
- The browser is allowed to access the microphone.
- You reload the application after granting permission.

---

# 🚀 Future Improvements

Possible future improvements include:

- [ ] User authentication
- [ ] User profiles
- [ ] Interview history
- [ ] Database integration
- [ ] Detailed question-by-question feedback
- [ ] HR interview mode
- [ ] Behavioral interview mode
- [ ] Coding interview mode
- [ ] System design interview mode
- [ ] Interview difficulty selection
- [ ] Custom interview duration
- [ ] Performance analytics
- [ ] Multiple AI model support
- [ ] DOCX resume support
- [ ] Production deployment
- [ ] Automated tests

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

Click the **Fork** button on GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/Ai-Interview-Platform.git
```

### 3. Create a branch

```bash
git checkout -b feature/your-feature
```

### 4. Make your changes

Implement your feature or fix.

### 5. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

### 6. Push your branch

```bash
git push origin feature/your-feature
```

### 7. Create a Pull Request

Open a Pull Request on GitHub.

---

# 👨‍💻 Author

**Rhydam Kumar**

GitHub:

https://github.com/RhydamKumar

Repository:

https://github.com/RhydamKumar/Ai-Interview-Platform

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

---

## ❤️ Built With

**React • Vite • FastAPI • Python • PyPDF2 • Google Gemini • Web Speech API**
