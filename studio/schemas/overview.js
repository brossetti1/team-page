export default {
    "type": "document",
    "name": "overview",
    "title": "Overview",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown just below the page title.",
            "validation": null
        },
        {
            "type": "image",
            "name": "img_path",
            "title": "Image",
            "description": "The image shown in the background of the page header.",
            "validation": null
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Home page sections.",
            "validation": null,
            "of": [
                {
                    "type": "contentblock"
                },
                {
                    "type": "ctablock"
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Overview Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "overview"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Overview URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
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
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}