var app = angular.module('formApp', []);
    app.controller('formCtrl', function ($scope) {

        $scope.formData = {};
        
        $scope.form = {
            ageError: false,
            policyError: false,
            topicError: false,
            isValid:function(){
              return this.ageError && this.topicError && this.policyError;
            }
          };
      
          $scope.sendForm = function(formData)
          {
            $scope.form.topicError = $("input[name=topic]:checked").length == 0;
            $scope.form.ageError = !$("#age").is(":checked");
            $scope.form.policyError = !$("#terms").is(":checked");
            
            return $scope.form.isValid();

            return $scope.msg = 'Form submitted with' + JSON.stringify(formData);
          }
          
});