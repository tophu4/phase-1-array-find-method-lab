// code your solution here

function superbowlWin(objects) {
    const element = objects.find(obj => (obj.result === "W") ? obj : undefined);
    return (element === undefined) ? element : element.year;
}
