export function drag () {
        return {
            scope: { myDrag: '&' },
            restrict: 'A',
            link: function (scope, element, attrs) {
                element[0].addEventListener('dragstart', evt => {
                    scope.$apply(function () {
                        scope.myDrag()
                    })
                }, false)
            }
        }
    }