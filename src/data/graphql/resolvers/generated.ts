import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GetPopularMoviesResponse = {
  __typename?: 'GetPopularMoviesResponse';
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

export type Query = {
  __typename?: 'Query';
  getPopularMovies: GetPopularMoviesResponse;
};


export type QueryGetPopularMoviesArgs = {
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
};

export type GetPopularMoviesQueryVariables = Exact<{
  language?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetPopularMoviesQuery = { __typename?: 'Query', getPopularMovies: { __typename?: 'GetPopularMoviesResponse', page: number, total_results: number, total_pages: number, results: Array<{ __typename?: 'Movie', adult: boolean, backdrop_path?: string | null, genre_ids: Array<number | null>, id: number, original_language: string, original_title: string, overview: string, popularity: number, poster_path?: string | null, release_date: string, title: string, video: boolean, vote_average: number, vote_count: number } | null> } };


export const GetPopularMoviesDocument = `
    query getPopularMovies($language: String, $page: Int) {
  getPopularMovies(language: $language, page: $page) {
    page
    total_results
    total_pages
    results {
      adult
      backdrop_path
      genre_ids
      id
      original_language
      original_title
      overview
      popularity
      poster_path
      release_date
      title
      video
      vote_average
      vote_count
    }
  }
}
    `;
export const useGetPopularMoviesQuery = <
      TData = GetPopularMoviesQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetPopularMoviesQueryVariables,
      options?: UseQueryOptions<GetPopularMoviesQuery, TError, TData>
    ) =>
    useQuery<GetPopularMoviesQuery, TError, TData>(
      variables === undefined ? ['getPopularMovies'] : ['getPopularMovies', variables],
      fetcher<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetPopularMoviesDocument, variables),
      options
    );