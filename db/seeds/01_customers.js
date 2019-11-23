exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers").insert([
        {
          name: "Evan Rosen",
          email: "evan@doublervideo.com",
          password: "DoubleRVid"
        },
        {
          name: "Louanne Brown",
          email: "LBPTMOM@juno.com",
          password: "DoubleRVid"
        },
        {
          name: "Lilly Zahnow",
          email: "sailandkeme@me.com",
          password: "DoubleRVid"
        },
        {
          name: "Mia Vredenburg",
          email: "Matt.Vredenburg@gmail.com",
          password: "DoubleRVid"
        },
        {
          name: "Summer Nelson",
          email: "angelandkay@yahoo.com",
          password: "DoubleRVid"
        },
        {
          name: "Anna Kranzow",
          email: "marykranzow@yahoo.com",
          password: "DoubleRVid"
        },
        {
          name: "Madison Crim",
          email: "Josephcrim@gmail.com",
          password: "DoubleRVid"
        },
        {
          name: "Patricia Henderson",
          email: "Anniehenderson@yahoo.com",
          password: "DoubleRVid"
        },
        {
          name: "Abby Hammonds",
          email: "Kellyhammonds@yahoo.com",
          password: "DoubleRVid"
        },
        {
          name: "Olivia Wilson",
          email: "erh100@yahoo.com",
          password: "DoubleRVid"
        },
        {
          name: "MaryKate Fabyanic",
          email: "fabyfam6@gmail.com",
          password: "DoubleRVid"
        },
        {
          name: "Catherine Scibol",
          email: "tsabol98@gmail.com",
          password: "DoubleRVid"
        },
        {
          name: "Allison Merritt",
          email: "Lume6344@gmail.com",
          password: "DoubleRVid"
        }
      ]);
    });
};
