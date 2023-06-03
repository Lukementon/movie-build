import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GetMovieResponse = {
  __typename?: 'GetMovieResponse';
  page: Scalars['Int'];
  results: Array<Maybe<MovieWithVideos>>;
  total_pages: Scalars['Int'];
  total_results: Scalars['Int'];
};

export type GetNowPlayingMoviesResponse = {
  __typename?: 'GetNowPlayingMoviesResponse';
  page: Scalars['Int'];
  results: Array<Maybe<Movie>>;
  total_pages: Scalars['Int'];
  total_results: Scalars['Int'];
};

export type GetPopularMoviesResponse = {
  __typename?: 'GetPopularMoviesResponse';
  page: Scalars['Int'];
  results: Array<Maybe<Movie>>;
  total_pages: Scalars['Int'];
  total_results: Scalars['Int'];
};

export type GetTopRatedMoviesResponse = {
  __typename?: 'GetTopRatedMoviesResponse';
  page: Scalars['Int'];
  results: Array<Maybe<Movie>>;
  total_pages: Scalars['Int'];
  total_results: Scalars['Int'];
};

export type GetUpcomingMoviesResponse = {
  __typename?: 'GetUpcomingMoviesResponse';
  page: Scalars['Int'];
  results: Array<Maybe<Movie>>;
  total_pages: Scalars['Int'];
  total_results: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  adult: Scalars['Boolean'];
  backdrop_path?: Maybe<Scalars['String']>;
  genre_ids: Array<Maybe<Scalars['Int']>>;
  id: Scalars['Int'];
  original_language: Scalars['String'];
  original_title: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster_path?: Maybe<Scalars['String']>;
  release_date: Scalars['String'];
  title: Scalars['String'];
  video: Scalars['Boolean'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
};

export type MovieWithVideos = {
  __typename?: 'MovieWithVideos';
  adult: Scalars['Boolean'];
  backdrop_path?: Maybe<Scalars['String']>;
  genre_ids: Array<Maybe<Scalars['Int']>>;
  id: Scalars['Int'];
  original_language: Scalars['String'];
  original_title: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster_path?: Maybe<Scalars['String']>;
  release_date: Scalars['String'];
  title: Scalars['String'];
  video: Scalars['Boolean'];
  videos: Array<Maybe<Video>>;
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getMovie: GetMovieResponse;
  getNowPlayingMovies: GetNowPlayingMoviesResponse;
  getPopularMovies: GetPopularMoviesResponse;
  getTopRatedMovies: GetTopRatedMoviesResponse;
  getUpcomingMovies: GetUpcomingMoviesResponse;
};


export type QueryGetMovieArgs = {
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
};


export type QueryGetNowPlayingMoviesArgs = {
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};


export type QueryGetPopularMoviesArgs = {
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};


export type QueryGetTopRatedMoviesArgs = {
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};


export type QueryGetUpcomingMoviesArgs = {
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  iso_639_1: Scalars['String'];
  iso_3166_1: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
  published_at: Scalars['String'];
  site: Scalars['String'];
  size: Scalars['Int'];
  type: Scalars['String'];
};

export type GetPopularMoviesQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetPopularMoviesQuery = { __typename?: 'Query', getPopularMovies: { __typename?: 'GetPopularMoviesResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'Movie', adult: boolean, backdrop_path?: string | null, genre_ids: Array<number | null>, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number } | null> } };

export type GetTopRatedMoviesQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetTopRatedMoviesQuery = { __typename?: 'Query', getTopRatedMovies: { __typename?: 'GetTopRatedMoviesResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'Movie', adult: boolean, backdrop_path?: string | null, genre_ids: Array<number | null>, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number } | null> } };

export type GetUpcomingMoviesQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetUpcomingMoviesQuery = { __typename?: 'Query', getUpcomingMovies: { __typename?: 'GetUpcomingMoviesResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'Movie', adult: boolean, backdrop_path?: string | null, genre_ids: Array<number | null>, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number } | null> } };

export type GetNowPlayingMoviesQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetNowPlayingMoviesQuery = { __typename?: 'Query', getNowPlayingMovies: { __typename?: 'GetNowPlayingMoviesResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'Movie', adult: boolean, backdrop_path?: string | null, genre_ids: Array<number | null>, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number } | null> } };

export type GetMovieQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Scalars['String']>;
}>;


export type GetMovieQuery = { __typename?: 'Query', getMovie: { __typename?: 'GetMovieResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'MovieWithVideos', adult: boolean, backdrop_path?: string | null, genre_ids: Array<number | null>, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number, videos: Array<{ __typename?: 'Video', iso_639_1: string, iso_3166_1: string, name: string, key: string, site: string, size: number, type: string, official: boolean, published_at: string, id: string } | null> } | null> } };


export const GetPopularMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPopularMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPopularMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total_results"}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]}}]} as unknown as DocumentNode<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>;
export const GetTopRatedMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopRatedMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTopRatedMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total_results"}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]}}]} as unknown as DocumentNode<GetTopRatedMoviesQuery, GetTopRatedMoviesQueryVariables>;
export const GetUpcomingMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUpcomingMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUpcomingMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total_results"}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]}}]} as unknown as DocumentNode<GetUpcomingMoviesQuery, GetUpcomingMoviesQueryVariables>;
export const GetNowPlayingMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNowPlayingMovies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNowPlayingMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total_results"}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}}]}}]}}]}}]} as unknown as DocumentNode<GetNowPlayingMoviesQuery, GetNowPlayingMoviesQueryVariables>;
export const GetMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"language"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"Variable","name":{"kind":"Name","value":"language"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total_results"}},{"kind":"Field","name":{"kind":"Name","value":"total_pages"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adult"}},{"kind":"Field","name":{"kind":"Name","value":"backdrop_path"}},{"kind":"Field","name":{"kind":"Name","value":"genre_ids"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"original_language"}},{"kind":"Field","name":{"kind":"Name","value":"original_title"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"poster_path"}},{"kind":"Field","name":{"kind":"Name","value":"release_date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"vote_average"}},{"kind":"Field","name":{"kind":"Name","value":"vote_count"}},{"kind":"Field","name":{"kind":"Name","value":"videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso_639_1"}},{"kind":"Field","name":{"kind":"Name","value":"iso_3166_1"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"site"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"official"}},{"kind":"Field","name":{"kind":"Name","value":"published_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMovieQuery, GetMovieQueryVariables>;