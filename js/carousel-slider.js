/**
 * Created by Onuf.Yur on 19.09.2017.
 */
var app = angular.module('carouselSlider', []);
app.controller('carouselSliderCtrl', function($scope) {
    $('#myCarousel').carousel({
        interval: 10000
    })

    $('#myCarousel').on('slid.bs.carousel', function() {
        //alert("slid");
    });

});


