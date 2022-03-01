[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Closing-the-Gap-in-NLS-DH/Projects/graphs/commit-activity)


[![Generic badge](https://img.shields.io/badge/IndexSchema-v0.1.1-blue.svg)](#indexschema)
[![Generic badge](https://img.shields.io/badge/ProjectsSchema-v0.1.4-blue.svg)](#projectsschema)
[![Generic badge](https://img.shields.io/badge/ResourcesSchema-v0.1.0-blue.svg)](#resourcesschema)

# Closing the Gap in Non-Latin Script Data

The project aims to facilitate research in Digital Humanities projects dealing with Non-Latin Script in Latin Script environments. One of our goals is to gather and provide information on existing projects. As a first step, this repository is meant to contain basic information on research or infrastructure projects, initiatives and/or related institutions in a structured way.

This repository contains metadata information on projects and useful resources that can be loosely associated to the field of Digital Humanities and Non-Latin-Script-based research. This project is particularly interested in the situation of (digital) Arabic Studies and related fields.

GUI (in development): https://m-l-d-h.github.io/closing-the-gap-in-nls-data/

## Contact
Jonas Müller-Laackman

[@Freie Universität Berlin](https://www.geschkult.fu-berlin.de/e/semiarab/arabistik/Seminar/Mitarbeiterinnen-und-Mitarbeiter/Wissenschaftliche-Mitarbeiterinnen-und-Mitarbeiter/mueller-laackman/index.html)

[@Github](https://github.com/Jomula)

[@Orcid](https://orcid.org/0000-0003-2279-6751)

## Contribution / Schema Documentation

In case you want to participate in collecting material for the collection of resources and projects, please follow this schema.

The schema underlies continuous development. Existing entries are going to be automatically updated to newer versions of the schemas as far as possible. In case of issues, the creator or last editor will be contacted.

Feel free to discuss the schema in the GitHub issues.

### <a id="indexschema"></a>JSON Schema for Project Index / UUID Dictionary (`v0.1.1`)

```javascript
{
  ...
  "{uuid}": {
    "title": "{title}",
    // The simplified title should not contain any special characters and be machine-readable
    "path": "/PROJECTS/{simplified_title}/"
  }
  ...
}
```

### <a id="projectsschema"></a>JSON Schema for Projects (`v0.1.4`)

The JSON-file is to be put in a folder with a simplified, machine-readable name of the project's title and added to the project-index.

```javascript
{
  "schema_version": "0.1.4",
  "record_metadata": {
    // Universally Unique Identifier for each project 
    "uuid": "",
    // YYYY-MM-DD
    "record_created": "",
    // Name of the record's creator: Surname, Forename
    "record_created_by": "",
    // Array of modifications
    "record_modified": [
      {
        // YYYY-MM-DD
        "record_modified_on": "",
        // Name of the record's last editor: Surname, Forename
        "record_modified_by": ""
      }
    ]
  },
  "project": {
    // Official title of the project
    "title": "",
    // Abbreviation if applicable
    "abbr": "",
    // Type of the project: organisation | project
    "type": "",
    // Array of Authority file URIs 
    "ref": [
      ""
    ],
    // Array of active terms in format: YYYY-MM-DD
    "date": [
      {
        "from": "",
        "to": ""
      }
    ],
    // Array of project websites
    "websites": [
      ""
    ],
    // Description of the project
    "project_desc": "",
    // Array of Locations
    "places": [
      {
        "place_name": {
          // Name of the place
          "text": "",
          // Array of Authority file URIs
          "ref": [
            ""
          ]
        }
      }          
    ],
    // Array of languages used in the project's presentation (website, flyer, ...) in ISO-639-2
    "lang": [
      ""          
    ],
    "topic_relations": {
      // If no information is available: null, otherwise: true | false
      "nls": true, // Is the project related to Non-Latin Scripts?
      "dh": true, // Is the project related to Digital Humanities?
      "meta": true, // Is the project a meta project?
      "rdm": true, // Is the project related to Research Data Management?
      "infrastructure": true // Is the project related to infrastructure?
    },
    "parents": [
      // For each parent-project
      // 1. if organisation and no UUID is given:
      {
        "type": "organisation",
        "org_name": { 
          // name of the organisation
          "text": "", 
          // Array of Authority file URIs  
          "ref": [
            ""
          ]
        },
        // Array of Websites
        "websites": [
          ""
        ],
        // Array of Locations
        "places":[
          {
            "place_name": {
              // Name of the place
              "text": "",
              // Array of Authority file URIs 
              "ref": [
                ""
              ]
            }
          }
        ],
        // __Optional__ notation for deeper relation hierarchies
        "siblings": [],
        "parents": [],
        "children": []
      },       
      // 2. if project and no UUID is given:
      {
        "type": "project",
        // name of the project
        "title": "",
        // Array of Authority file URIs 
        "ref": [
          ""
        ],
        // Array of Websites
        "websites": [
          ""
        ],
        // Array of Locations
        "places":[
          {
            "place_name": {
              // Name of the place
              "text": "",
              // Array of Authority file URIs 
              "ref": [
                ""
              ]
            }
          }
        ],
        // __Optional__ notation for deeper relation hierarchies
        "siblings": [],
        "parents": [],
        "children": []
      },   
      // 3. if project and has a UUID:
      {
        "type": "project",
        // Official title of the project
        "title": "",
        // UUID of the project
        "uuid": ""
      },
      // 4. if organisation and has a UUID:
      {
        "type": "organisation",
        "org_name": {
          // name of the organisation
          "text": "",
          // Array of Authority file URIs 
          "ref": [
              ""
          ]
        },
        "uuid": ""
      }
    ],
    // Children are handled the same way as parents
    "children": [],
    // Siblings (e.g. partner projects) are handled the same way as parents
    "siblings": [],
    // Array of relevant contacts
    "contacts": [
      {
        "pers_name": {
          // Name of the contact
          "text": "",
          // Array of Authority file URIs 
          "ref": [
              ""
          ]
        },
        // Role of the contact:
        // 0 = Management (e.g. PI, Coordinator, ...)
        // 1 = Employee (e.g. Research Assistant, ...)
        // 2 = Student Employee (e.g Student Assistant, ...)
        // 3 = Contractor or Honorar staff
        "role": 0,
        // Array of institutional and/or personal websites
        "websites": [
          ""
        ]           
      }         
    ],
    "research_data": {
      // Array of languages of the research data in ISO-639-2
      "lang": [
        ""
      ]
      // More information on research data to be added in a later version
    },
    // Stack: To be added in a later version
    "stack": {},
    // Policies: To be added in a later version
    "policies": {}, 
    // Array of keywords for the project, including all relevant languages in ISO-639-2
    "keywords": [
      ""
    ],
    // Comment on the entry, the project or field for any information that doesn't fit anywhere else
    "comment": ""
  }
}
```

### <a id="resourcesschema"></a>JSON Schema for Resources (`v0.1.1`)

```javascript
{
  // Valid main values for parent entries in field "type" can be extended by colon notation, e.g. "language:query:xml". For children, main value may vary, e.g. "framework".
  "type": "other|language|db|reference|authority|org|literature|journal",
  // Title of entry.
  "label": "",
  // Link to documentation or website.
  "ref": "",
  // Comment or description.
  "comment": "",
  // Tags to describe the item and make it easier to find. Empty if none given, but it is highly advised to provide at least a couple of tags.
  "tags": [
    "#tag",
  ],
  // __Optional__: Provide relation between frameworks and their languages. Array of Objects with the same schema as parent.
  "frameworks": [],
  // Credit for collecting.
  "collected_by": {
    // Name of collector.
    "name": "",
    // Reference link, e.g. URI or URL to website or Orcid-Profile.
    "ref": ""
  },
  // __Optional__: Credit for editing.
  "edited_by": {
    // Name of editor.
    "name": "",
    // Reference link, e.g. URI or URL to website or Orcid-Profile.
    "ref": ""
  }
}

```

