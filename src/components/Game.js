import React, { useEffect } from "react";
import { useState } from "react";
import Ai from "../ai/Ai";
import useSettings from "../contexts/settings/useSettings";
import { checkMatch } from "../helpers/checkMatch";
import GameTypes from "../helpers/GameTypes";
import ScreenTypes from "../helpers/ScreenTypes";
import Board from "./Board";

const Game = ({show, onGameOver}) => {
    let showClassName = "Game";
    let hideClassName = showClassName + " display-none";
    let initialDisplayClassName = show === ScreenTypes.GameScreen ? showClassName: hideClassName;

    const [displayClassName, setDisplayClassName] = useState(initialDisplayClassName);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [isGameOver, setGameOver] = useState(false);
    const [aiPlayer, setAiPlayer] = useState(null);
    const {
        state: {
            gameType,
            aiType
        }
    } = useSettings();
    const X = "X";
    const O = "O";

    function move(i){
        // copy the board
        const boardCopy = [...board];

        // if game match or occupied square, ignore move
        if(board[i] || isGameOver){
            return;
        } 
        
        // current player claims square
        boardCopy[i] = currentPlayer;

        // set the board
        setBoard(boardCopy);

        // check for match on latest move
        let gameMatch = checkMatch(boardCopy);
        if(gameMatch){
            if(gameMatch !== "Tie"){
                gameMatch += " wins!";
            }
            setGameOver(true);
            onGameOver(gameMatch)
        } else {
            // cycle to next player
            let nextPlayer = (currentPlayer === X) ? O : X;
            setCurrentPlayer(nextPlayer);
        }
    }

    function playerMove(i){
        if(gameType !== GameTypes.ai || currentPlayer !== aiPlayer){
            move(i);
        }
    }

    function resetBoard(){
        setGameOver(false);
        initAi();
        setBoard(Array(9).fill(null));
        setCurrentPlayer(X);
    }

    function initAi(){
        if((gameType === GameTypes.ai)){
            setAiPlayer(O);
        }
    }

    function moveAi(){
        if((gameType === GameTypes.ai)){
            setTimeout(() => {
                let aiChoice = Ai.move(board, aiType);
                move(aiChoice);
            }, 250);
        }
    }

    useEffect(() => {
        if(currentPlayer === aiPlayer){
            moveAi();
        }
    }, [currentPlayer]);

    useEffect(() => {
        resetBoard();
    }, [gameType]);

    useEffect(() => {
        let newDisplayClassName = show === ScreenTypes.GameScreen ? showClassName : hideClassName;
        setDisplayClassName(newDisplayClassName);
    }, [show]);

    return (
        <div
            className={displayClassName}
        >
            <Board 
                squares={board}
                onClick={playerMove}
            />
        </div>
    );
};

export default Game;

