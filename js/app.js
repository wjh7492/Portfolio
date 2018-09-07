var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "wjh7492@naver.com";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "조원희";
		$rootScope.MenuList = [
			"안녕하세요 저는 모든일에 최선을 다하는 한예나입니다.",
			"항상 긍적인 마인드로 문제를 해결해나가겠습니다.",
		    "감사합니다.",
		    "보유기술은 아래와 같습니다.",
			"- JAVA : Spring, JSP.Servlet",
			"- Front end: HTML & CSS & Javascript",
			"- Database : mysql",
			"- OS: Linux, Windows"
			];
		
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team1.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/movie.PNG",
			 img2: "team/movie.PNG",
			 type : true, 
			 contents: ""
			},{
			 path: "portfolio/",
			 url : "personal/movinity.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/movie.PNG",
			 img2: "personal/movinity.gif",
			 type : false,
			 contents: ""
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/MMR.PNG",
			 img2: "personal/MMR.gif",
			 type : false,
			 contents: ""
			},{
			 path: "",
			 url : "https://www.youtube.com/embed/sq5tDBYd_aw", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/Media.PNG",
			 img2: "personal/Media.PNG",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
