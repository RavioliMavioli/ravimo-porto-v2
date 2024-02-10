import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export const window_closed = writable(false)
export const darkmode = writable(browser && localStorage.getItem("darkmode") || true)
// Value retreived in string, somehow

darkmode.subscribe((val) => {
  browser && localStorage.setItem("darkmode", val)
})