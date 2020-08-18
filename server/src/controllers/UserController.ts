import { Request, Response } from 'express'

import db from '../database/connection'


interface ScheduleItem {
    name: object
    user_name: string
    email: string
    password: string
    phone: number
    activate: number
    news: number
}

export default class userController {

    async index(request: Request, response: Response) {

        const users = await db('users')
        .select(['users.user_name'])

        return response.json(users)
    }

    async create(request: Request, response: Response) {

        const {
            name,
            user_name,
            email,
            password,
            phone,
            activate = 1,
            news
        } = request.body
            
        const trx = await db.transaction()
    
        try {

            const verifyUser = await trx('users').count('* as totalUser')
            .where('users.user_name', '=', [user_name])
            
            const verifyEmail = await trx('users').count('* as totalEmail')
            .where('users.email', '=', [email])

            const { totalUser } = verifyUser[0]
            const { totalEmail } = verifyEmail[0]

            if (totalUser >= 1) {
                trx.rollback()
                return response.status(400).json({
                    Error: "User already registered"
                })
            } 

            if (totalEmail >= 1) {
                trx.rollback()
                return response.status(400).json({
                    Error: "Email already registered"
                })
            }             
       
            const insertUserIds = await trx('users').insert({
                name,
                user_name,
                email,
                password,
                phone,
                activate,
                news
            })

            await trx.commit()
    
            return response.status(201).send()
    
        } catch (err) {
            console.log(err)
    
            await trx.rollback()
            return response.status(400).json({
                error: "Unexpected error while creating new class"
            })
    
        }
    
        return response.send()
    }
}