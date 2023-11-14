class StartScreen {
    constructor () {}

    static start() {
        return `<div id="game-title">Minecraft 中文译名决定模拟器</div><div id="btn-game-start">START</div>`;
    }
}

class StoryScreen {
    constructor () {}

    static event(game) {
        return `<div id="player-target" class="animation-show-in">
            ${PlayerTargetComponent.targets(game.player)}
        </div>
        <div id="event"></div>`;
    }

    static chapter(chapterData) {
        return `<div id="chapter" class="animation-show-in">${ChapterComponent.chapter(chapterData)}</div>`;
    }

    static dead(accuracy = 0, sense = 0, acceptability = 0) {
        return `<div id="dead" class="animation-show-in">${ChapterComponent.dead(accuracy, sense, acceptability)}</div>`;
    }
}