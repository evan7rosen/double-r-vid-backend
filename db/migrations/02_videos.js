exports.up = function(knex) {
  return knex.schema.createTable("videos", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("link").notNullable();
  });
};

exports.down = function(knex, Promise) {};
