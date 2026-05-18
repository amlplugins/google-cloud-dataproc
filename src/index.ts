/**
 * @amlplugins/google-cloud-dataproc
 *
 * Thin namespaced re-export of the native @google-cloud/dataproc SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Dataproc.
 */

import * as _sdk from "@google-cloud/dataproc";
export * from "@google-cloud/dataproc";
export { _sdk as sdk };
export default _sdk;
