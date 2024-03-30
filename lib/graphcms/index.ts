import { GraphQLClient, gql } from "graphql-request"
import { TMeal, TOrder, TUser } from "@/types"

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
        type
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
        type
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

export const Choppables = async() => {
  const QUERY = gql`
    {
      meals(where: {type: "chops"}) {
        id
        name
        title
        slug
        price
        type
        category
        combo
        meat
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
        type
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
            type
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
        type
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
      type
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

export const CreateOrder = async(order: TOrder) => {

  const MUTATE = gql`
    mutation AddSingleOrder{
      createOrder(
        data: {
          receipt: "${order.receipt}",
          mealId: "${order.mealId}",
          ${order.customerId != null ? `customerId: "${order.customerId}"` : ""},
          name: "${order.name}",
          photo: "${order.photo}",
          combo: "${order.combo}",
          meat: "${order.meat}",
          method: "${order.method}",
          type: "${order.type}",
          firstName: "${order.firstname}",
          surname: "${order.lastname}",
          email: "${order.email}",
          tel: "${order.tel}",
          country: "${order.country}",
          state: "${order.city}",
          district: "${order.district}",
          address: "${order.address}",
          itemsCount: ${order.itemsCount},
          prepaid: ${order.prepaid},
          quantity: ${order.quantity},
          amount: ${order.amount},
          pending: true
        }
      ) {
        id
      }
    }`;
  const result: any = await hygraph.request(MUTATE);
  return result;
  // return result.meals;
}

export const VerifyOrder = async(id: string) => {

  const VERIFY = gql`
    mutation VerifyOrder {
      publishOrder(where: {id: "${id}"}) {
        id
      }
    }`;

    const result: any = await hygraph.request(VERIFY);
    return result;
  // return result.meals;
}

export const CreateUser = async(user: TUser) => {
  const MUTATE = gql`
    mutation NewUser {
      createCustomer(
        data: {
          firstName: "${user.firstName}",
          lastName: "${user.lastName}",
          email: "${user.email}",
          password: "${user.password}",
          role: "${user.role}"
        }
      ) {
        id
      }
    }`;
  const result: any = await hygraph.request(MUTATE);
  return result.createCustomer;
  // return result.meals;
}

export const VerifyUser = async(id: string) => {
  const VERIFY = gql`
    mutation VerifyUser {
      publishCustomer(where: {id: "${id}"}) {
        id
      }
    }`;

    const result: any = await hygraph.request(VERIFY);
    return result.publishCustomer;
}

export const GetUserById = async(id:string) => {
  const QUERY = gql`
    {
      customer(where: {id: "${id}"}) {
        id
        firstName
        lastName
        email
        role
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.customer;
}

export const EmailExists = async(email:string) => {
  const QUERY = gql`
    {
      customers(where: {email: "${email}"}) {
        id
        firstName
        lastName
        role
        email
        password
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.customers;
}

export const ModifyPassword = async(id:string, password: string) => {
  const QUERY = gql`
    mutation MyMutation {
      updateCustomer(
        data: {password: "${password}"}
        where: {id: "${id}"}
      ) {
        id
      }
    }`;
    const result:any = await hygraph.request(QUERY);
    return result.updateCustomer;
}

export const MyOrders = async(email: string, limit: number, skip: number) => {
  const QUERY = gql`
  {
    orders(where: {email: "${email}"}, first: ${limit}, skip: ${skip}) {
      amount
      name
      pending
      photo
      receipt
      customerId
      email
      quantity
    }
  }`;
    const result:any = await hygraph.request(QUERY);
    return result.orders;
}

export const playAudio = (file: string) => {
  const audio = new Audio(file);
  audio.volume = 0.2;
  audio.play();
}