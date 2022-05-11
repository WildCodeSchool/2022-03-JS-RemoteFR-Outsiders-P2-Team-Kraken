const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  static table = "player";

  insert(player) {
    return this.connection.query(
      `insert into ${PlayerManager.table} (pseudo, score) values (?, ?)`,
      [player.pseudo, player.score]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${PlayerManager.table} set pseudo = ? where id = ?`,
      [player.pseudo, player.id]
    );
  }

  findTop10() {
    return this.connection.query(
      `select * from  ${this.table} ORDER BY score DESC LIMIT 10`
    );
  }
}

module.exports = PlayerManager;
