import * as _ from 'lodash';
import { isNumber } from 'util';

const checkIfNumberIsValid = (input: number) => {
    if (!_.isNumber(input)) {
        console.log("Hello Fucker!! Your shit is working!!")
    }
    else {
        console.log("check the shit you wrote!!")
    }
};


export const converter = (input: number) => {
    checkIfNumberIsValid(input)
}
