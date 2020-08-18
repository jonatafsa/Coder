import Knex from 'knex'

export async function up(Knex: Knex) {
    return Knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.string('cost').notNullable()

        // referencia o ID do User
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') //CASADE Edita todos os campos onde referencia o ID do User
        .onDelete('CASCADE') //CASADE deleta todos os campos onde referencia o ID do User

    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('classes') 
}