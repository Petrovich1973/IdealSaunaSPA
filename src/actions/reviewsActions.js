export function setCurrentReview(newlist) {
  return {
    type: 'SET_CURRENT_REVIEW',
    payload: newlist,
  }
}