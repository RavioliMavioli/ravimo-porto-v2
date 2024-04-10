import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export const window_element = writable(null)

export const window_closed = writable(false)
export const darkmode = writable(browser && localStorage.getItem("darkmode") || true)
export const current_element = writable(null)
export const open_previewer = writable(false)

export const toggle_about = writable(false)
export const toggle_portfolio = writable(false)
export const toggle_commission = writable(false)
export const toggle_contact = writable(false)

export const can_maximize = writable(true)

// Value retreived in string, somehow

darkmode.subscribe((val) => {
  browser && localStorage.setItem("darkmode", val)
})