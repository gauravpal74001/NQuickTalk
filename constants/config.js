const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
    "https://n-quick-talk-client.vercel.app",
    "https://n-quick-talk-client-git-master-gauravs-projects-9c3630b4.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
