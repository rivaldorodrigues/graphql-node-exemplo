module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateUsuario {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUsuario(data: UsuarioCreateInput!): Usuario!
  updateUsuario(data: UsuarioUpdateInput!, where: UsuarioWhereUniqueInput!): Usuario
  updateManyUsuarios(data: UsuarioUpdateManyMutationInput!, where: UsuarioWhereInput): BatchPayload!
  upsertUsuario(where: UsuarioWhereUniqueInput!, create: UsuarioCreateInput!, update: UsuarioUpdateInput!): Usuario!
  deleteUsuario(where: UsuarioWhereUniqueInput!): Usuario
  deleteManyUsuarios(where: UsuarioWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  usuario(where: UsuarioWhereUniqueInput!): Usuario
  usuarios(where: UsuarioWhereInput, orderBy: UsuarioOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Usuario]!
  usuariosConnection(where: UsuarioWhereInput, orderBy: UsuarioOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UsuarioConnection!
  node(id: ID!): Node
}

type Subscription {
  usuario(where: UsuarioSubscriptionWhereInput): UsuarioSubscriptionPayload
}

type Usuario {
  id: ID!
  nome: String!
  sobrenome: String!
  email: String!
  senha: String!
}

type UsuarioConnection {
  pageInfo: PageInfo!
  edges: [UsuarioEdge]!
  aggregate: AggregateUsuario!
}

input UsuarioCreateInput {
  nome: String!
  sobrenome: String!
  email: String!
  senha: String!
}

type UsuarioEdge {
  node: Usuario!
  cursor: String!
}

enum UsuarioOrderByInput {
  id_ASC
  id_DESC
  nome_ASC
  nome_DESC
  sobrenome_ASC
  sobrenome_DESC
  email_ASC
  email_DESC
  senha_ASC
  senha_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UsuarioPreviousValues {
  id: ID!
  nome: String!
  sobrenome: String!
  email: String!
  senha: String!
}

type UsuarioSubscriptionPayload {
  mutation: MutationType!
  node: Usuario
  updatedFields: [String!]
  previousValues: UsuarioPreviousValues
}

input UsuarioSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UsuarioWhereInput
  AND: [UsuarioSubscriptionWhereInput!]
  OR: [UsuarioSubscriptionWhereInput!]
  NOT: [UsuarioSubscriptionWhereInput!]
}

input UsuarioUpdateInput {
  nome: String
  sobrenome: String
  email: String
  senha: String
}

input UsuarioUpdateManyMutationInput {
  nome: String
  sobrenome: String
  email: String
  senha: String
}

input UsuarioWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nome: String
  nome_not: String
  nome_in: [String!]
  nome_not_in: [String!]
  nome_lt: String
  nome_lte: String
  nome_gt: String
  nome_gte: String
  nome_contains: String
  nome_not_contains: String
  nome_starts_with: String
  nome_not_starts_with: String
  nome_ends_with: String
  nome_not_ends_with: String
  sobrenome: String
  sobrenome_not: String
  sobrenome_in: [String!]
  sobrenome_not_in: [String!]
  sobrenome_lt: String
  sobrenome_lte: String
  sobrenome_gt: String
  sobrenome_gte: String
  sobrenome_contains: String
  sobrenome_not_contains: String
  sobrenome_starts_with: String
  sobrenome_not_starts_with: String
  sobrenome_ends_with: String
  sobrenome_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  senha: String
  senha_not: String
  senha_in: [String!]
  senha_not_in: [String!]
  senha_lt: String
  senha_lte: String
  senha_gt: String
  senha_gte: String
  senha_contains: String
  senha_not_contains: String
  senha_starts_with: String
  senha_not_starts_with: String
  senha_ends_with: String
  senha_not_ends_with: String
  AND: [UsuarioWhereInput!]
  OR: [UsuarioWhereInput!]
  NOT: [UsuarioWhereInput!]
}

input UsuarioWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    