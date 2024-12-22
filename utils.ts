export interface Point {
    x: number;
    y: number;
}

export function areAdjacent(p1?: Point, p2?: Point) {
    return !!p1 && !!p2 && (p1.x === p2.x && Math.abs(p1.y - p2.y) === 1 || Math.abs(p1.x - p2.x) === 1 && p1.y === p2.y);
}

export function areEqual(p1?: Point, p2?: Point) {
    return !!p1 && !!p2 && p1.x === p2.x && p1.y === p2.y;
}

export function encodePoint({ x, y }: Point) {
    return `${x},${y}`;
}

export function getAdjacentPoints(point: Point) {
    return [
        { x: point.x - 1, y: point.y },
        { x: point.x + 1, y: point.y },
        { x: point.x, y: point.y - 1 },
        { x: point.x, y: point.y + 1 },
    ];
}

export function getValue<T>(point: Point, map: T[][]) {
    return map[point.y][point.x];
}

export function isInsideMap<T>({ x, y }: Point, map: T[][]) {
    return x >= 0 && y >= 0 && x < map[0].length && y < map.length;
}
