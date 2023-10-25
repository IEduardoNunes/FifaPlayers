class Player {
  constructor(name) {
    this.name = name;
  }
  pace = Number;
  shooting = Number;
  passing = Number;
  dribbling = Number;
  defense = Number;
  physical = Number;
}
class Haaland extends Player {
  constructor(name, position, team) {
    super(name);
    this.position = position;
    this.team = team;
    this.pace = 89;
    this.shooting = 91;
    this.passing = 65;
    this.dribbling = 80;
    this.defense = 49;
    this.physical = 87;
  }
}
class Neymar extends Player {
  constructor(name, position, team) {
    super(name);
    this.position = position;
    this.team = team;
    this.pace = 87;
    this.shooting = 83;
    this.passing = 85;
    this.dribbling = 93;
    this.defense = 37;
    this.physical = 61;
  }
}
class Messi extends Player {
  constructor(name, position, team) {
    super(name);
    this.position = position;
    this.team = team;
    this.pace = 81;
    this.shooting = 89;
    this.passing = 90;
    this.dribbling = 94;
    this.defense = 34;
    this.physical = 64;
  }
}
class CristianoRonaldo extends Player {
  constructor(name, position, team) {
    super(name);
    this.position = position;
    this.team = team;
    this.pace = 81;
    this.shooting = 92;
    this.passing = 78;
    this.dribbling = 85;
    this.defense = 34;
    this.physical = 75;
  }
}
class ViniJunior extends Player {
  constructor(name, position, team) {
    super(name);
    this.position = position;
    this.team = team;
    this.pace = 95;
    this.shooting = 79;
    this.passing = 74;
    this.dribbling = 90;
    this.defense = 29;
    this.physical = 67;
  }
}
class Mbappe extends Player {
  constructor(name, position, team) {
    super(name);
    this.position = position;
    this.team = team;
    this.pace = 98;
    this.shooting = 89;
    this.passing = 80;
    this.dribbling = 93;
    this.defense = 37;
    this.physical = 79;
  }
}
