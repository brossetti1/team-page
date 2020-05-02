export default {
    "type": "document",
    "name": "showcase",
    "title": "Showcase",
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
            "name": "items",
            "title": "Items",
            "description": "Showcase items.",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Title",
                            "description": "The title of the item.",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "subtitle",
                            "title": "Subtitle",
                            "description": "The subtitle of the item.",
                            "validation": null
                        },
                        {
                            "type": "image",
                            "name": "preview_img",
                            "title": "Preview Image",
                            "description": "The preview image of the item.",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "description": "The URL of the item.",
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Showcase Menus",
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
                    "showcase"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Showcase URL Path",
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