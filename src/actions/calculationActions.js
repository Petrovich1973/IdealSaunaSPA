export function setChangeParameter(newlist) {
  return {
    type: 'SET_CHANGE_PARAMETER',
    payload: newlist,
  }
}

export function setChangeMaterial(newlist) {
  return {
    type: 'SET_CHANGE_MATERIAL',
    payload: newlist,
  }
}