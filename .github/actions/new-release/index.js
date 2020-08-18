const core = require("@actions/core");
const github = require("@actions/github");

async function run() {

    try {
        const tagVersion = core.getInput("tag-version-string");
        console.log(tagVersion);
        /*
        const issueTitle = core.getInput("issue-title");
        const repoToken = core.getInput("repo-token");
        const joke = core.getInput("joke");

        const octokit = github.getOctokit(repoToken);
        const context = github.context;

        const newIssue = await octokit.issues.create({
            repo: context.repo.repo,
            owner: context.repo.owner,
            title: issueTitle,
            body: joke
        });
         */
    }catch(exception){
        /*
        core.setFailed(exception.message);
        */
    }
}

run();