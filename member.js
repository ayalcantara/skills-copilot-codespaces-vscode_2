function skillsMember(){
    return {
        restrict: 'E',
        tempateUrl: 'member.html',
        controllerAs: 'member',
        bindToController: true,
        scope:{
            menber: '='
        },
        controller: function(){
            var vm = this;
            vm.skills = ['HTML', 'CSS', 'JavaScript', 'AngularJS'];
        }

    }}
