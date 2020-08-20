import { Request, Response } from 'express'
import db from '../database/connection'

export default class ConnectionsController {
    async index(request: Request, response: Response) {
        
        const totalUsers = await db('users').count('* as total')
        const { total } = totalUsers[0]
        return response.json({ total })
        
    }
}