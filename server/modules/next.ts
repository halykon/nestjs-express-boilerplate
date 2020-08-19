import Next from 'next'
import { dev } from './config'

export const next = Next({dev})
export const handle = next.getRequestHandler()