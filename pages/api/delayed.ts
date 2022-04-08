// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  greeting: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { latency } = req.query;
  setTimeout(() => {
    return res.status(200).json({ greeting: 'Belated Hello Worlds!' });
  }, +latency || 2000);
};

export default handler;
