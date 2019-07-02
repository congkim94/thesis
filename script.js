
(function() {
    var hamburger = {
        navToggle: document.querySelector('.menu-toggle'),
        nav: document.querySelector('.box'),
        doToggle: function(e) {
            
            this.navToggle.classList.toggle('active');
            this.nav.classList.toggle('active');
        }
    };
        hamburger.nav.addEventListener('click', function(e) {
        hamburger.doToggle(e);
    });
    hamburger.navToggle.addEventListener('click', function(e) {
        hamburger.doToggle(e);
    });

}());


