const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

const core = require("@actions/core");
const exec = require("@actions/exec");

try {
  await exec.exec(`echo "::set-output name=bundle_size::765Kb"`);
} catch (error) {
  core.setFailed(error.message);
}

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  projectDirectoryUrl: process.env.GITHUB_WORKSPACE,
  installCommand: "npm install",
  buildCommand: "npm run build && rm -rf node_modules",
  trackingConfig: {
    dist: {
      "./dist/**/*": true,
      "./dist/**/*.map": false,
    },
  },
});
