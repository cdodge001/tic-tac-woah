import AiTypes from "./AiTypes";
import { easyAi } from "./easyAi";

let Ai = {
    move(board, aiType){
        switch(aiType){
            case AiTypes.hard:
                break;
            default:
                return easyAi(board);
        }
    }
};

export default Ai;