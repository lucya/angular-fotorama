var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
    var vm = this;

    var $fotoramaDiv = $('.fotorama').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');
    
    $('.fotorama').fotorama({
      width: 700,
      maxwidth: '100%',
      ratio: 16/9,
      allowfullscreen: false,
      dataAuto: false,
      nav: 'thumbs',
      click : true
    });

    $scope.show = function(){
        fotorama.load([
              {img: 'http://s.fotorama.io/1.jpg', thumb: '1-thumb.jpg'},
              {img: 'http://s.fotorama.io/2.jpg', thumb: '2-thumb.jpg'},
              {img: 'http://s.fotorama.io/3.jpg', thumb: '2-thumb.jpg'}
        ]);
    }
    $scope.show2 = function(){
        fotorama.load([
          {img: 'http://s.fotorama.io/4.jpg'},
          {img: 'http://s.fotorama.io/5.jpg'}
        ]);
    }
});