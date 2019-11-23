exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("customers_videos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers_videos").insert([
        { customer_id: 1, video_id: 1 },
        { customer_id: 1, video_id: 2 },
        { customer_id: 1, video_id: 3 },
        { customer_id: 1, video_id: 4 },
        { customer_id: 1, video_id: 5 },
        { customer_id: 2, video_id: 1 },
        { customer_id: 2, video_id: 1 },
        { customer_id: 3, video_id: 1 },
        { customer_id: 3, video_id: 1 },
        { customer_id: 4, video_id: 1 },
        { customer_id: 5, video_id: 1 },
        { customer_id: 6, video_id: 1 },
        { customer_id: 7, video_id: 1 },
        { customer_id: 8, video_id: 1 },
        { customer_id: 9, video_id: 1 },
        { customer_id: 10, video_id: 1 },
        { customer_id: 11, video_id: 1 },
        { customer_id: 12, video_id: 1 },
        { customer_id: 13, video_id: 1 },
        { customer_id: 10, video_id: 2 },
        { customer_id: 11, video_id: 3 },
        { customer_id: 12, video_id: 4 },
        { customer_id: 13, video_id: 5 }
      ]);
    });
};
