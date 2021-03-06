declare module "parse-diff"
declare module "lodash.includes"
declare module "lodash.find"
declare module "lodash.isobject"
declare module "lodash.keys"
declare module "jest-runtime"
declare module "jest-haste-map"
declare module "jest-environment-node"
declare module "jest-config"
declare module "voca"
declare module "jsome"
declare module "jsonpointer"
declare module "parse-link-header"
declare module "pinpoint"

declare module "*/package.json"

declare module "require-from-string"
declare module "node-eval"
declare module "node-cleanup"

// declare module "require-from-string" {
//   export interface RequireOptions {
//     /** List of paths, that will be appended to module paths. Useful, when you want
//      * to be able require modules from these paths. */
//     appendPaths: string[]
//     /**
//      * Same as appendPath, but paths will be prepended.
//      */
//     prependPaths: string[]
//   }
//   /**
//    * Load module from string in Node.
//    * @param code Module code
//    * @param filename Optional filename
//    * @param opts
//    */
//   export default function(code: string, filename?: string, opts?: Partial<RequireOptions>): any
// }
