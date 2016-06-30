export const GET_REPOS = 'GET_REPOS';

export function getRepos() {
  return function (dispatch) {
    fetch('/repos.json')
      .then((response) => response.json())
      .then((repos) => dispatch({type: GET_REPOS, repos}));
  };
}
