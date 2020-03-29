
exports.up = function(knex) { // método que cria a tabela no banco.
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf').notNullable();
  });
};

exports.down = function(knex) {// método que deleta a tabela no banco.
  return knex.schema.dropTable('ongs');
};
