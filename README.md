## Backend folder structure
backend/
├── src/
│   ├── config/
│   │   ├── env.js
│   │   └── database.js
│   │
│   ├── common/
│   │   ├── errors/
│   │   │   └── AppError.js
│   │   ├── middleware/
│   │   │   ├── authenticate.js
│   │   │   ├── errorHandler.js
│   │   │   ├── rateLimiters.js
│   │   │   ├── requestId.js
│   │   │   └── validate.js
│   │   └── utils/
│   │       ├── apiResponse.js
│   │       ├── asyncHandler.js
│   │       ├── crypto.js
│   │       └── normalize.js
│   │
│   ├── integrations/
│   │   └── email/
│   │       └── email.service.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.repository.js
│   │   │   ├── auth.routes.js
│   │   │   ├── auth.service.js
│   │   │   ├── auth.validation.js
│   │   │   ├── cookie.service.js
│   │   │   ├── session.model.js
│   │   │   ├── token.service.js
│   │   │   └── verificationToken.model.js
│   │   │
│   │   └── users/
│   │       ├── user.model.js
│   │       └── user.repository.js
│   │
│   ├── routes/
│   │   └── index.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   ├── auth.validation.test.js
│   ├── token.service.test.js
│   └── setup.js
│
├── .env
├── .env.example
├── package.json
└── vitest.config.js



##  Frontend folder structure


frontend/
├── public/
│
├── src/
│   ├── features/
│   │   └── auth/
│   │       ├── api/
│   │       │   └── auth.api.js
│   │       ├── components/
│   │       │   ├── AuthShell.jsx
│   │       │   ├── FormField.jsx
│   │       │   ├── FormMessage.jsx
│   │       │   ├── GuestRoute.jsx
│   │       │   └── ProtectedRoute.jsx
│   │       ├── context/
│   │       │   └── AuthContext.jsx
│   │       ├── pages/
│   │       │   ├── ForgotPasswordPage.jsx
│   │       │   ├── LoginPage.jsx
│   │       │   ├── ProfilePage.jsx
│   │       │   ├── RegisterPage.jsx
│   │       │   ├── ResetPasswordPage.jsx
│   │       │   └── VerifyEmailPage.jsx
│   │       └── schemas/
│   │           └── auth.schemas.js
│   │
│   ├── pages/
│   │   └── HomePage.jsx
│   │
│   ├── services/
│   │   └── httpClient.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .env.example
├── index.html
├── package.json
└── vite.config.js