import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    'src/data/graphql/resolvers/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
    },
    './types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
