const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

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
