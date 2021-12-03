# Bibliotheca Arabica

Link: https://www.saw-leipzig.de/de/projekte/bibliotheca-arabica
Contact: [[Klemm, Verena]], [[Liebrenz, Boris]]
Duration: 2018-2035
Keywords: #ar, #bibliothecaarabica 

## Description
Die arabische Literatur ist an Umfang und inhaltlicher Vielfalt eine der reichsten der Weltliteratur. Sie entfaltete sich seit dem 7. Jahrhundert in einer durch weitgespannte kulturelle Traditionen und Verflechtungen charakterisierten, islamisch geprägten Zivilisation. Wie die akkadische und die chinesische ist die arabische Literatur ein altes und gelehrtes Archiv des Wissens. Bis weit ins 19. Jahrhundert hinein erfolgte ihre Überlieferung meist in Manuskriptform. Entsprechend gilt dieses handschriftliche Erbe als eines der größten der Welt.

Das Projekt Bibliotheca Arabica widmet sich der Erforschung der arabischsprachigen Literaturen – sowohl der belles lettres als auch wissenschaftlichen Werken – zwischen 1150 und 1850 in einer transregionalen Perspektive, die über die Zentren arabischer Literaturproduktion in Ägypten und Syrien hinausreicht. Ziel ist es, durch die Verknüpfung von Literatur- und Manuskriptgeschichte neue Erkenntnisse zur arabischen Literatur zu gewinnen. Diese Jahrhunderte wurden bisher von der Forschung vernachlässigt und oft als ein Niedergang schöpferischer kultureller Leistung angesehen.

Gemeinsam mit den literarischen Werken stehen dabei verschiedene Akteure im Blickfeld – wie Autoren, die über bestimmte Thematiken geschrieben haben, Leser, die bestimmte Werke genutzt, Besitzer, die sie vor Ort in Bibliotheken gesammelt oder Gelehrte, die sie kommentiert und über Zeiten und Räume hinweg überliefert haben. Die Erfassung und Verknüpfung all ihrer Namen und Aktivitäten in einer digitalen Forschungsplattform bildet eine zentrale Grundlage zur Erforschung der lokalen und translokalen Dynamiken, die das kulturelle Leben prägten. Hierfür integriert die Online-Plattform des Projekts spezifische Informationen aus Manuskriptkatalogen, biographischen Referenzwerken und Manuskriptvermerke, wie z.B. Leser- und Besitzereinträge.

Als zentrales Arbeitsinstrument der Arabistik bietet die digitale Forschungsplattform der Bibliotheca Arabica vielen weiteren Disziplinen, die sich den religiösen und ethnischen Gemeinschaften in der islamisch geprägten Welt widmen, Zugang zur Erforschung des in arabischer Sprache überlieferten Handschriftenerbes – so etwa der Afrikanistik, Hebraistik, Indologie, Iranistik, Koptologie, Osmanistik und Zentralasienwissenschaft.

## Parameters
Date and Time: 2021-10-01 10:42

### Technology
- Database technology:
	- [ ] XML:
	- [x] SQL: MySQL, PostGreSQL
	- [ ] NoSQL:
	- [x] Pictures: [MyIHS](https://www.islamic-manuscripts.net/) (based on [MyCoRe](https://www.mycore.de/))
	- [ ] Files:
- Interfaces:
	- [x] API: 
		- Internal: data management via shell scripts
		- external: ?
	- [x] Frontend:
		- MyIHS:
			- Languages: #ar, #de
		- Planned in [[MyIHS_TechnicalGuide.pdf]]
			- Languages: #ar, #de, #en, #id 
- Documentation:
	- [MyIHS](https://www.islamic-manuscripts.net/content/documentation.xml?XSL.lastPage.SESSION=%2Fcontent%2Fdocumentation.xml)
- Repository: MyIHS
- Host:
	- [x] Academic, in-house infrastructure
	- [ ] Academic, exterior infrastructure
	- [ ] Private
	- [ ] Commercial
	- [ ] Other:
- IDEs and Editors:
- [x] Data Redundancy ensured
- [x] Backup ensured
- Other software in use: 
	- DFG Viewer
	- SOLR
	- Maven
- Languages in use:
	- Java
	- XML

### Research Data
- Data types
	- [ ] Text
		- Languages:
		- Scripts:
		- Genre:
	- [ ] Images:
		- Formats:
	- [ ] Audio
		- Languages:
		- Formats:
	- [x] Faksimiles:
		- Languages: #ar
		- Formats: RAW, JPEG
	- [x] Metadata:
		- Formats: RAW (in SQL), XML
	- [ ] Others:
- Used Standards: TEI
- Controlled Vocabularies:
- Authority File Systems: VIAF
- [x] URIs in use: MyCoRe baseid

### Policies
- License: 
	- [x] CC-BY 4.0
	- [ ] CC0
	- [ ] Other Open Licenses:
	- [ ] Closed License(s):
- Project-related Policies:
- Sustainability Approach:
- General Policies:
	- [ ] RDM Policy:
	- [ ] OpenAccess Policy: