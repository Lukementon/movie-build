import { readFileSync } from 'fs';
import { createSchema, createYoga } from 'graphql-yoga';
import { join } from 'path';
import { Resolvers } from '../../../types';
import axios from 'axios';

const typeDefs = readFileSync(join(process.cwd(), 'schema.graphql'), {
  encoding: 'utf-8',
});

const resolvers: Resolvers = {
  Query: {
    products: async (_, { keyword, category, country, page }) => {
      const { data } = await axios.request(options);
      console.log('data', data);
      return data;
    },
  },
};

const schema = createSchema({ typeDefs, resolvers });

export default createYoga({
  graphqlEndpoint: '/api/graphql',
  schema,
});

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

const options = {
  method: 'GET',
  url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
  params: {
    keyword: 'iphone',
    country: 'US',
    category: 'aps',
  },
  headers: {
    'X-RapidAPI-Key': '70ae1129e9msh6ac1860e91fbb4fp11ef25jsnb063e7c9b047',
    'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com',
  },
};
