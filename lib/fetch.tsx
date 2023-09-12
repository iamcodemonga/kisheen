import { GraphQLClient, gql } from "graphql-request"

interface Meals {
  id: string,
  name: string,
  price: number,
  quantity: number,
  slug: string,
  title: string,
  type: string
}

interface PotMeals {
  id: string,
  name: string,
  price: number,
  slug: string,
  title: string,
  type: string
}

export const hygraph = new GraphQLClient(
  'https://api-eu-west-2.hygraph.com/v2/clkt34nsn0kbn01un5r1e3yet/master',
  {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTE2NDg2NzIsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2xrdDM0bnNuMGtibjAxdW41cjFlM3lldC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODQ1NTc1NjItNmQzMC00MmU3LWE4ZTktMWQyNTIwZTcxY2MzIiwianRpIjoiY2xsNHJ4eGppMGF3NTAxdGM3a2dsN3hjMiJ9.bL1_9t0L7FsY0IVnViSHeiKClh-E7hwlrDKISaaGRAc8aD9Dypi_-0NROQn1nV1RZNe-eSH6VaEt9ndIFlLYmyf2IptwYXpZ5V0XJcANL7dtzWsDAkNk8we4CFdigEb9eoP0FUm9sMwVBpGras0aixuXhqZtfnXn4yhviMIfV0xHg4xYIru8CSWOgZuCcytLiwrKSoaB7lLtyG4vj5lEdCeU9aDWSLsDTi0nhnKqv1n9OfPqCd80XTIYcfgIhmLq5wK3mUNk0XO-gff4iK716FUZ2Zy5eW6c-ogBKPFNWggBSLRPC8GRishypUTW3P8R1qMx3EyXcj_rs3b1o-0Yglz2jlLPfhje-wTPg1aBIFkeJY16ldp0Hbo232HbGU6LO-zk2JQB_Wi78IbloKTPpWz1Ho8Q-fjcW9_7NX-qq6Eyl9VkmHVgOjNz-XL4odWQ5ti69gKrJJgC3K9r2mIyBbNy0xAaPwgaxKBhKKc6B8GhWuek_CfZ5y4a4nEFL7cBhjJDjLs-vMFjWo-riXcHKHu0AxyJYlRnjEBxrtvl-OXg6aiqdWCJhGM6ehIKc8TnVZT1dkPTi_TUhje5HqyDTVd0-GJJgE7TvFKt21qxSBF8VEQIc8lxvu5jPNq0__4u_3o4krDmq-TqL4VfMyNk9C1ZIza3wByHvmXYrdYV-w8'
    }
  }
);

export const SpecialMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "special"}) {
        id
        name
        price
        slug
        title
        photo {
          url
        }
      }
    }`;
  const result: any = await hygraph.request(QUERY)
  return result.meals;
}

export const FeaturedMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "casual"}) {
        id
        name
        price
        quantity
        slug
        title
        type
        photo {
          url
        }
      }
    }`;
  const result: any = await hygraph.request(QUERY)
  return result.meals;
}

export const PotMeals = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "pot"}) {
        id
        name
        price
        slug
        title
        priceSm
        priceXl
        photo {
          url
        }
      }
    }`;
  const result: any = await hygraph.request(QUERY)
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
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const CategorisedMeals = async(category:string | null) => {

  const group = (category == 'rice' ? 'category_not: "soup"' : `category: "${category}"`);

  const QUERY = gql`
   {
      meals(
        where: {type_not: "pot", ${category && group}}
      ) {
        id
        photo {
          url
        }
        price
        quantity
        slug
        title
      }
  }`
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const FilterdedMeals = async(min:number, max:number, category?:string | null) => {

  // let group: string | null = null;

  const group = (category == 'rice' ? 'category_not: "soup"' : `category: "${category}"`);
  
  const QUERY = gql`
    {
        meals(
          where: {type_not: "pot", price_gte: ${min}, price_lte: ${max}, ${category ? group : ''}}
        ) {
          id
          photo {
            url
          }
          price
          quantity
          slug
          title
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
        price
        quantity
        slug
        title
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.meals;
}

export const Meal = async(slug:any) => {
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
    }
  }`;
  const result: any = await hygraph.request(QUERY);
  return result.meals;
}