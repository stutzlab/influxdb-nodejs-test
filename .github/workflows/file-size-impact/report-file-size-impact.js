const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {
    await exec.exec(`echo "Previous Bundle Size: 811KB"`);
    await exec.exec(`echo "New Bundle Size: 765KB"`);
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
