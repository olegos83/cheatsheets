/**
 * ES6 module import.
 */
//import variables
import { varFromModule, varFromModule2, varFromModule3 } from './module.js';

console.log(varFromModule, varFromModule2, varFromModule3); //8 88 888

//import with renaming
import { ClassFromModule as ClassMod, functionFromModule as fnMod } from './module.js';

new ClassMod(); //"Class from module"
fnMod(); //"Function from module"

//import all module code as object
import * as Module from './module.js';

new Module.ClassFromModule2(); //"Class from module 2"
Module.functionFromModule2(); //"Function from module 2"
Module.functionFromModule3(); //"Function from module 3"

//import default exported code
import defaultVarFromModule from './module.js';

console.log(defaultVarFromModule); //"Default var from module"
