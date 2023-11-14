class Event {
    constructor() {
        this.data = {
            type: '',
            id: '',
            conditions: [],
            weight: 1,
            require: false
        };
        this.link = {
            game: undefined,
            player: undefined
        };
    }
}

class ChoiceEvent extends Event {
    constructor(obj) {
        super();
        this.data = {
            ...this.data,
            ...{
                meta: {
                    title: '',
                    description: '',
                    image: '',
                    original: '',
                    meta_id: ''
                },
                options: []
            },
            ...obj
        };
    }

    select(index) {
        return {
            meta_id: this.data.meta.meta_id,
            name: this.data.options[index].meta?.meta_name ? this.data.options[index].meta.meta_name : this.data.options[index].meta.title,
            target_change: this.data.options[index].target_change
        };
    }
}

class Events {
    constructor(evts = [], game, player) {
        this.list = evts;
        this.list_filtered = [];
        this.link = {
            game: game,
            player: player
        };

        this.checkEvent();
    }

    checkEvent() {
        this.list.forEach(e => {
            let ct = true;
            if (e.conditions != undefined && e.conditions != []) {
                for (let i = 0; i < e.conditions.length; i++) {
                    ct = new Condition(
                        e.conditions[i],
                        this.link.game,
                        this.link.player
                    ).test();
                    if (!ct) break;
                }
            }
            if (ct) {
                this.list_filtered.push(e);
            }
        });
    }

    getEvent() {
        let evt;
        if (this.list_filtered.length == 0) {
            return;
        } else if (this.list_filtered.length == 1) {
            evt = this.list_filtered.shift();
        } else {
            evt = this.link.game.weightedRandom(this.list_filtered);
            let index = this.list_filtered.findIndex(function (e) {return e.id == evt.id;});
            this.list_filtered.splice(index, 1);
        }
        if (evt == undefined) return;
        
        switch (evt.type) {
            case 'choice':
                return new ChoiceEvent(evt);
        
            default:
                return;
        }
    }

    filterOnlyRequire() {
        this.list_filtered = this.list_filtered.filter(function(e) {
            return e?.require;
        });
    }
}

class Condition {
    constructor(obj, game, player) {
        this.data = {
            ...{
                type: ""
            },
            ...obj
        }
        this.link = {
            game: game,
            player: player
        };
    }

    test() {
        let r = this.false;
        switch (this.data.type) {
            case 'check_translate':
                r = this.link.player.getTranslate(this.data.value.meta_id);
                if (r != undefined && r == this.data.value.name) {
                    return true;
                } {
                    return false;
                }

            case 'check_translate_not':
                r = this.link.player.getTranslate(this.data.value.meta_id);
                if (r == undefined || r != this.data.value.name) {
                    return true;
                } {
                    return false;
                }
        
            default:
                return false;
        }
    }
}