import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    const cred = {
      type: "service_account",
      projectId: "culbertson-hillinck-wedding",
      privateKeyId: process.env.FBSA_PKID,
      privateKey: process.env.FBSA_PK.replace(/\\n/g, "\n"),
      clientEmail:
        "firebase-adminsdk-676mc@culbertson-hillinck-wedding.iam.gserviceaccount.com",
      clientId: "117634377003071019756",
      authUri: "https://accounts.google.com/o/oauth2/auth",
      tokenUri: "https://oauth2.googleapis.com/token",
    };
    admin.initializeApp({
      credential: admin.credential.cert(cred),
    });
  } catch (error) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
