#!/bin/bash
# With create-react-app, a self signed (therefore invalid) certificate is generated.
# 1. Create some folder in the root of your project
# 2. Copy your valid development certificate to this folder
# 3. Copy this file to the same folder
# 4. In you package.json, under `scripts`, add `postinstall` script that runs this file.
# Every time a user runs npm install this script will make sure to copy the certificate to the 
# correct location
set -e

TARGET_LOCATION="./node_modules/webpack-dev-server/ssl/server.pem"
SOURCE_CERT_LOCATION=$(pwd)/$(dirname "../cert/nyam.deerwhite.net.pem")/nyam.deerwhite.net.pem
SOURCE_KEY_LOCATION=$(pwd)/$(dirname "../cert/nyam.deerwhite.net.pem")/nyam.deerwhite.net.key

if [ ! -f "$SOURCE_CERT_LOCATION" ] || [ ! -f "$SOURCE_KEY_LOCATION" ] ; then
    echo "Certificate file does not exist.... SKIP"
    exit 0
fi
echo Generate ${TARGET_LOCATION} from ${SOURCE_CERT_LOCATION} , ${SOURCE_KEY_LOCATION}
rm -f ${TARGET_LOCATION} || true

touch ${TARGET_LOCATION}

cat ${SOURCE_CERT_LOCATION} >> ${TARGET_LOCATION}
cat ${SOURCE_KEY_LOCATION} >> ${TARGET_LOCATION}

chmod 400 ${TARGET_LOCATION} # after 30 days create-react-app tries to generate a new certificate and overwrites the existing one. 
echo "Created server.pem"

# reference: https://gist.github.com/eladmoshe/0ca3f60952a7c4c24ab9aa028e0873bf
