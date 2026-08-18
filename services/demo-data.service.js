import { notes as demoNotes } from './demoDataNotes.jsx'
import { demoMails } from './demoDataMail.jsx'
import { utilService } from './util.service.js'

export const demoDataService = {
  seedDemoData,
  clearDemoData,
}

const ENTITIES = {
  notes: demoNotes,
  mails: demoMails,
}

// Injects the demo data into localStorage.
// By default only seeds an entity that has no data yet,
// pass isForce=true to overwrite whatever is stored
function seedDemoData(isForce = false) {
  // alert('heee')
  // Object.entries(ENTITIES).forEach(([entityType, demoEntities]) => {
  //   const currEntities = utilService.loadFromStorage(entityType)
  //   if (!isForce && currEntities && currEntities.length) return
  //   const entities = demoEntities.map((entity) => ({
  //     ...entity,
  //     id: entity.id || utilService.makeId(),
  //   }))
  //   utilService.saveToStorage(entityType, entities)
  // })
}

function clearDemoData() {
  Object.keys(ENTITIES).forEach((entityType) =>
    localStorage.removeItem(entityType),
  )
}
