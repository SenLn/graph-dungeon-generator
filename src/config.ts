import { InputDungeon } from "./types";

export const TILE_SIZE = 16;

export const TILE_VOID_START = 1;
export const TILE_VOID_ROOM = 2;
export const TILE_VOID_END = 3;
export const TILE_WALL = 4;
export const TILE_CORRIDOR = 5;

export const TILE_VOID_START_COLOR = "rgba(0,127,0)";
export const TILE_VOID_ROOM_COLOR = "rgba(0,0,127)";
export const TILE_VOID_END_COLOR = "rgba(127,0,0)";
export const TILE_WALL_COLOR = "rgba(0,0,0)";
export const TILE_CORRIDOR_COLOR = "rgba(127,127,0)";

export const DUNGEON_WIDTH_UNIT = 128;
export const DUNGEON_HEIGHT_UNIT = 128;

export const ROOM_ITERATIONS_MAX = 20;
export const ROOM_DISTANCE_MIN = 3;
export const ROOM_DISTANCE_MAX = 5;

export const CORRIDOR_ITERATIONS_MAX = 20;
export const CORRIDOR_WIDTH_MIN = 4;
export const CORRIDOR_WIDTH_MAX = 4;

export const TEST_DUNGEON: InputDungeon = {
  start: {
    id: "start",
    type: "start",
    children: ["A", "G"],
  },
  A: {
    id: "A",
    type: "room",
    children: ["B", "C"],
  },
  G: {
    id: "G",
    type: "room",
    children: [],
  },
  B: {
    id: "B",
    type: "room",
    children: ["D", "E"],
  },
  C: {
    id: "C",
    type: "room",
    children: [],
  },
  D: {
    id: "D",
    type: "room",
    children: ["F", "end"],
  },
  E: {
    id: "E",
    type: "room",
    children: [],
  },
  F: {
    id: "F",
    type: "room",
    children: [],
  },
  end: {
    id: "end",
    type: "end",
    children: [],
  },
};
