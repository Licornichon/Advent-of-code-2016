var input = "R5, R4, R2, L3, R1, R1, L4, L5, R3, L1, L1, R4, L2, R1, R4, R4, L2, L2, R4, L4, R1, R3, L3, L1, L2, R1, R5, L5, L1, L1, R3, R5, L1, R4, L5, R5, R1, L185, R4, L1, R51, R3, L2, R78, R1, L4, R188, R1, L5, R5, R2, R3, L5, R3, R4, L1, R2, R2, L4, L4, L5, R5, R4, L4, R2, L5, R2, L1, L4, R4, L4, R2, L3, L4, R2, L3, R3, R2, L2, L3, R4, R3, R1, L4, L2, L5, R4, R4, L1, R1, L5, L1, R3, R1, L2, R1, R1, R3, L4, L1, L3, R2, R4, R2, L2, R1, L5, R3, L3, R3, L1, R4, L3, L3, R4, L2, L1, L3, R2, R3, L2, L1, R4, L3, L5, L2, L4, R1, L4, L4, R3, R5, L4, L1, L1, R4, L2, R5, R1, R1, R2, R1, R5, L1, L3, L5, R2";

var directions = input.split(", ");
//pos[0] is horizontal, pos[1] is vertical
var pos = [0, 0];
var orientation = 0;

for (var i = 0; i < directions.length; i++) {
//for (var i = 0; i < 5; i++) {
	if (directions[i][0] == 'R') orientation += 1;
	else orientation -= 1;
	
	var distance = parseInt(directions[i].substr(1));
	//Current coordinates saved
	var h = pos[0],
		 v = pos[1];
	
	switch (orientation % 4) {
		case 0:
			pos[1] += distance;
			break;
		case 1:
			pos[0] += distance;
			break;
		case 2:
			pos[1] -= distance;
			break;
		case 3:
			pos[0] -= distance;
			break;
	}
	
}

var distanceFromStartToFinish = Math.abs(pos[0]) + Math.abs(pos[1])
console.log("Final position [" + pos + "] is " + distanceFromStartToFinish + " blocks away.")
