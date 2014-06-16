---
title: World Bank Open Data Catalog Guidebook
layout: basic
---
{::options parse_block_html="true" /}
  
# Introduction #

This manual documents the [World Bank Open Data Catalog][cat] and its administration. It also provides guidance and background for Bank staff
that possess or administer data that could or should be considered [open data][#definition] under the Bank's [Access to Information Policy][a2i]. In particular, it provides an overview of the steps required and process involved in making a dataset publicly available and listed on the [Open Data Catalog][cat]


# Essentials #

### What is "Open Data"? ### {#definition}

"Open Data" has a very precise meaning. According to the [Open Definition](http://opendefinition.org) *(italics added):*

>a piece of data or content is open if **anyone** is **free to use, reuse, and redistribute it**--subject only,
>at most, to the requirement to attribute *(provide proper citations)* and/or share-alike
>*(redistribute under the same terms and conditions)*."

The World Bank Group's Open Data Initiative was [launched in April, 2010](http://go.worldbank.org/CA21J2H0A0) as an effort
to increase transparency and accountability, expand the impact of its data resources, and to catalyze the creation of new
applications and solutions to address poverty and development.

### What requirements are there for making my data "open"?

There are two general criteria for data to be open:

1. The data must be **legally** open, meaning that it is placed in the public domain or under liberal terms of use with minimal restrictions. 
   The Bank's [data terms of use][tou] provides the legal framework for data opened by the Bank. 

   "Open" data correspond to the "public" document classification under the Bank's [Access to Information Policy](http://go.worldbank.org/2OFOAU7PR0). Hence,
   open data must not be subject to any of the exceptions identified in the A2I Policy. Data prepared jointly with partners, obtained from  member countries/borrowers,
   or pursuant to FBS or RAS agreements require written consent of the other parties. See [Access to Information](#A2I).

2. The data must be **technically** open, meaning that it is published in electronic formats that are machine-readable and preferably non-proprietary.
This ensures that ordinary citizens can access and utilize the data with little or no cost using common software tools. See [data formats](#data-formats).

In addition, data must be **publicly available,** meaning accessible on a public server without password or firewall restrictions. This is an important consideration at the Bank where many
assets are often hosted on the intranet and available only to staff.


### What is the World Bank's Open Data Catalog?

The [Open Data Catalog][cat] is a listing of all datasets and data resources available from the World Bank as Open Data. All datasets listed in the Catalog are explicitly
subject to the Bank's [Open Data Terms of Use][tou]. For users, the Catalog is intended to provide a "one-stop shop" for all of the Bank's Open Data. It includes search
features, complete and consistent metadata, and direct links to data files and tools.

The Bank has several additional catalogs for specific kinds of data, such as
[Projects & Operations](http://projects.worldbank.org),
[World Bank Finances](https://finances.worldbank.org), and
[Research Datasets](http://go.worldbank.org/D353HLMTO0) to name a few.
These are all included in the Open Data catalog either as collections or as individual datasets.


<div class="todo">

### What kinds of data are eligible to include in the Open Data Catalog?

*Version 2*

### What are the benefits of having my data on the Catalog?

*Version 2*

### Are my data required to be "open" under the Bank's Access to Information Policy?

*Version 2*

### If my data is available online but is not listed in the catalog, is it still "open"?

*Version 2*

### What is the relationship between the Microdata catalog and the Open Data catalog?

*Version 2*

</div>

### What data formats are acceptable for the Catalog? ### {#data-formats}

The goal of Open Data is to keep barriers to data access and use to an absolute minimum. Accordingly, acceptable formats are those that are machine-readable and
(preferably) non-proprietary. That is, users should be able to access and manipulate the data without the need for commercial software.

Whenever possible, data should be provided in a single (i.e., bulk) file to facilitate downloading and management, as opposed to discrete, smaller files.

Acceptable formats, particularly for structured data, include:

* Comma- and tab-separated text files (CSV or TSV)
* [XML](http://en.wikipedia.org/wiki/XML), particularly in cases where data structures are multi-dimensional or vary throughout the document
* [JSON](http://en.wikipedia.org/wiki/JSON), (Javascript Object Notation), which is easy for internet apps to read
* [KML](https://developers.google.com/kml/) and [GeoJSON](http://geojson.org/) which, respectively, are extensions of XML and JSON designed for geo-spatial data

These formats are generally not considered open:

* PDF documents, which are not well suited for structured data
* Word documents (.doc and .docx), are also not well suited for structured data, and are also proprietary
* Other proprietary formats such as STATA, SPSS and SAS
* Image formats such as JPEG, TIFF and PNG, which may be use to display charts or tables, but prevent access to the underlying data

**Excel/Spreadsheet Documents**

Excel documents (.xls and .xlsx) are considered a second-best alternative since Excel is a proprietary format, although the ubiquity of
XLS-compatible tools helps to ensure accessibility. It is usually possible to import an Excel document into Google Drive, for example. Compared to
CSV files, Excel documents also have the advantage of being able to include metadata for individual cells, rows an columns, or as a separate sheet. However,
Excel documents can be problematic if they contain formulas or macros, or if they are very large.

The Open Data Handbook has [more background on file formats](http://opendatahandbook.org/en/appendices/file-formats.html).


### Who do I contact about putting my data in the Catalog?

The Data Administration & Quality (DAQ) team within DECDG supervises, manages, and supports the Catalog. Contacts are as follows:

**Shelley Fu** (primary contact)  
Senior Information Officer  
<sfu@worldbank.org>  
Extension: 3-3885

**Will Prince** (alternate contact)  
Senior Information Officer  
<wprince@worldbank.org>  
Extension: 3-1076


### What information does DECDG need from me to get started?

There are two forms that must be completed to begin the process of adding your data to the data catalog:

* The **Request form** provides a range of technical and logistical information about the database, such as the technical specifications,
  delivery date, who updates it, how often, when the dataset should be published, and whether the dataset is public or private.
  This provides necessary details for the publication process and provides the basis for the dataset's internal documentation.
  Completion of this form by the Bank unit provides certification that the dataset complies with the [Open Data Terms of Use][tou] and is considered Public under
  the [Access to Information Policy][a2i]

* The **New Dataset Template form** specifies all metadata related to the dataset. This form must be completed for the dataset to be published in the Data Catalog.
  Some (but not all) contents of this form are displayed publicly to end users, and are indexed by the Bank's enterprise search engine.

In addition, the DAQ team will need:

* The data itself, or information about how to access the data
* The Bank unit sponsoring the data
* The staff member serving as point of contact. Typically this person is an expert on the dataset's subject matter.
* Any additional relevant background information, such as supporting documents, methodologies, etc.
* Anticipated release date (for instance, if data publication should coincide with the launch of a report or other public event)

### What happens next?

After addressing any preliminary questions and issues, the DAQ team conducts a preliminary review of the submitted information, and follows up with the sponsor
unit to clarify any details. The DAQ team will also do a quick comparison to data already in the catalog to confirm the data have not already been published, and if they
have may suggest alternative strategies.

Then, the DAQ team and the sponsor unit typically also discuss technical options for data hosting (making the data publicly available) such as 
[DataBank][databank], Development Data Platform, [DataBox][databox], bulk download files, APIs, dashboards, etc.,
and add other staff to the discussion as required. If further development work is required, the two teams agree on a work plan and next steps.


Depending on the hosting solution (as identified at the initial consultation), the DAQ team will provide technical
requirements to the Bank unit for formatting the dataset and providing metadata. The DAQ team will coordinate with other
DECDG staff to load the data on a QA (quality assurance) server, accessible only within the Bank, and notify the Bank
unit that the dataset is ready for review. The Bank unit reviews the data and informs DAQ of any necessary changes or
corrections. The Bank unit then certifies the dataset, typically by a confirmation email.

Finally, the dataset is moved to the production server. The Bank unit performs a final review in the production
environment, after which the dataset is published and made publicly available. The CSC team then adds the dataset's
metadata to the Open Data catalog, and the Bank unit and relevant DEGCG staff are notified by email.


### How much lead time is required to publish data in the Catalog?

Lead time depends on how much work is needed to prepare the data for publication. The most straight-forward datasets are those that consist of a single well-formed file or set of 
files in machine-readable format. These typically take about 5 business days to publish. Datasets that are hosted in one of the online query tools (Databank, Databox or
another solution) will take longer to configure, load, test and verify. As with any project, longer lead times are preferable, and advance notice is appreciated.

<div class="todo">

### What is "data quality" and how is quality assessed?

*Version 2*

### Who is responsible for ensuring data quality?

*Version 2*

</div>

### Who manages the actual data files once they are listed in the data catalog?

Data management can follow many different arrangements depending on the dataset and the preferences of the sponsor unit. For instance:

* Data files can be hosted on a public file server, website or data interface administered by the sponsor unit. In this case, data management is the responsibility
  of the sponsor unit, and the Catalog will simply link to that server.
* Data files can be hosted on a server administered by DECDG. In this case, the sponsor unit cooperates with DECDG to update the data file as necessary.
* Data files can be hosted in a data interface administered by DECDG, such as [DataBank][databank] or [DataBox][databox]. In this case, DECDG may administer the platform
  as well as the data, or give data administration access to the sponsor unit.
* Data files may reside within a separate catalog, such as [World Bank Finances](https://finances.worldbank.org). In this case, the administrator of the catalog will
  typically manage the data, and updates will be synchronized with the Catalog automatically.

<div class="todo">

### What is an API and does my data need one?

*Version 2*

</div>

### What ongoing obligations are there to maintain a dataset after it is published?

The sponsor unit is expected to keep the dataset up to date, according to the dataset's work plan. The dataset's metadata contains fields that indicate
the frequency and schedule for updates: for instance, weekly, monthly, quarterly, annually, or some other regular or irregular schedule. Several datasets in the catalog
are not expected to be updated and are so indicated in the metadata. Sponsor units should notify the DAQ team when updates are available or when online files have
been modified (including corrections) so that the Catalog can reflect those changes. The DAQ team also routinely monitors datasets to identify
which datasets are out of date, and contacts the sponsor units to revise the metadata and data files accordingly. 

User support for the Catalog is managed by the Client Service and Communications (CSC) team. Bank units are expected to respond to user questions about their datasets
when forwarded by CSC. 


# Access to Information Policy # {#A2I}

Datasets are subject to the Bank's [Access to Information Policy][a2i]. In principle, this means any data can be made publicly available as long as it is not subject to any of the exceptions listed in the A2I Policy. 

The A2I Policy lists the following exceptions (see section 2A of the A2I policy):

#### A2I Exceptions

1. Personal information considered private or confidential
2. Communications of ED offices
3. Proceedings of the Ethics Committee
4. Attorney client privilege
5. Information that would jeopardize security and safety
6. Restricted under separate disclosure regimes, such as IEG, IP or INT VP
7. Information provided by member countries or third parties in confidence
8. Corporate administration
9. Certain deliberative information 
10. Certain financial transaction information

It is conceivable that any of these conditions could apply to a particular dataset. Hence, familiarity with the terms of the exceptions is strongly suggested.

However, some circumstances arise more frequently than do others:

* **Personal information.** Datasets may contain information that could be used to identify an individual or business unit and hence pose a risk to her or his
  right to privacy. For instance, survey data (i.e. microdata) is often not classified as Open Data unless anonymization techniques are employed to mitigate
  the chance for personal identification, or sample sizes are sufficiently large enough that risk of identification is small. Similarly, datasets aggregated from
  smaller samples should be reviewed to ensure that outlier records don't pose a risk of breaching privacy.

*  **Security and safety.** Similarly, datasets that contain information that might jeopardize the life, health or safety of any individual or the environment
   are typically not classified as Open Data. This might include, for example, the locations of facilities that provide services that might make them the subject
   of political or terrorist attacks.

* **Information provided by member countries or third parties.** The guidelines included in Section 3 of the A2I policy provide guidance for disclosure of information
  (including datasets) provided by member countries and other parties. As applied to datasets, this exception would exclude data provided to the Bank in confidence,
  data that is restricted by the country's own policies, and data prepared by the Bank for a client country under an FBS or RAS agreement.
  
  As a practical matter, any  dataset in which other parties have a proprietary stake requires the written consent of all parties for it to be released as Open Data, *unless* the parties  each have an Open Data policy that permits the data to be so released (e.g., the United Nations). This includes, for instance, datasets produced by the IMF, the OECD,  the International Energy Agency (IEA) and other organizations that do not (yet) have an Open Data policy.
  For datasets provided to the Bank under vendor agreements, it is
  important that the vendor contract specify that works produced under the contract are considered the property of the World Bank, as provided in the Bank's
  [General Conditions of Contract](http://go.worldbank.org/3OeY65JQ60).

* **Corporate administration?** interestingly, the A2I policy says that procurement data is typically excluded...

<div class="todo">

# Determining If Your Data Can Be Opened 

*Version 2*

This section could incorporate an open data checklist summarizing the document above for easy reference. 

</div>


----

## Other Stuff ##

Related working documents are [here](https://github.com/{{ site.org_name }}/{{ site.repo_name }}/tree/master/background)

[tou]: http://data.worldbank.org/summary-terms-of-use
[a2i]: http://documents.worldbank.org/curated/en/2013/07/17952994/world-bank-policy-access-information
[cat]: http://datacatalog.worldbank.org
[databank]: http://databank.worldbank.org
[databox]:  https://databox.worldbank.org

*[FBS]: fee-based service
*[RAS]: resimbursable advisory services

