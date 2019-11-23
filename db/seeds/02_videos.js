exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("videos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("videos").insert([
        {
          title: "AZ Ice Peoria Holiday Ice Show 2019",
          link:
            "https://drive.google.com/file/d/14R7FoEpID62BKHlXVhTGJQ9UrbNlA8IP/view?usp=sharing"
        },
        {
          title: "AZ Ice Gilbert Holiday Ice Show 2019",
          link:
            "https://drive.google.com/file/d/1D3tapZ4ZXPkcTEnoPYnm9ht_EP6H1gMb/view?usp=sharing"
        },
        {
          title: "BASIS Ahwatukee - James and the Giant Peach",
          link:
            "https://drive.google.com/file/d/1pskM-vXKb3yUOzOJ-AKwn9R1euuBLpHm/view?usp=sharing"
        },
        {
          title: "Ice Den 20th Anniversary Ice Show 2018",
          link:
            "https://drive.google.com/file/d/1An_vujhcv64-OLfguMoWjbPJoqOYkZB6/view?usp=sharing"
        },
        {
          title: "Ice Den Grammys on Ice 2019",
          link:
            "https://drive.google.com/file/d/1cQgxM-dR5AkgMMkVWKkXRjFliMZrroS0/view?usp=sharing"
        }
      ]);
    });
};
