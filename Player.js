class Player {
    constructor() {
        this.index = null;
        this.name = null;
    }
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }
    update(name) {
        var playerIndex = "players/playerkey" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
        });
    }
    static playerinfo() {
        var playerinfo = database.ref("players");
        playerinfo.on('value', (data) => {
            allplayers = data.val();
        })
    }
}