import { Request, Response } from 'express'

import db from '../database/connection'

export default class userController {

    async index(request: Request, response: Response) {

        const {
            user_name
        } = request.body
            
            const verifyUser = await db('users').count('* as totalUser')
            .where('users.user_name', '=', [user_name])
            const { totalUser } = verifyUser[0]
            if (totalUser >= 1) {
                return response.status(400).json({
                    Error: "User already registered"
                })
            } 
            return response.send()
    }
}
