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
