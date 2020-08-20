import { Request, Response } from 'express'

import db from '../database/connection'

export default class VerifyUserName {

    async index(request: Request, response: Response) {

    try {
        const filters = request.query
        const user_name = filters.user_name as string
        const verifyUser = await db('users')
         .where('users.user_name', '=', user_name)
         .select('users.user_name')

        return response.json(verifyUser)
    } catch (err) {
        console.log(err)
        return response.status(400).json({
            error: "Unexpected error while verify users"
        })

    }        


    }
}
