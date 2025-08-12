
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProjectList
 * 
 */
export type ProjectList = $Result.DefaultSelection<Prisma.$ProjectListPayload>
/**
 * Model UserOnProject
 * 
 */
export type UserOnProject = $Result.DefaultSelection<Prisma.$UserOnProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model UserOnTask
 * 
 */
export type UserOnTask = $Result.DefaultSelection<Prisma.$UserOnTaskPayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  LEADER: 'LEADER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TaskStatus: {
  ONGOING: 'ONGOING',
  ONAPPROVE: 'ONAPPROVE',
  COMPLETED: 'COMPLETED',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]


export const ProjectStatus: {
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  PENDING: 'PENDING',
  OVERDUE: 'OVERDUE'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectList`: Exposes CRUD operations for the **ProjectList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectLists
    * const projectLists = await prisma.projectList.findMany()
    * ```
    */
  get projectList(): Prisma.ProjectListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnProject`: Exposes CRUD operations for the **UserOnProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnProjects
    * const userOnProjects = await prisma.userOnProject.findMany()
    * ```
    */
  get userOnProject(): Prisma.UserOnProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnTask`: Exposes CRUD operations for the **UserOnTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnTasks
    * const userOnTasks = await prisma.userOnTask.findMany()
    * ```
    */
  get userOnTask(): Prisma.UserOnTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ProjectList: 'ProjectList',
    UserOnProject: 'UserOnProject',
    Task: 'Task',
    UserOnTask: 'UserOnTask',
    Status: 'Status'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "projectList" | "userOnProject" | "task" | "userOnTask" | "status"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProjectList: {
        payload: Prisma.$ProjectListPayload<ExtArgs>
        fields: Prisma.ProjectListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>
          }
          findFirst: {
            args: Prisma.ProjectListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>
          }
          findMany: {
            args: Prisma.ProjectListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>[]
          }
          create: {
            args: Prisma.ProjectListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>
          }
          createMany: {
            args: Prisma.ProjectListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>
          }
          update: {
            args: Prisma.ProjectListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>
          }
          deleteMany: {
            args: Prisma.ProjectListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectListPayload>
          }
          aggregate: {
            args: Prisma.ProjectListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectList>
          }
          groupBy: {
            args: Prisma.ProjectListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectListCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectListCountAggregateOutputType> | number
          }
        }
      }
      UserOnProject: {
        payload: Prisma.$UserOnProjectPayload<ExtArgs>
        fields: Prisma.UserOnProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>
          }
          findFirst: {
            args: Prisma.UserOnProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>
          }
          findMany: {
            args: Prisma.UserOnProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>[]
          }
          create: {
            args: Prisma.UserOnProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>
          }
          createMany: {
            args: Prisma.UserOnProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserOnProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>
          }
          update: {
            args: Prisma.UserOnProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>
          }
          deleteMany: {
            args: Prisma.UserOnProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserOnProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnProjectPayload>
          }
          aggregate: {
            args: Prisma.UserOnProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnProject>
          }
          groupBy: {
            args: Prisma.UserOnProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnProjectCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      UserOnTask: {
        payload: Prisma.$UserOnTaskPayload<ExtArgs>
        fields: Prisma.UserOnTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>
          }
          findFirst: {
            args: Prisma.UserOnTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>
          }
          findMany: {
            args: Prisma.UserOnTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>[]
          }
          create: {
            args: Prisma.UserOnTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>
          }
          createMany: {
            args: Prisma.UserOnTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserOnTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>
          }
          update: {
            args: Prisma.UserOnTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>
          }
          deleteMany: {
            args: Prisma.UserOnTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserOnTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnTaskPayload>
          }
          aggregate: {
            args: Prisma.UserOnTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnTask>
          }
          groupBy: {
            args: Prisma.UserOnTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnTaskCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnTaskCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    projectList?: ProjectListOmit
    userOnProject?: UserOnProjectOmit
    task?: TaskOmit
    userOnTask?: UserOnTaskOmit
    status?: StatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    project: number
    UserOnTask: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | UserCountOutputTypeCountProjectArgs
    UserOnTask?: boolean | UserCountOutputTypeCountUserOnTaskArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserOnTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnTaskWhereInput
  }


  /**
   * Count Type ProjectListCountOutputType
   */

  export type ProjectListCountOutputType = {
    user: number
    task: number
  }

  export type ProjectListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProjectListCountOutputTypeCountUserArgs
    task?: boolean | ProjectListCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * ProjectListCountOutputType without action
   */
  export type ProjectListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectListCountOutputType
     */
    select?: ProjectListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectListCountOutputType without action
   */
  export type ProjectListCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnProjectWhereInput
  }

  /**
   * ProjectListCountOutputType without action
   */
  export type ProjectListCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    status: number
    assignTo: number
    User: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | TaskCountOutputTypeCountStatusArgs
    assignTo?: boolean | TaskCountOutputTypeCountAssignToArgs
    User?: boolean | TaskCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAssignToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnTaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createAt: Date | null
    updateAt: Date | null
    phoneNo: string | null
    email: string | null
    role: $Enums.Role | null
    department: string | null
    taskId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createAt: Date | null
    updateAt: Date | null
    phoneNo: string | null
    email: string | null
    role: $Enums.Role | null
    department: string | null
    taskId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    firstName: number
    lastName: number
    createAt: number
    updateAt: number
    phoneNo: number
    email: number
    role: number
    department: number
    taskId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    firstName?: true
    lastName?: true
    createAt?: true
    updateAt?: true
    phoneNo?: true
    email?: true
    role?: true
    department?: true
    taskId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    firstName?: true
    lastName?: true
    createAt?: true
    updateAt?: true
    phoneNo?: true
    email?: true
    role?: true
    department?: true
    taskId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    firstName?: true
    lastName?: true
    createAt?: true
    updateAt?: true
    phoneNo?: true
    email?: true
    role?: true
    department?: true
    taskId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt: Date
    updateAt: Date
    phoneNo: string
    email: string
    role: $Enums.Role
    department: string
    taskId: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createAt?: boolean
    updateAt?: boolean
    phoneNo?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    taskId?: boolean
    project?: boolean | User$projectArgs<ExtArgs>
    Task?: boolean | User$TaskArgs<ExtArgs>
    UserOnTask?: boolean | User$UserOnTaskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createAt?: boolean
    updateAt?: boolean
    phoneNo?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    taskId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "password" | "firstName" | "lastName" | "createAt" | "updateAt" | "phoneNo" | "email" | "role" | "department" | "taskId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | User$projectArgs<ExtArgs>
    Task?: boolean | User$TaskArgs<ExtArgs>
    UserOnTask?: boolean | User$UserOnTaskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      project: Prisma.$UserOnProjectPayload<ExtArgs>[]
      Task: Prisma.$TaskPayload<ExtArgs> | null
      UserOnTask: Prisma.$UserOnTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userName: string
      password: string
      firstName: string
      lastName: string
      createAt: Date
      updateAt: Date
      phoneNo: string
      email: string
      role: $Enums.Role
      department: string
      taskId: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends User$projectArgs<ExtArgs> = {}>(args?: Subset<T, User$projectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Task<T extends User$TaskArgs<ExtArgs> = {}>(args?: Subset<T, User$TaskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserOnTask<T extends User$UserOnTaskArgs<ExtArgs> = {}>(args?: Subset<T, User$UserOnTaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly phoneNo: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly department: FieldRef<"User", 'String'>
    readonly taskId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.project
   */
  export type User$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    where?: UserOnProjectWhereInput
    orderBy?: UserOnProjectOrderByWithRelationInput | UserOnProjectOrderByWithRelationInput[]
    cursor?: UserOnProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnProjectScalarFieldEnum | UserOnProjectScalarFieldEnum[]
  }

  /**
   * User.Task
   */
  export type User$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * User.UserOnTask
   */
  export type User$UserOnTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    where?: UserOnTaskWhereInput
    orderBy?: UserOnTaskOrderByWithRelationInput | UserOnTaskOrderByWithRelationInput[]
    cursor?: UserOnTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnTaskScalarFieldEnum | UserOnTaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProjectList
   */

  export type AggregateProjectList = {
    _count: ProjectListCountAggregateOutputType | null
    _avg: ProjectListAvgAggregateOutputType | null
    _sum: ProjectListSumAggregateOutputType | null
    _min: ProjectListMinAggregateOutputType | null
    _max: ProjectListMaxAggregateOutputType | null
  }

  export type ProjectListAvgAggregateOutputType = {
    id: number | null
    priority: number | null
    assignor: number | null
  }

  export type ProjectListSumAggregateOutputType = {
    id: number | null
    priority: number | null
    assignor: number | null
  }

  export type ProjectListMinAggregateOutputType = {
    id: number | null
    name: string | null
    priority: number | null
    projectStatus: $Enums.ProjectStatus | null
    detail: string | null
    createAt: Date | null
    updateAt: Date | null
    assignor: number | null
    dueDate: Date | null
  }

  export type ProjectListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    priority: number | null
    projectStatus: $Enums.ProjectStatus | null
    detail: string | null
    createAt: Date | null
    updateAt: Date | null
    assignor: number | null
    dueDate: Date | null
  }

  export type ProjectListCountAggregateOutputType = {
    id: number
    name: number
    priority: number
    projectStatus: number
    detail: number
    createAt: number
    updateAt: number
    assignor: number
    dueDate: number
    _all: number
  }


  export type ProjectListAvgAggregateInputType = {
    id?: true
    priority?: true
    assignor?: true
  }

  export type ProjectListSumAggregateInputType = {
    id?: true
    priority?: true
    assignor?: true
  }

  export type ProjectListMinAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    projectStatus?: true
    detail?: true
    createAt?: true
    updateAt?: true
    assignor?: true
    dueDate?: true
  }

  export type ProjectListMaxAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    projectStatus?: true
    detail?: true
    createAt?: true
    updateAt?: true
    assignor?: true
    dueDate?: true
  }

  export type ProjectListCountAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    projectStatus?: true
    detail?: true
    createAt?: true
    updateAt?: true
    assignor?: true
    dueDate?: true
    _all?: true
  }

  export type ProjectListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectList to aggregate.
     */
    where?: ProjectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLists to fetch.
     */
    orderBy?: ProjectListOrderByWithRelationInput | ProjectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectLists
    **/
    _count?: true | ProjectListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectListMaxAggregateInputType
  }

  export type GetProjectListAggregateType<T extends ProjectListAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectList[P]>
      : GetScalarType<T[P], AggregateProjectList[P]>
  }




  export type ProjectListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectListWhereInput
    orderBy?: ProjectListOrderByWithAggregationInput | ProjectListOrderByWithAggregationInput[]
    by: ProjectListScalarFieldEnum[] | ProjectListScalarFieldEnum
    having?: ProjectListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectListCountAggregateInputType | true
    _avg?: ProjectListAvgAggregateInputType
    _sum?: ProjectListSumAggregateInputType
    _min?: ProjectListMinAggregateInputType
    _max?: ProjectListMaxAggregateInputType
  }

  export type ProjectListGroupByOutputType = {
    id: number
    name: string
    priority: number
    projectStatus: $Enums.ProjectStatus
    detail: string
    createAt: Date
    updateAt: Date
    assignor: number
    dueDate: Date
    _count: ProjectListCountAggregateOutputType | null
    _avg: ProjectListAvgAggregateOutputType | null
    _sum: ProjectListSumAggregateOutputType | null
    _min: ProjectListMinAggregateOutputType | null
    _max: ProjectListMaxAggregateOutputType | null
  }

  type GetProjectListGroupByPayload<T extends ProjectListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectListGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectListGroupByOutputType[P]>
        }
      >
    >


  export type ProjectListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priority?: boolean
    projectStatus?: boolean
    detail?: boolean
    createAt?: boolean
    updateAt?: boolean
    assignor?: boolean
    dueDate?: boolean
    user?: boolean | ProjectList$userArgs<ExtArgs>
    task?: boolean | ProjectList$taskArgs<ExtArgs>
    _count?: boolean | ProjectListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectList"]>



  export type ProjectListSelectScalar = {
    id?: boolean
    name?: boolean
    priority?: boolean
    projectStatus?: boolean
    detail?: boolean
    createAt?: boolean
    updateAt?: boolean
    assignor?: boolean
    dueDate?: boolean
  }

  export type ProjectListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "priority" | "projectStatus" | "detail" | "createAt" | "updateAt" | "assignor" | "dueDate", ExtArgs["result"]["projectList"]>
  export type ProjectListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ProjectList$userArgs<ExtArgs>
    task?: boolean | ProjectList$taskArgs<ExtArgs>
    _count?: boolean | ProjectListCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectList"
    objects: {
      user: Prisma.$UserOnProjectPayload<ExtArgs>[]
      task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      priority: number
      projectStatus: $Enums.ProjectStatus
      detail: string
      createAt: Date
      updateAt: Date
      assignor: number
      dueDate: Date
    }, ExtArgs["result"]["projectList"]>
    composites: {}
  }

  type ProjectListGetPayload<S extends boolean | null | undefined | ProjectListDefaultArgs> = $Result.GetResult<Prisma.$ProjectListPayload, S>

  type ProjectListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectListCountAggregateInputType | true
    }

  export interface ProjectListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectList'], meta: { name: 'ProjectList' } }
    /**
     * Find zero or one ProjectList that matches the filter.
     * @param {ProjectListFindUniqueArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectListFindUniqueArgs>(args: SelectSubset<T, ProjectListFindUniqueArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectListFindUniqueOrThrowArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectListFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListFindFirstArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectListFindFirstArgs>(args?: SelectSubset<T, ProjectListFindFirstArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListFindFirstOrThrowArgs} args - Arguments to find a ProjectList
     * @example
     * // Get one ProjectList
     * const projectList = await prisma.projectList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectListFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectLists
     * const projectLists = await prisma.projectList.findMany()
     * 
     * // Get first 10 ProjectLists
     * const projectLists = await prisma.projectList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectListWithIdOnly = await prisma.projectList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectListFindManyArgs>(args?: SelectSubset<T, ProjectListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectList.
     * @param {ProjectListCreateArgs} args - Arguments to create a ProjectList.
     * @example
     * // Create one ProjectList
     * const ProjectList = await prisma.projectList.create({
     *   data: {
     *     // ... data to create a ProjectList
     *   }
     * })
     * 
     */
    create<T extends ProjectListCreateArgs>(args: SelectSubset<T, ProjectListCreateArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectLists.
     * @param {ProjectListCreateManyArgs} args - Arguments to create many ProjectLists.
     * @example
     * // Create many ProjectLists
     * const projectList = await prisma.projectList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectListCreateManyArgs>(args?: SelectSubset<T, ProjectListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectList.
     * @param {ProjectListDeleteArgs} args - Arguments to delete one ProjectList.
     * @example
     * // Delete one ProjectList
     * const ProjectList = await prisma.projectList.delete({
     *   where: {
     *     // ... filter to delete one ProjectList
     *   }
     * })
     * 
     */
    delete<T extends ProjectListDeleteArgs>(args: SelectSubset<T, ProjectListDeleteArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectList.
     * @param {ProjectListUpdateArgs} args - Arguments to update one ProjectList.
     * @example
     * // Update one ProjectList
     * const projectList = await prisma.projectList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectListUpdateArgs>(args: SelectSubset<T, ProjectListUpdateArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectLists.
     * @param {ProjectListDeleteManyArgs} args - Arguments to filter ProjectLists to delete.
     * @example
     * // Delete a few ProjectLists
     * const { count } = await prisma.projectList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectListDeleteManyArgs>(args?: SelectSubset<T, ProjectListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectLists
     * const projectList = await prisma.projectList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectListUpdateManyArgs>(args: SelectSubset<T, ProjectListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectList.
     * @param {ProjectListUpsertArgs} args - Arguments to update or create a ProjectList.
     * @example
     * // Update or create a ProjectList
     * const projectList = await prisma.projectList.upsert({
     *   create: {
     *     // ... data to create a ProjectList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectList we want to update
     *   }
     * })
     */
    upsert<T extends ProjectListUpsertArgs>(args: SelectSubset<T, ProjectListUpsertArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListCountArgs} args - Arguments to filter ProjectLists to count.
     * @example
     * // Count the number of ProjectLists
     * const count = await prisma.projectList.count({
     *   where: {
     *     // ... the filter for the ProjectLists we want to count
     *   }
     * })
    **/
    count<T extends ProjectListCountArgs>(
      args?: Subset<T, ProjectListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectListAggregateArgs>(args: Subset<T, ProjectListAggregateArgs>): Prisma.PrismaPromise<GetProjectListAggregateType<T>>

    /**
     * Group by ProjectList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectListGroupByArgs['orderBy'] }
        : { orderBy?: ProjectListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectList model
   */
  readonly fields: ProjectListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ProjectList$userArgs<ExtArgs> = {}>(args?: Subset<T, ProjectList$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task<T extends ProjectList$taskArgs<ExtArgs> = {}>(args?: Subset<T, ProjectList$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectList model
   */
  interface ProjectListFieldRefs {
    readonly id: FieldRef<"ProjectList", 'Int'>
    readonly name: FieldRef<"ProjectList", 'String'>
    readonly priority: FieldRef<"ProjectList", 'Int'>
    readonly projectStatus: FieldRef<"ProjectList", 'ProjectStatus'>
    readonly detail: FieldRef<"ProjectList", 'String'>
    readonly createAt: FieldRef<"ProjectList", 'DateTime'>
    readonly updateAt: FieldRef<"ProjectList", 'DateTime'>
    readonly assignor: FieldRef<"ProjectList", 'Int'>
    readonly dueDate: FieldRef<"ProjectList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectList findUnique
   */
  export type ProjectListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * Filter, which ProjectList to fetch.
     */
    where: ProjectListWhereUniqueInput
  }

  /**
   * ProjectList findUniqueOrThrow
   */
  export type ProjectListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * Filter, which ProjectList to fetch.
     */
    where: ProjectListWhereUniqueInput
  }

  /**
   * ProjectList findFirst
   */
  export type ProjectListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * Filter, which ProjectList to fetch.
     */
    where?: ProjectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLists to fetch.
     */
    orderBy?: ProjectListOrderByWithRelationInput | ProjectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLists.
     */
    cursor?: ProjectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLists.
     */
    distinct?: ProjectListScalarFieldEnum | ProjectListScalarFieldEnum[]
  }

  /**
   * ProjectList findFirstOrThrow
   */
  export type ProjectListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * Filter, which ProjectList to fetch.
     */
    where?: ProjectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLists to fetch.
     */
    orderBy?: ProjectListOrderByWithRelationInput | ProjectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectLists.
     */
    cursor?: ProjectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectLists.
     */
    distinct?: ProjectListScalarFieldEnum | ProjectListScalarFieldEnum[]
  }

  /**
   * ProjectList findMany
   */
  export type ProjectListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * Filter, which ProjectLists to fetch.
     */
    where?: ProjectListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectLists to fetch.
     */
    orderBy?: ProjectListOrderByWithRelationInput | ProjectListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectLists.
     */
    cursor?: ProjectListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectLists.
     */
    skip?: number
    distinct?: ProjectListScalarFieldEnum | ProjectListScalarFieldEnum[]
  }

  /**
   * ProjectList create
   */
  export type ProjectListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectList.
     */
    data: XOR<ProjectListCreateInput, ProjectListUncheckedCreateInput>
  }

  /**
   * ProjectList createMany
   */
  export type ProjectListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectLists.
     */
    data: ProjectListCreateManyInput | ProjectListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectList update
   */
  export type ProjectListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectList.
     */
    data: XOR<ProjectListUpdateInput, ProjectListUncheckedUpdateInput>
    /**
     * Choose, which ProjectList to update.
     */
    where: ProjectListWhereUniqueInput
  }

  /**
   * ProjectList updateMany
   */
  export type ProjectListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectLists.
     */
    data: XOR<ProjectListUpdateManyMutationInput, ProjectListUncheckedUpdateManyInput>
    /**
     * Filter which ProjectLists to update
     */
    where?: ProjectListWhereInput
    /**
     * Limit how many ProjectLists to update.
     */
    limit?: number
  }

  /**
   * ProjectList upsert
   */
  export type ProjectListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectList to update in case it exists.
     */
    where: ProjectListWhereUniqueInput
    /**
     * In case the ProjectList found by the `where` argument doesn't exist, create a new ProjectList with this data.
     */
    create: XOR<ProjectListCreateInput, ProjectListUncheckedCreateInput>
    /**
     * In case the ProjectList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectListUpdateInput, ProjectListUncheckedUpdateInput>
  }

  /**
   * ProjectList delete
   */
  export type ProjectListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
    /**
     * Filter which ProjectList to delete.
     */
    where: ProjectListWhereUniqueInput
  }

  /**
   * ProjectList deleteMany
   */
  export type ProjectListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectLists to delete
     */
    where?: ProjectListWhereInput
    /**
     * Limit how many ProjectLists to delete.
     */
    limit?: number
  }

  /**
   * ProjectList.user
   */
  export type ProjectList$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    where?: UserOnProjectWhereInput
    orderBy?: UserOnProjectOrderByWithRelationInput | UserOnProjectOrderByWithRelationInput[]
    cursor?: UserOnProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnProjectScalarFieldEnum | UserOnProjectScalarFieldEnum[]
  }

  /**
   * ProjectList.task
   */
  export type ProjectList$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ProjectList without action
   */
  export type ProjectListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectList
     */
    select?: ProjectListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectList
     */
    omit?: ProjectListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectListInclude<ExtArgs> | null
  }


  /**
   * Model UserOnProject
   */

  export type AggregateUserOnProject = {
    _count: UserOnProjectCountAggregateOutputType | null
    _avg: UserOnProjectAvgAggregateOutputType | null
    _sum: UserOnProjectSumAggregateOutputType | null
    _min: UserOnProjectMinAggregateOutputType | null
    _max: UserOnProjectMaxAggregateOutputType | null
  }

  export type UserOnProjectAvgAggregateOutputType = {
    projectListId: number | null
    userId: number | null
  }

  export type UserOnProjectSumAggregateOutputType = {
    projectListId: number | null
    userId: number | null
  }

  export type UserOnProjectMinAggregateOutputType = {
    projectListId: number | null
    userId: number | null
  }

  export type UserOnProjectMaxAggregateOutputType = {
    projectListId: number | null
    userId: number | null
  }

  export type UserOnProjectCountAggregateOutputType = {
    projectListId: number
    userId: number
    _all: number
  }


  export type UserOnProjectAvgAggregateInputType = {
    projectListId?: true
    userId?: true
  }

  export type UserOnProjectSumAggregateInputType = {
    projectListId?: true
    userId?: true
  }

  export type UserOnProjectMinAggregateInputType = {
    projectListId?: true
    userId?: true
  }

  export type UserOnProjectMaxAggregateInputType = {
    projectListId?: true
    userId?: true
  }

  export type UserOnProjectCountAggregateInputType = {
    projectListId?: true
    userId?: true
    _all?: true
  }

  export type UserOnProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnProject to aggregate.
     */
    where?: UserOnProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnProjects to fetch.
     */
    orderBy?: UserOnProjectOrderByWithRelationInput | UserOnProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnProjects
    **/
    _count?: true | UserOnProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnProjectMaxAggregateInputType
  }

  export type GetUserOnProjectAggregateType<T extends UserOnProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnProject[P]>
      : GetScalarType<T[P], AggregateUserOnProject[P]>
  }




  export type UserOnProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnProjectWhereInput
    orderBy?: UserOnProjectOrderByWithAggregationInput | UserOnProjectOrderByWithAggregationInput[]
    by: UserOnProjectScalarFieldEnum[] | UserOnProjectScalarFieldEnum
    having?: UserOnProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnProjectCountAggregateInputType | true
    _avg?: UserOnProjectAvgAggregateInputType
    _sum?: UserOnProjectSumAggregateInputType
    _min?: UserOnProjectMinAggregateInputType
    _max?: UserOnProjectMaxAggregateInputType
  }

  export type UserOnProjectGroupByOutputType = {
    projectListId: number
    userId: number
    _count: UserOnProjectCountAggregateOutputType | null
    _avg: UserOnProjectAvgAggregateOutputType | null
    _sum: UserOnProjectSumAggregateOutputType | null
    _min: UserOnProjectMinAggregateOutputType | null
    _max: UserOnProjectMaxAggregateOutputType | null
  }

  type GetUserOnProjectGroupByPayload<T extends UserOnProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnProjectGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnProjectGroupByOutputType[P]>
        }
      >
    >


  export type UserOnProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectListId?: boolean
    userId?: boolean
    ProjectList?: boolean | ProjectListDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnProject"]>



  export type UserOnProjectSelectScalar = {
    projectListId?: boolean
    userId?: boolean
  }

  export type UserOnProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectListId" | "userId", ExtArgs["result"]["userOnProject"]>
  export type UserOnProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProjectList?: boolean | ProjectListDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserOnProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnProject"
    objects: {
      ProjectList: Prisma.$ProjectListPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectListId: number
      userId: number
    }, ExtArgs["result"]["userOnProject"]>
    composites: {}
  }

  type UserOnProjectGetPayload<S extends boolean | null | undefined | UserOnProjectDefaultArgs> = $Result.GetResult<Prisma.$UserOnProjectPayload, S>

  type UserOnProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnProjectCountAggregateInputType | true
    }

  export interface UserOnProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnProject'], meta: { name: 'UserOnProject' } }
    /**
     * Find zero or one UserOnProject that matches the filter.
     * @param {UserOnProjectFindUniqueArgs} args - Arguments to find a UserOnProject
     * @example
     * // Get one UserOnProject
     * const userOnProject = await prisma.userOnProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnProjectFindUniqueArgs>(args: SelectSubset<T, UserOnProjectFindUniqueArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnProjectFindUniqueOrThrowArgs} args - Arguments to find a UserOnProject
     * @example
     * // Get one UserOnProject
     * const userOnProject = await prisma.userOnProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectFindFirstArgs} args - Arguments to find a UserOnProject
     * @example
     * // Get one UserOnProject
     * const userOnProject = await prisma.userOnProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnProjectFindFirstArgs>(args?: SelectSubset<T, UserOnProjectFindFirstArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectFindFirstOrThrowArgs} args - Arguments to find a UserOnProject
     * @example
     * // Get one UserOnProject
     * const userOnProject = await prisma.userOnProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnProjects
     * const userOnProjects = await prisma.userOnProject.findMany()
     * 
     * // Get first 10 UserOnProjects
     * const userOnProjects = await prisma.userOnProject.findMany({ take: 10 })
     * 
     * // Only select the `projectListId`
     * const userOnProjectWithProjectListIdOnly = await prisma.userOnProject.findMany({ select: { projectListId: true } })
     * 
     */
    findMany<T extends UserOnProjectFindManyArgs>(args?: SelectSubset<T, UserOnProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnProject.
     * @param {UserOnProjectCreateArgs} args - Arguments to create a UserOnProject.
     * @example
     * // Create one UserOnProject
     * const UserOnProject = await prisma.userOnProject.create({
     *   data: {
     *     // ... data to create a UserOnProject
     *   }
     * })
     * 
     */
    create<T extends UserOnProjectCreateArgs>(args: SelectSubset<T, UserOnProjectCreateArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnProjects.
     * @param {UserOnProjectCreateManyArgs} args - Arguments to create many UserOnProjects.
     * @example
     * // Create many UserOnProjects
     * const userOnProject = await prisma.userOnProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnProjectCreateManyArgs>(args?: SelectSubset<T, UserOnProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOnProject.
     * @param {UserOnProjectDeleteArgs} args - Arguments to delete one UserOnProject.
     * @example
     * // Delete one UserOnProject
     * const UserOnProject = await prisma.userOnProject.delete({
     *   where: {
     *     // ... filter to delete one UserOnProject
     *   }
     * })
     * 
     */
    delete<T extends UserOnProjectDeleteArgs>(args: SelectSubset<T, UserOnProjectDeleteArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnProject.
     * @param {UserOnProjectUpdateArgs} args - Arguments to update one UserOnProject.
     * @example
     * // Update one UserOnProject
     * const userOnProject = await prisma.userOnProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnProjectUpdateArgs>(args: SelectSubset<T, UserOnProjectUpdateArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnProjects.
     * @param {UserOnProjectDeleteManyArgs} args - Arguments to filter UserOnProjects to delete.
     * @example
     * // Delete a few UserOnProjects
     * const { count } = await prisma.userOnProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnProjectDeleteManyArgs>(args?: SelectSubset<T, UserOnProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnProjects
     * const userOnProject = await prisma.userOnProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnProjectUpdateManyArgs>(args: SelectSubset<T, UserOnProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnProject.
     * @param {UserOnProjectUpsertArgs} args - Arguments to update or create a UserOnProject.
     * @example
     * // Update or create a UserOnProject
     * const userOnProject = await prisma.userOnProject.upsert({
     *   create: {
     *     // ... data to create a UserOnProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnProject we want to update
     *   }
     * })
     */
    upsert<T extends UserOnProjectUpsertArgs>(args: SelectSubset<T, UserOnProjectUpsertArgs<ExtArgs>>): Prisma__UserOnProjectClient<$Result.GetResult<Prisma.$UserOnProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectCountArgs} args - Arguments to filter UserOnProjects to count.
     * @example
     * // Count the number of UserOnProjects
     * const count = await prisma.userOnProject.count({
     *   where: {
     *     // ... the filter for the UserOnProjects we want to count
     *   }
     * })
    **/
    count<T extends UserOnProjectCountArgs>(
      args?: Subset<T, UserOnProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnProjectAggregateArgs>(args: Subset<T, UserOnProjectAggregateArgs>): Prisma.PrismaPromise<GetUserOnProjectAggregateType<T>>

    /**
     * Group by UserOnProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnProjectGroupByArgs['orderBy'] }
        : { orderBy?: UserOnProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnProject model
   */
  readonly fields: UserOnProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProjectList<T extends ProjectListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectListDefaultArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOnProject model
   */
  interface UserOnProjectFieldRefs {
    readonly projectListId: FieldRef<"UserOnProject", 'Int'>
    readonly userId: FieldRef<"UserOnProject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserOnProject findUnique
   */
  export type UserOnProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserOnProject to fetch.
     */
    where: UserOnProjectWhereUniqueInput
  }

  /**
   * UserOnProject findUniqueOrThrow
   */
  export type UserOnProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserOnProject to fetch.
     */
    where: UserOnProjectWhereUniqueInput
  }

  /**
   * UserOnProject findFirst
   */
  export type UserOnProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserOnProject to fetch.
     */
    where?: UserOnProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnProjects to fetch.
     */
    orderBy?: UserOnProjectOrderByWithRelationInput | UserOnProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnProjects.
     */
    cursor?: UserOnProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnProjects.
     */
    distinct?: UserOnProjectScalarFieldEnum | UserOnProjectScalarFieldEnum[]
  }

  /**
   * UserOnProject findFirstOrThrow
   */
  export type UserOnProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserOnProject to fetch.
     */
    where?: UserOnProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnProjects to fetch.
     */
    orderBy?: UserOnProjectOrderByWithRelationInput | UserOnProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnProjects.
     */
    cursor?: UserOnProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnProjects.
     */
    distinct?: UserOnProjectScalarFieldEnum | UserOnProjectScalarFieldEnum[]
  }

  /**
   * UserOnProject findMany
   */
  export type UserOnProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserOnProjects to fetch.
     */
    where?: UserOnProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnProjects to fetch.
     */
    orderBy?: UserOnProjectOrderByWithRelationInput | UserOnProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnProjects.
     */
    cursor?: UserOnProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnProjects.
     */
    skip?: number
    distinct?: UserOnProjectScalarFieldEnum | UserOnProjectScalarFieldEnum[]
  }

  /**
   * UserOnProject create
   */
  export type UserOnProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnProject.
     */
    data: XOR<UserOnProjectCreateInput, UserOnProjectUncheckedCreateInput>
  }

  /**
   * UserOnProject createMany
   */
  export type UserOnProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnProjects.
     */
    data: UserOnProjectCreateManyInput | UserOnProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnProject update
   */
  export type UserOnProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnProject.
     */
    data: XOR<UserOnProjectUpdateInput, UserOnProjectUncheckedUpdateInput>
    /**
     * Choose, which UserOnProject to update.
     */
    where: UserOnProjectWhereUniqueInput
  }

  /**
   * UserOnProject updateMany
   */
  export type UserOnProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnProjects.
     */
    data: XOR<UserOnProjectUpdateManyMutationInput, UserOnProjectUncheckedUpdateManyInput>
    /**
     * Filter which UserOnProjects to update
     */
    where?: UserOnProjectWhereInput
    /**
     * Limit how many UserOnProjects to update.
     */
    limit?: number
  }

  /**
   * UserOnProject upsert
   */
  export type UserOnProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnProject to update in case it exists.
     */
    where: UserOnProjectWhereUniqueInput
    /**
     * In case the UserOnProject found by the `where` argument doesn't exist, create a new UserOnProject with this data.
     */
    create: XOR<UserOnProjectCreateInput, UserOnProjectUncheckedCreateInput>
    /**
     * In case the UserOnProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnProjectUpdateInput, UserOnProjectUncheckedUpdateInput>
  }

  /**
   * UserOnProject delete
   */
  export type UserOnProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
    /**
     * Filter which UserOnProject to delete.
     */
    where: UserOnProjectWhereUniqueInput
  }

  /**
   * UserOnProject deleteMany
   */
  export type UserOnProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnProjects to delete
     */
    where?: UserOnProjectWhereInput
    /**
     * Limit how many UserOnProjects to delete.
     */
    limit?: number
  }

  /**
   * UserOnProject without action
   */
  export type UserOnProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnProject
     */
    select?: UserOnProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnProject
     */
    omit?: UserOnProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    priority: number | null
    projectListId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    priority: number | null
    projectListId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
    priority: number | null
    createAt: Date | null
    updateAt: Date | null
    dueDate: Date | null
    projectListId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    name: string | null
    detail: string | null
    priority: number | null
    createAt: Date | null
    updateAt: Date | null
    dueDate: Date | null
    projectListId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    name: number
    detail: number
    priority: number
    createAt: number
    updateAt: number
    dueDate: number
    projectListId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    priority?: true
    projectListId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    priority?: true
    projectListId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    priority?: true
    createAt?: true
    updateAt?: true
    dueDate?: true
    projectListId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    priority?: true
    createAt?: true
    updateAt?: true
    dueDate?: true
    projectListId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    name?: true
    detail?: true
    priority?: true
    createAt?: true
    updateAt?: true
    dueDate?: true
    projectListId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    name: string
    detail: string
    priority: number
    createAt: Date
    updateAt: Date
    dueDate: Date
    projectListId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    detail?: boolean
    priority?: boolean
    createAt?: boolean
    updateAt?: boolean
    dueDate?: boolean
    projectListId?: boolean
    status?: boolean | Task$statusArgs<ExtArgs>
    ProjectList?: boolean | ProjectListDefaultArgs<ExtArgs>
    assignTo?: boolean | Task$assignToArgs<ExtArgs>
    User?: boolean | Task$UserArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    id?: boolean
    name?: boolean
    detail?: boolean
    priority?: boolean
    createAt?: boolean
    updateAt?: boolean
    dueDate?: boolean
    projectListId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "detail" | "priority" | "createAt" | "updateAt" | "dueDate" | "projectListId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | Task$statusArgs<ExtArgs>
    ProjectList?: boolean | ProjectListDefaultArgs<ExtArgs>
    assignTo?: boolean | Task$assignToArgs<ExtArgs>
    User?: boolean | Task$UserArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      status: Prisma.$StatusPayload<ExtArgs>[]
      ProjectList: Prisma.$ProjectListPayload<ExtArgs>
      assignTo: Prisma.$UserOnTaskPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      detail: string
      priority: number
      createAt: Date
      updateAt: Date
      dueDate: Date
      projectListId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends Task$statusArgs<ExtArgs> = {}>(args?: Subset<T, Task$statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProjectList<T extends ProjectListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectListDefaultArgs<ExtArgs>>): Prisma__ProjectListClient<$Result.GetResult<Prisma.$ProjectListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignTo<T extends Task$assignToArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Task$UserArgs<ExtArgs> = {}>(args?: Subset<T, Task$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly name: FieldRef<"Task", 'String'>
    readonly detail: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'Int'>
    readonly createAt: FieldRef<"Task", 'DateTime'>
    readonly updateAt: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly projectListId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.status
   */
  export type Task$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    cursor?: StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Task.assignTo
   */
  export type Task$assignToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    where?: UserOnTaskWhereInput
    orderBy?: UserOnTaskOrderByWithRelationInput | UserOnTaskOrderByWithRelationInput[]
    cursor?: UserOnTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnTaskScalarFieldEnum | UserOnTaskScalarFieldEnum[]
  }

  /**
   * Task.User
   */
  export type Task$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model UserOnTask
   */

  export type AggregateUserOnTask = {
    _count: UserOnTaskCountAggregateOutputType | null
    _avg: UserOnTaskAvgAggregateOutputType | null
    _sum: UserOnTaskSumAggregateOutputType | null
    _min: UserOnTaskMinAggregateOutputType | null
    _max: UserOnTaskMaxAggregateOutputType | null
  }

  export type UserOnTaskAvgAggregateOutputType = {
    taskId: number | null
    userId: number | null
  }

  export type UserOnTaskSumAggregateOutputType = {
    taskId: number | null
    userId: number | null
  }

  export type UserOnTaskMinAggregateOutputType = {
    taskId: number | null
    userId: number | null
  }

  export type UserOnTaskMaxAggregateOutputType = {
    taskId: number | null
    userId: number | null
  }

  export type UserOnTaskCountAggregateOutputType = {
    taskId: number
    userId: number
    _all: number
  }


  export type UserOnTaskAvgAggregateInputType = {
    taskId?: true
    userId?: true
  }

  export type UserOnTaskSumAggregateInputType = {
    taskId?: true
    userId?: true
  }

  export type UserOnTaskMinAggregateInputType = {
    taskId?: true
    userId?: true
  }

  export type UserOnTaskMaxAggregateInputType = {
    taskId?: true
    userId?: true
  }

  export type UserOnTaskCountAggregateInputType = {
    taskId?: true
    userId?: true
    _all?: true
  }

  export type UserOnTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnTask to aggregate.
     */
    where?: UserOnTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnTasks to fetch.
     */
    orderBy?: UserOnTaskOrderByWithRelationInput | UserOnTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnTasks
    **/
    _count?: true | UserOnTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnTaskMaxAggregateInputType
  }

  export type GetUserOnTaskAggregateType<T extends UserOnTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnTask[P]>
      : GetScalarType<T[P], AggregateUserOnTask[P]>
  }




  export type UserOnTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnTaskWhereInput
    orderBy?: UserOnTaskOrderByWithAggregationInput | UserOnTaskOrderByWithAggregationInput[]
    by: UserOnTaskScalarFieldEnum[] | UserOnTaskScalarFieldEnum
    having?: UserOnTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnTaskCountAggregateInputType | true
    _avg?: UserOnTaskAvgAggregateInputType
    _sum?: UserOnTaskSumAggregateInputType
    _min?: UserOnTaskMinAggregateInputType
    _max?: UserOnTaskMaxAggregateInputType
  }

  export type UserOnTaskGroupByOutputType = {
    taskId: number
    userId: number
    _count: UserOnTaskCountAggregateOutputType | null
    _avg: UserOnTaskAvgAggregateOutputType | null
    _sum: UserOnTaskSumAggregateOutputType | null
    _min: UserOnTaskMinAggregateOutputType | null
    _max: UserOnTaskMaxAggregateOutputType | null
  }

  type GetUserOnTaskGroupByPayload<T extends UserOnTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnTaskGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnTaskGroupByOutputType[P]>
        }
      >
    >


  export type UserOnTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    userId?: boolean
    Task?: boolean | TaskDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnTask"]>



  export type UserOnTaskSelectScalar = {
    taskId?: boolean
    userId?: boolean
  }

  export type UserOnTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskId" | "userId", ExtArgs["result"]["userOnTask"]>
  export type UserOnTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | TaskDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserOnTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnTask"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: number
      userId: number
    }, ExtArgs["result"]["userOnTask"]>
    composites: {}
  }

  type UserOnTaskGetPayload<S extends boolean | null | undefined | UserOnTaskDefaultArgs> = $Result.GetResult<Prisma.$UserOnTaskPayload, S>

  type UserOnTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnTaskCountAggregateInputType | true
    }

  export interface UserOnTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnTask'], meta: { name: 'UserOnTask' } }
    /**
     * Find zero or one UserOnTask that matches the filter.
     * @param {UserOnTaskFindUniqueArgs} args - Arguments to find a UserOnTask
     * @example
     * // Get one UserOnTask
     * const userOnTask = await prisma.userOnTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnTaskFindUniqueArgs>(args: SelectSubset<T, UserOnTaskFindUniqueArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnTaskFindUniqueOrThrowArgs} args - Arguments to find a UserOnTask
     * @example
     * // Get one UserOnTask
     * const userOnTask = await prisma.userOnTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskFindFirstArgs} args - Arguments to find a UserOnTask
     * @example
     * // Get one UserOnTask
     * const userOnTask = await prisma.userOnTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnTaskFindFirstArgs>(args?: SelectSubset<T, UserOnTaskFindFirstArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskFindFirstOrThrowArgs} args - Arguments to find a UserOnTask
     * @example
     * // Get one UserOnTask
     * const userOnTask = await prisma.userOnTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnTasks
     * const userOnTasks = await prisma.userOnTask.findMany()
     * 
     * // Get first 10 UserOnTasks
     * const userOnTasks = await prisma.userOnTask.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const userOnTaskWithTaskIdOnly = await prisma.userOnTask.findMany({ select: { taskId: true } })
     * 
     */
    findMany<T extends UserOnTaskFindManyArgs>(args?: SelectSubset<T, UserOnTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnTask.
     * @param {UserOnTaskCreateArgs} args - Arguments to create a UserOnTask.
     * @example
     * // Create one UserOnTask
     * const UserOnTask = await prisma.userOnTask.create({
     *   data: {
     *     // ... data to create a UserOnTask
     *   }
     * })
     * 
     */
    create<T extends UserOnTaskCreateArgs>(args: SelectSubset<T, UserOnTaskCreateArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnTasks.
     * @param {UserOnTaskCreateManyArgs} args - Arguments to create many UserOnTasks.
     * @example
     * // Create many UserOnTasks
     * const userOnTask = await prisma.userOnTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnTaskCreateManyArgs>(args?: SelectSubset<T, UserOnTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOnTask.
     * @param {UserOnTaskDeleteArgs} args - Arguments to delete one UserOnTask.
     * @example
     * // Delete one UserOnTask
     * const UserOnTask = await prisma.userOnTask.delete({
     *   where: {
     *     // ... filter to delete one UserOnTask
     *   }
     * })
     * 
     */
    delete<T extends UserOnTaskDeleteArgs>(args: SelectSubset<T, UserOnTaskDeleteArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnTask.
     * @param {UserOnTaskUpdateArgs} args - Arguments to update one UserOnTask.
     * @example
     * // Update one UserOnTask
     * const userOnTask = await prisma.userOnTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnTaskUpdateArgs>(args: SelectSubset<T, UserOnTaskUpdateArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnTasks.
     * @param {UserOnTaskDeleteManyArgs} args - Arguments to filter UserOnTasks to delete.
     * @example
     * // Delete a few UserOnTasks
     * const { count } = await prisma.userOnTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnTaskDeleteManyArgs>(args?: SelectSubset<T, UserOnTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnTasks
     * const userOnTask = await prisma.userOnTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnTaskUpdateManyArgs>(args: SelectSubset<T, UserOnTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOnTask.
     * @param {UserOnTaskUpsertArgs} args - Arguments to update or create a UserOnTask.
     * @example
     * // Update or create a UserOnTask
     * const userOnTask = await prisma.userOnTask.upsert({
     *   create: {
     *     // ... data to create a UserOnTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnTask we want to update
     *   }
     * })
     */
    upsert<T extends UserOnTaskUpsertArgs>(args: SelectSubset<T, UserOnTaskUpsertArgs<ExtArgs>>): Prisma__UserOnTaskClient<$Result.GetResult<Prisma.$UserOnTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskCountArgs} args - Arguments to filter UserOnTasks to count.
     * @example
     * // Count the number of UserOnTasks
     * const count = await prisma.userOnTask.count({
     *   where: {
     *     // ... the filter for the UserOnTasks we want to count
     *   }
     * })
    **/
    count<T extends UserOnTaskCountArgs>(
      args?: Subset<T, UserOnTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnTaskAggregateArgs>(args: Subset<T, UserOnTaskAggregateArgs>): Prisma.PrismaPromise<GetUserOnTaskAggregateType<T>>

    /**
     * Group by UserOnTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnTaskGroupByArgs['orderBy'] }
        : { orderBy?: UserOnTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnTask model
   */
  readonly fields: UserOnTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOnTask model
   */
  interface UserOnTaskFieldRefs {
    readonly taskId: FieldRef<"UserOnTask", 'Int'>
    readonly userId: FieldRef<"UserOnTask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserOnTask findUnique
   */
  export type UserOnTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserOnTask to fetch.
     */
    where: UserOnTaskWhereUniqueInput
  }

  /**
   * UserOnTask findUniqueOrThrow
   */
  export type UserOnTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserOnTask to fetch.
     */
    where: UserOnTaskWhereUniqueInput
  }

  /**
   * UserOnTask findFirst
   */
  export type UserOnTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserOnTask to fetch.
     */
    where?: UserOnTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnTasks to fetch.
     */
    orderBy?: UserOnTaskOrderByWithRelationInput | UserOnTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnTasks.
     */
    cursor?: UserOnTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnTasks.
     */
    distinct?: UserOnTaskScalarFieldEnum | UserOnTaskScalarFieldEnum[]
  }

  /**
   * UserOnTask findFirstOrThrow
   */
  export type UserOnTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserOnTask to fetch.
     */
    where?: UserOnTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnTasks to fetch.
     */
    orderBy?: UserOnTaskOrderByWithRelationInput | UserOnTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnTasks.
     */
    cursor?: UserOnTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnTasks.
     */
    distinct?: UserOnTaskScalarFieldEnum | UserOnTaskScalarFieldEnum[]
  }

  /**
   * UserOnTask findMany
   */
  export type UserOnTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * Filter, which UserOnTasks to fetch.
     */
    where?: UserOnTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnTasks to fetch.
     */
    orderBy?: UserOnTaskOrderByWithRelationInput | UserOnTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnTasks.
     */
    cursor?: UserOnTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnTasks.
     */
    skip?: number
    distinct?: UserOnTaskScalarFieldEnum | UserOnTaskScalarFieldEnum[]
  }

  /**
   * UserOnTask create
   */
  export type UserOnTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnTask.
     */
    data: XOR<UserOnTaskCreateInput, UserOnTaskUncheckedCreateInput>
  }

  /**
   * UserOnTask createMany
   */
  export type UserOnTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnTasks.
     */
    data: UserOnTaskCreateManyInput | UserOnTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnTask update
   */
  export type UserOnTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnTask.
     */
    data: XOR<UserOnTaskUpdateInput, UserOnTaskUncheckedUpdateInput>
    /**
     * Choose, which UserOnTask to update.
     */
    where: UserOnTaskWhereUniqueInput
  }

  /**
   * UserOnTask updateMany
   */
  export type UserOnTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnTasks.
     */
    data: XOR<UserOnTaskUpdateManyMutationInput, UserOnTaskUncheckedUpdateManyInput>
    /**
     * Filter which UserOnTasks to update
     */
    where?: UserOnTaskWhereInput
    /**
     * Limit how many UserOnTasks to update.
     */
    limit?: number
  }

  /**
   * UserOnTask upsert
   */
  export type UserOnTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnTask to update in case it exists.
     */
    where: UserOnTaskWhereUniqueInput
    /**
     * In case the UserOnTask found by the `where` argument doesn't exist, create a new UserOnTask with this data.
     */
    create: XOR<UserOnTaskCreateInput, UserOnTaskUncheckedCreateInput>
    /**
     * In case the UserOnTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnTaskUpdateInput, UserOnTaskUncheckedUpdateInput>
  }

  /**
   * UserOnTask delete
   */
  export type UserOnTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
    /**
     * Filter which UserOnTask to delete.
     */
    where: UserOnTaskWhereUniqueInput
  }

  /**
   * UserOnTask deleteMany
   */
  export type UserOnTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnTasks to delete
     */
    where?: UserOnTaskWhereInput
    /**
     * Limit how many UserOnTasks to delete.
     */
    limit?: number
  }

  /**
   * UserOnTask without action
   */
  export type UserOnTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnTask
     */
    select?: UserOnTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnTask
     */
    omit?: UserOnTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnTaskInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    taskStatus: $Enums.TaskStatus | null
    createAt: Date | null
    updateAt: Date | null
    feedback: string | null
    attachFile: string | null
    taskId: number | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    taskStatus: $Enums.TaskStatus | null
    createAt: Date | null
    updateAt: Date | null
    feedback: string | null
    attachFile: string | null
    taskId: number | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    taskStatus: number
    createAt: number
    updateAt: number
    feedback: number
    attachFile: number
    taskId: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    taskStatus?: true
    createAt?: true
    updateAt?: true
    feedback?: true
    attachFile?: true
    taskId?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    taskStatus?: true
    createAt?: true
    updateAt?: true
    feedback?: true
    attachFile?: true
    taskId?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    taskStatus?: true
    createAt?: true
    updateAt?: true
    feedback?: true
    attachFile?: true
    taskId?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    taskStatus: $Enums.TaskStatus
    createAt: Date
    updateAt: Date
    feedback: string | null
    attachFile: string | null
    taskId: number
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskStatus?: boolean
    createAt?: boolean
    updateAt?: boolean
    feedback?: boolean
    attachFile?: boolean
    taskId?: boolean
    Task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>



  export type StatusSelectScalar = {
    id?: boolean
    taskStatus?: boolean
    createAt?: boolean
    updateAt?: boolean
    feedback?: boolean
    attachFile?: boolean
    taskId?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskStatus" | "createAt" | "updateAt" | "feedback" | "attachFile" | "taskId", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskStatus: $Enums.TaskStatus
      createAt: Date
      updateAt: Date
      feedback: string | null
      attachFile: string | null
      taskId: number
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'Int'>
    readonly taskStatus: FieldRef<"Status", 'TaskStatus'>
    readonly createAt: FieldRef<"Status", 'DateTime'>
    readonly updateAt: FieldRef<"Status", 'DateTime'>
    readonly feedback: FieldRef<"Status", 'String'>
    readonly attachFile: FieldRef<"Status", 'String'>
    readonly taskId: FieldRef<"Status", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createAt: 'createAt',
    updateAt: 'updateAt',
    phoneNo: 'phoneNo',
    email: 'email',
    role: 'role',
    department: 'department',
    taskId: 'taskId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priority: 'priority',
    projectStatus: 'projectStatus',
    detail: 'detail',
    createAt: 'createAt',
    updateAt: 'updateAt',
    assignor: 'assignor',
    dueDate: 'dueDate'
  };

  export type ProjectListScalarFieldEnum = (typeof ProjectListScalarFieldEnum)[keyof typeof ProjectListScalarFieldEnum]


  export const UserOnProjectScalarFieldEnum: {
    projectListId: 'projectListId',
    userId: 'userId'
  };

  export type UserOnProjectScalarFieldEnum = (typeof UserOnProjectScalarFieldEnum)[keyof typeof UserOnProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    detail: 'detail',
    priority: 'priority',
    createAt: 'createAt',
    updateAt: 'updateAt',
    dueDate: 'dueDate',
    projectListId: 'projectListId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const UserOnTaskScalarFieldEnum: {
    taskId: 'taskId',
    userId: 'userId'
  };

  export type UserOnTaskScalarFieldEnum = (typeof UserOnTaskScalarFieldEnum)[keyof typeof UserOnTaskScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    taskStatus: 'taskStatus',
    createAt: 'createAt',
    updateAt: 'updateAt',
    feedback: 'feedback',
    attachFile: 'attachFile',
    taskId: 'taskId'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    userName: 'userName',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNo: 'phoneNo',
    email: 'email',
    department: 'department'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProjectListOrderByRelevanceFieldEnum: {
    name: 'name',
    detail: 'detail'
  };

  export type ProjectListOrderByRelevanceFieldEnum = (typeof ProjectListOrderByRelevanceFieldEnum)[keyof typeof ProjectListOrderByRelevanceFieldEnum]


  export const TaskOrderByRelevanceFieldEnum: {
    name: 'name',
    detail: 'detail'
  };

  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]


  export const StatusOrderByRelevanceFieldEnum: {
    feedback: 'feedback',
    attachFile: 'attachFile'
  };

  export type StatusOrderByRelevanceFieldEnum = (typeof StatusOrderByRelevanceFieldEnum)[keyof typeof StatusOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    phoneNo?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: StringFilter<"User"> | string
    taskId?: IntNullableFilter<"User"> | number | null
    project?: UserOnProjectListRelationFilter
    Task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    UserOnTask?: UserOnTaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    taskId?: SortOrderInput | SortOrder
    project?: UserOnProjectOrderByRelationAggregateInput
    Task?: TaskOrderByWithRelationInput
    UserOnTask?: UserOnTaskOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    phoneNo?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: StringFilter<"User"> | string
    taskId?: IntNullableFilter<"User"> | number | null
    project?: UserOnProjectListRelationFilter
    Task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    UserOnTask?: UserOnTaskListRelationFilter
  }, "id" | "userName" | "phoneNo" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    taskId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phoneNo?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    department?: StringWithAggregatesFilter<"User"> | string
    taskId?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type ProjectListWhereInput = {
    AND?: ProjectListWhereInput | ProjectListWhereInput[]
    OR?: ProjectListWhereInput[]
    NOT?: ProjectListWhereInput | ProjectListWhereInput[]
    id?: IntFilter<"ProjectList"> | number
    name?: StringFilter<"ProjectList"> | string
    priority?: IntFilter<"ProjectList"> | number
    projectStatus?: EnumProjectStatusFilter<"ProjectList"> | $Enums.ProjectStatus
    detail?: StringFilter<"ProjectList"> | string
    createAt?: DateTimeFilter<"ProjectList"> | Date | string
    updateAt?: DateTimeFilter<"ProjectList"> | Date | string
    assignor?: IntFilter<"ProjectList"> | number
    dueDate?: DateTimeFilter<"ProjectList"> | Date | string
    user?: UserOnProjectListRelationFilter
    task?: TaskListRelationFilter
  }

  export type ProjectListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    projectStatus?: SortOrder
    detail?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    assignor?: SortOrder
    dueDate?: SortOrder
    user?: UserOnProjectOrderByRelationAggregateInput
    task?: TaskOrderByRelationAggregateInput
    _relevance?: ProjectListOrderByRelevanceInput
  }

  export type ProjectListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectListWhereInput | ProjectListWhereInput[]
    OR?: ProjectListWhereInput[]
    NOT?: ProjectListWhereInput | ProjectListWhereInput[]
    name?: StringFilter<"ProjectList"> | string
    priority?: IntFilter<"ProjectList"> | number
    projectStatus?: EnumProjectStatusFilter<"ProjectList"> | $Enums.ProjectStatus
    detail?: StringFilter<"ProjectList"> | string
    createAt?: DateTimeFilter<"ProjectList"> | Date | string
    updateAt?: DateTimeFilter<"ProjectList"> | Date | string
    assignor?: IntFilter<"ProjectList"> | number
    dueDate?: DateTimeFilter<"ProjectList"> | Date | string
    user?: UserOnProjectListRelationFilter
    task?: TaskListRelationFilter
  }, "id">

  export type ProjectListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    projectStatus?: SortOrder
    detail?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    assignor?: SortOrder
    dueDate?: SortOrder
    _count?: ProjectListCountOrderByAggregateInput
    _avg?: ProjectListAvgOrderByAggregateInput
    _max?: ProjectListMaxOrderByAggregateInput
    _min?: ProjectListMinOrderByAggregateInput
    _sum?: ProjectListSumOrderByAggregateInput
  }

  export type ProjectListScalarWhereWithAggregatesInput = {
    AND?: ProjectListScalarWhereWithAggregatesInput | ProjectListScalarWhereWithAggregatesInput[]
    OR?: ProjectListScalarWhereWithAggregatesInput[]
    NOT?: ProjectListScalarWhereWithAggregatesInput | ProjectListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProjectList"> | number
    name?: StringWithAggregatesFilter<"ProjectList"> | string
    priority?: IntWithAggregatesFilter<"ProjectList"> | number
    projectStatus?: EnumProjectStatusWithAggregatesFilter<"ProjectList"> | $Enums.ProjectStatus
    detail?: StringWithAggregatesFilter<"ProjectList"> | string
    createAt?: DateTimeWithAggregatesFilter<"ProjectList"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ProjectList"> | Date | string
    assignor?: IntWithAggregatesFilter<"ProjectList"> | number
    dueDate?: DateTimeWithAggregatesFilter<"ProjectList"> | Date | string
  }

  export type UserOnProjectWhereInput = {
    AND?: UserOnProjectWhereInput | UserOnProjectWhereInput[]
    OR?: UserOnProjectWhereInput[]
    NOT?: UserOnProjectWhereInput | UserOnProjectWhereInput[]
    projectListId?: IntFilter<"UserOnProject"> | number
    userId?: IntFilter<"UserOnProject"> | number
    ProjectList?: XOR<ProjectListScalarRelationFilter, ProjectListWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserOnProjectOrderByWithRelationInput = {
    projectListId?: SortOrder
    userId?: SortOrder
    ProjectList?: ProjectListOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type UserOnProjectWhereUniqueInput = Prisma.AtLeast<{
    projectListId_userId?: UserOnProjectProjectListIdUserIdCompoundUniqueInput
    AND?: UserOnProjectWhereInput | UserOnProjectWhereInput[]
    OR?: UserOnProjectWhereInput[]
    NOT?: UserOnProjectWhereInput | UserOnProjectWhereInput[]
    projectListId?: IntFilter<"UserOnProject"> | number
    userId?: IntFilter<"UserOnProject"> | number
    ProjectList?: XOR<ProjectListScalarRelationFilter, ProjectListWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "projectListId_userId">

  export type UserOnProjectOrderByWithAggregationInput = {
    projectListId?: SortOrder
    userId?: SortOrder
    _count?: UserOnProjectCountOrderByAggregateInput
    _avg?: UserOnProjectAvgOrderByAggregateInput
    _max?: UserOnProjectMaxOrderByAggregateInput
    _min?: UserOnProjectMinOrderByAggregateInput
    _sum?: UserOnProjectSumOrderByAggregateInput
  }

  export type UserOnProjectScalarWhereWithAggregatesInput = {
    AND?: UserOnProjectScalarWhereWithAggregatesInput | UserOnProjectScalarWhereWithAggregatesInput[]
    OR?: UserOnProjectScalarWhereWithAggregatesInput[]
    NOT?: UserOnProjectScalarWhereWithAggregatesInput | UserOnProjectScalarWhereWithAggregatesInput[]
    projectListId?: IntWithAggregatesFilter<"UserOnProject"> | number
    userId?: IntWithAggregatesFilter<"UserOnProject"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    detail?: StringFilter<"Task"> | string
    priority?: IntFilter<"Task"> | number
    createAt?: DateTimeFilter<"Task"> | Date | string
    updateAt?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    projectListId?: IntFilter<"Task"> | number
    status?: StatusListRelationFilter
    ProjectList?: XOR<ProjectListScalarRelationFilter, ProjectListWhereInput>
    assignTo?: UserOnTaskListRelationFilter
    User?: UserListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    priority?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dueDate?: SortOrder
    projectListId?: SortOrder
    status?: StatusOrderByRelationAggregateInput
    ProjectList?: ProjectListOrderByWithRelationInput
    assignTo?: UserOnTaskOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    _relevance?: TaskOrderByRelevanceInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    name?: StringFilter<"Task"> | string
    detail?: StringFilter<"Task"> | string
    priority?: IntFilter<"Task"> | number
    createAt?: DateTimeFilter<"Task"> | Date | string
    updateAt?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    projectListId?: IntFilter<"Task"> | number
    status?: StatusListRelationFilter
    ProjectList?: XOR<ProjectListScalarRelationFilter, ProjectListWhereInput>
    assignTo?: UserOnTaskListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    priority?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dueDate?: SortOrder
    projectListId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    name?: StringWithAggregatesFilter<"Task"> | string
    detail?: StringWithAggregatesFilter<"Task"> | string
    priority?: IntWithAggregatesFilter<"Task"> | number
    createAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    projectListId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type UserOnTaskWhereInput = {
    AND?: UserOnTaskWhereInput | UserOnTaskWhereInput[]
    OR?: UserOnTaskWhereInput[]
    NOT?: UserOnTaskWhereInput | UserOnTaskWhereInput[]
    taskId?: IntFilter<"UserOnTask"> | number
    userId?: IntFilter<"UserOnTask"> | number
    Task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserOnTaskOrderByWithRelationInput = {
    taskId?: SortOrder
    userId?: SortOrder
    Task?: TaskOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type UserOnTaskWhereUniqueInput = Prisma.AtLeast<{
    taskId_userId?: UserOnTaskTaskIdUserIdCompoundUniqueInput
    AND?: UserOnTaskWhereInput | UserOnTaskWhereInput[]
    OR?: UserOnTaskWhereInput[]
    NOT?: UserOnTaskWhereInput | UserOnTaskWhereInput[]
    taskId?: IntFilter<"UserOnTask"> | number
    userId?: IntFilter<"UserOnTask"> | number
    Task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "taskId_userId">

  export type UserOnTaskOrderByWithAggregationInput = {
    taskId?: SortOrder
    userId?: SortOrder
    _count?: UserOnTaskCountOrderByAggregateInput
    _avg?: UserOnTaskAvgOrderByAggregateInput
    _max?: UserOnTaskMaxOrderByAggregateInput
    _min?: UserOnTaskMinOrderByAggregateInput
    _sum?: UserOnTaskSumOrderByAggregateInput
  }

  export type UserOnTaskScalarWhereWithAggregatesInput = {
    AND?: UserOnTaskScalarWhereWithAggregatesInput | UserOnTaskScalarWhereWithAggregatesInput[]
    OR?: UserOnTaskScalarWhereWithAggregatesInput[]
    NOT?: UserOnTaskScalarWhereWithAggregatesInput | UserOnTaskScalarWhereWithAggregatesInput[]
    taskId?: IntWithAggregatesFilter<"UserOnTask"> | number
    userId?: IntWithAggregatesFilter<"UserOnTask"> | number
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: IntFilter<"Status"> | number
    taskStatus?: EnumTaskStatusFilter<"Status"> | $Enums.TaskStatus
    createAt?: DateTimeFilter<"Status"> | Date | string
    updateAt?: DateTimeFilter<"Status"> | Date | string
    feedback?: StringNullableFilter<"Status"> | string | null
    attachFile?: StringNullableFilter<"Status"> | string | null
    taskId?: IntFilter<"Status"> | number
    Task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    taskStatus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    feedback?: SortOrderInput | SortOrder
    attachFile?: SortOrderInput | SortOrder
    taskId?: SortOrder
    Task?: TaskOrderByWithRelationInput
    _relevance?: StatusOrderByRelevanceInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    taskStatus?: EnumTaskStatusFilter<"Status"> | $Enums.TaskStatus
    createAt?: DateTimeFilter<"Status"> | Date | string
    updateAt?: DateTimeFilter<"Status"> | Date | string
    feedback?: StringNullableFilter<"Status"> | string | null
    attachFile?: StringNullableFilter<"Status"> | string | null
    taskId?: IntFilter<"Status"> | number
    Task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    taskStatus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    feedback?: SortOrderInput | SortOrder
    attachFile?: SortOrderInput | SortOrder
    taskId?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _avg?: StatusAvgOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
    _sum?: StatusSumOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Status"> | number
    taskStatus?: EnumTaskStatusWithAggregatesFilter<"Status"> | $Enums.TaskStatus
    createAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    feedback?: StringNullableWithAggregatesFilter<"Status"> | string | null
    attachFile?: StringNullableWithAggregatesFilter<"Status"> | string | null
    taskId?: IntWithAggregatesFilter<"Status"> | number
  }

  export type UserCreateInput = {
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    project?: UserOnProjectCreateNestedManyWithoutUserInput
    Task?: TaskCreateNestedOneWithoutUserInput
    UserOnTask?: UserOnTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    taskId?: number | null
    project?: UserOnProjectUncheckedCreateNestedManyWithoutUserInput
    UserOnTask?: UserOnTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    project?: UserOnProjectUpdateManyWithoutUserNestedInput
    Task?: TaskUpdateOneWithoutUserNestedInput
    UserOnTask?: UserOnTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    taskId?: NullableIntFieldUpdateOperationsInput | number | null
    project?: UserOnProjectUncheckedUpdateManyWithoutUserNestedInput
    UserOnTask?: UserOnTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    taskId?: number | null
  }

  export type UserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    taskId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectListCreateInput = {
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
    user?: UserOnProjectCreateNestedManyWithoutProjectListInput
    task?: TaskCreateNestedManyWithoutProjectListInput
  }

  export type ProjectListUncheckedCreateInput = {
    id?: number
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
    user?: UserOnProjectUncheckedCreateNestedManyWithoutProjectListInput
    task?: TaskUncheckedCreateNestedManyWithoutProjectListInput
  }

  export type ProjectListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserOnProjectUpdateManyWithoutProjectListNestedInput
    task?: TaskUpdateManyWithoutProjectListNestedInput
  }

  export type ProjectListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserOnProjectUncheckedUpdateManyWithoutProjectListNestedInput
    task?: TaskUncheckedUpdateManyWithoutProjectListNestedInput
  }

  export type ProjectListCreateManyInput = {
    id?: number
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
  }

  export type ProjectListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnProjectCreateInput = {
    ProjectList: ProjectListCreateNestedOneWithoutUserInput
    User: UserCreateNestedOneWithoutProjectInput
  }

  export type UserOnProjectUncheckedCreateInput = {
    projectListId: number
    userId: number
  }

  export type UserOnProjectUpdateInput = {
    ProjectList?: ProjectListUpdateOneRequiredWithoutUserNestedInput
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type UserOnProjectUncheckedUpdateInput = {
    projectListId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnProjectCreateManyInput = {
    projectListId: number
    userId: number
  }

  export type UserOnProjectUpdateManyMutationInput = {

  }

  export type UserOnProjectUncheckedUpdateManyInput = {
    projectListId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    status?: StatusCreateNestedManyWithoutTaskInput
    ProjectList: ProjectListCreateNestedOneWithoutTaskInput
    assignTo?: UserOnTaskCreateNestedManyWithoutTaskInput
    User?: UserCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    projectListId: number
    status?: StatusUncheckedCreateNestedManyWithoutTaskInput
    assignTo?: UserOnTaskUncheckedCreateNestedManyWithoutTaskInput
    User?: UserUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateManyWithoutTaskNestedInput
    ProjectList?: ProjectListUpdateOneRequiredWithoutTaskNestedInput
    assignTo?: UserOnTaskUpdateManyWithoutTaskNestedInput
    User?: UserUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectListId?: IntFieldUpdateOperationsInput | number
    status?: StatusUncheckedUpdateManyWithoutTaskNestedInput
    assignTo?: UserOnTaskUncheckedUpdateManyWithoutTaskNestedInput
    User?: UserUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    projectListId: number
  }

  export type TaskUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectListId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnTaskCreateInput = {
    Task: TaskCreateNestedOneWithoutAssignToInput
    User: UserCreateNestedOneWithoutUserOnTaskInput
  }

  export type UserOnTaskUncheckedCreateInput = {
    taskId: number
    userId: number
  }

  export type UserOnTaskUpdateInput = {
    Task?: TaskUpdateOneRequiredWithoutAssignToNestedInput
    User?: UserUpdateOneRequiredWithoutUserOnTaskNestedInput
  }

  export type UserOnTaskUncheckedUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnTaskCreateManyInput = {
    taskId: number
    userId: number
  }

  export type UserOnTaskUpdateManyMutationInput = {

  }

  export type UserOnTaskUncheckedUpdateManyInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StatusCreateInput = {
    taskStatus?: $Enums.TaskStatus
    createAt?: Date | string
    updateAt?: Date | string
    feedback?: string | null
    attachFile?: string | null
    Task: TaskCreateNestedOneWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: number
    taskStatus?: $Enums.TaskStatus
    createAt?: Date | string
    updateAt?: Date | string
    feedback?: string | null
    attachFile?: string | null
    taskId: number
  }

  export type StatusUpdateInput = {
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
    Task?: TaskUpdateOneRequiredWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type StatusCreateManyInput = {
    id?: number
    taskStatus?: $Enums.TaskStatus
    createAt?: Date | string
    updateAt?: Date | string
    feedback?: string | null
    attachFile?: string | null
    taskId: number
  }

  export type StatusUpdateManyMutationInput = {
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserOnProjectListRelationFilter = {
    every?: UserOnProjectWhereInput
    some?: UserOnProjectWhereInput
    none?: UserOnProjectWhereInput
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type UserOnTaskListRelationFilter = {
    every?: UserOnTaskWhereInput
    some?: UserOnTaskWhereInput
    none?: UserOnTaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOnProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    taskId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    taskId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    taskId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectListOrderByRelevanceInput = {
    fields: ProjectListOrderByRelevanceFieldEnum | ProjectListOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    projectStatus?: SortOrder
    detail?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    assignor?: SortOrder
    dueDate?: SortOrder
  }

  export type ProjectListAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    assignor?: SortOrder
  }

  export type ProjectListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    projectStatus?: SortOrder
    detail?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    assignor?: SortOrder
    dueDate?: SortOrder
  }

  export type ProjectListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    projectStatus?: SortOrder
    detail?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    assignor?: SortOrder
    dueDate?: SortOrder
  }

  export type ProjectListSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    assignor?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type ProjectListScalarRelationFilter = {
    is?: ProjectListWhereInput
    isNot?: ProjectListWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserOnProjectProjectListIdUserIdCompoundUniqueInput = {
    projectListId: number
    userId: number
  }

  export type UserOnProjectCountOrderByAggregateInput = {
    projectListId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnProjectAvgOrderByAggregateInput = {
    projectListId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnProjectMaxOrderByAggregateInput = {
    projectListId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnProjectMinOrderByAggregateInput = {
    projectListId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnProjectSumOrderByAggregateInput = {
    projectListId?: SortOrder
    userId?: SortOrder
  }

  export type StatusListRelationFilter = {
    every?: StatusWhereInput
    some?: StatusWhereInput
    none?: StatusWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type StatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    priority?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dueDate?: SortOrder
    projectListId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    projectListId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    priority?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dueDate?: SortOrder
    projectListId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    detail?: SortOrder
    priority?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dueDate?: SortOrder
    projectListId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
    projectListId?: SortOrder
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type UserOnTaskTaskIdUserIdCompoundUniqueInput = {
    taskId: number
    userId: number
  }

  export type UserOnTaskCountOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnTaskAvgOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnTaskMaxOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnTaskMinOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type UserOnTaskSumOrderByAggregateInput = {
    taskId?: SortOrder
    userId?: SortOrder
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StatusOrderByRelevanceInput = {
    fields: StatusOrderByRelevanceFieldEnum | StatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    taskStatus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    feedback?: SortOrder
    attachFile?: SortOrder
    taskId?: SortOrder
  }

  export type StatusAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    taskStatus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    feedback?: SortOrder
    attachFile?: SortOrder
    taskId?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    taskStatus?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    feedback?: SortOrder
    attachFile?: SortOrder
    taskId?: SortOrder
  }

  export type StatusSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserOnProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnProjectCreateWithoutUserInput, UserOnProjectUncheckedCreateWithoutUserInput> | UserOnProjectCreateWithoutUserInput[] | UserOnProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutUserInput | UserOnProjectCreateOrConnectWithoutUserInput[]
    createMany?: UserOnProjectCreateManyUserInputEnvelope
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedOneWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput
    connect?: TaskWhereUniqueInput
  }

  export type UserOnTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnTaskCreateWithoutUserInput, UserOnTaskUncheckedCreateWithoutUserInput> | UserOnTaskCreateWithoutUserInput[] | UserOnTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutUserInput | UserOnTaskCreateOrConnectWithoutUserInput[]
    createMany?: UserOnTaskCreateManyUserInputEnvelope
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
  }

  export type UserOnProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnProjectCreateWithoutUserInput, UserOnProjectUncheckedCreateWithoutUserInput> | UserOnProjectCreateWithoutUserInput[] | UserOnProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutUserInput | UserOnProjectCreateOrConnectWithoutUserInput[]
    createMany?: UserOnProjectCreateManyUserInputEnvelope
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
  }

  export type UserOnTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnTaskCreateWithoutUserInput, UserOnTaskUncheckedCreateWithoutUserInput> | UserOnTaskCreateWithoutUserInput[] | UserOnTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutUserInput | UserOnTaskCreateOrConnectWithoutUserInput[]
    createMany?: UserOnTaskCreateManyUserInputEnvelope
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserOnProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnProjectCreateWithoutUserInput, UserOnProjectUncheckedCreateWithoutUserInput> | UserOnProjectCreateWithoutUserInput[] | UserOnProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutUserInput | UserOnProjectCreateOrConnectWithoutUserInput[]
    upsert?: UserOnProjectUpsertWithWhereUniqueWithoutUserInput | UserOnProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnProjectCreateManyUserInputEnvelope
    set?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    disconnect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    delete?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    update?: UserOnProjectUpdateWithWhereUniqueWithoutUserInput | UserOnProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnProjectUpdateManyWithWhereWithoutUserInput | UserOnProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnProjectScalarWhereInput | UserOnProjectScalarWhereInput[]
  }

  export type TaskUpdateOneWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput
    upsert?: TaskUpsertWithoutUserInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutUserInput, TaskUpdateWithoutUserInput>, TaskUncheckedUpdateWithoutUserInput>
  }

  export type UserOnTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnTaskCreateWithoutUserInput, UserOnTaskUncheckedCreateWithoutUserInput> | UserOnTaskCreateWithoutUserInput[] | UserOnTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutUserInput | UserOnTaskCreateOrConnectWithoutUserInput[]
    upsert?: UserOnTaskUpsertWithWhereUniqueWithoutUserInput | UserOnTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnTaskCreateManyUserInputEnvelope
    set?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    disconnect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    delete?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    update?: UserOnTaskUpdateWithWhereUniqueWithoutUserInput | UserOnTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnTaskUpdateManyWithWhereWithoutUserInput | UserOnTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnTaskScalarWhereInput | UserOnTaskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserOnProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnProjectCreateWithoutUserInput, UserOnProjectUncheckedCreateWithoutUserInput> | UserOnProjectCreateWithoutUserInput[] | UserOnProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutUserInput | UserOnProjectCreateOrConnectWithoutUserInput[]
    upsert?: UserOnProjectUpsertWithWhereUniqueWithoutUserInput | UserOnProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnProjectCreateManyUserInputEnvelope
    set?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    disconnect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    delete?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    update?: UserOnProjectUpdateWithWhereUniqueWithoutUserInput | UserOnProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnProjectUpdateManyWithWhereWithoutUserInput | UserOnProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnProjectScalarWhereInput | UserOnProjectScalarWhereInput[]
  }

  export type UserOnTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnTaskCreateWithoutUserInput, UserOnTaskUncheckedCreateWithoutUserInput> | UserOnTaskCreateWithoutUserInput[] | UserOnTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutUserInput | UserOnTaskCreateOrConnectWithoutUserInput[]
    upsert?: UserOnTaskUpsertWithWhereUniqueWithoutUserInput | UserOnTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnTaskCreateManyUserInputEnvelope
    set?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    disconnect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    delete?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    update?: UserOnTaskUpdateWithWhereUniqueWithoutUserInput | UserOnTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnTaskUpdateManyWithWhereWithoutUserInput | UserOnTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnTaskScalarWhereInput | UserOnTaskScalarWhereInput[]
  }

  export type UserOnProjectCreateNestedManyWithoutProjectListInput = {
    create?: XOR<UserOnProjectCreateWithoutProjectListInput, UserOnProjectUncheckedCreateWithoutProjectListInput> | UserOnProjectCreateWithoutProjectListInput[] | UserOnProjectUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutProjectListInput | UserOnProjectCreateOrConnectWithoutProjectListInput[]
    createMany?: UserOnProjectCreateManyProjectListInputEnvelope
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutProjectListInput = {
    create?: XOR<TaskCreateWithoutProjectListInput, TaskUncheckedCreateWithoutProjectListInput> | TaskCreateWithoutProjectListInput[] | TaskUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectListInput | TaskCreateOrConnectWithoutProjectListInput[]
    createMany?: TaskCreateManyProjectListInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserOnProjectUncheckedCreateNestedManyWithoutProjectListInput = {
    create?: XOR<UserOnProjectCreateWithoutProjectListInput, UserOnProjectUncheckedCreateWithoutProjectListInput> | UserOnProjectCreateWithoutProjectListInput[] | UserOnProjectUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutProjectListInput | UserOnProjectCreateOrConnectWithoutProjectListInput[]
    createMany?: UserOnProjectCreateManyProjectListInputEnvelope
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectListInput = {
    create?: XOR<TaskCreateWithoutProjectListInput, TaskUncheckedCreateWithoutProjectListInput> | TaskCreateWithoutProjectListInput[] | TaskUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectListInput | TaskCreateOrConnectWithoutProjectListInput[]
    createMany?: TaskCreateManyProjectListInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type UserOnProjectUpdateManyWithoutProjectListNestedInput = {
    create?: XOR<UserOnProjectCreateWithoutProjectListInput, UserOnProjectUncheckedCreateWithoutProjectListInput> | UserOnProjectCreateWithoutProjectListInput[] | UserOnProjectUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutProjectListInput | UserOnProjectCreateOrConnectWithoutProjectListInput[]
    upsert?: UserOnProjectUpsertWithWhereUniqueWithoutProjectListInput | UserOnProjectUpsertWithWhereUniqueWithoutProjectListInput[]
    createMany?: UserOnProjectCreateManyProjectListInputEnvelope
    set?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    disconnect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    delete?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    update?: UserOnProjectUpdateWithWhereUniqueWithoutProjectListInput | UserOnProjectUpdateWithWhereUniqueWithoutProjectListInput[]
    updateMany?: UserOnProjectUpdateManyWithWhereWithoutProjectListInput | UserOnProjectUpdateManyWithWhereWithoutProjectListInput[]
    deleteMany?: UserOnProjectScalarWhereInput | UserOnProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutProjectListNestedInput = {
    create?: XOR<TaskCreateWithoutProjectListInput, TaskUncheckedCreateWithoutProjectListInput> | TaskCreateWithoutProjectListInput[] | TaskUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectListInput | TaskCreateOrConnectWithoutProjectListInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectListInput | TaskUpsertWithWhereUniqueWithoutProjectListInput[]
    createMany?: TaskCreateManyProjectListInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectListInput | TaskUpdateWithWhereUniqueWithoutProjectListInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectListInput | TaskUpdateManyWithWhereWithoutProjectListInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserOnProjectUncheckedUpdateManyWithoutProjectListNestedInput = {
    create?: XOR<UserOnProjectCreateWithoutProjectListInput, UserOnProjectUncheckedCreateWithoutProjectListInput> | UserOnProjectCreateWithoutProjectListInput[] | UserOnProjectUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: UserOnProjectCreateOrConnectWithoutProjectListInput | UserOnProjectCreateOrConnectWithoutProjectListInput[]
    upsert?: UserOnProjectUpsertWithWhereUniqueWithoutProjectListInput | UserOnProjectUpsertWithWhereUniqueWithoutProjectListInput[]
    createMany?: UserOnProjectCreateManyProjectListInputEnvelope
    set?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    disconnect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    delete?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    connect?: UserOnProjectWhereUniqueInput | UserOnProjectWhereUniqueInput[]
    update?: UserOnProjectUpdateWithWhereUniqueWithoutProjectListInput | UserOnProjectUpdateWithWhereUniqueWithoutProjectListInput[]
    updateMany?: UserOnProjectUpdateManyWithWhereWithoutProjectListInput | UserOnProjectUpdateManyWithWhereWithoutProjectListInput[]
    deleteMany?: UserOnProjectScalarWhereInput | UserOnProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectListNestedInput = {
    create?: XOR<TaskCreateWithoutProjectListInput, TaskUncheckedCreateWithoutProjectListInput> | TaskCreateWithoutProjectListInput[] | TaskUncheckedCreateWithoutProjectListInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectListInput | TaskCreateOrConnectWithoutProjectListInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectListInput | TaskUpsertWithWhereUniqueWithoutProjectListInput[]
    createMany?: TaskCreateManyProjectListInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectListInput | TaskUpdateWithWhereUniqueWithoutProjectListInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectListInput | TaskUpdateManyWithWhereWithoutProjectListInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectListCreateNestedOneWithoutUserInput = {
    create?: XOR<ProjectListCreateWithoutUserInput, ProjectListUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProjectListCreateOrConnectWithoutUserInput
    connect?: ProjectListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectListUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ProjectListCreateWithoutUserInput, ProjectListUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProjectListCreateOrConnectWithoutUserInput
    upsert?: ProjectListUpsertWithoutUserInput
    connect?: ProjectListWhereUniqueInput
    update?: XOR<XOR<ProjectListUpdateToOneWithWhereWithoutUserInput, ProjectListUpdateWithoutUserInput>, ProjectListUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type StatusCreateNestedManyWithoutTaskInput = {
    create?: XOR<StatusCreateWithoutTaskInput, StatusUncheckedCreateWithoutTaskInput> | StatusCreateWithoutTaskInput[] | StatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | StatusCreateOrConnectWithoutTaskInput[]
    createMany?: StatusCreateManyTaskInputEnvelope
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
  }

  export type ProjectListCreateNestedOneWithoutTaskInput = {
    create?: XOR<ProjectListCreateWithoutTaskInput, ProjectListUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ProjectListCreateOrConnectWithoutTaskInput
    connect?: ProjectListWhereUniqueInput
  }

  export type UserOnTaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserOnTaskCreateWithoutTaskInput, UserOnTaskUncheckedCreateWithoutTaskInput> | UserOnTaskCreateWithoutTaskInput[] | UserOnTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutTaskInput | UserOnTaskCreateOrConnectWithoutTaskInput[]
    createMany?: UserOnTaskCreateManyTaskInputEnvelope
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput> | UserCreateWithoutTaskInput[] | UserUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput | UserCreateOrConnectWithoutTaskInput[]
    createMany?: UserCreateManyTaskInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StatusUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<StatusCreateWithoutTaskInput, StatusUncheckedCreateWithoutTaskInput> | StatusCreateWithoutTaskInput[] | StatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | StatusCreateOrConnectWithoutTaskInput[]
    createMany?: StatusCreateManyTaskInputEnvelope
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
  }

  export type UserOnTaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserOnTaskCreateWithoutTaskInput, UserOnTaskUncheckedCreateWithoutTaskInput> | UserOnTaskCreateWithoutTaskInput[] | UserOnTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutTaskInput | UserOnTaskCreateOrConnectWithoutTaskInput[]
    createMany?: UserOnTaskCreateManyTaskInputEnvelope
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput> | UserCreateWithoutTaskInput[] | UserUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput | UserCreateOrConnectWithoutTaskInput[]
    createMany?: UserCreateManyTaskInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StatusUpdateManyWithoutTaskNestedInput = {
    create?: XOR<StatusCreateWithoutTaskInput, StatusUncheckedCreateWithoutTaskInput> | StatusCreateWithoutTaskInput[] | StatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | StatusCreateOrConnectWithoutTaskInput[]
    upsert?: StatusUpsertWithWhereUniqueWithoutTaskInput | StatusUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: StatusCreateManyTaskInputEnvelope
    set?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    disconnect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    delete?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    update?: StatusUpdateWithWhereUniqueWithoutTaskInput | StatusUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: StatusUpdateManyWithWhereWithoutTaskInput | StatusUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: StatusScalarWhereInput | StatusScalarWhereInput[]
  }

  export type ProjectListUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<ProjectListCreateWithoutTaskInput, ProjectListUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ProjectListCreateOrConnectWithoutTaskInput
    upsert?: ProjectListUpsertWithoutTaskInput
    connect?: ProjectListWhereUniqueInput
    update?: XOR<XOR<ProjectListUpdateToOneWithWhereWithoutTaskInput, ProjectListUpdateWithoutTaskInput>, ProjectListUncheckedUpdateWithoutTaskInput>
  }

  export type UserOnTaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserOnTaskCreateWithoutTaskInput, UserOnTaskUncheckedCreateWithoutTaskInput> | UserOnTaskCreateWithoutTaskInput[] | UserOnTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutTaskInput | UserOnTaskCreateOrConnectWithoutTaskInput[]
    upsert?: UserOnTaskUpsertWithWhereUniqueWithoutTaskInput | UserOnTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserOnTaskCreateManyTaskInputEnvelope
    set?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    disconnect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    delete?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    update?: UserOnTaskUpdateWithWhereUniqueWithoutTaskInput | UserOnTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserOnTaskUpdateManyWithWhereWithoutTaskInput | UserOnTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserOnTaskScalarWhereInput | UserOnTaskScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput> | UserCreateWithoutTaskInput[] | UserUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput | UserCreateOrConnectWithoutTaskInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTaskInput | UserUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserCreateManyTaskInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTaskInput | UserUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTaskInput | UserUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StatusUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<StatusCreateWithoutTaskInput, StatusUncheckedCreateWithoutTaskInput> | StatusCreateWithoutTaskInput[] | StatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | StatusCreateOrConnectWithoutTaskInput[]
    upsert?: StatusUpsertWithWhereUniqueWithoutTaskInput | StatusUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: StatusCreateManyTaskInputEnvelope
    set?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    disconnect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    delete?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    update?: StatusUpdateWithWhereUniqueWithoutTaskInput | StatusUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: StatusUpdateManyWithWhereWithoutTaskInput | StatusUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: StatusScalarWhereInput | StatusScalarWhereInput[]
  }

  export type UserOnTaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserOnTaskCreateWithoutTaskInput, UserOnTaskUncheckedCreateWithoutTaskInput> | UserOnTaskCreateWithoutTaskInput[] | UserOnTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserOnTaskCreateOrConnectWithoutTaskInput | UserOnTaskCreateOrConnectWithoutTaskInput[]
    upsert?: UserOnTaskUpsertWithWhereUniqueWithoutTaskInput | UserOnTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserOnTaskCreateManyTaskInputEnvelope
    set?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    disconnect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    delete?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    connect?: UserOnTaskWhereUniqueInput | UserOnTaskWhereUniqueInput[]
    update?: UserOnTaskUpdateWithWhereUniqueWithoutTaskInput | UserOnTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserOnTaskUpdateManyWithWhereWithoutTaskInput | UserOnTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserOnTaskScalarWhereInput | UserOnTaskScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput> | UserCreateWithoutTaskInput[] | UserUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput | UserCreateOrConnectWithoutTaskInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTaskInput | UserUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: UserCreateManyTaskInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTaskInput | UserUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTaskInput | UserUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutAssignToInput = {
    create?: XOR<TaskCreateWithoutAssignToInput, TaskUncheckedCreateWithoutAssignToInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignToInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserOnTaskInput = {
    create?: XOR<UserCreateWithoutUserOnTaskInput, UserUncheckedCreateWithoutUserOnTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnTaskInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutAssignToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignToInput, TaskUncheckedCreateWithoutAssignToInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssignToInput
    upsert?: TaskUpsertWithoutAssignToInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAssignToInput, TaskUpdateWithoutAssignToInput>, TaskUncheckedUpdateWithoutAssignToInput>
  }

  export type UserUpdateOneRequiredWithoutUserOnTaskNestedInput = {
    create?: XOR<UserCreateWithoutUserOnTaskInput, UserUncheckedCreateWithoutUserOnTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserOnTaskInput
    upsert?: UserUpsertWithoutUserOnTaskInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserOnTaskInput, UserUpdateWithoutUserOnTaskInput>, UserUncheckedUpdateWithoutUserOnTaskInput>
  }

  export type TaskCreateNestedOneWithoutStatusInput = {
    create?: XOR<TaskCreateWithoutStatusInput, TaskUncheckedCreateWithoutStatusInput>
    connectOrCreate?: TaskCreateOrConnectWithoutStatusInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TaskUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<TaskCreateWithoutStatusInput, TaskUncheckedCreateWithoutStatusInput>
    connectOrCreate?: TaskCreateOrConnectWithoutStatusInput
    upsert?: TaskUpsertWithoutStatusInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutStatusInput, TaskUpdateWithoutStatusInput>, TaskUncheckedUpdateWithoutStatusInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserOnProjectCreateWithoutUserInput = {
    ProjectList: ProjectListCreateNestedOneWithoutUserInput
  }

  export type UserOnProjectUncheckedCreateWithoutUserInput = {
    projectListId: number
  }

  export type UserOnProjectCreateOrConnectWithoutUserInput = {
    where: UserOnProjectWhereUniqueInput
    create: XOR<UserOnProjectCreateWithoutUserInput, UserOnProjectUncheckedCreateWithoutUserInput>
  }

  export type UserOnProjectCreateManyUserInputEnvelope = {
    data: UserOnProjectCreateManyUserInput | UserOnProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    status?: StatusCreateNestedManyWithoutTaskInput
    ProjectList: ProjectListCreateNestedOneWithoutTaskInput
    assignTo?: UserOnTaskCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    projectListId: number
    status?: StatusUncheckedCreateNestedManyWithoutTaskInput
    assignTo?: UserOnTaskUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type UserOnTaskCreateWithoutUserInput = {
    Task: TaskCreateNestedOneWithoutAssignToInput
  }

  export type UserOnTaskUncheckedCreateWithoutUserInput = {
    taskId: number
  }

  export type UserOnTaskCreateOrConnectWithoutUserInput = {
    where: UserOnTaskWhereUniqueInput
    create: XOR<UserOnTaskCreateWithoutUserInput, UserOnTaskUncheckedCreateWithoutUserInput>
  }

  export type UserOnTaskCreateManyUserInputEnvelope = {
    data: UserOnTaskCreateManyUserInput | UserOnTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnProjectWhereUniqueInput
    update: XOR<UserOnProjectUpdateWithoutUserInput, UserOnProjectUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnProjectCreateWithoutUserInput, UserOnProjectUncheckedCreateWithoutUserInput>
  }

  export type UserOnProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnProjectWhereUniqueInput
    data: XOR<UserOnProjectUpdateWithoutUserInput, UserOnProjectUncheckedUpdateWithoutUserInput>
  }

  export type UserOnProjectUpdateManyWithWhereWithoutUserInput = {
    where: UserOnProjectScalarWhereInput
    data: XOR<UserOnProjectUpdateManyMutationInput, UserOnProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnProjectScalarWhereInput = {
    AND?: UserOnProjectScalarWhereInput | UserOnProjectScalarWhereInput[]
    OR?: UserOnProjectScalarWhereInput[]
    NOT?: UserOnProjectScalarWhereInput | UserOnProjectScalarWhereInput[]
    projectListId?: IntFilter<"UserOnProject"> | number
    userId?: IntFilter<"UserOnProject"> | number
  }

  export type TaskUpsertWithoutUserInput = {
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutUserInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateManyWithoutTaskNestedInput
    ProjectList?: ProjectListUpdateOneRequiredWithoutTaskNestedInput
    assignTo?: UserOnTaskUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectListId?: IntFieldUpdateOperationsInput | number
    status?: StatusUncheckedUpdateManyWithoutTaskNestedInput
    assignTo?: UserOnTaskUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserOnTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnTaskWhereUniqueInput
    update: XOR<UserOnTaskUpdateWithoutUserInput, UserOnTaskUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnTaskCreateWithoutUserInput, UserOnTaskUncheckedCreateWithoutUserInput>
  }

  export type UserOnTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnTaskWhereUniqueInput
    data: XOR<UserOnTaskUpdateWithoutUserInput, UserOnTaskUncheckedUpdateWithoutUserInput>
  }

  export type UserOnTaskUpdateManyWithWhereWithoutUserInput = {
    where: UserOnTaskScalarWhereInput
    data: XOR<UserOnTaskUpdateManyMutationInput, UserOnTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnTaskScalarWhereInput = {
    AND?: UserOnTaskScalarWhereInput | UserOnTaskScalarWhereInput[]
    OR?: UserOnTaskScalarWhereInput[]
    NOT?: UserOnTaskScalarWhereInput | UserOnTaskScalarWhereInput[]
    taskId?: IntFilter<"UserOnTask"> | number
    userId?: IntFilter<"UserOnTask"> | number
  }

  export type UserOnProjectCreateWithoutProjectListInput = {
    User: UserCreateNestedOneWithoutProjectInput
  }

  export type UserOnProjectUncheckedCreateWithoutProjectListInput = {
    userId: number
  }

  export type UserOnProjectCreateOrConnectWithoutProjectListInput = {
    where: UserOnProjectWhereUniqueInput
    create: XOR<UserOnProjectCreateWithoutProjectListInput, UserOnProjectUncheckedCreateWithoutProjectListInput>
  }

  export type UserOnProjectCreateManyProjectListInputEnvelope = {
    data: UserOnProjectCreateManyProjectListInput | UserOnProjectCreateManyProjectListInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutProjectListInput = {
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    status?: StatusCreateNestedManyWithoutTaskInput
    assignTo?: UserOnTaskCreateNestedManyWithoutTaskInput
    User?: UserCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectListInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    status?: StatusUncheckedCreateNestedManyWithoutTaskInput
    assignTo?: UserOnTaskUncheckedCreateNestedManyWithoutTaskInput
    User?: UserUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectListInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectListInput, TaskUncheckedCreateWithoutProjectListInput>
  }

  export type TaskCreateManyProjectListInputEnvelope = {
    data: TaskCreateManyProjectListInput | TaskCreateManyProjectListInput[]
    skipDuplicates?: boolean
  }

  export type UserOnProjectUpsertWithWhereUniqueWithoutProjectListInput = {
    where: UserOnProjectWhereUniqueInput
    update: XOR<UserOnProjectUpdateWithoutProjectListInput, UserOnProjectUncheckedUpdateWithoutProjectListInput>
    create: XOR<UserOnProjectCreateWithoutProjectListInput, UserOnProjectUncheckedCreateWithoutProjectListInput>
  }

  export type UserOnProjectUpdateWithWhereUniqueWithoutProjectListInput = {
    where: UserOnProjectWhereUniqueInput
    data: XOR<UserOnProjectUpdateWithoutProjectListInput, UserOnProjectUncheckedUpdateWithoutProjectListInput>
  }

  export type UserOnProjectUpdateManyWithWhereWithoutProjectListInput = {
    where: UserOnProjectScalarWhereInput
    data: XOR<UserOnProjectUpdateManyMutationInput, UserOnProjectUncheckedUpdateManyWithoutProjectListInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectListInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectListInput, TaskUncheckedUpdateWithoutProjectListInput>
    create: XOR<TaskCreateWithoutProjectListInput, TaskUncheckedCreateWithoutProjectListInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectListInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectListInput, TaskUncheckedUpdateWithoutProjectListInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectListInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectListInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    detail?: StringFilter<"Task"> | string
    priority?: IntFilter<"Task"> | number
    createAt?: DateTimeFilter<"Task"> | Date | string
    updateAt?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    projectListId?: IntFilter<"Task"> | number
  }

  export type ProjectListCreateWithoutUserInput = {
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
    task?: TaskCreateNestedManyWithoutProjectListInput
  }

  export type ProjectListUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
    task?: TaskUncheckedCreateNestedManyWithoutProjectListInput
  }

  export type ProjectListCreateOrConnectWithoutUserInput = {
    where: ProjectListWhereUniqueInput
    create: XOR<ProjectListCreateWithoutUserInput, ProjectListUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutProjectInput = {
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    Task?: TaskCreateNestedOneWithoutUserInput
    UserOnTask?: UserOnTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    taskId?: number | null
    UserOnTask?: UserOnTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ProjectListUpsertWithoutUserInput = {
    update: XOR<ProjectListUpdateWithoutUserInput, ProjectListUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectListCreateWithoutUserInput, ProjectListUncheckedCreateWithoutUserInput>
    where?: ProjectListWhereInput
  }

  export type ProjectListUpdateToOneWithWhereWithoutUserInput = {
    where?: ProjectListWhereInput
    data: XOR<ProjectListUpdateWithoutUserInput, ProjectListUncheckedUpdateWithoutUserInput>
  }

  export type ProjectListUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateManyWithoutProjectListNestedInput
  }

  export type ProjectListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUncheckedUpdateManyWithoutProjectListNestedInput
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    Task?: TaskUpdateOneWithoutUserNestedInput
    UserOnTask?: UserOnTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    taskId?: NullableIntFieldUpdateOperationsInput | number | null
    UserOnTask?: UserOnTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StatusCreateWithoutTaskInput = {
    taskStatus?: $Enums.TaskStatus
    createAt?: Date | string
    updateAt?: Date | string
    feedback?: string | null
    attachFile?: string | null
  }

  export type StatusUncheckedCreateWithoutTaskInput = {
    id?: number
    taskStatus?: $Enums.TaskStatus
    createAt?: Date | string
    updateAt?: Date | string
    feedback?: string | null
    attachFile?: string | null
  }

  export type StatusCreateOrConnectWithoutTaskInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutTaskInput, StatusUncheckedCreateWithoutTaskInput>
  }

  export type StatusCreateManyTaskInputEnvelope = {
    data: StatusCreateManyTaskInput | StatusCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProjectListCreateWithoutTaskInput = {
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
    user?: UserOnProjectCreateNestedManyWithoutProjectListInput
  }

  export type ProjectListUncheckedCreateWithoutTaskInput = {
    id?: number
    name: string
    priority: number
    projectStatus?: $Enums.ProjectStatus
    detail: string
    createAt?: Date | string
    updateAt?: Date | string
    assignor: number
    dueDate: Date | string
    user?: UserOnProjectUncheckedCreateNestedManyWithoutProjectListInput
  }

  export type ProjectListCreateOrConnectWithoutTaskInput = {
    where: ProjectListWhereUniqueInput
    create: XOR<ProjectListCreateWithoutTaskInput, ProjectListUncheckedCreateWithoutTaskInput>
  }

  export type UserOnTaskCreateWithoutTaskInput = {
    User: UserCreateNestedOneWithoutUserOnTaskInput
  }

  export type UserOnTaskUncheckedCreateWithoutTaskInput = {
    userId: number
  }

  export type UserOnTaskCreateOrConnectWithoutTaskInput = {
    where: UserOnTaskWhereUniqueInput
    create: XOR<UserOnTaskCreateWithoutTaskInput, UserOnTaskUncheckedCreateWithoutTaskInput>
  }

  export type UserOnTaskCreateManyTaskInputEnvelope = {
    data: UserOnTaskCreateManyTaskInput | UserOnTaskCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTaskInput = {
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    project?: UserOnProjectCreateNestedManyWithoutUserInput
    UserOnTask?: UserOnTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskInput = {
    id?: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    project?: UserOnProjectUncheckedCreateNestedManyWithoutUserInput
    UserOnTask?: UserOnTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTaskInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
  }

  export type UserCreateManyTaskInputEnvelope = {
    data: UserCreateManyTaskInput | UserCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type StatusUpsertWithWhereUniqueWithoutTaskInput = {
    where: StatusWhereUniqueInput
    update: XOR<StatusUpdateWithoutTaskInput, StatusUncheckedUpdateWithoutTaskInput>
    create: XOR<StatusCreateWithoutTaskInput, StatusUncheckedCreateWithoutTaskInput>
  }

  export type StatusUpdateWithWhereUniqueWithoutTaskInput = {
    where: StatusWhereUniqueInput
    data: XOR<StatusUpdateWithoutTaskInput, StatusUncheckedUpdateWithoutTaskInput>
  }

  export type StatusUpdateManyWithWhereWithoutTaskInput = {
    where: StatusScalarWhereInput
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyWithoutTaskInput>
  }

  export type StatusScalarWhereInput = {
    AND?: StatusScalarWhereInput | StatusScalarWhereInput[]
    OR?: StatusScalarWhereInput[]
    NOT?: StatusScalarWhereInput | StatusScalarWhereInput[]
    id?: IntFilter<"Status"> | number
    taskStatus?: EnumTaskStatusFilter<"Status"> | $Enums.TaskStatus
    createAt?: DateTimeFilter<"Status"> | Date | string
    updateAt?: DateTimeFilter<"Status"> | Date | string
    feedback?: StringNullableFilter<"Status"> | string | null
    attachFile?: StringNullableFilter<"Status"> | string | null
    taskId?: IntFilter<"Status"> | number
  }

  export type ProjectListUpsertWithoutTaskInput = {
    update: XOR<ProjectListUpdateWithoutTaskInput, ProjectListUncheckedUpdateWithoutTaskInput>
    create: XOR<ProjectListCreateWithoutTaskInput, ProjectListUncheckedCreateWithoutTaskInput>
    where?: ProjectListWhereInput
  }

  export type ProjectListUpdateToOneWithWhereWithoutTaskInput = {
    where?: ProjectListWhereInput
    data: XOR<ProjectListUpdateWithoutTaskInput, ProjectListUncheckedUpdateWithoutTaskInput>
  }

  export type ProjectListUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserOnProjectUpdateManyWithoutProjectListNestedInput
  }

  export type ProjectListUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    detail?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignor?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserOnProjectUncheckedUpdateManyWithoutProjectListNestedInput
  }

  export type UserOnTaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: UserOnTaskWhereUniqueInput
    update: XOR<UserOnTaskUpdateWithoutTaskInput, UserOnTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<UserOnTaskCreateWithoutTaskInput, UserOnTaskUncheckedCreateWithoutTaskInput>
  }

  export type UserOnTaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: UserOnTaskWhereUniqueInput
    data: XOR<UserOnTaskUpdateWithoutTaskInput, UserOnTaskUncheckedUpdateWithoutTaskInput>
  }

  export type UserOnTaskUpdateManyWithWhereWithoutTaskInput = {
    where: UserOnTaskScalarWhereInput
    data: XOR<UserOnTaskUpdateManyMutationInput, UserOnTaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTaskInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTaskInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateManyWithWhereWithoutTaskInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    phoneNo?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    department?: StringFilter<"User"> | string
    taskId?: IntNullableFilter<"User"> | number | null
  }

  export type TaskCreateWithoutAssignToInput = {
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    status?: StatusCreateNestedManyWithoutTaskInput
    ProjectList: ProjectListCreateNestedOneWithoutTaskInput
    User?: UserCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignToInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    projectListId: number
    status?: StatusUncheckedCreateNestedManyWithoutTaskInput
    User?: UserUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignToInput, TaskUncheckedCreateWithoutAssignToInput>
  }

  export type UserCreateWithoutUserOnTaskInput = {
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    project?: UserOnProjectCreateNestedManyWithoutUserInput
    Task?: TaskCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserOnTaskInput = {
    id?: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
    taskId?: number | null
    project?: UserOnProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserOnTaskInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserOnTaskInput, UserUncheckedCreateWithoutUserOnTaskInput>
  }

  export type TaskUpsertWithoutAssignToInput = {
    update: XOR<TaskUpdateWithoutAssignToInput, TaskUncheckedUpdateWithoutAssignToInput>
    create: XOR<TaskCreateWithoutAssignToInput, TaskUncheckedCreateWithoutAssignToInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAssignToInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAssignToInput, TaskUncheckedUpdateWithoutAssignToInput>
  }

  export type TaskUpdateWithoutAssignToInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateManyWithoutTaskNestedInput
    ProjectList?: ProjectListUpdateOneRequiredWithoutTaskNestedInput
    User?: UserUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectListId?: IntFieldUpdateOperationsInput | number
    status?: StatusUncheckedUpdateManyWithoutTaskNestedInput
    User?: UserUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutUserOnTaskInput = {
    update: XOR<UserUpdateWithoutUserOnTaskInput, UserUncheckedUpdateWithoutUserOnTaskInput>
    create: XOR<UserCreateWithoutUserOnTaskInput, UserUncheckedCreateWithoutUserOnTaskInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserOnTaskInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserOnTaskInput, UserUncheckedUpdateWithoutUserOnTaskInput>
  }

  export type UserUpdateWithoutUserOnTaskInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    project?: UserOnProjectUpdateManyWithoutUserNestedInput
    Task?: TaskUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserOnTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    taskId?: NullableIntFieldUpdateOperationsInput | number | null
    project?: UserOnProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateWithoutStatusInput = {
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    ProjectList: ProjectListCreateNestedOneWithoutTaskInput
    assignTo?: UserOnTaskCreateNestedManyWithoutTaskInput
    User?: UserCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStatusInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
    projectListId: number
    assignTo?: UserOnTaskUncheckedCreateNestedManyWithoutTaskInput
    User?: UserUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStatusInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStatusInput, TaskUncheckedCreateWithoutStatusInput>
  }

  export type TaskUpsertWithoutStatusInput = {
    update: XOR<TaskUpdateWithoutStatusInput, TaskUncheckedUpdateWithoutStatusInput>
    create: XOR<TaskCreateWithoutStatusInput, TaskUncheckedCreateWithoutStatusInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutStatusInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutStatusInput, TaskUncheckedUpdateWithoutStatusInput>
  }

  export type TaskUpdateWithoutStatusInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectList?: ProjectListUpdateOneRequiredWithoutTaskNestedInput
    assignTo?: UserOnTaskUpdateManyWithoutTaskNestedInput
    User?: UserUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    projectListId?: IntFieldUpdateOperationsInput | number
    assignTo?: UserOnTaskUncheckedUpdateManyWithoutTaskNestedInput
    User?: UserUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserOnProjectCreateManyUserInput = {
    projectListId: number
  }

  export type UserOnTaskCreateManyUserInput = {
    taskId: number
  }

  export type UserOnProjectUpdateWithoutUserInput = {
    ProjectList?: ProjectListUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserOnProjectUncheckedUpdateWithoutUserInput = {
    projectListId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnProjectUncheckedUpdateManyWithoutUserInput = {
    projectListId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnTaskUpdateWithoutUserInput = {
    Task?: TaskUpdateOneRequiredWithoutAssignToNestedInput
  }

  export type UserOnTaskUncheckedUpdateWithoutUserInput = {
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnTaskUncheckedUpdateManyWithoutUserInput = {
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnProjectCreateManyProjectListInput = {
    userId: number
  }

  export type TaskCreateManyProjectListInput = {
    id?: number
    name: string
    detail: string
    priority: number
    createAt?: Date | string
    updateAt?: Date | string
    dueDate: Date | string
  }

  export type UserOnProjectUpdateWithoutProjectListInput = {
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
  }

  export type UserOnProjectUncheckedUpdateWithoutProjectListInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnProjectUncheckedUpdateManyWithoutProjectListInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutProjectListInput = {
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateManyWithoutTaskNestedInput
    assignTo?: UserOnTaskUpdateManyWithoutTaskNestedInput
    User?: UserUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUncheckedUpdateManyWithoutTaskNestedInput
    assignTo?: UserOnTaskUncheckedUpdateManyWithoutTaskNestedInput
    User?: UserUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusCreateManyTaskInput = {
    id?: number
    taskStatus?: $Enums.TaskStatus
    createAt?: Date | string
    updateAt?: Date | string
    feedback?: string | null
    attachFile?: string | null
  }

  export type UserOnTaskCreateManyTaskInput = {
    userId: number
  }

  export type UserCreateManyTaskInput = {
    id?: number
    userName: string
    password: string
    firstName: string
    lastName: string
    createAt?: Date | string
    updateAt?: Date | string
    phoneNo: string
    email: string
    role?: $Enums.Role
    department: string
  }

  export type StatusUpdateWithoutTaskInput = {
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StatusUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskStatus?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    attachFile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserOnTaskUpdateWithoutTaskInput = {
    User?: UserUpdateOneRequiredWithoutUserOnTaskNestedInput
  }

  export type UserOnTaskUncheckedUpdateWithoutTaskInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnTaskUncheckedUpdateManyWithoutTaskInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutTaskInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    project?: UserOnProjectUpdateManyWithoutUserNestedInput
    UserOnTask?: UserOnTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
    project?: UserOnProjectUncheckedUpdateManyWithoutUserNestedInput
    UserOnTask?: UserOnTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    department?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}