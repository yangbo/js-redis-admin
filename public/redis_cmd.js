function RedisCommandControl($scope){
	$scope.command = {
		cmd: '',
		result: ''
	};

	$scope.exec = function(){
		var command = $scope.command;
		command.result = command.cmd + ' >> 执行结果';
	}
}