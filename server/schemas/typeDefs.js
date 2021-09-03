const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Job {
    _id: ID
    title: String
    salary: Int
    company: String
    location: String
    description: String
  }

  type Jobs {
    _id: ID
    addedDate: String
    jobs: [Job]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    jobs: [Jobs]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    jobs(user: ID!): [Job]
    job(_id: ID!): Job
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addJob(job: [ID]!): Jobs
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
