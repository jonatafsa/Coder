import { Request, Response } from 'express'

import db from '../database/connection'

export default class userController {

    async index(request: Request, response: Response) {

        const {
            email
        } = request.body
            
            const verifyUser = await db('users').count('* as totalUser')
            .where('users.email', '=', [email])
            const { totalUser } = verifyUser[0]
            if (totalUser >= 1) {
                return response.status(400).json({
                    Error: "User already registered"
                })
            } 
            return response.send()
    }
}
