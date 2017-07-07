# Tampermonkey Script Boilerplate

to use this boilerplate you have to rename this file and edit that as a config file first:
```bash
tamper.config.js.sample => tamper.config.js
```
then you can watch and build the final bundle using:
```bash
npm install
npm run dev
```
now webpack is watching and build two files in *./dist* folder: you can copy the content of *tampermonkey.js* and paste it into a new userscript of tampermonkey, also there is the configless file (*script.js*) to use it in the way you want to use