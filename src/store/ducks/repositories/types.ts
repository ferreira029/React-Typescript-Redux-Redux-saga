/**
 * Action Types
 * É a tipagem das ações do reducer
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}


/**
 * Data Types
 * É o formato da informação que estará dentro do reducer
 */

export interface Repository {
  id: number,
  name: string,
}

/**
 * State type
 * é o formato do estado deste reducer
 * é inserido o readonly, pois o estado é imutável, para nunca ser alterada as informações, mas gerar um estado novo
 */
export interface RepositoriesState {
  readonly data: Repository[],
  readonly loading: boolean,
  readonly error: boolean,
}
