import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class UserController {

    async index(request: Request, response: Response) {
        const filters = request.query

        const subject = filters.subject as string
        const time = filters.time as string
        const week_day = filters.week_day as string

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                Error: "Missing Filter to search classes"
            })
        }

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
        .whereExists(function() {
            this.select('class_schedule.*')
             .from('class_schedule')
             .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
             .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
             .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
             .whereRaw('`class_schedule`.`from` > ??', [timeInMinutes])
        })
         .where('classes.subject', '=', subject)
         .join('users', 'classes.user_id', '=', 'user_id')
         .select(['classes.*', 'users.*'])

        return response.json(classes)
    }

    async create(request: Request, response: Response) {
        const {
            name,
            user_name,
            email,
            password,
            phone,
            activate,
            news,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body
    
        const trx = await db.transaction()
    
        try {
            const insertUserIds = await trx('users').insert({
                name,
                user_name,
                email,
                password,
                phone,
                activate,
                news
            })
        
            const user_id = insertUserIds[0]
            console.log(insertUserIds)
            
            
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