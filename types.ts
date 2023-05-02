import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GetProducts = {
  __typename?: 'GetProducts';
  category: Scalars['String'];
  next_page: Scalars['Int'];
  products: Array<Maybe<Product>>;
  total_products: Scalars['String'];
};

export type Price = {
  __typename?: 'Price';
  before_price: Scalars['Float'];
  currency: Scalars['String'];
  current_price: Scalars['String'];
  discounted: Scalars['Boolean'];
  savings_amount: Scalars['Float'];
  savings_percent: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  amazonChoice: Scalars['Boolean'];
  amazonPrime: Scalars['Boolean'];
  asin: Scalars['String'];
  bestSeller: Scalars['Boolean'];
  price: Price;
  reviews: Reviews;
  score: Scalars['String'];
  sponsored: Scalars['Boolean'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  products: GetProducts;
};


export type QueryProductsArgs = {
  category?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  keyword: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};

export type Reviews = {
  __typename?: 'Reviews';
  rating: Scalars['Float'];
  total_reviews: Scalars['Int'];
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
  GetProducts: ResolverTypeWrapper<GetProducts>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Price: ResolverTypeWrapper<Price>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  Reviews: ResolverTypeWrapper<Reviews>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  GetProducts: GetProducts;
  Int: Scalars['Int'];
  Price: Price;
  Product: Product;
  Query: {};
  Reviews: Reviews;
  String: Scalars['String'];
};

export type GetProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetProducts'] = ResolversParentTypes['GetProducts']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  next_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  total_products?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  before_price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  current_price?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discounted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  savings_amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  savings_percent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  amazonChoice?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  amazonPrime?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  asin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bestSeller?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Price'], ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['Reviews'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sponsored?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  products?: Resolver<ResolversTypes['GetProducts'], ParentType, ContextType, RequireFields<QueryProductsArgs, 'keyword'>>;
};

export type ReviewsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reviews'] = ResolversParentTypes['Reviews']> = {
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  total_reviews?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  GetProducts?: GetProductsResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reviews?: ReviewsResolvers<ContextType>;
};

