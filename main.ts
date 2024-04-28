namespace SpriteKind {
    export const Title = SpriteKind.create()
}
function introduceGame () {
    scene.setBackgroundImage(assets.image`background`)
    banner = sprites.create(assets.image`banner`, SpriteKind.Title)
    banner.y += 8
    pause(3000)
    sprites.destroy(banner)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd5, function (sprite, location) {
    game.gameOver(true)
})
function placePlayer () {
    ducky = sprites.create(assets.image`ducky`, SpriteKind.Player)
    tiles.placeOnRandomTile(ducky, sprites.vehicle.roadTurn4)
    ducky.x += -7.5
    ducky.y += -7.5
    scene.cameraFollowSprite(ducky)
    controller.moveSprite(ducky)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd4, function (sprite, location) {
    game.gameOver(true)
})
function determineDifficulty () {
    game.splash("Welcome to Sky's Crossy Road Game!")
    game.splash("Level 1: Easy")
    game.splash("Level 2: Medium")
    game.splash("Level 3: Hard")
    level = game.askForNumber("What level of gameplay difficulty do you want?")
    return level
}
info.onCountdownEnd(function () {
    game.gameOver(false)
})
function buildScene (countdown: number) {
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`crossy_road`)
    info.setLife(3)
    info.startCountdown(countdown)
}
info.onLifeZero(function () {
    game.gameOver(false)
})
function calculateLevel (level: number) {
    while (level != 1 && (level != 2 && level != 3)) {
        game.splash("Sorry, but \"" + level + "\" is not a valid game level!")
        game.splash("Please enter the number 1, 2, or 3...")
        level = game.askForNumber("What level of gameplay difficulty do you want?")
    }
    if (level == 1) {
        countdown = 15
    } else if (level == 2) {
        countdown = 10
    } else if (level == 3) {
        countdown = 5
    }
    return countdown
}
function generateEnemies () {
    cars_left_to_right = [sprites.create(assets.image`red_car_left_to_right`, SpriteKind.Enemy), sprites.create(assets.image`blue_car_left_to_right`, SpriteKind.Enemy), sprites.create(assets.image`pink_car_left_to_right`, SpriteKind.Enemy)]
    cars_right_to_left = [sprites.create(assets.image`red_car_right_to_left`, SpriteKind.Enemy), sprites.create(assets.image`blue_car_right_to_left`, SpriteKind.Enemy), sprites.create(assets.image`pink_car_right_to_left`, SpriteKind.Enemy)]
    while (true) {
        random_car_left_to_right = cars_left_to_right._pickRandom()
        random_car_right_to_left = cars_right_to_left._pickRandom()
        random_car_left_to_right.setKind(SpriteKind.Enemy)
        random_car_right_to_left.setKind(SpriteKind.Enemy)
        tiles.placeOnRandomTile(random_car_left_to_right, sprites.vehicle.roadIntersection2)
        tiles.placeOnRandomTile(random_car_right_to_left, sprites.vehicle.roadIntersection4)
        random_car_left_to_right.setVelocity(100, 0)
        random_car_right_to_left.setVelocity(-100, 0)
        pause(500)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let random_car_right_to_left: Sprite = null
let random_car_left_to_right: Sprite = null
let cars_right_to_left: Sprite[] = []
let cars_left_to_right: Sprite[] = []
let ducky: Sprite = null
let banner: Sprite = null
let countdown = 0
let level = 0
introduceGame()
level = determineDifficulty()
countdown = calculateLevel(level)
buildScene(countdown)
placePlayer()
generateEnemies()
