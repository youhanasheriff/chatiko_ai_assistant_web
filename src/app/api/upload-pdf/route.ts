import pinecone from '@/services/pinecone';
import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export const POST = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  // const session = await getServerSession();

  // console.log('session', { session });
  // console.log({ req, res });

  // if (!session || !session.user) {
  //   res.status(401).json({
  //     message: 'Unauthorized',
  //   });
  //   return;
  // }

  // const user = session.user!;

  const { text }: { text: string } = req.body;
  // const { id } = query;

  console.log('req', req);

  await pinecone.database.upsert([
    {
      id: text.replaceAll(' ', '_').toLowerCase(),
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      metadata: {
        text: text,
        // userEmail: user.email!,
      },
    },
  ]);

  res.status(200).json({
    message: 'Success',
  });
};
