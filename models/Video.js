const { Model } = require("objection");

class Video extends Model {
  static get tableName() {
    return "videos";
  }

  static get relationMappings() {
    const Customer = require("./Customer");
    return {
      customers: {
        relation: Model.ManyToManyRelation,
        modelClass: Customer,
        join: {
          from: "videos.id",
          through: {
            // customers_videos is the join table.
            from: "customers_videos.tee_time_id",
            to: "customers_videos.customer_id"
          },
          to: "customers.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "link", "created_at"],

      properties: {
        id: { type: "integer" },
        title: { type: "string", minLength: 1, maxLength: 255 },
        link: { type: "string", minLength: 1, maxLength: 255 },
        created_at: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Tee_time;
