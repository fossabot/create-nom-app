workflow "Deploy Docs" {
  on = "push"
  resolves = ["Build and deploy"]
}

action "On master branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build and deploy" {
  needs = ["On master branch"]
  uses = "./.github/actions/deploy-docs"
  secrets = ["DOCS_DEPLOY_TOKEN"]
  env = {
    WEBSITE_DIR = "docs/website"
  }
}
