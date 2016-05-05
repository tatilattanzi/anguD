var app = angular.module('webapp', []);
var person_id = 0;
var editing = false;

app.controller('webcontroller', function($scope) {
	$scope.add = function() {

		if (angular.isDefined($scope.name) && $scope.name != ''
				&& $scope.cpf != '') {
			//Adiciona uma nova pessoa a lista
			$scope.list.push({
				id : $scope.id,
				name : $scope.name,
				cpf : $scope.cpf,
				idade : $scope.idade,
				fone : $scope.fone
			});

			//Limpa os campos e atualiza o id
			$scope.id++;
			$scope.name = '';
			$scope.cpf = '';
			$scope.idade = '';
			$scope.fone = '';
		}
	}

	//Controla edicao
	$scope.isEditing = function(){
			if(editing){
				return true;
			}else{
				return false;
			}
	}

	//Prepara edicao
	$scope.edit = function(person) {
		person_id = person.id;
		$scope.id = person.id;
		$scope.name = person.name;
		$scope.cpf = person.cpf;
		$scope.idade = person.idade;
		$scope.fone = person.fone;

		editing = true;
	}

	//Atualiza cadastro
	$scope.update = function() {
		var person_edited = { id : $scope.id,
					   name : $scope.name,
					   cpf : $scope.cpf,
					   idade : $scope.idade,
					   fone : $scope.fone
					  };

	       angular.forEach($scope.list, function(p, i) {
		          if (p.id == person_id)
		            $scope.list[i] = person_edited;
		        })
			$scope.id++;
			$scope.name = '';
			$scope.cpf = '';
			$scope.idade = '';
			$scope.fone = '';

			editing = false;
	}

	//Remove itens da lista
	$scope.remove = function(person) {
		var index = $scope.list.indexOf(person);
		$scope.list.splice(index, 1);
	}

});
