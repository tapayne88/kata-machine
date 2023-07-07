function two_crystal_balls(breaks: boolean[]): number {
    let found = false;
    let ind = 0;
    let jump = Math.floor(Math.sqrt(breaks.length));

    while (!found && ind < breaks.length) {
        const val = breaks[ind];

        if (val === true) {
            if (jump === 1) {
                found = true;
            } else {
                ind = ind - jump;
                jump = 1;
            }
        } else {
            ind = ind + jump;
        }
    }

    return found ? ind : -1;
}

function two_crystal_balls2(breaks: boolean[]): number {
    let ind;
    const jump = Math.floor(Math.sqrt(breaks.length));

    for (ind = jump; ind < breaks.length; ind += jump) {
        if (breaks[ind] === true) {
            break;
        }
    }

    for (let i = ind - jump; i <= ind; i++) {
        if (breaks[i] === true) {
            return i;
        }
    }

    return -1;
}

export default two_crystal_balls2;
