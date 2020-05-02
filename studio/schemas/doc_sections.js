export default {
    "type": "document",
    "name": "doc_sections",
    "title": "Documentation Sections",
    "fields": [
        {
            "type": "string",
            "name": "root_folder",
            "title": "Root Folder",
            "description": "The path under which the documentation pages will be generated. For example, set to \"/\" to put all documentation pages at root, or set to \"/docs/\" to put all documentation pages under \"/docs/\".",
            "initialValue": "/docs/",
            "validation": Rule => Rule.required()
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "The main sections of the documentation. Every item must be the URL slug representing the section.",
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Documentation Sections File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/doc_sections.yml"
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