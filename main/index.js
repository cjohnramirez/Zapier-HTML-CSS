// index.js
import { version as platformVersion } from "zapier-platform-core";
import { createRequire } from "module";
import { newLeadTrigger } from "./triggers/new_lead.js";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default {
  version: pkg.version,
  platformVersion,
  triggers: {
    [newLeadTrigger.key]: newLeadTrigger,
  },
};
