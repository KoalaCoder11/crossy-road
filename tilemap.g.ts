// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "crossy_road":
            case "level1":return tiles.createTilemap(hex`100010000608071112131415161718191a060807010303030303030303030303030303020a0a0a0a0a0a0a0a0a0a0a0a0a0a0a10060808080808080808080808080808070f0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a100f0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060808080808080808080808080808070a0a0a0a0a0a0a0a0a0a0a0a0a0a0a100f0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a06080808080808080808080808080807010303030303030303030303030303020f0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a060808080808080b0c08080808080807040909090909090d0e0909090909090501030303030303030303030303030302`, img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile7,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,sprites.skillmap.islandTile0,sprites.skillmap.islandTile2,sprites.skillmap.islandTile1,sprites.skillmap.islandTile4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection4,sprites.builtin.crowd0,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
