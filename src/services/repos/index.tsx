import axios from 'axios'
import { Octokit } from 'octokit'

const octokit = new Octokit({
    auth: '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',
})

async function getTrendingRepos(): Promise<any> {
    const response = await octokit.request(
        'https://api.github.com/search/repositories?q=trending'
    )
    return response.data.items
}

export { getTrendingRepos }
