import {defineStore} from 'pinia';
import getFeatures from '../api'

export const useMainStore = defineStore ('mainStore', {
  state: () => {
    return {
      features: [],
      source: '',
    }
  },
  actions: {
    async setFeatures() {
      try {
        const response = await getFeatures()
        const data = await response.json()
        if (data.features?.length) {
          this.features = data.features.slice()
          this.source = data.assets_domain
        }
        this.features.forEach( el => el.manualAdded = false)
      } catch(er) {
        console.log(er)
      }
    },
    addFeature(position, value) {
      if (!this.features.find(el => el.image_alt === value.image_alt)) {
        this.features.splice(position, 0, value)
      }
    }
  }
})