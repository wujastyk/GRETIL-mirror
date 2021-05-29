# GRETIL-mirror

A snapshot of [GRETIL](http://gretil.sub.uni-goettingen.de/), the Göttingen Register of Electronic Texts in Indian Languages and related Indological materials from Central and Southeast Asia.

Placed here in Github for stability, traceability and archival security.

GRETIL's zip files have been excluded from this mirror.  
GRETIL's CSX- and REE- encoded files have been excluded from this mirror.  All files here are Unicode.

As far as I understand, all GRETIL files are also available in the [../corpustei](https://github.com/wujastyk/GRETIL-mirror/tree/main/gretil.sub.uni-goettingen.de/gretil/corpustei) directory in TEI/XML encoding, with the exception of the _Mahābhārata_.

The bash script used to gather the files for this Github archive is:
```bash
#!/bin/bash -x
# re-fetch all the Unicode files
wget -np -r  ‐‐continue ‐‐timestamping -l7 -A "*xml","*htm","*xdxf" http://gretil.sub.uni-goettingen.de/
```
