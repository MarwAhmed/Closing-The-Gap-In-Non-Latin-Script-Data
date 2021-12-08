# Closing the Gap in Non-Latin Script Data

The project aims to facilitate research in Digital Humanities projects dealing with Non-Latin Script in Latin Script environments. One of our goals is to gather and provide information on existing projects. As a first step, this repository is meant to contain basic information on research or infrastructure projects, initiatives and/or related institutions in a structured way.

The repository also contains a markdown-file that includes information on resources gathered on the way. Feel free to distribute and contribute.

## Contact
Jonas Müller-Laackman

[@Freie Universität Berlin](https://www.geschkult.fu-berlin.de/e/semiarab/arabistik/Seminar/Mitarbeiterinnen-und-Mitarbeiter/Wissenschaftliche-Mitarbeiterinnen-und-Mitarbeiter/mueller-laackman/index.html)

[@Github](https://github.com/Jomula)

[@Orcid](https://orcid.org/0000-0003-2279-6751)

## JSON Scheme for Resources (v0.1.0)


In case you want to participate in collecting material for the collection of resources, please follow this scheme.

```json
{
  // Valid main values in field "type" can be extended by colon notation, e.g. "language:query:xml".
  "type": "other|language|reference|authority|framework|db",
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
  // __Optional__ to provide relation between frameworks and their languages. Array of Objects with the same scheme as parent.
  "frameworks": [],
  // Credit for collecting.
  "collected_by": {
    // Name of collector.
    "name": "",
    // Reference link, e.g. URI or URL to website or Orcid-Profile.
    "ref": ""
  }
}

```

