import angular from 'angular'
angular.module('dtang', [])

  .config(function () {
    console.log('DTANG CONFIG')
  })

  .value('AppName', 'DTANG')

  .run(function (AppName) {
    console.log(AppName + ' START')
  })
  .controller('MonController', MonController ) // nom du controleur ds le html
angular.bootstrap(document, ['dtang']) // evite de faire <body ng-app="dtang"> ds index.html
function MonController() {
    console.log('Mon controleur')
    var monCtrl = this // racourci pour avoir le meme nomage ds le index.html
    monCtrl.user = {
        name : 'Arthur'
    }
    monCtrl.message = 'Bonjour'
}