export function setCurrentArticle(newlist) {
  return {
    type: 'SET_CURRENT_ARTICLES',
    payload: newlist,
  }
}