import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * use teable to create a log 
 * @param req 
 * @param res 
 */
const createLog = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { message, type } = req.body;
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

export default createLog;