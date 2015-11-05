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

### Calulcated Fields ###

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
