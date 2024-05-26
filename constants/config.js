const corsOptions = {
  origin: [
    "https://chatapp-frontend-5xt2dtdu6-rahuls-projects-fa49ef37.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
