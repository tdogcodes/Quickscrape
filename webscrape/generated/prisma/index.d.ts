
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
 * Model WorkFlow
 * 
 */
export type WorkFlow = $Result.DefaultSelection<Prisma.$WorkFlowPayload>
/**
 * Model WorkflowExectution
 * 
 */
export type WorkflowExectution = $Result.DefaultSelection<Prisma.$WorkflowExectutionPayload>
/**
 * Model ExecutionPhase
 * 
 */
export type ExecutionPhase = $Result.DefaultSelection<Prisma.$ExecutionPhasePayload>
/**
 * Model ExecutionLog
 * 
 */
export type ExecutionLog = $Result.DefaultSelection<Prisma.$ExecutionLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WorkFlows
 * const workFlows = await prisma.workFlow.findMany()
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
   * // Fetch zero or more WorkFlows
   * const workFlows = await prisma.workFlow.findMany()
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
   * `prisma.workFlow`: Exposes CRUD operations for the **WorkFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlows
    * const workFlows = await prisma.workFlow.findMany()
    * ```
    */
  get workFlow(): Prisma.WorkFlowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowExectution`: Exposes CRUD operations for the **WorkflowExectution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowExectutions
    * const workflowExectutions = await prisma.workflowExectution.findMany()
    * ```
    */
  get workflowExectution(): Prisma.WorkflowExectutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionPhase`: Exposes CRUD operations for the **ExecutionPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionPhases
    * const executionPhases = await prisma.executionPhase.findMany()
    * ```
    */
  get executionPhase(): Prisma.ExecutionPhaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionLog`: Exposes CRUD operations for the **ExecutionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionLogs
    * const executionLogs = await prisma.executionLog.findMany()
    * ```
    */
  get executionLog(): Prisma.ExecutionLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    WorkFlow: 'WorkFlow',
    WorkflowExectution: 'WorkflowExectution',
    ExecutionPhase: 'ExecutionPhase',
    ExecutionLog: 'ExecutionLog'
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
      modelProps: "workFlow" | "workflowExectution" | "executionPhase" | "executionLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WorkFlow: {
        payload: Prisma.$WorkFlowPayload<ExtArgs>
        fields: Prisma.WorkFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          findMany: {
            args: Prisma.WorkFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          create: {
            args: Prisma.WorkFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          createMany: {
            args: Prisma.WorkFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          update: {
            args: Prisma.WorkFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkFlowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          upsert: {
            args: Prisma.WorkFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlow>
          }
          groupBy: {
            args: Prisma.WorkFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowExectution: {
        payload: Prisma.$WorkflowExectutionPayload<ExtArgs>
        fields: Prisma.WorkflowExectutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowExectutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowExectutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>
          }
          findFirst: {
            args: Prisma.WorkflowExectutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowExectutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>
          }
          findMany: {
            args: Prisma.WorkflowExectutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>[]
          }
          create: {
            args: Prisma.WorkflowExectutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>
          }
          createMany: {
            args: Prisma.WorkflowExectutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowExectutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>[]
          }
          delete: {
            args: Prisma.WorkflowExectutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>
          }
          update: {
            args: Prisma.WorkflowExectutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowExectutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowExectutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowExectutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowExectutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExectutionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowExectutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowExectution>
          }
          groupBy: {
            args: Prisma.WorkflowExectutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExectutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowExectutionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExectutionCountAggregateOutputType> | number
          }
        }
      }
      ExecutionPhase: {
        payload: Prisma.$ExecutionPhasePayload<ExtArgs>
        fields: Prisma.ExecutionPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          findFirst: {
            args: Prisma.ExecutionPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          findMany: {
            args: Prisma.ExecutionPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>[]
          }
          create: {
            args: Prisma.ExecutionPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          createMany: {
            args: Prisma.ExecutionPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>[]
          }
          delete: {
            args: Prisma.ExecutionPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          update: {
            args: Prisma.ExecutionPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          deleteMany: {
            args: Prisma.ExecutionPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionPhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>[]
          }
          upsert: {
            args: Prisma.ExecutionPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          aggregate: {
            args: Prisma.ExecutionPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionPhase>
          }
          groupBy: {
            args: Prisma.ExecutionPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionPhaseCountAggregateOutputType> | number
          }
        }
      }
      ExecutionLog: {
        payload: Prisma.$ExecutionLogPayload<ExtArgs>
        fields: Prisma.ExecutionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findFirst: {
            args: Prisma.ExecutionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findMany: {
            args: Prisma.ExecutionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          create: {
            args: Prisma.ExecutionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          createMany: {
            args: Prisma.ExecutionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          delete: {
            args: Prisma.ExecutionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          update: {
            args: Prisma.ExecutionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          aggregate: {
            args: Prisma.ExecutionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionLog>
          }
          groupBy: {
            args: Prisma.ExecutionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogCountAggregateOutputType> | number
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
    workFlow?: WorkFlowOmit
    workflowExectution?: WorkflowExectutionOmit
    executionPhase?: ExecutionPhaseOmit
    executionLog?: ExecutionLogOmit
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
   * Count Type WorkFlowCountOutputType
   */

  export type WorkFlowCountOutputType = {
    executions: number
  }

  export type WorkFlowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | WorkFlowCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowCountOutputType
     */
    select?: WorkFlowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExectutionWhereInput
  }


  /**
   * Count Type WorkflowExectutionCountOutputType
   */

  export type WorkflowExectutionCountOutputType = {
    phases: number
  }

  export type WorkflowExectutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | WorkflowExectutionCountOutputTypeCountPhasesArgs
  }

  // Custom InputTypes
  /**
   * WorkflowExectutionCountOutputType without action
   */
  export type WorkflowExectutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectutionCountOutputType
     */
    select?: WorkflowExectutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowExectutionCountOutputType without action
   */
  export type WorkflowExectutionCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionPhaseWhereInput
  }


  /**
   * Count Type ExecutionPhaseCountOutputType
   */

  export type ExecutionPhaseCountOutputType = {
    logs: number
  }

  export type ExecutionPhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | ExecutionPhaseCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ExecutionPhaseCountOutputType without action
   */
  export type ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhaseCountOutputType
     */
    select?: ExecutionPhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutionPhaseCountOutputType without action
   */
  export type ExecutionPhaseCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WorkFlow
   */

  export type AggregateWorkFlow = {
    _count: WorkFlowCountAggregateOutputType | null
    _min: WorkFlowMinAggregateOutputType | null
    _max: WorkFlowMaxAggregateOutputType | null
  }

  export type WorkFlowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    definition: string | null
    status: string | null
    lastRunAt: Date | null
    lastRunId: string | null
    lastRunStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkFlowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    definition: string | null
    status: string | null
    lastRunAt: Date | null
    lastRunId: string | null
    lastRunStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkFlowCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    definition: number
    status: number
    lastRunAt: number
    lastRunId: number
    lastRunStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkFlowMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    status?: true
    lastRunAt?: true
    lastRunId?: true
    lastRunStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkFlowMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    status?: true
    lastRunAt?: true
    lastRunId?: true
    lastRunStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkFlowCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    status?: true
    lastRunAt?: true
    lastRunId?: true
    lastRunStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlow to aggregate.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlows
    **/
    _count?: true | WorkFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowMaxAggregateInputType
  }

  export type GetWorkFlowAggregateType<T extends WorkFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlow[P]>
      : GetScalarType<T[P], AggregateWorkFlow[P]>
  }




  export type WorkFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowWhereInput
    orderBy?: WorkFlowOrderByWithAggregationInput | WorkFlowOrderByWithAggregationInput[]
    by: WorkFlowScalarFieldEnum[] | WorkFlowScalarFieldEnum
    having?: WorkFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowCountAggregateInputType | true
    _min?: WorkFlowMinAggregateInputType
    _max?: WorkFlowMaxAggregateInputType
  }

  export type WorkFlowGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string
    definition: string
    status: string
    lastRunAt: Date | null
    lastRunId: string | null
    lastRunStatus: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkFlowCountAggregateOutputType | null
    _min: WorkFlowMinAggregateOutputType | null
    _max: WorkFlowMaxAggregateOutputType | null
  }

  type GetWorkFlowGroupByPayload<T extends WorkFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    executions?: boolean | WorkFlow$executionsArgs<ExtArgs>
    _count?: boolean | WorkFlowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkFlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "definition" | "status" | "lastRunAt" | "lastRunId" | "lastRunStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["workFlow"]>
  export type WorkFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | WorkFlow$executionsArgs<ExtArgs>
    _count?: boolean | WorkFlowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkFlowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkFlowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlow"
    objects: {
      executions: Prisma.$WorkflowExectutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string
      definition: string
      status: string
      lastRunAt: Date | null
      lastRunId: string | null
      lastRunStatus: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workFlow"]>
    composites: {}
  }

  type WorkFlowGetPayload<S extends boolean | null | undefined | WorkFlowDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowPayload, S>

  type WorkFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkFlowCountAggregateInputType | true
    }

  export interface WorkFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlow'], meta: { name: 'WorkFlow' } }
    /**
     * Find zero or one WorkFlow that matches the filter.
     * @param {WorkFlowFindUniqueArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowFindUniqueArgs>(args: SelectSubset<T, WorkFlowFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkFlow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFlowFindUniqueOrThrowArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindFirstArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowFindFirstArgs>(args?: SelectSubset<T, WorkFlowFindFirstArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindFirstOrThrowArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlows
     * const workFlows = await prisma.workFlow.findMany()
     * 
     * // Get first 10 WorkFlows
     * const workFlows = await prisma.workFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowFindManyArgs>(args?: SelectSubset<T, WorkFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkFlow.
     * @param {WorkFlowCreateArgs} args - Arguments to create a WorkFlow.
     * @example
     * // Create one WorkFlow
     * const WorkFlow = await prisma.workFlow.create({
     *   data: {
     *     // ... data to create a WorkFlow
     *   }
     * })
     * 
     */
    create<T extends WorkFlowCreateArgs>(args: SelectSubset<T, WorkFlowCreateArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkFlows.
     * @param {WorkFlowCreateManyArgs} args - Arguments to create many WorkFlows.
     * @example
     * // Create many WorkFlows
     * const workFlow = await prisma.workFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowCreateManyArgs>(args?: SelectSubset<T, WorkFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlows and returns the data saved in the database.
     * @param {WorkFlowCreateManyAndReturnArgs} args - Arguments to create many WorkFlows.
     * @example
     * // Create many WorkFlows
     * const workFlow = await prisma.workFlow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlows and only return the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkFlow.
     * @param {WorkFlowDeleteArgs} args - Arguments to delete one WorkFlow.
     * @example
     * // Delete one WorkFlow
     * const WorkFlow = await prisma.workFlow.delete({
     *   where: {
     *     // ... filter to delete one WorkFlow
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowDeleteArgs>(args: SelectSubset<T, WorkFlowDeleteArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkFlow.
     * @param {WorkFlowUpdateArgs} args - Arguments to update one WorkFlow.
     * @example
     * // Update one WorkFlow
     * const workFlow = await prisma.workFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowUpdateArgs>(args: SelectSubset<T, WorkFlowUpdateArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkFlows.
     * @param {WorkFlowDeleteManyArgs} args - Arguments to filter WorkFlows to delete.
     * @example
     * // Delete a few WorkFlows
     * const { count } = await prisma.workFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowDeleteManyArgs>(args?: SelectSubset<T, WorkFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlows
     * const workFlow = await prisma.workFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowUpdateManyArgs>(args: SelectSubset<T, WorkFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlows and returns the data updated in the database.
     * @param {WorkFlowUpdateManyAndReturnArgs} args - Arguments to update many WorkFlows.
     * @example
     * // Update many WorkFlows
     * const workFlow = await prisma.workFlow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkFlows and only return the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkFlowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkFlowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkFlow.
     * @param {WorkFlowUpsertArgs} args - Arguments to update or create a WorkFlow.
     * @example
     * // Update or create a WorkFlow
     * const workFlow = await prisma.workFlow.upsert({
     *   create: {
     *     // ... data to create a WorkFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlow we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowUpsertArgs>(args: SelectSubset<T, WorkFlowUpsertArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowCountArgs} args - Arguments to filter WorkFlows to count.
     * @example
     * // Count the number of WorkFlows
     * const count = await prisma.workFlow.count({
     *   where: {
     *     // ... the filter for the WorkFlows we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowCountArgs>(
      args?: Subset<T, WorkFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkFlowAggregateArgs>(args: Subset<T, WorkFlowAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowAggregateType<T>>

    /**
     * Group by WorkFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowGroupByArgs} args - Group by arguments.
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
      T extends WorkFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlow model
   */
  readonly fields: WorkFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executions<T extends WorkFlow$executionsArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlow$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WorkFlow model
   */
  interface WorkFlowFieldRefs {
    readonly id: FieldRef<"WorkFlow", 'String'>
    readonly userId: FieldRef<"WorkFlow", 'String'>
    readonly name: FieldRef<"WorkFlow", 'String'>
    readonly description: FieldRef<"WorkFlow", 'String'>
    readonly definition: FieldRef<"WorkFlow", 'String'>
    readonly status: FieldRef<"WorkFlow", 'String'>
    readonly lastRunAt: FieldRef<"WorkFlow", 'DateTime'>
    readonly lastRunId: FieldRef<"WorkFlow", 'String'>
    readonly lastRunStatus: FieldRef<"WorkFlow", 'String'>
    readonly createdAt: FieldRef<"WorkFlow", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkFlow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlow findUnique
   */
  export type WorkFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow findUniqueOrThrow
   */
  export type WorkFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow findFirst
   */
  export type WorkFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlows.
     */
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow findFirstOrThrow
   */
  export type WorkFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlows.
     */
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow findMany
   */
  export type WorkFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlows to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow create
   */
  export type WorkFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlow.
     */
    data: XOR<WorkFlowCreateInput, WorkFlowUncheckedCreateInput>
  }

  /**
   * WorkFlow createMany
   */
  export type WorkFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlows.
     */
    data: WorkFlowCreateManyInput | WorkFlowCreateManyInput[]
  }

  /**
   * WorkFlow createManyAndReturn
   */
  export type WorkFlowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * The data used to create many WorkFlows.
     */
    data: WorkFlowCreateManyInput | WorkFlowCreateManyInput[]
  }

  /**
   * WorkFlow update
   */
  export type WorkFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlow.
     */
    data: XOR<WorkFlowUpdateInput, WorkFlowUncheckedUpdateInput>
    /**
     * Choose, which WorkFlow to update.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow updateMany
   */
  export type WorkFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlows.
     */
    data: XOR<WorkFlowUpdateManyMutationInput, WorkFlowUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlows to update
     */
    where?: WorkFlowWhereInput
    /**
     * Limit how many WorkFlows to update.
     */
    limit?: number
  }

  /**
   * WorkFlow updateManyAndReturn
   */
  export type WorkFlowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * The data used to update WorkFlows.
     */
    data: XOR<WorkFlowUpdateManyMutationInput, WorkFlowUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlows to update
     */
    where?: WorkFlowWhereInput
    /**
     * Limit how many WorkFlows to update.
     */
    limit?: number
  }

  /**
   * WorkFlow upsert
   */
  export type WorkFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlow to update in case it exists.
     */
    where: WorkFlowWhereUniqueInput
    /**
     * In case the WorkFlow found by the `where` argument doesn't exist, create a new WorkFlow with this data.
     */
    create: XOR<WorkFlowCreateInput, WorkFlowUncheckedCreateInput>
    /**
     * In case the WorkFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowUpdateInput, WorkFlowUncheckedUpdateInput>
  }

  /**
   * WorkFlow delete
   */
  export type WorkFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter which WorkFlow to delete.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow deleteMany
   */
  export type WorkFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlows to delete
     */
    where?: WorkFlowWhereInput
    /**
     * Limit how many WorkFlows to delete.
     */
    limit?: number
  }

  /**
   * WorkFlow.executions
   */
  export type WorkFlow$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    where?: WorkflowExectutionWhereInput
    orderBy?: WorkflowExectutionOrderByWithRelationInput | WorkflowExectutionOrderByWithRelationInput[]
    cursor?: WorkflowExectutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowExectutionScalarFieldEnum | WorkflowExectutionScalarFieldEnum[]
  }

  /**
   * WorkFlow without action
   */
  export type WorkFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowExectution
   */

  export type AggregateWorkflowExectution = {
    _count: WorkflowExectutionCountAggregateOutputType | null
    _avg: WorkflowExectutionAvgAggregateOutputType | null
    _sum: WorkflowExectutionSumAggregateOutputType | null
    _min: WorkflowExectutionMinAggregateOutputType | null
    _max: WorkflowExectutionMaxAggregateOutputType | null
  }

  export type WorkflowExectutionAvgAggregateOutputType = {
    creditsConsumed: number | null
  }

  export type WorkflowExectutionSumAggregateOutputType = {
    creditsConsumed: number | null
  }

  export type WorkflowExectutionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    trigger: string | null
    status: string | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    definition: string | null
    creditsConsumed: number | null
  }

  export type WorkflowExectutionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    trigger: string | null
    status: string | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    definition: string | null
    creditsConsumed: number | null
  }

  export type WorkflowExectutionCountAggregateOutputType = {
    id: number
    workflowId: number
    userId: number
    trigger: number
    status: number
    createdAt: number
    startedAt: number
    completedAt: number
    definition: number
    creditsConsumed: number
    _all: number
  }


  export type WorkflowExectutionAvgAggregateInputType = {
    creditsConsumed?: true
  }

  export type WorkflowExectutionSumAggregateInputType = {
    creditsConsumed?: true
  }

  export type WorkflowExectutionMinAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    definition?: true
    creditsConsumed?: true
  }

  export type WorkflowExectutionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    definition?: true
    creditsConsumed?: true
  }

  export type WorkflowExectutionCountAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    definition?: true
    creditsConsumed?: true
    _all?: true
  }

  export type WorkflowExectutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExectution to aggregate.
     */
    where?: WorkflowExectutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExectutions to fetch.
     */
    orderBy?: WorkflowExectutionOrderByWithRelationInput | WorkflowExectutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowExectutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExectutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExectutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowExectutions
    **/
    _count?: true | WorkflowExectutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowExectutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowExectutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowExectutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowExectutionMaxAggregateInputType
  }

  export type GetWorkflowExectutionAggregateType<T extends WorkflowExectutionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowExectution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowExectution[P]>
      : GetScalarType<T[P], AggregateWorkflowExectution[P]>
  }




  export type WorkflowExectutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExectutionWhereInput
    orderBy?: WorkflowExectutionOrderByWithAggregationInput | WorkflowExectutionOrderByWithAggregationInput[]
    by: WorkflowExectutionScalarFieldEnum[] | WorkflowExectutionScalarFieldEnum
    having?: WorkflowExectutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowExectutionCountAggregateInputType | true
    _avg?: WorkflowExectutionAvgAggregateInputType
    _sum?: WorkflowExectutionSumAggregateInputType
    _min?: WorkflowExectutionMinAggregateInputType
    _max?: WorkflowExectutionMaxAggregateInputType
  }

  export type WorkflowExectutionGroupByOutputType = {
    id: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt: Date
    startedAt: Date | null
    completedAt: Date | null
    definition: string
    creditsConsumed: number | null
    _count: WorkflowExectutionCountAggregateOutputType | null
    _avg: WorkflowExectutionAvgAggregateOutputType | null
    _sum: WorkflowExectutionSumAggregateOutputType | null
    _min: WorkflowExectutionMinAggregateOutputType | null
    _max: WorkflowExectutionMaxAggregateOutputType | null
  }

  type GetWorkflowExectutionGroupByPayload<T extends WorkflowExectutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowExectutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowExectutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowExectutionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowExectutionGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowExectutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
    phases?: boolean | WorkflowExectution$phasesArgs<ExtArgs>
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    _count?: boolean | WorkflowExectutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExectution"]>

  export type WorkflowExectutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExectution"]>

  export type WorkflowExectutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExectution"]>

  export type WorkflowExectutionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
  }

  export type WorkflowExectutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "userId" | "trigger" | "status" | "createdAt" | "startedAt" | "completedAt" | "definition" | "creditsConsumed", ExtArgs["result"]["workflowExectution"]>
  export type WorkflowExectutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | WorkflowExectution$phasesArgs<ExtArgs>
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    _count?: boolean | WorkflowExectutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowExectutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }
  export type WorkflowExectutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }

  export type $WorkflowExectutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowExectution"
    objects: {
      phases: Prisma.$ExecutionPhasePayload<ExtArgs>[]
      workflow: Prisma.$WorkFlowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      userId: string
      trigger: string
      status: string
      createdAt: Date
      startedAt: Date | null
      completedAt: Date | null
      definition: string
      creditsConsumed: number | null
    }, ExtArgs["result"]["workflowExectution"]>
    composites: {}
  }

  type WorkflowExectutionGetPayload<S extends boolean | null | undefined | WorkflowExectutionDefaultArgs> = $Result.GetResult<Prisma.$WorkflowExectutionPayload, S>

  type WorkflowExectutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowExectutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowExectutionCountAggregateInputType | true
    }

  export interface WorkflowExectutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowExectution'], meta: { name: 'WorkflowExectution' } }
    /**
     * Find zero or one WorkflowExectution that matches the filter.
     * @param {WorkflowExectutionFindUniqueArgs} args - Arguments to find a WorkflowExectution
     * @example
     * // Get one WorkflowExectution
     * const workflowExectution = await prisma.workflowExectution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowExectutionFindUniqueArgs>(args: SelectSubset<T, WorkflowExectutionFindUniqueArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowExectution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowExectutionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowExectution
     * @example
     * // Get one WorkflowExectution
     * const workflowExectution = await prisma.workflowExectution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowExectutionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowExectutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowExectution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionFindFirstArgs} args - Arguments to find a WorkflowExectution
     * @example
     * // Get one WorkflowExectution
     * const workflowExectution = await prisma.workflowExectution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowExectutionFindFirstArgs>(args?: SelectSubset<T, WorkflowExectutionFindFirstArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowExectution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionFindFirstOrThrowArgs} args - Arguments to find a WorkflowExectution
     * @example
     * // Get one WorkflowExectution
     * const workflowExectution = await prisma.workflowExectution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowExectutionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowExectutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowExectutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowExectutions
     * const workflowExectutions = await prisma.workflowExectution.findMany()
     * 
     * // Get first 10 WorkflowExectutions
     * const workflowExectutions = await prisma.workflowExectution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowExectutionWithIdOnly = await prisma.workflowExectution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowExectutionFindManyArgs>(args?: SelectSubset<T, WorkflowExectutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowExectution.
     * @param {WorkflowExectutionCreateArgs} args - Arguments to create a WorkflowExectution.
     * @example
     * // Create one WorkflowExectution
     * const WorkflowExectution = await prisma.workflowExectution.create({
     *   data: {
     *     // ... data to create a WorkflowExectution
     *   }
     * })
     * 
     */
    create<T extends WorkflowExectutionCreateArgs>(args: SelectSubset<T, WorkflowExectutionCreateArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowExectutions.
     * @param {WorkflowExectutionCreateManyArgs} args - Arguments to create many WorkflowExectutions.
     * @example
     * // Create many WorkflowExectutions
     * const workflowExectution = await prisma.workflowExectution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowExectutionCreateManyArgs>(args?: SelectSubset<T, WorkflowExectutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowExectutions and returns the data saved in the database.
     * @param {WorkflowExectutionCreateManyAndReturnArgs} args - Arguments to create many WorkflowExectutions.
     * @example
     * // Create many WorkflowExectutions
     * const workflowExectution = await prisma.workflowExectution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowExectutions and only return the `id`
     * const workflowExectutionWithIdOnly = await prisma.workflowExectution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowExectutionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowExectutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowExectution.
     * @param {WorkflowExectutionDeleteArgs} args - Arguments to delete one WorkflowExectution.
     * @example
     * // Delete one WorkflowExectution
     * const WorkflowExectution = await prisma.workflowExectution.delete({
     *   where: {
     *     // ... filter to delete one WorkflowExectution
     *   }
     * })
     * 
     */
    delete<T extends WorkflowExectutionDeleteArgs>(args: SelectSubset<T, WorkflowExectutionDeleteArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowExectution.
     * @param {WorkflowExectutionUpdateArgs} args - Arguments to update one WorkflowExectution.
     * @example
     * // Update one WorkflowExectution
     * const workflowExectution = await prisma.workflowExectution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowExectutionUpdateArgs>(args: SelectSubset<T, WorkflowExectutionUpdateArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowExectutions.
     * @param {WorkflowExectutionDeleteManyArgs} args - Arguments to filter WorkflowExectutions to delete.
     * @example
     * // Delete a few WorkflowExectutions
     * const { count } = await prisma.workflowExectution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowExectutionDeleteManyArgs>(args?: SelectSubset<T, WorkflowExectutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExectutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowExectutions
     * const workflowExectution = await prisma.workflowExectution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowExectutionUpdateManyArgs>(args: SelectSubset<T, WorkflowExectutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExectutions and returns the data updated in the database.
     * @param {WorkflowExectutionUpdateManyAndReturnArgs} args - Arguments to update many WorkflowExectutions.
     * @example
     * // Update many WorkflowExectutions
     * const workflowExectution = await prisma.workflowExectution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowExectutions and only return the `id`
     * const workflowExectutionWithIdOnly = await prisma.workflowExectution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowExectutionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowExectutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowExectution.
     * @param {WorkflowExectutionUpsertArgs} args - Arguments to update or create a WorkflowExectution.
     * @example
     * // Update or create a WorkflowExectution
     * const workflowExectution = await prisma.workflowExectution.upsert({
     *   create: {
     *     // ... data to create a WorkflowExectution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowExectution we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowExectutionUpsertArgs>(args: SelectSubset<T, WorkflowExectutionUpsertArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowExectutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionCountArgs} args - Arguments to filter WorkflowExectutions to count.
     * @example
     * // Count the number of WorkflowExectutions
     * const count = await prisma.workflowExectution.count({
     *   where: {
     *     // ... the filter for the WorkflowExectutions we want to count
     *   }
     * })
    **/
    count<T extends WorkflowExectutionCountArgs>(
      args?: Subset<T, WorkflowExectutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowExectutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowExectution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowExectutionAggregateArgs>(args: Subset<T, WorkflowExectutionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowExectutionAggregateType<T>>

    /**
     * Group by WorkflowExectution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExectutionGroupByArgs} args - Group by arguments.
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
      T extends WorkflowExectutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowExectutionGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowExectutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowExectutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowExectutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowExectution model
   */
  readonly fields: WorkflowExectutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowExectution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowExectutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phases<T extends WorkflowExectution$phasesArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowExectution$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflow<T extends WorkFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowDefaultArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkflowExectution model
   */
  interface WorkflowExectutionFieldRefs {
    readonly id: FieldRef<"WorkflowExectution", 'String'>
    readonly workflowId: FieldRef<"WorkflowExectution", 'String'>
    readonly userId: FieldRef<"WorkflowExectution", 'String'>
    readonly trigger: FieldRef<"WorkflowExectution", 'String'>
    readonly status: FieldRef<"WorkflowExectution", 'String'>
    readonly createdAt: FieldRef<"WorkflowExectution", 'DateTime'>
    readonly startedAt: FieldRef<"WorkflowExectution", 'DateTime'>
    readonly completedAt: FieldRef<"WorkflowExectution", 'DateTime'>
    readonly definition: FieldRef<"WorkflowExectution", 'String'>
    readonly creditsConsumed: FieldRef<"WorkflowExectution", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowExectution findUnique
   */
  export type WorkflowExectutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExectution to fetch.
     */
    where: WorkflowExectutionWhereUniqueInput
  }

  /**
   * WorkflowExectution findUniqueOrThrow
   */
  export type WorkflowExectutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExectution to fetch.
     */
    where: WorkflowExectutionWhereUniqueInput
  }

  /**
   * WorkflowExectution findFirst
   */
  export type WorkflowExectutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExectution to fetch.
     */
    where?: WorkflowExectutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExectutions to fetch.
     */
    orderBy?: WorkflowExectutionOrderByWithRelationInput | WorkflowExectutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExectutions.
     */
    cursor?: WorkflowExectutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExectutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExectutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExectutions.
     */
    distinct?: WorkflowExectutionScalarFieldEnum | WorkflowExectutionScalarFieldEnum[]
  }

  /**
   * WorkflowExectution findFirstOrThrow
   */
  export type WorkflowExectutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExectution to fetch.
     */
    where?: WorkflowExectutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExectutions to fetch.
     */
    orderBy?: WorkflowExectutionOrderByWithRelationInput | WorkflowExectutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExectutions.
     */
    cursor?: WorkflowExectutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExectutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExectutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExectutions.
     */
    distinct?: WorkflowExectutionScalarFieldEnum | WorkflowExectutionScalarFieldEnum[]
  }

  /**
   * WorkflowExectution findMany
   */
  export type WorkflowExectutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExectutions to fetch.
     */
    where?: WorkflowExectutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExectutions to fetch.
     */
    orderBy?: WorkflowExectutionOrderByWithRelationInput | WorkflowExectutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowExectutions.
     */
    cursor?: WorkflowExectutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExectutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExectutions.
     */
    skip?: number
    distinct?: WorkflowExectutionScalarFieldEnum | WorkflowExectutionScalarFieldEnum[]
  }

  /**
   * WorkflowExectution create
   */
  export type WorkflowExectutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowExectution.
     */
    data: XOR<WorkflowExectutionCreateInput, WorkflowExectutionUncheckedCreateInput>
  }

  /**
   * WorkflowExectution createMany
   */
  export type WorkflowExectutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowExectutions.
     */
    data: WorkflowExectutionCreateManyInput | WorkflowExectutionCreateManyInput[]
  }

  /**
   * WorkflowExectution createManyAndReturn
   */
  export type WorkflowExectutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowExectutions.
     */
    data: WorkflowExectutionCreateManyInput | WorkflowExectutionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowExectution update
   */
  export type WorkflowExectutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowExectution.
     */
    data: XOR<WorkflowExectutionUpdateInput, WorkflowExectutionUncheckedUpdateInput>
    /**
     * Choose, which WorkflowExectution to update.
     */
    where: WorkflowExectutionWhereUniqueInput
  }

  /**
   * WorkflowExectution updateMany
   */
  export type WorkflowExectutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowExectutions.
     */
    data: XOR<WorkflowExectutionUpdateManyMutationInput, WorkflowExectutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowExectutions to update
     */
    where?: WorkflowExectutionWhereInput
    /**
     * Limit how many WorkflowExectutions to update.
     */
    limit?: number
  }

  /**
   * WorkflowExectution updateManyAndReturn
   */
  export type WorkflowExectutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowExectutions.
     */
    data: XOR<WorkflowExectutionUpdateManyMutationInput, WorkflowExectutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowExectutions to update
     */
    where?: WorkflowExectutionWhereInput
    /**
     * Limit how many WorkflowExectutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowExectution upsert
   */
  export type WorkflowExectutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowExectution to update in case it exists.
     */
    where: WorkflowExectutionWhereUniqueInput
    /**
     * In case the WorkflowExectution found by the `where` argument doesn't exist, create a new WorkflowExectution with this data.
     */
    create: XOR<WorkflowExectutionCreateInput, WorkflowExectutionUncheckedCreateInput>
    /**
     * In case the WorkflowExectution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowExectutionUpdateInput, WorkflowExectutionUncheckedUpdateInput>
  }

  /**
   * WorkflowExectution delete
   */
  export type WorkflowExectutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
    /**
     * Filter which WorkflowExectution to delete.
     */
    where: WorkflowExectutionWhereUniqueInput
  }

  /**
   * WorkflowExectution deleteMany
   */
  export type WorkflowExectutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExectutions to delete
     */
    where?: WorkflowExectutionWhereInput
    /**
     * Limit how many WorkflowExectutions to delete.
     */
    limit?: number
  }

  /**
   * WorkflowExectution.phases
   */
  export type WorkflowExectution$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    where?: ExecutionPhaseWhereInput
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    cursor?: ExecutionPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * WorkflowExectution without action
   */
  export type WorkflowExectutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExectution
     */
    select?: WorkflowExectutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExectution
     */
    omit?: WorkflowExectutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExectutionInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionPhase
   */

  export type AggregateExecutionPhase = {
    _count: ExecutionPhaseCountAggregateOutputType | null
    _avg: ExecutionPhaseAvgAggregateOutputType | null
    _sum: ExecutionPhaseSumAggregateOutputType | null
    _min: ExecutionPhaseMinAggregateOutputType | null
    _max: ExecutionPhaseMaxAggregateOutputType | null
  }

  export type ExecutionPhaseAvgAggregateOutputType = {
    number: number | null
    creditsConsumed: number | null
  }

  export type ExecutionPhaseSumAggregateOutputType = {
    number: number | null
    creditsConsumed: number | null
  }

  export type ExecutionPhaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    number: number | null
    node: string | null
    name: string | null
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string | null
  }

  export type ExecutionPhaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    number: number | null
    node: string | null
    name: string | null
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string | null
  }

  export type ExecutionPhaseCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    number: number
    node: number
    name: number
    startedAt: number
    completedAt: number
    inputs: number
    outputs: number
    creditsConsumed: number
    workflowExecutionId: number
    _all: number
  }


  export type ExecutionPhaseAvgAggregateInputType = {
    number?: true
    creditsConsumed?: true
  }

  export type ExecutionPhaseSumAggregateInputType = {
    number?: true
    creditsConsumed?: true
  }

  export type ExecutionPhaseMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
  }

  export type ExecutionPhaseMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
  }

  export type ExecutionPhaseCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
    _all?: true
  }

  export type ExecutionPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionPhase to aggregate.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionPhases
    **/
    _count?: true | ExecutionPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionPhaseMaxAggregateInputType
  }

  export type GetExecutionPhaseAggregateType<T extends ExecutionPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionPhase[P]>
      : GetScalarType<T[P], AggregateExecutionPhase[P]>
  }




  export type ExecutionPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionPhaseWhereInput
    orderBy?: ExecutionPhaseOrderByWithAggregationInput | ExecutionPhaseOrderByWithAggregationInput[]
    by: ExecutionPhaseScalarFieldEnum[] | ExecutionPhaseScalarFieldEnum
    having?: ExecutionPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionPhaseCountAggregateInputType | true
    _avg?: ExecutionPhaseAvgAggregateInputType
    _sum?: ExecutionPhaseSumAggregateInputType
    _min?: ExecutionPhaseMinAggregateInputType
    _max?: ExecutionPhaseMaxAggregateInputType
  }

  export type ExecutionPhaseGroupByOutputType = {
    id: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string
    _count: ExecutionPhaseCountAggregateOutputType | null
    _avg: ExecutionPhaseAvgAggregateOutputType | null
    _sum: ExecutionPhaseSumAggregateOutputType | null
    _min: ExecutionPhaseMinAggregateOutputType | null
    _max: ExecutionPhaseMaxAggregateOutputType | null
  }

  type GetExecutionPhaseGroupByPayload<T extends ExecutionPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | WorkflowExectutionDefaultArgs<ExtArgs>
    logs?: boolean | ExecutionPhase$logsArgs<ExtArgs>
    _count?: boolean | ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionPhase"]>

  export type ExecutionPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | WorkflowExectutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionPhase"]>

  export type ExecutionPhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | WorkflowExectutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionPhase"]>

  export type ExecutionPhaseSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
  }

  export type ExecutionPhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "number" | "node" | "name" | "startedAt" | "completedAt" | "inputs" | "outputs" | "creditsConsumed" | "workflowExecutionId", ExtArgs["result"]["executionPhase"]>
  export type ExecutionPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | WorkflowExectutionDefaultArgs<ExtArgs>
    logs?: boolean | ExecutionPhase$logsArgs<ExtArgs>
    _count?: boolean | ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExecutionPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | WorkflowExectutionDefaultArgs<ExtArgs>
  }
  export type ExecutionPhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | WorkflowExectutionDefaultArgs<ExtArgs>
  }

  export type $ExecutionPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionPhase"
    objects: {
      execution: Prisma.$WorkflowExectutionPayload<ExtArgs>
      logs: Prisma.$ExecutionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: string
      number: number
      node: string
      name: string
      startedAt: Date | null
      completedAt: Date | null
      inputs: string | null
      outputs: string | null
      creditsConsumed: number | null
      workflowExecutionId: string
    }, ExtArgs["result"]["executionPhase"]>
    composites: {}
  }

  type ExecutionPhaseGetPayload<S extends boolean | null | undefined | ExecutionPhaseDefaultArgs> = $Result.GetResult<Prisma.$ExecutionPhasePayload, S>

  type ExecutionPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionPhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionPhaseCountAggregateInputType | true
    }

  export interface ExecutionPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionPhase'], meta: { name: 'ExecutionPhase' } }
    /**
     * Find zero or one ExecutionPhase that matches the filter.
     * @param {ExecutionPhaseFindUniqueArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionPhaseFindUniqueArgs>(args: SelectSubset<T, ExecutionPhaseFindUniqueArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionPhase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionPhaseFindUniqueOrThrowArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseFindFirstArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionPhaseFindFirstArgs>(args?: SelectSubset<T, ExecutionPhaseFindFirstArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseFindFirstOrThrowArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionPhases
     * const executionPhases = await prisma.executionPhase.findMany()
     * 
     * // Get first 10 ExecutionPhases
     * const executionPhases = await prisma.executionPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionPhaseWithIdOnly = await prisma.executionPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionPhaseFindManyArgs>(args?: SelectSubset<T, ExecutionPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionPhase.
     * @param {ExecutionPhaseCreateArgs} args - Arguments to create a ExecutionPhase.
     * @example
     * // Create one ExecutionPhase
     * const ExecutionPhase = await prisma.executionPhase.create({
     *   data: {
     *     // ... data to create a ExecutionPhase
     *   }
     * })
     * 
     */
    create<T extends ExecutionPhaseCreateArgs>(args: SelectSubset<T, ExecutionPhaseCreateArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionPhases.
     * @param {ExecutionPhaseCreateManyArgs} args - Arguments to create many ExecutionPhases.
     * @example
     * // Create many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionPhaseCreateManyArgs>(args?: SelectSubset<T, ExecutionPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionPhases and returns the data saved in the database.
     * @param {ExecutionPhaseCreateManyAndReturnArgs} args - Arguments to create many ExecutionPhases.
     * @example
     * // Create many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionPhases and only return the `id`
     * const executionPhaseWithIdOnly = await prisma.executionPhase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionPhase.
     * @param {ExecutionPhaseDeleteArgs} args - Arguments to delete one ExecutionPhase.
     * @example
     * // Delete one ExecutionPhase
     * const ExecutionPhase = await prisma.executionPhase.delete({
     *   where: {
     *     // ... filter to delete one ExecutionPhase
     *   }
     * })
     * 
     */
    delete<T extends ExecutionPhaseDeleteArgs>(args: SelectSubset<T, ExecutionPhaseDeleteArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionPhase.
     * @param {ExecutionPhaseUpdateArgs} args - Arguments to update one ExecutionPhase.
     * @example
     * // Update one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionPhaseUpdateArgs>(args: SelectSubset<T, ExecutionPhaseUpdateArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionPhases.
     * @param {ExecutionPhaseDeleteManyArgs} args - Arguments to filter ExecutionPhases to delete.
     * @example
     * // Delete a few ExecutionPhases
     * const { count } = await prisma.executionPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionPhaseDeleteManyArgs>(args?: SelectSubset<T, ExecutionPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionPhaseUpdateManyArgs>(args: SelectSubset<T, ExecutionPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionPhases and returns the data updated in the database.
     * @param {ExecutionPhaseUpdateManyAndReturnArgs} args - Arguments to update many ExecutionPhases.
     * @example
     * // Update many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionPhases and only return the `id`
     * const executionPhaseWithIdOnly = await prisma.executionPhase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionPhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionPhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionPhase.
     * @param {ExecutionPhaseUpsertArgs} args - Arguments to update or create a ExecutionPhase.
     * @example
     * // Update or create a ExecutionPhase
     * const executionPhase = await prisma.executionPhase.upsert({
     *   create: {
     *     // ... data to create a ExecutionPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionPhase we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionPhaseUpsertArgs>(args: SelectSubset<T, ExecutionPhaseUpsertArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseCountArgs} args - Arguments to filter ExecutionPhases to count.
     * @example
     * // Count the number of ExecutionPhases
     * const count = await prisma.executionPhase.count({
     *   where: {
     *     // ... the filter for the ExecutionPhases we want to count
     *   }
     * })
    **/
    count<T extends ExecutionPhaseCountArgs>(
      args?: Subset<T, ExecutionPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionPhaseAggregateArgs>(args: Subset<T, ExecutionPhaseAggregateArgs>): Prisma.PrismaPromise<GetExecutionPhaseAggregateType<T>>

    /**
     * Group by ExecutionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseGroupByArgs} args - Group by arguments.
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
      T extends ExecutionPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionPhaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionPhase model
   */
  readonly fields: ExecutionPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    execution<T extends WorkflowExectutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowExectutionDefaultArgs<ExtArgs>>): Prisma__WorkflowExectutionClient<$Result.GetResult<Prisma.$WorkflowExectutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends ExecutionPhase$logsArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionPhase$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ExecutionPhase model
   */
  interface ExecutionPhaseFieldRefs {
    readonly id: FieldRef<"ExecutionPhase", 'String'>
    readonly userId: FieldRef<"ExecutionPhase", 'String'>
    readonly status: FieldRef<"ExecutionPhase", 'String'>
    readonly number: FieldRef<"ExecutionPhase", 'Int'>
    readonly node: FieldRef<"ExecutionPhase", 'String'>
    readonly name: FieldRef<"ExecutionPhase", 'String'>
    readonly startedAt: FieldRef<"ExecutionPhase", 'DateTime'>
    readonly completedAt: FieldRef<"ExecutionPhase", 'DateTime'>
    readonly inputs: FieldRef<"ExecutionPhase", 'String'>
    readonly outputs: FieldRef<"ExecutionPhase", 'String'>
    readonly creditsConsumed: FieldRef<"ExecutionPhase", 'Int'>
    readonly workflowExecutionId: FieldRef<"ExecutionPhase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionPhase findUnique
   */
  export type ExecutionPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase findUniqueOrThrow
   */
  export type ExecutionPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase findFirst
   */
  export type ExecutionPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionPhases.
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionPhases.
     */
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * ExecutionPhase findFirstOrThrow
   */
  export type ExecutionPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionPhases.
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionPhases.
     */
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * ExecutionPhase findMany
   */
  export type ExecutionPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhases to fetch.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionPhases.
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * ExecutionPhase create
   */
  export type ExecutionPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionPhase.
     */
    data: XOR<ExecutionPhaseCreateInput, ExecutionPhaseUncheckedCreateInput>
  }

  /**
   * ExecutionPhase createMany
   */
  export type ExecutionPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionPhases.
     */
    data: ExecutionPhaseCreateManyInput | ExecutionPhaseCreateManyInput[]
  }

  /**
   * ExecutionPhase createManyAndReturn
   */
  export type ExecutionPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionPhases.
     */
    data: ExecutionPhaseCreateManyInput | ExecutionPhaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionPhase update
   */
  export type ExecutionPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionPhase.
     */
    data: XOR<ExecutionPhaseUpdateInput, ExecutionPhaseUncheckedUpdateInput>
    /**
     * Choose, which ExecutionPhase to update.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase updateMany
   */
  export type ExecutionPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionPhases.
     */
    data: XOR<ExecutionPhaseUpdateManyMutationInput, ExecutionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionPhases to update
     */
    where?: ExecutionPhaseWhereInput
    /**
     * Limit how many ExecutionPhases to update.
     */
    limit?: number
  }

  /**
   * ExecutionPhase updateManyAndReturn
   */
  export type ExecutionPhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionPhases.
     */
    data: XOR<ExecutionPhaseUpdateManyMutationInput, ExecutionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionPhases to update
     */
    where?: ExecutionPhaseWhereInput
    /**
     * Limit how many ExecutionPhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionPhase upsert
   */
  export type ExecutionPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionPhase to update in case it exists.
     */
    where: ExecutionPhaseWhereUniqueInput
    /**
     * In case the ExecutionPhase found by the `where` argument doesn't exist, create a new ExecutionPhase with this data.
     */
    create: XOR<ExecutionPhaseCreateInput, ExecutionPhaseUncheckedCreateInput>
    /**
     * In case the ExecutionPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionPhaseUpdateInput, ExecutionPhaseUncheckedUpdateInput>
  }

  /**
   * ExecutionPhase delete
   */
  export type ExecutionPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter which ExecutionPhase to delete.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase deleteMany
   */
  export type ExecutionPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionPhases to delete
     */
    where?: ExecutionPhaseWhereInput
    /**
     * Limit how many ExecutionPhases to delete.
     */
    limit?: number
  }

  /**
   * ExecutionPhase.logs
   */
  export type ExecutionPhase$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionPhase without action
   */
  export type ExecutionPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionPhase
     */
    omit?: ExecutionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionLog
   */

  export type AggregateExecutionLog = {
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  export type ExecutionLogMinAggregateOutputType = {
    id: string | null
    logLevel: string | null
    message: string | null
    timestamp: Date | null
    executionPhaseId: string | null
  }

  export type ExecutionLogMaxAggregateOutputType = {
    id: string | null
    logLevel: string | null
    message: string | null
    timestamp: Date | null
    executionPhaseId: string | null
  }

  export type ExecutionLogCountAggregateOutputType = {
    id: number
    logLevel: number
    message: number
    timestamp: number
    executionPhaseId: number
    _all: number
  }


  export type ExecutionLogMinAggregateInputType = {
    id?: true
    logLevel?: true
    message?: true
    timestamp?: true
    executionPhaseId?: true
  }

  export type ExecutionLogMaxAggregateInputType = {
    id?: true
    logLevel?: true
    message?: true
    timestamp?: true
    executionPhaseId?: true
  }

  export type ExecutionLogCountAggregateInputType = {
    id?: true
    logLevel?: true
    message?: true
    timestamp?: true
    executionPhaseId?: true
    _all?: true
  }

  export type ExecutionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLog to aggregate.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionLogs
    **/
    _count?: true | ExecutionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type GetExecutionLogAggregateType<T extends ExecutionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionLog[P]>
      : GetScalarType<T[P], AggregateExecutionLog[P]>
  }




  export type ExecutionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithAggregationInput | ExecutionLogOrderByWithAggregationInput[]
    by: ExecutionLogScalarFieldEnum[] | ExecutionLogScalarFieldEnum
    having?: ExecutionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionLogCountAggregateInputType | true
    _min?: ExecutionLogMinAggregateInputType
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type ExecutionLogGroupByOutputType = {
    id: string
    logLevel: string
    message: string
    timestamp: Date
    executionPhaseId: string
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  type GetExecutionLogGroupByPayload<T extends ExecutionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectScalar = {
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
  }

  export type ExecutionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logLevel" | "message" | "timestamp" | "executionPhaseId", ExtArgs["result"]["executionLog"]>
  export type ExecutionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }
  export type ExecutionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }
  export type ExecutionLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }

  export type $ExecutionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionLog"
    objects: {
      executionPhase: Prisma.$ExecutionPhasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logLevel: string
      message: string
      timestamp: Date
      executionPhaseId: string
    }, ExtArgs["result"]["executionLog"]>
    composites: {}
  }

  type ExecutionLogGetPayload<S extends boolean | null | undefined | ExecutionLogDefaultArgs> = $Result.GetResult<Prisma.$ExecutionLogPayload, S>

  type ExecutionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionLogCountAggregateInputType | true
    }

  export interface ExecutionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionLog'], meta: { name: 'ExecutionLog' } }
    /**
     * Find zero or one ExecutionLog that matches the filter.
     * @param {ExecutionLogFindUniqueArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionLogFindUniqueArgs>(args: SelectSubset<T, ExecutionLogFindUniqueArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionLogFindUniqueOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionLogFindFirstArgs>(args?: SelectSubset<T, ExecutionLogFindFirstArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany()
     * 
     * // Get first 10 ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionLogFindManyArgs>(args?: SelectSubset<T, ExecutionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionLog.
     * @param {ExecutionLogCreateArgs} args - Arguments to create a ExecutionLog.
     * @example
     * // Create one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.create({
     *   data: {
     *     // ... data to create a ExecutionLog
     *   }
     * })
     * 
     */
    create<T extends ExecutionLogCreateArgs>(args: SelectSubset<T, ExecutionLogCreateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionLogs.
     * @param {ExecutionLogCreateManyArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionLogCreateManyArgs>(args?: SelectSubset<T, ExecutionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionLogs and returns the data saved in the database.
     * @param {ExecutionLogCreateManyAndReturnArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionLog.
     * @param {ExecutionLogDeleteArgs} args - Arguments to delete one ExecutionLog.
     * @example
     * // Delete one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.delete({
     *   where: {
     *     // ... filter to delete one ExecutionLog
     *   }
     * })
     * 
     */
    delete<T extends ExecutionLogDeleteArgs>(args: SelectSubset<T, ExecutionLogDeleteArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionLog.
     * @param {ExecutionLogUpdateArgs} args - Arguments to update one ExecutionLog.
     * @example
     * // Update one ExecutionLog
     * const executionLog = await prisma.executionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionLogUpdateArgs>(args: SelectSubset<T, ExecutionLogUpdateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionLogs.
     * @param {ExecutionLogDeleteManyArgs} args - Arguments to filter ExecutionLogs to delete.
     * @example
     * // Delete a few ExecutionLogs
     * const { count } = await prisma.executionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionLogDeleteManyArgs>(args?: SelectSubset<T, ExecutionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionLogUpdateManyArgs>(args: SelectSubset<T, ExecutionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs and returns the data updated in the database.
     * @param {ExecutionLogUpdateManyAndReturnArgs} args - Arguments to update many ExecutionLogs.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionLog.
     * @param {ExecutionLogUpsertArgs} args - Arguments to update or create a ExecutionLog.
     * @example
     * // Update or create a ExecutionLog
     * const executionLog = await prisma.executionLog.upsert({
     *   create: {
     *     // ... data to create a ExecutionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionLog we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionLogUpsertArgs>(args: SelectSubset<T, ExecutionLogUpsertArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogCountArgs} args - Arguments to filter ExecutionLogs to count.
     * @example
     * // Count the number of ExecutionLogs
     * const count = await prisma.executionLog.count({
     *   where: {
     *     // ... the filter for the ExecutionLogs we want to count
     *   }
     * })
    **/
    count<T extends ExecutionLogCountArgs>(
      args?: Subset<T, ExecutionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionLogAggregateArgs>(args: Subset<T, ExecutionLogAggregateArgs>): Prisma.PrismaPromise<GetExecutionLogAggregateType<T>>

    /**
     * Group by ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogGroupByArgs} args - Group by arguments.
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
      T extends ExecutionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionLogGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionLog model
   */
  readonly fields: ExecutionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executionPhase<T extends ExecutionPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionPhaseDefaultArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExecutionLog model
   */
  interface ExecutionLogFieldRefs {
    readonly id: FieldRef<"ExecutionLog", 'String'>
    readonly logLevel: FieldRef<"ExecutionLog", 'String'>
    readonly message: FieldRef<"ExecutionLog", 'String'>
    readonly timestamp: FieldRef<"ExecutionLog", 'DateTime'>
    readonly executionPhaseId: FieldRef<"ExecutionLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionLog findUnique
   */
  export type ExecutionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findUniqueOrThrow
   */
  export type ExecutionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findFirst
   */
  export type ExecutionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findFirstOrThrow
   */
  export type ExecutionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findMany
   */
  export type ExecutionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLogs to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog create
   */
  export type ExecutionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionLog.
     */
    data: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
  }

  /**
   * ExecutionLog createMany
   */
  export type ExecutionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
  }

  /**
   * ExecutionLog createManyAndReturn
   */
  export type ExecutionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog update
   */
  export type ExecutionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionLog.
     */
    data: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
    /**
     * Choose, which ExecutionLog to update.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog updateMany
   */
  export type ExecutionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to update.
     */
    limit?: number
  }

  /**
   * ExecutionLog updateManyAndReturn
   */
  export type ExecutionLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog upsert
   */
  export type ExecutionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionLog to update in case it exists.
     */
    where: ExecutionLogWhereUniqueInput
    /**
     * In case the ExecutionLog found by the `where` argument doesn't exist, create a new ExecutionLog with this data.
     */
    create: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
    /**
     * In case the ExecutionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
  }

  /**
   * ExecutionLog delete
   */
  export type ExecutionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter which ExecutionLog to delete.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog deleteMany
   */
  export type ExecutionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLogs to delete
     */
    where?: ExecutionLogWhereInput
    /**
     * Limit how many ExecutionLogs to delete.
     */
    limit?: number
  }

  /**
   * ExecutionLog without action
   */
  export type ExecutionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionLog
     */
    omit?: ExecutionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkFlowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    definition: 'definition',
    status: 'status',
    lastRunAt: 'lastRunAt',
    lastRunId: 'lastRunId',
    lastRunStatus: 'lastRunStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkFlowScalarFieldEnum = (typeof WorkFlowScalarFieldEnum)[keyof typeof WorkFlowScalarFieldEnum]


  export const WorkflowExectutionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    userId: 'userId',
    trigger: 'trigger',
    status: 'status',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    definition: 'definition',
    creditsConsumed: 'creditsConsumed'
  };

  export type WorkflowExectutionScalarFieldEnum = (typeof WorkflowExectutionScalarFieldEnum)[keyof typeof WorkflowExectutionScalarFieldEnum]


  export const ExecutionPhaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    number: 'number',
    node: 'node',
    name: 'name',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    inputs: 'inputs',
    outputs: 'outputs',
    creditsConsumed: 'creditsConsumed',
    workflowExecutionId: 'workflowExecutionId'
  };

  export type ExecutionPhaseScalarFieldEnum = (typeof ExecutionPhaseScalarFieldEnum)[keyof typeof ExecutionPhaseScalarFieldEnum]


  export const ExecutionLogScalarFieldEnum: {
    id: 'id',
    logLevel: 'logLevel',
    message: 'message',
    timestamp: 'timestamp',
    executionPhaseId: 'executionPhaseId'
  };

  export type ExecutionLogScalarFieldEnum = (typeof ExecutionLogScalarFieldEnum)[keyof typeof ExecutionLogScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WorkFlowWhereInput = {
    AND?: WorkFlowWhereInput | WorkFlowWhereInput[]
    OR?: WorkFlowWhereInput[]
    NOT?: WorkFlowWhereInput | WorkFlowWhereInput[]
    id?: StringFilter<"WorkFlow"> | string
    userId?: StringFilter<"WorkFlow"> | string
    name?: StringFilter<"WorkFlow"> | string
    description?: StringFilter<"WorkFlow"> | string
    definition?: StringFilter<"WorkFlow"> | string
    status?: StringFilter<"WorkFlow"> | string
    lastRunAt?: DateTimeNullableFilter<"WorkFlow"> | Date | string | null
    lastRunId?: StringNullableFilter<"WorkFlow"> | string | null
    lastRunStatus?: StringNullableFilter<"WorkFlow"> | string | null
    createdAt?: DateTimeFilter<"WorkFlow"> | Date | string
    updatedAt?: DateTimeFilter<"WorkFlow"> | Date | string
    executions?: WorkflowExectutionListRelationFilter
  }

  export type WorkFlowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastRunId?: SortOrderInput | SortOrder
    lastRunStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    executions?: WorkflowExectutionOrderByRelationAggregateInput
  }

  export type WorkFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: WorkFlowNameUserIdCompoundUniqueInput
    AND?: WorkFlowWhereInput | WorkFlowWhereInput[]
    OR?: WorkFlowWhereInput[]
    NOT?: WorkFlowWhereInput | WorkFlowWhereInput[]
    userId?: StringFilter<"WorkFlow"> | string
    name?: StringFilter<"WorkFlow"> | string
    description?: StringFilter<"WorkFlow"> | string
    definition?: StringFilter<"WorkFlow"> | string
    status?: StringFilter<"WorkFlow"> | string
    lastRunAt?: DateTimeNullableFilter<"WorkFlow"> | Date | string | null
    lastRunId?: StringNullableFilter<"WorkFlow"> | string | null
    lastRunStatus?: StringNullableFilter<"WorkFlow"> | string | null
    createdAt?: DateTimeFilter<"WorkFlow"> | Date | string
    updatedAt?: DateTimeFilter<"WorkFlow"> | Date | string
    executions?: WorkflowExectutionListRelationFilter
  }, "id" | "name_userId">

  export type WorkFlowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastRunId?: SortOrderInput | SortOrder
    lastRunStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkFlowCountOrderByAggregateInput
    _max?: WorkFlowMaxOrderByAggregateInput
    _min?: WorkFlowMinOrderByAggregateInput
  }

  export type WorkFlowScalarWhereWithAggregatesInput = {
    AND?: WorkFlowScalarWhereWithAggregatesInput | WorkFlowScalarWhereWithAggregatesInput[]
    OR?: WorkFlowScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowScalarWhereWithAggregatesInput | WorkFlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlow"> | string
    userId?: StringWithAggregatesFilter<"WorkFlow"> | string
    name?: StringWithAggregatesFilter<"WorkFlow"> | string
    description?: StringWithAggregatesFilter<"WorkFlow"> | string
    definition?: StringWithAggregatesFilter<"WorkFlow"> | string
    status?: StringWithAggregatesFilter<"WorkFlow"> | string
    lastRunAt?: DateTimeNullableWithAggregatesFilter<"WorkFlow"> | Date | string | null
    lastRunId?: StringNullableWithAggregatesFilter<"WorkFlow"> | string | null
    lastRunStatus?: StringNullableWithAggregatesFilter<"WorkFlow"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkFlow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkFlow"> | Date | string
  }

  export type WorkflowExectutionWhereInput = {
    AND?: WorkflowExectutionWhereInput | WorkflowExectutionWhereInput[]
    OR?: WorkflowExectutionWhereInput[]
    NOT?: WorkflowExectutionWhereInput | WorkflowExectutionWhereInput[]
    id?: StringFilter<"WorkflowExectution"> | string
    workflowId?: StringFilter<"WorkflowExectution"> | string
    userId?: StringFilter<"WorkflowExectution"> | string
    trigger?: StringFilter<"WorkflowExectution"> | string
    status?: StringFilter<"WorkflowExectution"> | string
    createdAt?: DateTimeFilter<"WorkflowExectution"> | Date | string
    startedAt?: DateTimeNullableFilter<"WorkflowExectution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"WorkflowExectution"> | Date | string | null
    definition?: StringFilter<"WorkflowExectution"> | string
    creditsConsumed?: IntNullableFilter<"WorkflowExectution"> | number | null
    phases?: ExecutionPhaseListRelationFilter
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
  }

  export type WorkflowExectutionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    phases?: ExecutionPhaseOrderByRelationAggregateInput
    workflow?: WorkFlowOrderByWithRelationInput
  }

  export type WorkflowExectutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowExectutionWhereInput | WorkflowExectutionWhereInput[]
    OR?: WorkflowExectutionWhereInput[]
    NOT?: WorkflowExectutionWhereInput | WorkflowExectutionWhereInput[]
    workflowId?: StringFilter<"WorkflowExectution"> | string
    userId?: StringFilter<"WorkflowExectution"> | string
    trigger?: StringFilter<"WorkflowExectution"> | string
    status?: StringFilter<"WorkflowExectution"> | string
    createdAt?: DateTimeFilter<"WorkflowExectution"> | Date | string
    startedAt?: DateTimeNullableFilter<"WorkflowExectution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"WorkflowExectution"> | Date | string | null
    definition?: StringFilter<"WorkflowExectution"> | string
    creditsConsumed?: IntNullableFilter<"WorkflowExectution"> | number | null
    phases?: ExecutionPhaseListRelationFilter
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
  }, "id">

  export type WorkflowExectutionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    _count?: WorkflowExectutionCountOrderByAggregateInput
    _avg?: WorkflowExectutionAvgOrderByAggregateInput
    _max?: WorkflowExectutionMaxOrderByAggregateInput
    _min?: WorkflowExectutionMinOrderByAggregateInput
    _sum?: WorkflowExectutionSumOrderByAggregateInput
  }

  export type WorkflowExectutionScalarWhereWithAggregatesInput = {
    AND?: WorkflowExectutionScalarWhereWithAggregatesInput | WorkflowExectutionScalarWhereWithAggregatesInput[]
    OR?: WorkflowExectutionScalarWhereWithAggregatesInput[]
    NOT?: WorkflowExectutionScalarWhereWithAggregatesInput | WorkflowExectutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowExectution"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowExectution"> | string
    userId?: StringWithAggregatesFilter<"WorkflowExectution"> | string
    trigger?: StringWithAggregatesFilter<"WorkflowExectution"> | string
    status?: StringWithAggregatesFilter<"WorkflowExectution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowExectution"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowExectution"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowExectution"> | Date | string | null
    definition?: StringWithAggregatesFilter<"WorkflowExectution"> | string
    creditsConsumed?: IntNullableWithAggregatesFilter<"WorkflowExectution"> | number | null
  }

  export type ExecutionPhaseWhereInput = {
    AND?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    OR?: ExecutionPhaseWhereInput[]
    NOT?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    id?: StringFilter<"ExecutionPhase"> | string
    userId?: StringFilter<"ExecutionPhase"> | string
    status?: StringFilter<"ExecutionPhase"> | string
    number?: IntFilter<"ExecutionPhase"> | number
    node?: StringFilter<"ExecutionPhase"> | string
    name?: StringFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExecutionPhase"> | string
    execution?: XOR<WorkflowExectutionScalarRelationFilter, WorkflowExectutionWhereInput>
    logs?: ExecutionLogListRelationFilter
  }

  export type ExecutionPhaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    inputs?: SortOrderInput | SortOrder
    outputs?: SortOrderInput | SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    workflowExecutionId?: SortOrder
    execution?: WorkflowExectutionOrderByWithRelationInput
    logs?: ExecutionLogOrderByRelationAggregateInput
  }

  export type ExecutionPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    OR?: ExecutionPhaseWhereInput[]
    NOT?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    userId?: StringFilter<"ExecutionPhase"> | string
    status?: StringFilter<"ExecutionPhase"> | string
    number?: IntFilter<"ExecutionPhase"> | number
    node?: StringFilter<"ExecutionPhase"> | string
    name?: StringFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExecutionPhase"> | string
    execution?: XOR<WorkflowExectutionScalarRelationFilter, WorkflowExectutionWhereInput>
    logs?: ExecutionLogListRelationFilter
  }, "id">

  export type ExecutionPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    inputs?: SortOrderInput | SortOrder
    outputs?: SortOrderInput | SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    workflowExecutionId?: SortOrder
    _count?: ExecutionPhaseCountOrderByAggregateInput
    _avg?: ExecutionPhaseAvgOrderByAggregateInput
    _max?: ExecutionPhaseMaxOrderByAggregateInput
    _min?: ExecutionPhaseMinOrderByAggregateInput
    _sum?: ExecutionPhaseSumOrderByAggregateInput
  }

  export type ExecutionPhaseScalarWhereWithAggregatesInput = {
    AND?: ExecutionPhaseScalarWhereWithAggregatesInput | ExecutionPhaseScalarWhereWithAggregatesInput[]
    OR?: ExecutionPhaseScalarWhereWithAggregatesInput[]
    NOT?: ExecutionPhaseScalarWhereWithAggregatesInput | ExecutionPhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    userId?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    status?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    number?: IntWithAggregatesFilter<"ExecutionPhase"> | number
    node?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    name?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableWithAggregatesFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableWithAggregatesFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableWithAggregatesFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringWithAggregatesFilter<"ExecutionPhase"> | string
  }

  export type ExecutionLogWhereInput = {
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    logLevel?: StringFilter<"ExecutionLog"> | string
    message?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringFilter<"ExecutionLog"> | string
    executionPhase?: XOR<ExecutionPhaseScalarRelationFilter, ExecutionPhaseWhereInput>
  }

  export type ExecutionLogOrderByWithRelationInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
    executionPhase?: ExecutionPhaseOrderByWithRelationInput
  }

  export type ExecutionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    logLevel?: StringFilter<"ExecutionLog"> | string
    message?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringFilter<"ExecutionLog"> | string
    executionPhase?: XOR<ExecutionPhaseScalarRelationFilter, ExecutionPhaseWhereInput>
  }, "id">

  export type ExecutionLogOrderByWithAggregationInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
    _count?: ExecutionLogCountOrderByAggregateInput
    _max?: ExecutionLogMaxOrderByAggregateInput
    _min?: ExecutionLogMinOrderByAggregateInput
  }

  export type ExecutionLogScalarWhereWithAggregatesInput = {
    AND?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    OR?: ExecutionLogScalarWhereWithAggregatesInput[]
    NOT?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionLog"> | string
    logLevel?: StringWithAggregatesFilter<"ExecutionLog"> | string
    message?: StringWithAggregatesFilter<"ExecutionLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringWithAggregatesFilter<"ExecutionLog"> | string
  }

  export type WorkFlowCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    definition: string
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: WorkflowExectutionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description: string
    definition: string
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: WorkflowExectutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: WorkflowExectutionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: WorkflowExectutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowCreateManyInput = {
    id?: string
    userId: string
    name: string
    description: string
    definition: string
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExectutionCreateInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
    phases?: ExecutionPhaseCreateNestedManyWithoutExecutionInput
    workflow: WorkFlowCreateNestedOneWithoutExecutionsInput
  }

  export type WorkflowExectutionUncheckedCreateInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
    phases?: ExecutionPhaseUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type WorkflowExectutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    phases?: ExecutionPhaseUpdateManyWithoutExecutionNestedInput
    workflow?: WorkFlowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type WorkflowExectutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    phases?: ExecutionPhaseUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type WorkflowExectutionCreateManyInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
  }

  export type WorkflowExectutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkflowExectutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionPhaseCreateInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    execution: WorkflowExectutionCreateNestedOneWithoutPhasesInput
    logs?: ExecutionLogCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseUncheckedCreateInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    execution?: WorkflowExectutionUpdateOneRequiredWithoutPhasesNestedInput
    logs?: ExecutionLogUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    logs?: ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseCreateManyInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
  }

  export type ExecutionPhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionPhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutionLogCreateInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
    executionPhase: ExecutionPhaseCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
    executionPhaseId: string
  }

  export type ExecutionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionPhase?: ExecutionPhaseUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionPhaseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutionLogCreateManyInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
    executionPhaseId: string
  }

  export type ExecutionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionPhaseId?: StringFieldUpdateOperationsInput | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type WorkflowExectutionListRelationFilter = {
    every?: WorkflowExectutionWhereInput
    some?: WorkflowExectutionWhereInput
    none?: WorkflowExectutionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkflowExectutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkFlowNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type WorkFlowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastRunId?: SortOrder
    lastRunStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkFlowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastRunId?: SortOrder
    lastRunStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkFlowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastRunId?: SortOrder
    lastRunStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type ExecutionPhaseListRelationFilter = {
    every?: ExecutionPhaseWhereInput
    some?: ExecutionPhaseWhereInput
    none?: ExecutionPhaseWhereInput
  }

  export type WorkFlowScalarRelationFilter = {
    is?: WorkFlowWhereInput
    isNot?: WorkFlowWhereInput
  }

  export type ExecutionPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowExectutionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type WorkflowExectutionAvgOrderByAggregateInput = {
    creditsConsumed?: SortOrder
  }

  export type WorkflowExectutionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type WorkflowExectutionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type WorkflowExectutionSumOrderByAggregateInput = {
    creditsConsumed?: SortOrder
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

  export type WorkflowExectutionScalarRelationFilter = {
    is?: WorkflowExectutionWhereInput
    isNot?: WorkflowExectutionWhereInput
  }

  export type ExecutionLogListRelationFilter = {
    every?: ExecutionLogWhereInput
    some?: ExecutionLogWhereInput
    none?: ExecutionLogWhereInput
  }

  export type ExecutionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExecutionPhaseAvgOrderByAggregateInput = {
    number?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type ExecutionPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExecutionPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExecutionPhaseSumOrderByAggregateInput = {
    number?: SortOrder
    creditsConsumed?: SortOrder
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

  export type ExecutionPhaseScalarRelationFilter = {
    is?: ExecutionPhaseWhereInput
    isNot?: ExecutionPhaseWhereInput
  }

  export type ExecutionLogCountOrderByAggregateInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
  }

  export type ExecutionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
  }

  export type ExecutionLogMinOrderByAggregateInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
  }

  export type WorkflowExectutionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowExectutionCreateWithoutWorkflowInput, WorkflowExectutionUncheckedCreateWithoutWorkflowInput> | WorkflowExectutionCreateWithoutWorkflowInput[] | WorkflowExectutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExectutionCreateOrConnectWithoutWorkflowInput | WorkflowExectutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowExectutionCreateManyWorkflowInputEnvelope
    connect?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
  }

  export type WorkflowExectutionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowExectutionCreateWithoutWorkflowInput, WorkflowExectutionUncheckedCreateWithoutWorkflowInput> | WorkflowExectutionCreateWithoutWorkflowInput[] | WorkflowExectutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExectutionCreateOrConnectWithoutWorkflowInput | WorkflowExectutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowExectutionCreateManyWorkflowInputEnvelope
    connect?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkflowExectutionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowExectutionCreateWithoutWorkflowInput, WorkflowExectutionUncheckedCreateWithoutWorkflowInput> | WorkflowExectutionCreateWithoutWorkflowInput[] | WorkflowExectutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExectutionCreateOrConnectWithoutWorkflowInput | WorkflowExectutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowExectutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowExectutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowExectutionCreateManyWorkflowInputEnvelope
    set?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    disconnect?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    delete?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    connect?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    update?: WorkflowExectutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowExectutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowExectutionUpdateManyWithWhereWithoutWorkflowInput | WorkflowExectutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowExectutionScalarWhereInput | WorkflowExectutionScalarWhereInput[]
  }

  export type WorkflowExectutionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowExectutionCreateWithoutWorkflowInput, WorkflowExectutionUncheckedCreateWithoutWorkflowInput> | WorkflowExectutionCreateWithoutWorkflowInput[] | WorkflowExectutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExectutionCreateOrConnectWithoutWorkflowInput | WorkflowExectutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowExectutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowExectutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowExectutionCreateManyWorkflowInputEnvelope
    set?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    disconnect?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    delete?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    connect?: WorkflowExectutionWhereUniqueInput | WorkflowExectutionWhereUniqueInput[]
    update?: WorkflowExectutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowExectutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowExectutionUpdateManyWithWhereWithoutWorkflowInput | WorkflowExectutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowExectutionScalarWhereInput | WorkflowExectutionScalarWhereInput[]
  }

  export type ExecutionPhaseCreateNestedManyWithoutExecutionInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
  }

  export type WorkFlowCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutExecutionsInput
    connect?: WorkFlowWhereUniqueInput
  }

  export type ExecutionPhaseUncheckedCreateNestedManyWithoutExecutionInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExecutionPhaseUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    upsert?: ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    set?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    disconnect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    delete?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    update?: ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput | ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
  }

  export type WorkFlowUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutExecutionsInput
    upsert?: WorkFlowUpsertWithoutExecutionsInput
    connect?: WorkFlowWhereUniqueInput
    update?: XOR<XOR<WorkFlowUpdateToOneWithWhereWithoutExecutionsInput, WorkFlowUpdateWithoutExecutionsInput>, WorkFlowUncheckedUpdateWithoutExecutionsInput>
  }

  export type ExecutionPhaseUncheckedUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    upsert?: ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    set?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    disconnect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    delete?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    update?: ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput | ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
  }

  export type WorkflowExectutionCreateNestedOneWithoutPhasesInput = {
    create?: XOR<WorkflowExectutionCreateWithoutPhasesInput, WorkflowExectutionUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: WorkflowExectutionCreateOrConnectWithoutPhasesInput
    connect?: WorkflowExectutionWhereUniqueInput
  }

  export type ExecutionLogCreateNestedManyWithoutExecutionPhaseInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutExecutionPhaseInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkflowExectutionUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<WorkflowExectutionCreateWithoutPhasesInput, WorkflowExectutionUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: WorkflowExectutionCreateOrConnectWithoutPhasesInput
    upsert?: WorkflowExectutionUpsertWithoutPhasesInput
    connect?: WorkflowExectutionWhereUniqueInput
    update?: XOR<XOR<WorkflowExectutionUpdateToOneWithWhereWithoutPhasesInput, WorkflowExectutionUpdateWithoutPhasesInput>, WorkflowExectutionUncheckedUpdateWithoutPhasesInput>
  }

  export type ExecutionLogUpdateManyWithoutExecutionPhaseNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput | ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput | ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionPhaseCreateNestedOneWithoutLogsInput = {
    create?: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutLogsInput
    connect?: ExecutionPhaseWhereUniqueInput
  }

  export type ExecutionPhaseUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutLogsInput
    upsert?: ExecutionPhaseUpsertWithoutLogsInput
    connect?: ExecutionPhaseWhereUniqueInput
    update?: XOR<XOR<ExecutionPhaseUpdateToOneWithWhereWithoutLogsInput, ExecutionPhaseUpdateWithoutLogsInput>, ExecutionPhaseUncheckedUpdateWithoutLogsInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type WorkflowExectutionCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
    phases?: ExecutionPhaseCreateNestedManyWithoutExecutionInput
  }

  export type WorkflowExectutionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
    phases?: ExecutionPhaseUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type WorkflowExectutionCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowExectutionWhereUniqueInput
    create: XOR<WorkflowExectutionCreateWithoutWorkflowInput, WorkflowExectutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowExectutionCreateManyWorkflowInputEnvelope = {
    data: WorkflowExectutionCreateManyWorkflowInput | WorkflowExectutionCreateManyWorkflowInput[]
  }

  export type WorkflowExectutionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowExectutionWhereUniqueInput
    update: XOR<WorkflowExectutionUpdateWithoutWorkflowInput, WorkflowExectutionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowExectutionCreateWithoutWorkflowInput, WorkflowExectutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowExectutionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowExectutionWhereUniqueInput
    data: XOR<WorkflowExectutionUpdateWithoutWorkflowInput, WorkflowExectutionUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowExectutionUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowExectutionScalarWhereInput
    data: XOR<WorkflowExectutionUpdateManyMutationInput, WorkflowExectutionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowExectutionScalarWhereInput = {
    AND?: WorkflowExectutionScalarWhereInput | WorkflowExectutionScalarWhereInput[]
    OR?: WorkflowExectutionScalarWhereInput[]
    NOT?: WorkflowExectutionScalarWhereInput | WorkflowExectutionScalarWhereInput[]
    id?: StringFilter<"WorkflowExectution"> | string
    workflowId?: StringFilter<"WorkflowExectution"> | string
    userId?: StringFilter<"WorkflowExectution"> | string
    trigger?: StringFilter<"WorkflowExectution"> | string
    status?: StringFilter<"WorkflowExectution"> | string
    createdAt?: DateTimeFilter<"WorkflowExectution"> | Date | string
    startedAt?: DateTimeNullableFilter<"WorkflowExectution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"WorkflowExectution"> | Date | string | null
    definition?: StringFilter<"WorkflowExectution"> | string
    creditsConsumed?: IntNullableFilter<"WorkflowExectution"> | number | null
  }

  export type ExecutionPhaseCreateWithoutExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    logs?: ExecutionLogCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseUncheckedCreateWithoutExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseCreateOrConnectWithoutExecutionInput = {
    where: ExecutionPhaseWhereUniqueInput
    create: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput>
  }

  export type ExecutionPhaseCreateManyExecutionInputEnvelope = {
    data: ExecutionPhaseCreateManyExecutionInput | ExecutionPhaseCreateManyExecutionInput[]
  }

  export type WorkFlowCreateWithoutExecutionsInput = {
    id?: string
    userId: string
    name: string
    description: string
    definition: string
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowUncheckedCreateWithoutExecutionsInput = {
    id?: string
    userId: string
    name: string
    description: string
    definition: string
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowCreateOrConnectWithoutExecutionsInput = {
    where: WorkFlowWhereUniqueInput
    create: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
  }

  export type ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput = {
    where: ExecutionPhaseWhereUniqueInput
    update: XOR<ExecutionPhaseUpdateWithoutExecutionInput, ExecutionPhaseUncheckedUpdateWithoutExecutionInput>
    create: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput>
  }

  export type ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput = {
    where: ExecutionPhaseWhereUniqueInput
    data: XOR<ExecutionPhaseUpdateWithoutExecutionInput, ExecutionPhaseUncheckedUpdateWithoutExecutionInput>
  }

  export type ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput = {
    where: ExecutionPhaseScalarWhereInput
    data: XOR<ExecutionPhaseUpdateManyMutationInput, ExecutionPhaseUncheckedUpdateManyWithoutExecutionInput>
  }

  export type ExecutionPhaseScalarWhereInput = {
    AND?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
    OR?: ExecutionPhaseScalarWhereInput[]
    NOT?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
    id?: StringFilter<"ExecutionPhase"> | string
    userId?: StringFilter<"ExecutionPhase"> | string
    status?: StringFilter<"ExecutionPhase"> | string
    number?: IntFilter<"ExecutionPhase"> | number
    node?: StringFilter<"ExecutionPhase"> | string
    name?: StringFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExecutionPhase"> | string
  }

  export type WorkFlowUpsertWithoutExecutionsInput = {
    update: XOR<WorkFlowUpdateWithoutExecutionsInput, WorkFlowUncheckedUpdateWithoutExecutionsInput>
    create: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
    where?: WorkFlowWhereInput
  }

  export type WorkFlowUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: WorkFlowWhereInput
    data: XOR<WorkFlowUpdateWithoutExecutionsInput, WorkFlowUncheckedUpdateWithoutExecutionsInput>
  }

  export type WorkFlowUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExectutionCreateWithoutPhasesInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
    workflow: WorkFlowCreateNestedOneWithoutExecutionsInput
  }

  export type WorkflowExectutionUncheckedCreateWithoutPhasesInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
  }

  export type WorkflowExectutionCreateOrConnectWithoutPhasesInput = {
    where: WorkflowExectutionWhereUniqueInput
    create: XOR<WorkflowExectutionCreateWithoutPhasesInput, WorkflowExectutionUncheckedCreateWithoutPhasesInput>
  }

  export type ExecutionLogCreateWithoutExecutionPhaseInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
  }

  export type ExecutionLogUncheckedCreateWithoutExecutionPhaseInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
  }

  export type ExecutionLogCreateOrConnectWithoutExecutionPhaseInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput>
  }

  export type ExecutionLogCreateManyExecutionPhaseInputEnvelope = {
    data: ExecutionLogCreateManyExecutionPhaseInput | ExecutionLogCreateManyExecutionPhaseInput[]
  }

  export type WorkflowExectutionUpsertWithoutPhasesInput = {
    update: XOR<WorkflowExectutionUpdateWithoutPhasesInput, WorkflowExectutionUncheckedUpdateWithoutPhasesInput>
    create: XOR<WorkflowExectutionCreateWithoutPhasesInput, WorkflowExectutionUncheckedCreateWithoutPhasesInput>
    where?: WorkflowExectutionWhereInput
  }

  export type WorkflowExectutionUpdateToOneWithWhereWithoutPhasesInput = {
    where?: WorkflowExectutionWhereInput
    data: XOR<WorkflowExectutionUpdateWithoutPhasesInput, WorkflowExectutionUncheckedUpdateWithoutPhasesInput>
  }

  export type WorkflowExectutionUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflow?: WorkFlowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type WorkflowExectutionUncheckedUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutExecutionPhaseInput, ExecutionLogUncheckedUpdateWithoutExecutionPhaseInput>
    create: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutExecutionPhaseInput, ExecutionLogUncheckedUpdateWithoutExecutionPhaseInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseInput>
  }

  export type ExecutionLogScalarWhereInput = {
    AND?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    OR?: ExecutionLogScalarWhereInput[]
    NOT?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    logLevel?: StringFilter<"ExecutionLog"> | string
    message?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringFilter<"ExecutionLog"> | string
  }

  export type ExecutionPhaseCreateWithoutLogsInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    execution: WorkflowExectutionCreateNestedOneWithoutPhasesInput
  }

  export type ExecutionPhaseUncheckedCreateWithoutLogsInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
  }

  export type ExecutionPhaseCreateOrConnectWithoutLogsInput = {
    where: ExecutionPhaseWhereUniqueInput
    create: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
  }

  export type ExecutionPhaseUpsertWithoutLogsInput = {
    update: XOR<ExecutionPhaseUpdateWithoutLogsInput, ExecutionPhaseUncheckedUpdateWithoutLogsInput>
    create: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
    where?: ExecutionPhaseWhereInput
  }

  export type ExecutionPhaseUpdateToOneWithWhereWithoutLogsInput = {
    where?: ExecutionPhaseWhereInput
    data: XOR<ExecutionPhaseUpdateWithoutLogsInput, ExecutionPhaseUncheckedUpdateWithoutLogsInput>
  }

  export type ExecutionPhaseUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    execution?: WorkflowExectutionUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowExectutionCreateManyWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number | null
  }

  export type WorkflowExectutionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    phases?: ExecutionPhaseUpdateManyWithoutExecutionNestedInput
  }

  export type WorkflowExectutionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    phases?: ExecutionPhaseUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type WorkflowExectutionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionPhaseCreateManyExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
  }

  export type ExecutionPhaseUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: ExecutionLogUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateManyWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionLogCreateManyExecutionPhaseInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
  }

  export type ExecutionLogUpdateWithoutExecutionPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUncheckedUpdateWithoutExecutionPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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