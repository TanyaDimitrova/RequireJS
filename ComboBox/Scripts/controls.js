define(['jquery', 'handlebars'], function ($) {
    var ComboBox = (function () {

        function ComboBox(items) {
            if (!(this instanceof ComboBox)) {
                return new ComboBox(items);
            }
            this._items = items;
        };

        ComboBox.prototype.render = function render(template) {
            var $container = $('#combo-box-container')
                .addClass('collapsed');

            for (var i = 0; i < this._items.length; i++) {
                var item = $(template(this._items[i]));

                $container.append(item);
            }
            var $allPersons = $container.find(".person-item");
            $allPersons.hide()
                .first()
                .addClass('selected')
                .show();

            $container.on('click', ".person-item", function () {
                var $this = $(this);

                if ($container.hasClass('expanded')) {
                    $allPersons.find('.selected').removeClass('selected');
                    $allPersons.hide();
                    $this.addClass('selected')
                        .show();
                }

                if ($container.hasClass('collapsed')) {
                    $allPersons.show();
                }
            });

            return $container;
        };

        return ComboBox;
    }());

    return {
        ComboBox: ComboBox

    }
}());