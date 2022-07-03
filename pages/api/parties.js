export default function handler(req, res) {
  switch (method) {
    case "GET":
      lookupParty(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function lookupParty() {
  //
}
