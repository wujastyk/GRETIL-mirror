# GRETIL-mirror

A snapshot of [GRETIL](http://gretil.sub.uni-goettingen.de/), the Göttingen Register of Electronic Texts in Indian Languages and related Indological materials from Central and Southeast Asia.

Placed here in Github for stability, traceability and archival security.

GRETIL's zip files have been excluded from this mirror.  
GRETIL's CSX- and REE- encoded files have been excluded from this mirror.  All files here are Unicode.



The bash script used to gather the files for this Github archive is:
```bash
#!/bin/bash -x
# re-fetch all the Unicode files
wget -np -r  ‐‐continue ‐‐timestamping -l7 -A "*xml","*htm","*xdxf" http://gretil.sub.uni-goettingen.de/
```

