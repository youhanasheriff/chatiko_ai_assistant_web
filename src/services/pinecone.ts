import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | undefined;

function createPinecone(): Pinecone {
  if (pinecone) {
    return pinecone;
  }

  return new Pinecone();
}

export default {
  database: createPinecone().Index('vector-database'),
};
