const { Model } = require("objection");

class Customer extends Model {
  static get tableName() {
    return "customers";
  }

  static get relationMappings() {
    const Video = require("./Video");

    return {
      videos: {
        relation: Model.ManyToManyRelation,
        modelClass: Video,
        join: {
          from: "customers.id",
          through: {
            // customers_videos is the join table.
            from: "customers_videos.customer_id",
            to: "customers_videos.video_id"
          },
          to: "videos.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password"],

      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string", minLength: 1, maxLength: 255 },
        password: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Customer;
