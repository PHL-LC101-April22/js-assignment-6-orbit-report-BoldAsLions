import { Satellite } from './satellite';
export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }

	isSpaceDebris(): boolean = true;
    if (Satellite = "Space Debris") {
      this.type = true;
    }
    else {
      return (false)

    }



// TODO 3a: fix isSpaceDebris check
