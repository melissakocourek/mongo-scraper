var mongoose = require("mongoose");

// save a reference to the schema constructor
var Schema = mongoose.Schema;

// using the schema constructor, create a new UserSchema object
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    // 'saved' is a boolean used to display the article in the raw, scraped section, or the saved articles.
    saved: {
        type: Boolean,
        default: false
    },

    // 'note' is an object that stores a Note id
    // The ref property links the OjbectID to the note model
    // This allows us to populate the Article with an associated Note
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
});

// Creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema); 

// Export the Article model
module.exports = Article;