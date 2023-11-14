let resource = new Resource();
resource.data.story = db_story;

let game = new Game();

let player = new Player();
game.setPlayer(player);

let story = new Story();
game.setStory(story);

$(document).ready(main);

function main() {
    $('#game').html(StartScreen.start());

    game.bind('chapter', function(e) {
        $('#game').html(StoryScreen.chapter(e));

        $('#game').on('click', '#chapter.ready', function() {
            $('#chapter').attr('class', 'hide');

            setTimeout(function() {
                game.complateTask('chapter');
            }, 2000);
        });

        setTimeout(function() {
            $('#chapter').attr('class', 'ready');
        }, 2000);

        return -1;
    });

    game.bind('chapter_end', function() {
        $('#player-target').addClass('animation-hide');

        setTimeout(function() {
            game.complateTask('chapter_end');
        }, 700);

        return -1;
    });

    game.bind('event_perload', function() {
        $('#game').html(StoryScreen.event(game));

        setTimeout(function() {
            game.complateTask('event_perload');
        }, 700);

        return -1;
    });

    game.bind('next', function(e) {
        $('#event').html(EventComponent.choiceEvent(e.data));
        $('#event').attr('class', 'animation-show-in');

        return 0;
    });

    game.bind('next_before', function() {
        $('#event').attr('class', 'animation-hide');

        story.next();

        setTimeout(function() {
            game.complateTask('next_before');
        }, 700);

        return -1;
    });

    game.bind('selected_option', function(index) {
        $('#event .select').addClass('animation-hide');
        $('#event .option-item').eq(index).addClass('selected');
        
        return 0;
    });

    game.bind('change_target', function(value, now) {
        if (value?.accuracy      != undefined) targetArrow('accuracy',      value.accuracy,      now.accuracy     );
        if (value?.sense         != undefined) targetArrow('sense',         value.sense,         now.sense        );
        if (value?.acceptability != undefined) targetArrow('acceptability', value.acceptability, now.acceptability);

        changeTarget('accuracy',      now.accuracy     );
        changeTarget('sense',         now.sense        );
        changeTarget('acceptability', now.acceptability);

        $('#player-target').attr('class', 'show');

        setTimeout(function() {
            $('.target-item .arrow').html('');
            $('#player-target').attr('class', '');
            game.complateTask('change_target');
        }, 700);

        return -1;
    });

    game.bind('player_dead', function(a, b, c) {
        $('#game>*').addClass('animation-hide');

        setTimeout(function() {
            $('#game').html(StoryScreen.dead(a, b, c));
        }, 700);

        return -1;
    });




    $('#game').on('click', '#btn-game-start', function() {
        story.next();
        $('#game-title, #btn-game-start').addClass('animation-hide');
    });

    $('#game').on('click', '.option-item', function() {
        let index = $(this).data('index');
        story.choose(index);
    });
}

function targetArrow(type, value, now) {
    let icon = '';

    if (Math.abs(value) > 9) {
        icon = PlayerTargetComponent.targetChangeOverflow();
    } else if (value > 1) {
        icon = PlayerTargetComponent.targetChangeUpHeavy();
    } else if (value == 1) {
        icon = PlayerTargetComponent.targetChangeUp();
    } else if (value == -1) {
        icon = PlayerTargetComponent.targetChangeDown();
    } else if (value < -1) {
        icon = PlayerTargetComponent.targetChangeDownHeavy();
    }

    if (now < -7 && value < 0) {
        $(`#target-${type} .down`).html(PlayerTargetComponent.targetChangeOverflow());
    } else if (value > 0) {
        $(`#target-${type} .up`).html(icon);
    } else if (value < 0) {
        $(`#target-${type} .down`).html(icon);
    }
}

function changeTarget(type, value) {
    if (value >  7) value =  7;
    if (value < -7) value = -7;

    $(`#target-${type}`).removeClass('value-7 value-6 value-5 value-4 value-3 value-2 value-1 value-0 value--1 value--2 value--3 value--4 value--5 value--6 value--7');
    $(`#target-${type}`).addClass('value-' + value);
}