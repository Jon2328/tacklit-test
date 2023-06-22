import { Client } from 'pg'
import config from './config'
 
const client = new Client(config)
client.connect()
export default client