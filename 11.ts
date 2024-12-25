import { memoize } from "./utils";

const INPUT = '7568 155731 0 972 1 6919238 80646 22';
const STONES = INPUT.split(' ').map(value => parseInt(value));

const countStonesAfterEvolutions = memoize((stone: number, evolutions: number): number => {
    if (evolutions === 0) {
        return 1;
    }

    if (stone === 0) {
        return countStonesAfterEvolutions(1, evolutions - 1);
    } else if (stone.toString().length % 2 === 0) {
        return countStonesAfterEvolutions(parseInt(stone.toString().slice(0, stone.toString().length / 2)), evolutions - 1) +
        countStonesAfterEvolutions(parseInt(stone.toString().slice(stone.toString().length / 2)), evolutions - 1);
    } else {
        return countStonesAfterEvolutions(stone * 2024, evolutions - 1);
    }
});

console.log('Stones after 25 blinks:', STONES.reduce((sum, stone) => sum + countStonesAfterEvolutions(stone, 25), 0));
console.log('Stones after 75 blinks:', STONES.reduce((sum, stone) => sum + countStonesAfterEvolutions(stone, 75), 0));
