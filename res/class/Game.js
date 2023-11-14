class Game {
    constructor() {
        this.config = {

        };
        this.task_list = [];
        this.task = undefined;
        this.in_task = false;
        this.player = undefined;
        this.story = undefined;

        this.bound_event = {
            chapter:         function() { return 0; },
            chapter_end:     function() { return 0; },
            change_target:   function() { return 0; },
            event_perload:   function() { return 0; },
            next:            function() { return 0; },
            next_before:     function() { return 0; },
            player_dead:     function() { return 0; },
            selected_option: function() { return 0; }
        };
    }

    /**
     * 绑定事件
     * @param {String} event 事件名称
     * @param {Function} action 事件过程
     * @returns {Function} 事件过程
     */
    bind(event, action = function() {}) {
        return this.bound_event[event] = action;
    }

    setPlayer(player) {
        player.link.game = this;
        this.player = player;
    }

    setStory(story) {
        story.link.game = this;
        story.link.player = this.player;
        this.story = story;
    }

    newTask(taskName, data = []) {
        if (this.task_list.length > 0) {
            if (this.task_list[this.task_list.length - 1].name == taskName) return;
        }
        this.task_list.push({
            name: taskName,
            data: data
        });
        console.log("[+] TASK: " + taskName)

        if (!this.in_task) this.execTask();
    }

    execTask(task = this.task?.name) {
        if (task != this.task?.name) return;
        if (this.task == undefined) {
            if (this.task_list.length > 0) {
                this.in_task = true;
                this.task = this.task_list.shift();
            } else {
                return;
            }
        }

        console.log("[>] TASK: " + this.task.name)

        let r = -1;
        if (this.bound_event[this.task.name] == undefined) {
            r = 0
        } else {
            r = this.bound_event[this.task.name](...this.task.data);
        }

        if (r == 0) {
            this.complateTask();
        } else {
            console.log("[<] TASK: " + this.task.name)
        }
    }

    complateTask(task = this.task?.name) {
        if (task != this.task?.name) return;
        console.log("[-] TASK: " + this.task.name)
        this.in_task = false;
        this.task = undefined;
        this.execTask();
    }

    weightedRandom(options) {
        let i;
    
        let weights = [];
    
        for (i = 0; i < options.length; i++) {
            options[i].weight = options[i]?.weight != undefined ? options[i].weight : 1;
            weights[i]        = options[i] .weight + (weights[i - 1] || 0);
        }
        
        let random = Math.random() * weights[weights.length - 1];
        
        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;
        
        return options[i];
    }
}