const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    path: Point[],
    seen: boolean[][],
): boolean {
    // base case: off map
    if (
        curr.x < 0 ||
        curr.y < 0 ||
        curr.x > maze[0].length - 1 ||
        curr.y > maze[0].length - 1
    ) {
        return false;
    }
    // base case: wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // base case: end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }
    // base case: been here
    if (seen[curr.y][curr.x]) {
        return false;
    }

    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < directions.length; ++i) {
        const [x, y] = directions[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, path, seen)
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let path: Point[] = [];

    let seen: boolean[][] = [];
    for (let i = 0; i < maze.length; ++i) {
        seen[i] = new Array(maze[0].length).fill(false);
    }

    walk(maze, wall, start, end, path, seen);

    return path;
}
