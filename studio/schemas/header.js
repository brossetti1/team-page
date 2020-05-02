export default {
    "type": "document",
    "name": "header",
    "title": "Header",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Header Title",
            "description": "The title displayed in the header if no logo image added.",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo_img",
            "title": "Logo Image",
            "description": "The logo image displayed in the header.",
            "validation": null
        },
        {
            "type": "string",
            "name": "url",
            "title": "Header Title/Logo URL",
            "description": "The url of the header title/logo.",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_nav",
            "title": "Enable Navigation Menu",
            "description": "Display the navigation menu bar in the header.",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Header File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/header.yml"
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
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}