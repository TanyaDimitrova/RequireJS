define(["jquery", 'handlebars'], function ($) {

    var ComboBox = (function () {

        function ComboBox(items) {
            // Check if the function is used properly
            if (!(this instanceof ComboBox)) {
                return new ComboBox(items);
            }
            this.people = items;
        };

        ComboBox.prototype.render = function render(template) {
            var self = this;
            require(["jquery"], function ($) {

                var $container = $('#combo-box-container');
                $container.attr('data-collapsed', 'true');

                $container.on("click", ".person-item", function () {
                    var $this = $(this);
                    var isCollapsed = $container.attr('data-collapsed'); 
                    if (isCollapsed == "true") {
                        //only a single item, the selected item, is visible
                        $allPersons.show();
                        $allPersons.find('.selected').removeClass('selected');
                        $container.attr('data-collapsed', false);

                    }
                    else {
                        $allPersons.hide();
                        $this.addClass('selected').show();
                        $container.attr('data-collapsed', true);
                    }
                });

                var compiledTemplate = Handlebars.compile(template);

                self.people.forEach(function (person) {
                    // Compile template for each person
                    $(compiledTemplate(person)).appendTo($container);
                });

                var $allPersons = $container.find(".person-item");
                $allPersons.hide()
                    .first()
                    .addClass('selected')
                    .show();

                return $container;
            });
        };

        return ComboBox;
    }());

    return {
        ComboBox: ComboBox

    }
}());