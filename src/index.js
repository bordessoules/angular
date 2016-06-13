import angular from 'angular'
angular.module('dtang', [])

    .config(function () {
        console.log('DTANG CONFIG')
    })

    .value('AppName', 'DTANG')

    .run(function (AppName) {
        console.log(AppName + ' START')
    })
    .controller('MonController', MonController) // nom du controleur ds le html
angular.bootstrap(document, ['dtang']) // evite de faire <body ng-app="dtang"> ds index.html
function MonController() {
    console.log('Mon controleur')
    var monCtrl = this // racourci pour avoir le meme nomage ds le index.html
    monCtrl.user = {
        name: 'Arthur'
    }
    monCtrl.message = 'Bonjour'
    monCtrl.password = 'toto'
    monCtrl.password2
    monCtrl.template //= 'default.html'
    monCtrl.isPassOk = function () {
        return monCtrl.password2 == 'toto'
    }
    let user = { name: 'Lilian', deleted :false }

    monCtrl.friends = [
        { name: 'Bruno', deleted :false },
        { name: 'Nicolas', deleted :false },
        user
    ]
    monCtrl.clickme = function () {
        console.log('Thank you !')
    }
    monCtrl.clickmeuser = function (addUser) {
        monCtrl.friends.push({ name: addUser })
    }
    monCtrl.clickmeDelUser = function (index) {
        monCtrl.friends.splice(index, 1)
    }
    monCtrl.clickmeDelUser2 = function (index) {
        monCtrl.friends[index].deleted = !monCtrl.friends[index].deleted
    }
    //on initialise un objet
    function initNewUser() {
        monCtrl.newUser = {
            name: 'John Doe',
            email: ''
        }
    }
    initNewUser()
    monCtrl.addUser = function () {
        ctrl.users.push(angular.copy(ctrl.newUser)) // on le clone ce qui permet d'avoir des valeurs par default
        initNewUser()
    }

}