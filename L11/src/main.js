// Jacqueline Gracey
// Created: 4/24/24
// Phaser: 3.70.0
//
// 
//
// A template for building a monster using a series of assets from
// a sprite atlas.
// 
// Art assets from Kenny Assets "Monster Builder Pack" set:
// https://kenney.nl/assets/monster-builder-pack

"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 800,
    height: 600,
    scene: [movement],
    fps: { forceSetTimeOut: true, target: 30 }
}

const game = new Phaser.Game(config);