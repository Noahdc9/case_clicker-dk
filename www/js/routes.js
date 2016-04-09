angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.caseClicker', {
      url: '/page1',
      views: {
        'side-menu21': {
          templateUrl: 'templates/caseClicker.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.moneyClicker', {
      url: '/page2',
      views: {
        'side-menu21': {
          templateUrl: 'templates/moneyClicker.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.inventory', {
      url: '/page3',
      views: {
        'side-menu21': {
          templateUrl: 'templates/inventory.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.shop', {
      url: '/page4',
      views: {
        'side-menu21': {
          templateUrl: 'templates/shop.html'
        }
      }
    })
        
      
    
      
        
    .state('login', {
      url: '/page5',
      templateUrl: 'templates/login.html'
    })
        
      
    
      
        
    .state('page', {
      url: '/page6',
      templateUrl: 'templates/page.html'
    })
        
      
    
      
        
    .state('menu.settings', {
      url: '/page13',
      views: {
        'side-menu21': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.trade', {
      url: '/page14',
      views: {
        'side-menu21': {
          templateUrl: 'templates/trade.html'
        }
      }
    })
        
      
    
      
        
    .state('menu.jackpot', {
      url: '/page15',
      views: {
        'side-menu21': {
          templateUrl: 'templates/jackpot.html'
        }
      }
    })
        
      
    
      
        
    .state('page2', {
      url: '/page7',
      templateUrl: 'templates/page2.html'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/page5');
  

  

});