exports.up = function(knex) {
  return knex.schema.createTable("customers_videos", function(table) {
    table.increments();
    table
      .integer("customer_id")
      .references("id")
      .inTable("customers")
      .onDelete("CASCADE");
    table
      .integer("video_id")
      .references("id")
      .inTable("videos")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {};
