# 🧠 Full Stack AI Career Coach

An AI-powered career coaching web application built with **Next.js**. It helps users gain personalized career insights, prepare for interviews, and improve their resumes using the power of **Gemini AI**. Packed with modern tools and a seamless user experience.

---

## 🚀 Features

- ✨ **AI Insights Generator**  
  Uses **Gemini AI** to provide personalized career advice based on the user's skills and industry.

- 🔐 **Authentication**  
  User authentication handled securely via **Clerk**.

- 📥 **Resume Builder & Enhancer**  
  Users can build resumes from scratch or upload existing ones to get AI-generated suggestions and download the final version as a PDF.

- 🧠 **Interview Prep**  
  Automatically generates **AI-based quizzes** to help users prepare for interviews based on their job domain.

- 📊 **Insight & Feedback System**  
  Feedback and improvement tips tailored to the user’s inputs and goals.

- ⚙️ **Background Function Execution**  
  Integrated **Inngest** for auto-invoking serverless functions like quiz generation and analytics tracking.

- 🗃️ **Database**  
  Uses **Neon DB** (PostgreSQL serverless) to store user data, quizzes, insights, and resume info.

- 🎨 **UI & Styling**  
  Built with **Tailwind CSS** and **Shadcn UI** for a clean, modern, and responsive UI.

---

## 🛠️ Tech Stack

| Technology       | Usage                                      |
|------------------|--------------------------------------------|
| **Next.js**       | React framework for SSR/SSG and routing    |
| **Tailwind CSS**  | Styling                                    |
| **Shadcn UI**     | Component library                          |
| **Gemini AI API** | AI-based logic and responses               |
| **Prisma**        | ORM for Neon DB                            |
| **Neon DB**       | Serverless PostgreSQL DB                   |
| **Clerk**         | Authentication & User Management           |
| **Inngest**       | Background jobs / Function scheduling      |

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ai-career-coach.git
cd ai-career-coach
npm install
```

# 🔐 Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# 🗃️ Database (Neon DB)
DATABASE_URL=postgresql://<username>:<password>@<host>/<database>?sslmode=require

# 🤖 Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key
