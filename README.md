# mutants
ionic project

install node.js ,
npm install ,
ionic cordova platform add android@6.3.0 ,
ionic cordova resources ,
ionic cordova build android , 

If you get 'Error: java.util.concurrent.ExecutionException:' add
" android {
  // ...
  aaptOptions.cruncherEnabled = false
  aaptOptions.useNewCruncher = false
  // ...
} "

to build.gradle in android platform
