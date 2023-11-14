class Resource {
    constructor() {
        this.data = {
            story: []
        };
    }

    getStory() {
        return JSON.parse(JSON.stringify(this.data.story));
    }

    // getItem(id) {
    //     return JSON.parse(JSON.stringify(this.data.item.find((e) => {
    //         return e.id == id;
    //     })));
    // }

    // getLootTable(id) {
    //     return this.data.loottable[id];
    // }
}