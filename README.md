[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Closing-the-Gap-in-NLS-DH/Projects/graphs/commit-activity)


[![Generic badge](https://img.shields.io/badge/IndexSchema-v0.1.1-blue.svg)](#indexschema)
[![Generic badge](https://img.shields.io/badge/ProjectsSchema-v0.1.5-blue.svg)](#projectsschema)
[![Generic badge](https://img.shields.io/badge/ResourcesSchema-v0.1.0-blue.svg)](#resourcesschema)

# Closing the Gap in Non-Latin Script Data

The project aims to facilitate research in Digital Humanities projects dealing with Non-Latin Script in Latin Script environments. One of our goals is to gather and provide information on existing projects. As a first step, this repository is meant to contain basic information on research or infrastructure projects, initiatives and/or related institutions in a structured way.

This repository contains metadata information on projects and useful resources that can be loosely associated to the field of Digital Humanities and Non-Latin-Script-based research. This project is particularly interested in the situation of (digital) Arabic Studies and related fields.

GUI (in development): https://m-l-d-h.github.io/Closing-The-Gap-In-Non-Latin-Script-Data

## Contact
Jonas Müller-Laackman

[@Freie Universität Berlin](https://www.geschkult.fu-berlin.de/e/semiarab/arabistik/Seminar/Mitarbeiterinnen-und-Mitarbeiter/Wissenschaftliche-Mitarbeiterinnen-und-Mitarbeiter/mueller-laackman/index.html)

[@Github](https://github.com/Jomula)

[@Orcid](https://orcid.org/0000-0003-2279-6751)

## Contribution / Schema Documentation

In case you want to participate in collecting material for the collection of resources and projects, please follow this schema.

The schema underlies continuous development. Existing entries are going to be automatically updated to newer versions of the schemas as far as possible. In case of issues, the creator or last editor will be contacted.

Feel free to discuss the schema in the GitHub issues.

As for now, the easiest way to contribute to our database is to just send us your JSON file, so we can implement it to the store.

### <a id="indexschema"></a>JSON Schema for Projects (`v0.1.5`)

See `TEMPLATES/project.json` for a template and `SCHEMATA/project.schema.json` for a comprehensive schema of the latest version.

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
