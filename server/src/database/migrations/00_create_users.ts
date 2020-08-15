import Knex from 'knex'

export async function up(Knex: Knex) {
    return Knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('user_name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('phone').notNullable()
        table.string('activate').notNullable()
        table.string('news').notNullable()
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('users') 
}