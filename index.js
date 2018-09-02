const token = `59be9d77882277a85a7185c5847428008ae35c86`;
const baseUrl = `https://api.github.com`;

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  debugger;
  document.getElementById("results").innerHTML += json.documentation_url;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseUrl}/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json()).
    then(json => showResults(json))
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token = ``
}
