class EventComponent {
    constructor() {}

    static meta(eventMeta) {
        return `<div class="meta">
            <div class="event-original">${eventMeta.original}</div>
            <div class="event-title">${eventMeta.title}</div>
            <div class="event-description">${eventMeta.description}</div>
        </div>`;
    }

    static option(optionData, index = 0) {
        return `<div class="option-item" data-index="${index}">
            <div class="title">${optionData.meta.title}</div>
            <div class="description">${optionData.meta.description}</div>
        </div>`;
    }

    static options(optionsData = []) {
        let str = '';
        for (let i = 0; i < optionsData.length; i++) {
            str += EventComponent.option(optionsData[i], i);
        }
        return str;
    }

    static select(optionsData = []) {
        return `<div class="select">${EventComponent.options(optionsData)}</div>`;
    }

    static choiceEvent(eventData) {
        return `${EventComponent.meta(eventData.meta) + EventComponent.select(eventData.options)}`;
    }
}

class PlayerTargetComponent {
    constructor() {}

    static targetItem(type, value) {
        if (value >  7) value =  7;
        if (value < -7) value = -7;

        let icons = {
            accuracy: 'checkCircleOutline',
            sense: 'lightbulbOnOutline',
            acceptability: 'forumOutline'
        }

        return `<div id="target-${type}" class="target-item value-${value}">
            <div class="arrow up"></div>
            <div class="icon">${Icon[icons[type]]()}</div>
            <div class="arrow down"></div>
        </div>`;
    }

    static targets(player) {
        let str = '';
        if (player.target_enable.accuracy     ) str += PlayerTargetComponent.targetItem('accuracy',      player.target.accuracy     );
        if (player.target_enable.sense        ) str += PlayerTargetComponent.targetItem('sense',         player.target.sense        );
        if (player.target_enable.acceptability) str += PlayerTargetComponent.targetItem('acceptability', player.target.acceptability);
        return str;
    }

    static targetChangeUp() {
        return Icon.chevronUp();
    }

    static targetChangeDown() {
        return Icon.chevronDown();
    }

    static targetChangeUpHeavy() {
        return Icon.chevronDoubleUp();
    }

    static targetChangeDownHeavy() {
        return Icon.chevronDoubleDown();
    }

    static targetChangeOverflow() {
        return Icon.nuke();
    }
}

class ChapterComponent {
    constructor() {}

    static icon(chapterData) {
        return `<div class="icon">${Icon[chapterData.icon]()}</div>`;
    }

    static meta(chapterData) {
        return `<div class="meta-chapter">${chapterData.meta.chapter}</div>
        <div class="meta-title">${chapterData.meta.title}</div>
        <div class="meta-description">${chapterData.meta.description}</div>
        <div class="chapter-next">点击任意位置以继续</div>`;
    }

    static chapter(chapterData) {
        return `${ChapterComponent.icon(chapterData) + ChapterComponent.meta(chapterData)}`;
    }

    static deadMeta(message) {
        return `<div class="meta-title">游戏结束</div>
        <div class="meta-description">${message}</div>
        <div class="chapter-next">点击任意位置以继续</div>`;
    }

    static deadIcon(accuracy = 0, sense = 0, acceptability = 0) {
        let str = '';
        let icons = {
            accuracy: 'checkCircleOutline',
            sense: 'lightbulbOnOutline',
            acceptability: 'forumOutline'
        }
        
        if (accuracy      == 1) str += `<div class="icon">${Icon[icons['accuracy']]()}</div>`;
        if (sense         == 1) str += `<div class="icon">${Icon[icons['sense']]()}</div>`;
        if (acceptability == 1) str += `<div class="icon">${Icon[icons['acceptability']]()}</div>`;

        return `<div class="icon-list">${str}</div>`;
    }

    static dead(accuracy = 0, sense = 0, acceptability = 0) {
        let value = (accuracy << 2) + (sense << 1) + acceptability;
        /**
         * 000: ???
         * 001: acceptability
         * 010: sense
         * 011: sense + acceptability
         * 100: accuracy
         * 101: accuracy + acceptability
         * 110: accuracy + sense
         * 111: all
         */
        const message = [
            '啊？',
            '玩家社区对您的译名很不满意，他们对官方译名已不抱希望。',
            '您的译名也许符合原文，但实在是太难懂了。',
            '您的译名实在令人费解，玩家社区强烈反对学习生僻字词。',
            '您犯下了太多的错误，已经达到了不可容忍的地步。',
            '您犯下了太多的错误，引发了玩家社区的强烈不满。',
            '您犯下了太多的错误，您的译名令人费解。',
            '为什么会变成这样呢？'
        ];

        console.log(value);

        return `${ChapterComponent.deadIcon(accuracy, sense, acceptability) + ChapterComponent.deadMeta(message[value])}`;
    }
}