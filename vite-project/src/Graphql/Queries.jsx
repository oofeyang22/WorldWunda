/*import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { gql } from '@apollo/client';
const httpLink = new HttpLink({ uri: 'https://api-eu-west-2.hygraph.com/v2/clvf4gan60aca07w8zkvulkd4/master' }); // Replace with your endpoint URL

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;

const category = `
    id,
    name,
    slug,
    color { hex }

`

const comment = `
    id,
    name,
    email,
    comment
`

const historicalsite = `
    id,
    site,
    slug,
    coverImage { url },
    content { html },
    description,
    createdAt,
    updatedAt,

`

export const QUERY_SLUG_CATEGORIES = gql`
    {
        categories(){
            name,
            slug
        }
    }
`

export const QUERY_HISTORICAL_SITES = gql`
    {
        historicalsites(){
            ${historicalsite}
            categories(){
                ${category}
            }
        }
    }

`
*/

import { GraphQLClient, gql} from 'graphql-request'


export const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/clvf4gan60aca07w8zkvulkd4/master')


const category = `
    id,
    name,
    slug,
    color { hex }

`

const comment = `
    id,
    name,
    email,
    comment
`

const historicalsite = `
    id,
    site,
    slug,
    coverImage { url },
    content { html },
    description,
    createdAt,
    updatedAt,

`

export const QUERY_SLUG_CATEGORIES = gql`
    {
        categories(){
            name,
            slug
        }
    }
`

export const QUERY_HISTORICAL_SITES = gql`
    query GetHistoricalSites($limit: Int!, $skip: Int!) {
        historicalsites(orderBy: updatedAt_DESC, first: $limit, skip: $skip){
            ${historicalsite}
            categories(){
                ${category}
            }
        }
        countConnection: historicalsitesConnection(stage: PUBLISHED){
            aggregate{
                count
            }
        }
    }

`

export const QUERY_HISTORICAL_SITES_BY_CATEGORY = gql`
    query GetSitesByCategory($slug: String!, $limit: Int!, $skip: Int!) {
        historicalsites(
            orderBy: updatedAt_DESC,
            first: $limit,
            skip: $skip
            where: {categories_some: {slug: $slug}}
        ){
            ${historicalsite}
            categories(){
                ${category}
            }
        }
        countConnection: historicalsitesConnection(
            stage: PUBLISHED,
            where: {categories_some: {slug: $slug}}
        ){
            aggregate{
                count
            }
        }
    }

`

export const QUERY_SEARCH_SITES = gql`
    query GetSites($slug: String!, $limit: Int!, $skip: Int!) {
        historicalsites(
            orderBy: updatedAt_DESC,
            first: $limit,
            skip: $skip
            where: {_search: $slug, AND: {slug_contains: $slug}}
        ){
            ${historicalsite}
            categories(){
                ${category}
            }
        }
        countConnection: historicalsitesConnection(
            stage: PUBLISHED,
            where: {_search: $slug, AND: {slug_contains: $slug}}
        ){
            aggregate{
                count
            }
        }
    }

`

export const QUERY_ONE_SITE = gql`
    query GetOneSite($slug: String!) {
        historicalsites(where: {slug: $slug}
        ){
            ${historicalsite}
            categories(){
                ${category}
            }

        }

    }

`

