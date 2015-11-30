---
title: Harvester Documentation
layout: basic
---

## Data Catalog Harvester

This page documents the data harvester module of the open data catalog, which allows the catalog to ingest external catalogs.
At this point the harvester assumes that the target catalog is a Socrata instance.

The table below documents the fields recognized by the harvester:

### Standard Socrata Fields ###

<table class="harvesting">
{% assign class="_standard" %}
{% include harvest1.html %}
</table>

### Additional Metadata Fields ###

These fields are user-defined in Socrata, and appear in the indicated sections in the About panel.

<table class="harvesting">
{% include harvest2.html %}
</table>

### Calculated Fields ###

These fields are calculated automatically based on other values defined above.

<table class="harvesting">
{% assign class="_calculated" %}
{% include harvest1.html %}
</table>

### Constant Fields ###

These fields are set to the same value automatically by the harvester.

<table class="harvesting">
{% assign class="_constant" %}
{% include harvest1.html %}
</table>


### Future Implementation Issues ###

* Mobile app is currently assumed to be the same for all datasets in a source
* Since Socrata natively provides Query tool, Download and API access, *Access Options* could be hard-coded (treated as constant), or simply check for
  the "Mobile App" option
* Source-specific support for alternate constant values
