---
title: World Bank Open Data Catalog Guidebook
layout: hero
---
  
# Overview #

* Intro
* Objectives
* Who should read

# Essentials #

### What is "Open Data"?

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

   "Open" data correpond to the "public" document classification under the Bank's [Access to Information Policy](http://go.worldbank.org/2OFOAU7PR0). Hence,
   open data must not be subject to any of the exceptions identified in the A2I Policy. Data prepared jointly with partners, obtained from  member countries/borrowers,
   or pursuant to FBS or RAS agreements require written consent of the other parties. See [Access to Information](#A2I).

2. The data must be **technically** open, meaning that it is published in electronic formats that are machine-readable and preferably non-proprietary.
This ensures that ordinary citizens can access and utilize the data with little or no cost using common software tools. See [data formats](#data-formats).

In addition, data must be **publicly available,** meaning accessible on a public server without password or firewall restrictions. This is an important consideration at the Bank where many
assets are often hosted on the intranet and available only to staff.


*[FBS]: fee-based service
*[RAS]: resimbursable advisory services


### What is the World Bank's Open Data Catalog?

The Open Data Catalog is a listing of all datasets and data resources available from the World Bank as Open Data. All datasets listed in the Catalog are explicitly
subject to the Bank's [Open Data Terms of Use][tou]. For users, the Catalog is intended to provide a "one-stop shop" for all of the Bank's Open Data. It includes search
features, complete and consistent metadata, and direct links to data files and tools.

The Bank has several additional catalogs for specific kinds of data, such as
[Projects & Operations](http://projects.worldbank.org),
[World Bank Finances](https://finances.worldbank.org), and
[Research Datasets](http://go.worldbank.org/D353HLMTO0) to name a few.
These are all included in the Open Data catalog either as collections or as individual datasets.


### What kinds of data are eligible to include in the Open Data Catalog?

*Version 2*

### What are the benefits of having my data on the Catalog?

*Version 2*

### Are my data required to be "open" under the Bank's Access to Information Policy?

*Version 2*

### If my data is available online but is not listed in the catalog, is it still "open"?

*Version 2*

### What is the relationship between the Microdata catalog and the Open Data catalog?

### What data formats are acceptable for the Catalog? ### {#data-formats}

Electronic data formats that are technically open
include comma- and tab-separated text files (CSV and TSV), and open standards such as XML or JSON for more flexible or sophisticated structures. Excel documents (XLS and 
XLSX) are considered a second-best alternative since it is a proprietary format, although the ubiquity of XLS-compatible tools helps to ensure accessibility.


Talk about acceptable formats and the preference for a single "raw" file

### Who do I contact about putting my data in the Catalog?

You should contact a member of the Data Administration & Quality (DAQ) team, which supervises, manages, and supports the Catalog:

Name               | Email                            | Extension |
------------------ | ----------                       | --------: |
Will Prince        | <wprince@worldbank.org>          | 31706     
who else?          |                                  | 

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

* Your data, or information about how to access the data
* The Bank unit sponsoring the data
* The staff member serving as point of contact. Typically this person is an expert on the dataset's subject matter.
* Any additional relevant background information, such as supporting documents, methodologies, etc.
* Anticipated release date (for instance, if data publication should coincide with the launch of a report or other public event)

### What happens next?

After addressing any preliminary questions and issues, the DAQ team conducts a preliminary review of the submitted information, and follows up with the sponsoring
unit to clarify any details. The DAQ team will also do a quick comparison to data already in the catalog to confirm the data have not already been published, and if they
have may suggest alternative strategies.

Then, the DAQ team and the sponsoring unit typically also discuss technical options for data hosting (making the data publicly available) such as 
[DataBank](http://databank.worldbank.org), Development Data Platform, [DataBox](https://databox.worldbank.org), bulk download files, APIs, dashboards, etc.,
and add other staff to the discussion as required. If further development work is required, the two team agree on a work plan and next steps.


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

### What is "data quality" and how is quality assessed?

*Version 2*

### Who is responsible for ensuring data quality?

*Version 2*

### Who manages the actual data files once they are listed in the data catalog?

This is the question about "where the data live"

### What is an API and does my data need one?

*Version 2*

### What ongoing obligations are there to maintain the dataset after it is published?

* User support - you should respond to questions about the data, which come in through the support portal and are coordinated by DECDG
* DECDG monitors the data catalog to flag datasets that are "stale," typically on a quarterly basis.


# Access to Information Policy # {#A2I}

# Determining If Your Data Can Be Opened 

*Version 2*


----

## Other Stuff ##

Related working documents are [here](https://github.com/{{ site.org_name }}/{{ site.repo_name }}/tree/master/background)

[tou]: http://data.worldbank.org/summary-terms-of-use
[a2i]: http://go.worldbank.org/TRCDVYJ440
