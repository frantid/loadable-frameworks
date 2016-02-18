### Using Google's geocoding data in LuneOS

## Introduction

Google's geocoding statistical data are located here:
https://github.com/googlei18n/libphonenumber/tree/master/resources/geocoding

They are organized by language, and then by country code. So each country's geocoding data Can be found here:
```
<language>/<country_code>.txt
```

In these files, the format is the following:
```
# comment
<beginning of international number>|<location string>
```

For example:
```
35865|Vaasa
```

## Compiling the data to a JSON file

What we need is a list of objects entries for the Db8 "org.webosports.geocoding:1" kind. The format for that kind is the latter:
string prefix: international prefix of the number
string startsWith:  beginning of the phone number
string location: name of the corresponding location

If the geocoding data files are located in the directory $GEOCODING, then the following command will create a series of Db8 JSON files with the corresponding content in the $OUTPUTDIR directory:

```
for i in "$GEOCODING"/*/*.txt; do
   INTLPREFIX=$(basename ${i%.txt})
   OUTPUTFILE="$OUTPUTDIR"/$(basename ${i%.txt}.json)
   grep '^[0-9].*' $i | awk ' BEGIN { ORS = ""; FS="|"; print "{\n \"_kind\": \"org.webosports.geocoding:1\",\n \"mergeIndices\": [ \"startsWith\" ],\n \"objects\": [\n"; } NR>1 { print ", \n" } { print " { \"prefix\": \"'$INTLPREFIX'\", \"startsWith\": \""$1"\", \"location\" : \""$2"\" }"; } END { print "\n ]\n }"; }' > "$OUTPUTFILE"
done
```


