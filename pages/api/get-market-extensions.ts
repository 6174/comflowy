import { NextApiRequest, NextApiResponse } from "next";
import data from '../../data/custom-node-list.json';

const getCustomNodes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tutorial data' });
  }
};

export default getCustomNodes;
