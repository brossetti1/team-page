export default {
    "type": "object",
    "name": "ctablock",
    "title": "Call to Action Section",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID",
            "validation": null
        },
        {
            "type": "string",
            "name": "component",
            "title": "Component",
            "hidden": false,
            "initialValue": "CtaBlock",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "CtaBlock"
                ]
            }
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section.",
            "validation": null
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "ctablock"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}