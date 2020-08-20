import { Request, Response } from 'express'

import db from '../database/connection'

export default class VerifyEmail {

    async index(request: Request, response: Response) {

    try {
        const filters = request.query
        const email = filters.email as string
        const verifyEmail = await db('users')
         .where('users.email', '=', email)
         .select('users.email')

        return response.json(verifyEmail)
    } catch (err) {
        console.log(err)
        return response.status(400).json({
            error: "Unexpected error while verify users"
        })

    }        


    }
}
