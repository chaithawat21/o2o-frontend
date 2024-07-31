import {io} from 'socket.io-client'

const URL = 'http://localhost:8888/'

export const socket = io(URL, {
  autoConnect : false,
  reconnection : false
})