export interface Point {
    x: number;
    y: number;
}

export function areEqual(p1: Point, p2: Point) {
    return p1.x === p2.x && p1.y === p2.y;
}

export function encodePoint({ x, y }: Point) {
    return `${x},${y}`;
}

export function isInsideMap({ x, y }: Point, map: number[][]) {
    return x >= 0 && y >= 0 && x < map[0].length && y < map.length;
}
