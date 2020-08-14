const core = require("@actions/core");

async function run() {
  try {
    const previousBundleSize = "811KB";
    core.info(`Previous Bundle Size: ${previousBundleSize}`);
    const newBundleSize = "708KB";
    core.info(`New Bundle Size: ${newBundleSize}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
