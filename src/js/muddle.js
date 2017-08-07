function add_trigger(trigger_id, modal_id) {
    document.getElementById(trigger_id).addEventListener('click', function() {
        muddle.open(modal_id);
    });
}

var muddle = (function() {
    var self = {};

    window.addEventListener('load', function() {
        for ( var elementClass of ['muddle-overlay', 'md-close'] ) {
            document.getElementsByClassName(elementClass)[0].onclick = function() {
                self.close();
            };
        };
    });

    self.open = function(modal_id) {
        muddle.close();

        var modal = document.getElementById(modal_id);
        modal.classList.add('md-active');
        document.body.classList.add('md-active');
    };

    self.close = function() {
        var modal = document.getElementsByClassName('md-active')[1];
        if (modal !== undefined) {
            modal.classList.remove('md-active');
            document.body.classList.remove('md-active');
        }
    };

    return self;
}());

for ( var project of projects ) {
    add_trigger('ov-' + project.id, 'modal-'+ project.id);
}
