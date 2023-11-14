class Player {
    constructor() {
        this.target        = {
            // 准确性
            accuracy: 0,
            // 达意性
            sense: 0,
            // 接受度
            acceptability: 0,
            // 稳定性（隐藏）
            stability: 0
        };
        this.target_enable = {
            accuracy:      false,
            sense:         false,
            acceptability: false,
            accuracy:      false
        }
        this.is_dead       = false;
        this.event_history = [];
        this.translate     = {};
        this.link          = {
            game: undefined
        };
    }

    getTranslate(metaId) {
        return this.translate[metaId];
    }

    decided(metaId, name) {
        if (this.translate[metaId] == undefined) {
            this.event_history.push({
                type: 'new',
                name: name
            });
        } else {
            this.event_history.push({
                type: 'edit',
                name: name,
                last_name: this.translate[metaId]
            });
        }
        this.translate[metaId] = name;
    }

    changeTarget(type, value = 0) {
        if (this.target[type] == undefined) return;
        this.target[type] += value;
        // this.link.game.newTask('change_target');
        this.checkTargets();
        return this.target;
    }

    changeTargets(obj) {
        if (obj?.accuracy      != undefined) this.target.accuracy      += obj.accuracy;
        if (obj?.sense         != undefined) this.target.sense         += obj.sense;
        if (obj?.acceptability != undefined) this.target.acceptability += obj.acceptability;
        if (obj?.stability     != undefined) this.target.stability     += obj.stability;
        this.link.game.newTask(
            'change_target',
            [
                obj,
                this.target
            ]
        );
        this.checkTargets();
        return this.target;
    }

    checkTargets() {
        if (this.target.accuracy      > 7) this.target.accuracy      = 7;
        if (this.target.sense         > 7) this.target.sense         = 7;
        if (this.target.acceptability > 7) this.target.acceptability = 7;
        if (
            this.target.accuracy      < -7 ||
            this.target.sense         < -7 ||
            this.target.acceptability < -7
        ) {
            return this.dead();
        }
    }

    dead() {
        this.is_dead = true;
        this.link.game.newTask(
            'player_dead',
            [
                this.target.accuracy      < -7 ? 1 : 0,
                this.target.sense         < -7 ? 1 : 0,
                this.target.acceptability < -7 ? 1 : 0
            ]
        );
    }
}