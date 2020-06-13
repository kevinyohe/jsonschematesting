

var schema = {
    type: "number"
}


var validate = require('jsonschema').validate;
console.log(validate(4, schema));
console.log('Done')

var veggieschema = 
{
    "$id": "https://example.com/arrays.schema.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "A representation of a person, company, organization, or place",
    "type": "object",
    "properties": {
      "fruits": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "vegetables": {
        "type": "array",
        "items": { "$ref": "#/definitions/veggie" }
      }
    },
    "definitions": {
      "veggie": {
        "type": "object",
        "required": [ "veggieName", "veggieLike" ],
        "properties": {
          "veggieName": {
            "type": "string",
            "description": "The name of the vegetable."
          },
          "veggieLike": {
            "type": "boolean",
            "description": "Do I like this vegetable?"
          }
        }
      }
    }
  }

  var veggies = {
    "fruits": [ "apple", "orange", "pear" ],
    "vegetables": [
      {
        "veggieName": "potato",
        "veggieLike": true
      },
      {
        "veggieName": "broccoli",
        "veggieLike": false
      }
    ]
  }

  console.log(validate(veggies, veggieschema))