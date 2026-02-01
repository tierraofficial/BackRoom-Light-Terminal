import { GameManager } from './GameManager.js';
import { Renderer } from './Renderer.js';
import { Raycaster } from './Raycaster.js';

window.onload = () => {
    // 1. Init 2D Game
    const renderer = new Renderer();
    const game = new GameManager(renderer);
    game.init();

    // 2. Init 3D Raycaster
    const raycaster = new Raycaster('raycaster-canvas');
    raycaster.init(game.gridSystem);

    // 3. Connect them
    game.setRaycaster(raycaster);

    // Debug
    window.focus();
    console.log("Main Loaded and Initialized (Split View)");

    renderer.draw(game.gridSystem, game.player, game.spirit);
};
