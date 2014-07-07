(function () {

    require.config({
        paths: {
            jquery: "libs/jquery-2.1.1",
            "handlebars": "libs/handlebars-v1.3.0",
            "controls": "controls"
        }
    });

    require(["jquery", 'controls'], function ($, controls) {
        var people = [{

            id: 1,
            name: "Doncho Minkov",
            age: 18,
            avatarUrl: "../images/doncho.jpg"
        }, {
            id: 2,
            name: "Georgi Georgiev",
            age: 19,
            avatarUrl: "../images/joro.jpg"
        },
        {
            id: 3,
            name: "Ivaylo Kenov",
            age: 24,
            avatarUrl: "../images/ivo.png"
        }];

        var comboBox = controls.ComboBox(people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        var container = $('#combo-box-container');
        container.innerHTML = comboBoxHtml;
    });

}());

