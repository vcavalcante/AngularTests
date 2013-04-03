
var enderecoController = function($scope){
    $scope.nomeAluno = 'Victor'
    $scope.endereco ={};
    $scope.endereco.estados  = [{nome:'São Paulo',id:'SP'},{nome:'Rio de Janeiro',id:'RJ'},{nome:'Minas Gerais',id:'MG'},{nome:'Bahia',id:'BA'},{nome:'Santa Catarina',id:'SC'}];
    $scope.endereco.cidades  = [{nome:'São Paulo',estado:'SP'},{nome:'Osasco',estado:'SP'},{nome:'Rio de Janeiro',estado:'RJ'},{nome:'Petrópolis',estado:'RJ'},{nome:'Belo Horizonte',estado:'MG'},{nome:'Betim',estado:'MG'},{nome:'Salvador',estado:'BA'},{nome:'Ilhéus',estado:'BA'},{nome:'Floripa',estado:'SC'},{nome:'Braço do Norte',estado:'SC'}];
    $scope.endereco.tipoLogradouro = [{nome:'Rua',id:1},{nome:'Travessa',estado:'SP'},{nome:'Avenida',id:3}]      ;
    $scope.enderecos =[];
    $scope.enderecos.push({estado:{nome:'São Paulo',id:'SP'},cidade:'Riosdafasd',cep:'3243242',tipoLogradouro:{nome:'rua',id:3},logradouro:'adsfdasfd dafs fdsa dfs'});

    $scope.addEnderecos = function() {
        $scope.enderecos.push({
            estado:$scope.estadoSelecionado,
            cidade:$scope.cidadeSelecionada,
            cep:$scope.cep,
            tipoLogradouro:$scope.tipoLogradouroSelecionado,
            logradouro:$scope.logradouro
        });
        $scope.estadoSelecionado ={};
        $scope.cidadeSelecionada ={};
        $scope.tipoLogradouroSelecionado ={};
        $scope.cep ="";
        $scope.logradouro="";
    };

    $scope.enderecosPorEstado = function() {
        //  return [{nome:'sp',quantidade:2},{nome:'rj',quantidade:4}]
        console.log('passei');

        var enderecosAgrupados =_.groupBy($scope.enderecos,function(endereco){return endereco.estado.nome}); 
        return _.map(enderecosAgrupados,function(endereco){return {'nome':endereco[0].estado.nome,quantidade:endereco.length}});
    };
}