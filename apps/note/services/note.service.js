// note

import { storageService } from '../../../services/async-storage.service.js'

// service
export const noteService = {
  query,
  get,
  post,
  put,
  remove,
}

function query() {
  return storageService.query('notes').then((r) => {
    return r
  })
}

function get(noteId) {
  return storageService.get('notes', noteId).then((r) => {
    return r
  })
}

function post(newNotes) {
  return storageService.post('notes', newNotes).then((r) => {
    return r
  })
}

function put(updatedNotes) {
  return storageService.put('notes', updatedNotes).then((r) => {
    return r
  })
}

function remove(noteId) {
  return storageService.remove('notes', noteId).then((r) => {
    return r
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

export function _makeId(length = 5) {
  var txt = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
