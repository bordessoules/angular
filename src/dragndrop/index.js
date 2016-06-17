import angular from 'angular'
import {drag} from './drag.directive.js'
import {drop} from './drop.directive.js'

export default
angular.module('dragdrop', [])
    .directive('myDrag', drag)
    .directive('myDrop',drop)
    .name