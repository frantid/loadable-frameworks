### Using Google's geocoding data in LuneOS

## Introduction

Google's geocoding statistical data are located here:
https://github.com/googlei18n/libphonenumber/tree/master/resources/geocoding

They are organized by language, and then by language code. So each country's geocoding data Can be found here:
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

## Compiling the data for use by phonenumberlib

Currently we simply take the english names for all the locations. Therefore,
we just need to copy all the data from
https://github.com/googlei18n/libphonenumber/tree/master/resources/geocoding/en/ to this geocoding directory.


