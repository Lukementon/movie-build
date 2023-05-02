import { GraphQLResolveInfo } from 'graphql';
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetPopularMoviesResponse: ResolverTypeWrapper<GetPopularMoviesResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Movie: ResolverTypeWrapper<Movie>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  GetPopularMoviesResponse: GetPopularMoviesResponse;
  Int: Scalars['Int'];
  Movie: Movie;
  Query: {};
  String: Scalars['String'];
};

export type GetPopularMoviesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPopularMoviesResponse'] = ResolversParentTypes['GetPopularMoviesResponse']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<Maybe<ResolversTypes['Movie']>>, ParentType, ContextType>;
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  adult?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  backdrop_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genre_ids?: Resolver<Array<Maybe<ResolversTypes['Int']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  original_language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  original_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  overview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  poster_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  video?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  vote_average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  vote_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPopularMovies?: Resolver<ResolversTypes['GetPopularMoviesResponse'], ParentType, ContextType, Partial<QueryGetPopularMoviesArgs>>;
};

export type Resolvers<ContextType = any> = {
  GetPopularMoviesResponse?: GetPopularMoviesResponseResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

