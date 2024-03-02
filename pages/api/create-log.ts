import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * use teable to create a log 
 * @param req 
 * @param res 
 */
const createlog = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'OPTIONS') {
      // Pre-flight request. Reply successfully:
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.statusCode = 204;
      res.end();
      return;
    }
    const { message = "", type = "" } = req.body;
    if (message.trim() === "" || type.trim() === "") {
      throw new Error("mssage and type are required");
    }
    console.log("log info", message, type, process.env.TEABLE_TABLE_URL, process.env.TEABLE_API_TOKEN)
    const ret = await fetch(process.env.TEABLE_TABLE_URL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${process.env.TEABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        "records": [
          {
            "fields": {
              "id": randomUUID(),
              "type": type,
              "message": message
            }
          }
        ]
      })
    });
    const data = await ret.json();
    console.log("ret", data);
    if (data.records) {
      res.status(200).json({ statusCode: 200, message: "Log created successfully" });
    } else {
      res.status(500).json({ statusCode: 500, message: "Failed to create log" });
    }
  } catch(err) {
    console.log("err", err);
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}

export default createlog;