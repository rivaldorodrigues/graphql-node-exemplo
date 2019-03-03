// Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  usuario: (where?: UsuarioWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  usuario: (where: UsuarioWhereUniqueInput) => UsuarioPromise;
  usuarios: (
    args?: {
      where?: UsuarioWhereInput;
      orderBy?: UsuarioOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Usuario>;
  usuariosConnection: (
    args?: {
      where?: UsuarioWhereInput;
      orderBy?: UsuarioOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UsuarioConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUsuario: (data: UsuarioCreateInput) => UsuarioPromise;
  updateUsuario: (
    args: { data: UsuarioUpdateInput; where: UsuarioWhereUniqueInput }
  ) => UsuarioPromise;
  updateManyUsuarios: (
    args: { data: UsuarioUpdateManyMutationInput; where?: UsuarioWhereInput }
  ) => BatchPayloadPromise;
  upsertUsuario: (
    args: {
      where: UsuarioWhereUniqueInput;
      create: UsuarioCreateInput;
      update: UsuarioUpdateInput;
    }
  ) => UsuarioPromise;
  deleteUsuario: (where: UsuarioWhereUniqueInput) => UsuarioPromise;
  deleteManyUsuarios: (where?: UsuarioWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  usuario: (
    where?: UsuarioSubscriptionWhereInput
  ) => UsuarioSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UsuarioOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nome_ASC"
  | "nome_DESC"
  | "sobrenome_ASC"
  | "sobrenome_DESC"
  | "email_ASC"
  | "email_DESC"
  | "senha_ASC"
  | "senha_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UsuarioCreateInput {
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}

export interface UsuarioUpdateInput {
  nome?: String;
  sobrenome?: String;
  email?: String;
  senha?: String;
}

export interface UsuarioUpdateManyMutationInput {
  nome?: String;
  sobrenome?: String;
  email?: String;
  senha?: String;
}

export interface UsuarioWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  nome?: String;
  nome_not?: String;
  nome_in?: String[] | String;
  nome_not_in?: String[] | String;
  nome_lt?: String;
  nome_lte?: String;
  nome_gt?: String;
  nome_gte?: String;
  nome_contains?: String;
  nome_not_contains?: String;
  nome_starts_with?: String;
  nome_not_starts_with?: String;
  nome_ends_with?: String;
  nome_not_ends_with?: String;
  sobrenome?: String;
  sobrenome_not?: String;
  sobrenome_in?: String[] | String;
  sobrenome_not_in?: String[] | String;
  sobrenome_lt?: String;
  sobrenome_lte?: String;
  sobrenome_gt?: String;
  sobrenome_gte?: String;
  sobrenome_contains?: String;
  sobrenome_not_contains?: String;
  sobrenome_starts_with?: String;
  sobrenome_not_starts_with?: String;
  sobrenome_ends_with?: String;
  sobrenome_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  senha?: String;
  senha_not?: String;
  senha_in?: String[] | String;
  senha_not_in?: String[] | String;
  senha_lt?: String;
  senha_lte?: String;
  senha_gt?: String;
  senha_gte?: String;
  senha_contains?: String;
  senha_not_contains?: String;
  senha_starts_with?: String;
  senha_not_starts_with?: String;
  senha_ends_with?: String;
  senha_not_ends_with?: String;
  AND?: UsuarioWhereInput[] | UsuarioWhereInput;
  OR?: UsuarioWhereInput[] | UsuarioWhereInput;
  NOT?: UsuarioWhereInput[] | UsuarioWhereInput;
}

export interface UsuarioSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UsuarioWhereInput;
  AND?: UsuarioSubscriptionWhereInput[] | UsuarioSubscriptionWhereInput;
  OR?: UsuarioSubscriptionWhereInput[] | UsuarioSubscriptionWhereInput;
  NOT?: UsuarioSubscriptionWhereInput[] | UsuarioSubscriptionWhereInput;
}

export type UsuarioWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateUsuario {
  count: Int;
}

export interface AggregateUsuarioPromise
  extends Promise<AggregateUsuario>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUsuarioSubscription
  extends Promise<AsyncIterator<AggregateUsuario>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UsuarioPreviousValues {
  id: ID_Output;
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}

export interface UsuarioPreviousValuesPromise
  extends Promise<UsuarioPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nome: () => Promise<String>;
  sobrenome: () => Promise<String>;
  email: () => Promise<String>;
  senha: () => Promise<String>;
}

export interface UsuarioPreviousValuesSubscription
  extends Promise<AsyncIterator<UsuarioPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nome: () => Promise<AsyncIterator<String>>;
  sobrenome: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  senha: () => Promise<AsyncIterator<String>>;
}

export interface UsuarioEdge {
  node: Usuario;
  cursor: String;
}

export interface UsuarioEdgePromise extends Promise<UsuarioEdge>, Fragmentable {
  node: <T = UsuarioPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UsuarioEdgeSubscription
  extends Promise<AsyncIterator<UsuarioEdge>>,
    Fragmentable {
  node: <T = UsuarioSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UsuarioSubscriptionPayload {
  mutation: MutationType;
  node: Usuario;
  updatedFields: String[];
  previousValues: UsuarioPreviousValues;
}

export interface UsuarioSubscriptionPayloadPromise
  extends Promise<UsuarioSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UsuarioPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UsuarioPreviousValuesPromise>() => T;
}

export interface UsuarioSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UsuarioSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UsuarioSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UsuarioPreviousValuesSubscription>() => T;
}

export interface Usuario {
  id: ID_Output;
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}

export interface UsuarioPromise extends Promise<Usuario>, Fragmentable {
  id: () => Promise<ID_Output>;
  nome: () => Promise<String>;
  sobrenome: () => Promise<String>;
  email: () => Promise<String>;
  senha: () => Promise<String>;
}

export interface UsuarioSubscription
  extends Promise<AsyncIterator<Usuario>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nome: () => Promise<AsyncIterator<String>>;
  sobrenome: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  senha: () => Promise<AsyncIterator<String>>;
}

export interface UsuarioConnection {
  pageInfo: PageInfo;
  edges: UsuarioEdge[];
}

export interface UsuarioConnectionPromise
  extends Promise<UsuarioConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UsuarioEdge>>() => T;
  aggregate: <T = AggregateUsuarioPromise>() => T;
}

export interface UsuarioConnectionSubscription
  extends Promise<AsyncIterator<UsuarioConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UsuarioEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUsuarioSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Usuario",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
