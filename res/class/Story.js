class Story {
    constructor() {
        this.content = [];
        this.chapter = -1;
        this.chapter_now = {};
        this.events = undefined;
        this.event_now = undefined;
        this.choice_count = 0;

        this.link = {
            game: undefined,
            player: undefined
        };

        this.setStory();
    }

    setStory() {
        this.content = resource.getStory();
    }

    nextChapter() {
        this.chapter++;
        if (this.chapter >= this.content.length) return;

        this.chapter_now = this.content[this.chapter];
        this.choice_count = 0;

        if (this.chapter_now?.new_target != undefined) {
            this.link.player.target_enable[this.chapter_now.new_target] = true;
        }

        this.events = new Events(this.chapter_now.events, this.link.game, this.link.player);

        this.link.game.newTask('chapter_end');

        this.link.game.newTask(
            'chapter',
            [this.chapter_now]
        );

        this.link.game.newTask('event_perload');

        return this.next();
    }

    next() {
        this.choice_count++;
        if (this.chapter < 0 || this.events.list_filtered.length == 0) {
            return this.nextChapter();
        }

        let evt = this.events.getEvent();
        this.event_now = evt;

        if (this.chapter_now.choice_limit == this.choice_count) {
            this.events.filterOnlyRequire();
        }

        this.link.game.newTask(
            'next',
            [evt]
        );
        return evt;
    }

    choose(index) {
        if (this.event_now instanceof ChoiceEvent == false) return;
        let r = this.event_now.select(index);
        this.link.game.newTask(
            'selected_option',
            [index]
        );
        this.link.player.decided(r.meta_id, r.name);
        this.link.player.changeTargets(r.target_change);
        this.link.game.newTask('next_before');
    }
}