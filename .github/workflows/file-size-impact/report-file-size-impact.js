const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

const core = require("@actions/core");
// const exec = require("@actions/exec");

async function run() {
  try {
    const previousBundleSize = "811KB";
    // await exec.exec(`echo "Previous Bundle Size: ${previousBundleSize}"`);
    core.info(`Previous Bundle Size: ${previousBundleSize}`);
    const newBundleSize = "811KB";
    core.info(`New Bundle Size: ${newBundleSize}`);
    // await exec.exec(`echo "New Bundle Size: ${newBundleSize}"`);
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();

// reportFileSizeImpact({
//   ...readGithubWorkflowEnv(),
//   projectDirectoryUrl: process.env.GITHUB_WORKSPACE,
//   installCommand: "npm install",
//   buildCommand: "npm run build && rm -rf node_modules",
//   trackingConfig: {
//     dist: {
//       "./dist/**/*": true,
//       "./dist/**/*.map": false,
//     },
//   },
// });
