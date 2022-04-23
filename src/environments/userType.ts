export interface User {
    nickname: string;
    password: string;
    level: number;
    online:boolean;
    inventory: Inventory;
  }
  export interface Inventory {
    coal: number;
    rock: number;
    iron: number;
    gold: number;
    crystals: number;
  }
  