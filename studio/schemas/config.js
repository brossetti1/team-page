export default {
    "type": "document",
    "name": "config",
    "title": "Global Site Config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Palette",
            "description": "The palette of the theme.",
            "initialValue": "blue",
            "validation": null,
            "options": {
                "list": [
                    "blue",
                    "green",
                    "navy",
                    "violet"
                ]
            }
        },
        {
            "type": "object",
            "name": "palettes",
            "title": "Palettes",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "palette",
                    "name": "blue",
                    "title": "Blue",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "green",
                    "title": "Green",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "navy",
                    "title": "Navy",
                    "validation": null
                },
                {
                    "type": "palette",
                    "name": "violet",
                    "title": "Violet",
                    "validation": null
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "site-metadata.json"
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
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}