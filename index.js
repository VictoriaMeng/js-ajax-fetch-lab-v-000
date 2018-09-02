const token = `5b9222632611db6d4cf2d1ae541eadd180f0e535`;
const baseUrl = `https://api.github.com`;

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  fetch(`${baseUrl}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp =>resp.json()).
    then(json => showResults(json))
}



function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token = ``
}
