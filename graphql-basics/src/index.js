import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";

const pubsub = new PubSub();
//scalar types(store single val)--String, Int, Boolean, ID, Float here ! means not nullable(should provide value)
//custom types -- objects
//array of sclalar type--no need selection {} in client side
//array of customn type -- need selection {} in client side
//send data from server to client

//type definitions also known as app schema
//4 argument passed to reserver function they are --for client data access
//parent- it is useful while working relational data ie if user has many post it help to get user post it help
//args contain info we need, it  contains operation args supplied
//ctx for contextual data eg for user is logged in ctx may contain id of user for him to logged in throughout app context
//info it contain greate info about actual operation that were sent along to server
//input type by refrencing to operation args; you need to refrence with input type not custom type because input types can only
//have scalar values.
//input type helps args a bit organized if there is long operational input fields.

// Type definitions (schema)
// const typeDefs = ``;
//contex ctx is important ie we can set of some ctx for our API and ctx object with some properties will be
//passed to every single resolvers method

// Resolvers
// const resolvers =

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => {
  console.log("The server is up!");
});
