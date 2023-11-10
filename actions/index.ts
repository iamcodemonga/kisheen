import { GraphQLClient, gql } from "graphql-request"
import { TMeal } from "@/types"

const key = process.env.NEXT_PUBLIC_API_KEY;
const bearer = process.env.NEXT_PUBLIC_GRAPH_BEARER;

export const hygraph = new GraphQLClient(`${key}`,
  {
    headers: {
      Authorization: `${bearer}`
    }
  }
);

export const SpecialMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "special"}) {
        id
        name
        title
        slug
        price
        quantity
        photo {
          url
        }
      }
    }`;
  const result: { meals: TMeal[] } = await hygraph.request(QUERY)
  return result.meals;
}

export const FeaturedMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "casual"}) {
        id
        name
        title
        slug
        price
        quantity
        photo {
          url
        }
        combo
        meat
      }
    }`;
  const result: { meals: TMeal[] } = await hygraph.request(QUERY)
  return result.meals;
}

export const PotMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "pot"}) {
        id
        name
        title
        slug
        price
        priceSm
        priceXl
        quantity
        photo {
          url
        }
      }
    }`;
  const result: { meals: TMeal[] } = await hygraph.request(QUERY)
  return result.meals;
}

export const AllMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type_not: "pot", price_gte: 0, price_lte: 100000}) {
        id
        photo {
          url
        }
        price
        quantity
        slug
        title
        combo
        meat
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const CategorisedMeals = async(category:string | null, limit: number, skip: number) => {

  const group = (category == 'rice' ? 'category_not: "soup"' : `category: "${category}"`);

  const QUERY = gql`
   {
      meals( where: {type_not: "pot", ${category && group}}, first: ${limit}, skip: ${skip} ) {
        id
        photo {
          url
        }
        name
        title
        slug
        price
        quantity
        combo
        meat
      }
  }`
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const FilterdedMeals = async(limit: number, skip: number, min:number, max:number, category?:string | null) => {

  const group = (category == 'rice' ? 'category_not: "soup"' : `category: "${category}"`);
  
  const QUERY = gql`
    {
        meals( where: {type_not: "pot", price_gte: ${min}, price_lte: ${max}, ${category ? group : ''}}, first: ${limit}, skip: ${skip} ) {
            id
            photo {
              url
            }
            name
            title
            slug
            price
            quantity
            combo
            meat
        }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const SearchMeals = async(word:string) => {
  
  const QUERY = gql`
    {
      meals(where: {type_not: "pot", title_contains: "${word}"}) {
        id
        photo {
          url
        }
        name
        title
        slug
        price
        quantity
        combo
        meat
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const Meal = async(slug:string) => {
  const QUERY = gql`
    {
        meal(where: {slug: "${slug}"}) {
          category
          combo
          description
          id
          meat
          name
          photo {
            url
          }
          price
          priceLg
          priceSm
          priceXl
          quantity
          slug
          title
          type
        }
      }`;
    const result:any = await hygraph.request(QUERY);
    return result.meal;
}

export const SimilarMeals = async(slug:string, category: string) => {

  const group = (category == 'rice' ? 'category_not: "soup"' : `category: "${category}"`);

  const QUERY = gql`
  query MyQuery {
    meals(
      where: {${group}, AND: {slug_not: "${slug}", type_not: "pot"}}
      first: 3
    ) {
      id
      photo {
        url
      }
      price
      quantity
      slug
      title
      combo
      meat
    }
  }`;
  const result: any = await hygraph.request(QUERY);
  return result.meals;
}

export const SimilarPotMeals = async(id: string) => {

  const QUERY = gql`
  {
    meals(where: {type: "pot", id_not: "${id}"}, first: 3) {
      id
      photo {
        url
      }
      name
      title
      slug
      price
      priceSm,
      priceXl
      quantity
    }
  }`;
  const result: any = await hygraph.request(QUERY);
  return result.meals;
}