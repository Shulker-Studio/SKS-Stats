"use strict";
/// <reference path="e:\Dev/dts/llaids/src/index.d.ts"/> 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
ll.registerPlugin(
/* name */ "SKS-Stats", 
/* introduction */ "", 
/* version */ [0, 0, 1], 
/* otherInformation */ {});
function a() { }
exports.a = a;
function debug() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    if (DEBUG) {
        log.apply(void 0, __spreadArray(["[DEBUG]"], data, false));
    }
}
function getLevelName() {
    var r = 'SKS';
    var data = File.readFrom(SERVER_PROPERTIES_PATH);
    if (!data) {
        log('server.properties读取失败');
        return r;
    }
    var lines = data.split(/\r\n|\n/);
    for (var i = 0; i < lines.length - 1; i++) {
        var str = lines[i];
        var n = str.indexOf('#');
        if (n >= 0) {
            str = str.slice(0, n);
        }
        if (str.includes('=')) {
            //logger.info(i + '-->' + str)
            var kv = str.split('=');
            if (kv[0].trim() === 'level-name')
                r = kv[1].trim();
        }
    }
    debug(r);
    return r;
}
var SERVER_PROPERTIES_PATH = './server.properties';
var levelName = getLevelName();
//const CONFIG_PATH = './plugins/SKS/stats/config.json'
var DATA_PATH = "./worlds/".concat(levelName, "/stats/");
var DEBUG = true;
var playersMap = new Map();
var StatsType;
(function (StatsType) {
    StatsType[StatsType["Mined"] = 0] = "Mined";
    StatsType[StatsType["Broken"] = 1] = "Broken";
    StatsType[StatsType["Crafted"] = 2] = "Crafted";
    StatsType[StatsType["Used"] = 3] = "Used";
    StatsType[StatsType["Picked_Up"] = 4] = "Picked_Up";
    StatsType[StatsType["Dropped"] = 5] = "Dropped";
    StatsType[StatsType["Killed"] = 6] = "Killed";
    StatsType[StatsType["Killed_By"] = 7] = "Killed_By";
})(StatsType || (StatsType = {}));
var CustomInteractType;
(function (CustomInteractType) {
    CustomInteractType[CustomInteractType["anvil"] = 0] = "anvil";
    CustomInteractType[CustomInteractType["beacon"] = 1] = "beacon";
    CustomInteractType[CustomInteractType["blast_furnace"] = 2] = "blast_furnace";
    CustomInteractType[CustomInteractType["brewingstand"] = 3] = "brewingstand";
    CustomInteractType[CustomInteractType["campfire"] = 4] = "campfire";
    CustomInteractType[CustomInteractType["cartography_table"] = 5] = "cartography_table";
    CustomInteractType[CustomInteractType["crafting_table"] = 6] = "crafting_table";
    CustomInteractType[CustomInteractType["furnace"] = 7] = "furnace";
    CustomInteractType[CustomInteractType["grindstone"] = 8] = "grindstone";
    CustomInteractType[CustomInteractType["lectern"] = 9] = "lectern";
    CustomInteractType[CustomInteractType["loom"] = 10] = "loom";
    CustomInteractType[CustomInteractType["smithing_table"] = 11] = "smithing_table";
    CustomInteractType[CustomInteractType["smoker"] = 12] = "smoker";
    CustomInteractType[CustomInteractType["stonecutter"] = 13] = "stonecutter";
})(CustomInteractType || (CustomInteractType = {}));
var CustomInspectType;
(function (CustomInspectType) {
    CustomInspectType[CustomInspectType["dispenser"] = 0] = "dispenser";
    CustomInspectType[CustomInspectType["dropper"] = 1] = "dropper";
    CustomInspectType[CustomInspectType["hopper"] = 2] = "hopper";
})(CustomInspectType || (CustomInspectType = {}));
var CustomOpenType;
(function (CustomOpenType) {
    CustomOpenType[CustomOpenType["barrel"] = 0] = "barrel";
    CustomOpenType[CustomOpenType["chest"] = 1] = "chest";
    CustomOpenType[CustomOpenType["enderchest"] = 2] = "enderchest";
    CustomOpenType[CustomOpenType["shulker_box"] = 3] = "shulker_box";
})(CustomOpenType || (CustomOpenType = {}));
var CustomCleanType;
(function (CustomCleanType) {
    CustomCleanType[CustomCleanType["armor"] = 0] = "armor";
    CustomCleanType[CustomCleanType["banner"] = 1] = "banner";
    CustomCleanType[CustomCleanType["shulker_box"] = 2] = "shulker_box";
})(CustomCleanType || (CustomCleanType = {}));
var CustomTimeType;
(function (CustomTimeType) {
    CustomTimeType[CustomTimeType["sneak"] = 0] = "sneak";
    CustomTimeType[CustomTimeType["play"] = 1] = "play";
})(CustomTimeType || (CustomTimeType = {}));
var CustomSinceTimeType;
(function (CustomSinceTimeType) {
    CustomSinceTimeType[CustomSinceTimeType["death"] = 0] = "death";
    CustomSinceTimeType[CustomSinceTimeType["rest"] = 1] = "rest";
})(CustomSinceTimeType || (CustomSinceTimeType = {}));
var CustomKillType;
(function (CustomKillType) {
    CustomKillType[CustomKillType["mobs"] = 0] = "mobs";
    CustomKillType[CustomKillType["player"] = 1] = "player";
})(CustomKillType || (CustomKillType = {}));
var CustomMoveType;
(function (CustomMoveType) {
    CustomMoveType[CustomMoveType["boat"] = 0] = "boat";
    CustomMoveType[CustomMoveType["aviate"] = 1] = "aviate";
    CustomMoveType[CustomMoveType["horse"] = 2] = "horse";
    CustomMoveType[CustomMoveType["minecart"] = 3] = "minecart";
    CustomMoveType[CustomMoveType["pig"] = 4] = "pig";
    CustomMoveType[CustomMoveType["strider"] = 5] = "strider";
    CustomMoveType[CustomMoveType["climb"] = 6] = "climb";
    CustomMoveType[CustomMoveType["crouch"] = 7] = "crouch";
    CustomMoveType[CustomMoveType["fall"] = 8] = "fall";
    CustomMoveType[CustomMoveType["fly"] = 9] = "fly";
    CustomMoveType[CustomMoveType["sprint"] = 10] = "sprint";
    CustomMoveType[CustomMoveType["swim"] = 11] = "swim";
    CustomMoveType[CustomMoveType["walk"] = 12] = "walk";
    CustomMoveType[CustomMoveType["walk_on_water"] = 13] = "walk_on_water";
    CustomMoveType[CustomMoveType["walk_under_water"] = 14] = "walk_under_water";
})(CustomMoveType || (CustomMoveType = {}));
var CustomDamageType;
(function (CustomDamageType) {
    CustomDamageType[CustomDamageType["absorbed"] = 0] = "absorbed";
    CustomDamageType[CustomDamageType["blocked_by_shield"] = 1] = "blocked_by_shield";
    CustomDamageType[CustomDamageType["dealt"] = 2] = "dealt";
    CustomDamageType[CustomDamageType["dealt_absorbed"] = 3] = "dealt_absorbed";
    CustomDamageType[CustomDamageType["dealt_resisted"] = 4] = "dealt_resisted";
    CustomDamageType[CustomDamageType["resisted"] = 5] = "resisted";
    CustomDamageType[CustomDamageType["taken"] = 6] = "taken";
})(CustomDamageType || (CustomDamageType = {}));
var CustomOtherType;
(function (CustomOtherType) {
    CustomOtherType[CustomOtherType["animals_bred"] = 0] = "animals_bred";
    CustomOtherType[CustomOtherType["bell_ring"] = 1] = "bell_ring";
    CustomOtherType[CustomOtherType["eat_cake_slice"] = 2] = "eat_cake_slice";
    CustomOtherType[CustomOtherType["fill_cauldron"] = 3] = "fill_cauldron";
    CustomOtherType[CustomOtherType["fish_caught"] = 4] = "fish_caught";
    CustomOtherType[CustomOtherType["leave_game"] = 5] = "leave_game";
    CustomOtherType[CustomOtherType["drop"] = 6] = "drop";
    CustomOtherType[CustomOtherType["enchant_item"] = 7] = "enchant_item";
    CustomOtherType[CustomOtherType["jump"] = 8] = "jump";
    CustomOtherType[CustomOtherType["play_record"] = 9] = "play_record";
    CustomOtherType[CustomOtherType["play_noteblock"] = 10] = "play_noteblock";
    CustomOtherType[CustomOtherType["tune_noteblock"] = 11] = "tune_noteblock";
    CustomOtherType[CustomOtherType["deaths"] = 12] = "deaths";
    CustomOtherType[CustomOtherType["pot_flower"] = 13] = "pot_flower";
    CustomOtherType[CustomOtherType["raid_trigger"] = 14] = "raid_trigger";
    CustomOtherType[CustomOtherType["raid_win"] = 15] = "raid_win";
    CustomOtherType[CustomOtherType["talked_to_villager"] = 16] = "talked_to_villager";
    CustomOtherType[CustomOtherType["target_hit"] = 17] = "target_hit";
    CustomOtherType[CustomOtherType["sleep_in_bed"] = 18] = "sleep_in_bed";
    CustomOtherType[CustomOtherType["traded_with_villager"] = 19] = "traded_with_villager";
    CustomOtherType[CustomOtherType["trigger_trapped_chest"] = 20] = "trigger_trapped_chest";
    CustomOtherType[CustomOtherType["use_cauldron"] = 21] = "use_cauldron";
})(CustomOtherType || (CustomOtherType = {}));
var CauldronType;
(function (CauldronType) {
    CauldronType[CauldronType["armor"] = 0] = "armor";
    CauldronType[CauldronType["shulker_box"] = 1] = "shulker_box";
    CauldronType[CauldronType["banner"] = 2] = "banner";
    CauldronType[CauldronType["water_bucket"] = 3] = "water_bucket";
    CauldronType[CauldronType["glass_bottle"] = 4] = "glass_bottle";
})(CauldronType || (CauldronType = {}));
var PlayerData = /** @class */ (function () {
    function PlayerData(player) {
        var realName = player.realName, xuid = player.xuid, uuid = player.uuid, pos = player.pos;
        this.name = realName;
        this.xuid = xuid;
        this.uuid = uuid;
        this._oldPos = pos;
        this._ridingEntity = null;
        this._isSprinting = false;
        this._oldStates = {
            inAir: player.inAir,
            inWater: player.inWater,
            inWall: player.inWall,
            isOnGround: player.isOnGround,
            isGliding: player.isGliding,
            isFlying: player.isFlying,
            isSneaking: player.isSneaking,
            isMoving: player.isMoving
        };
        var data = File.readFrom("".concat(DATA_PATH).concat(player.uuid, ".json"));
        if (data == null) {
            this.custom = {};
            this.mined = {};
            this.broken = {};
            this.crafted = {};
            this.used = {};
            this.picked_up = {};
            this.dropped = {};
            this.killed = {};
            this.killed_by = {};
            this.save();
        }
        else {
            var d = JSON.parse(data);
            this.custom = d['minecraft:custom'];
            this.mined = d['minecraft:mined'];
            this.broken = d['minecraft:broken'];
            this.crafted = d['minecraft:crafted'];
            this.used = d['minecraft:used'];
            this.picked_up = d['minecraft:picked_up'];
            this.dropped = d['minecraft:dropped'];
            this.killed = d['minecraft:killed'];
            this.killed_by = d['minecraft:killed_by'];
        }
    }
    PlayerData.prototype.addStats = function (type, e, num) {
        if (num === void 0) { num = 1; }
        switch (type) {
            case StatsType.Mined:
                this._add(this.mined, e, num);
                break;
            case StatsType.Broken:
                this._add(this.broken, e, num);
                break;
            case StatsType.Crafted:
                this._add(this.crafted, e, num);
                break;
            case StatsType.Used:
                this._add(this.used, e, num);
                break;
            case StatsType.Picked_Up:
                this._add(this.picked_up, e, num);
                break;
            case StatsType.Dropped:
                this._add(this.dropped, e, num);
                break;
            case StatsType.Killed:
                this._add(this.killed, e, num);
                break;
            case StatsType.Killed_By:
                this._add(this.killed_by, e, num);
                break;
            default:
        }
    };
    PlayerData.prototype.addCustomInteract = function (type) {
        this._add(this.custom, "minecraft:interact_with_".concat(CustomInteractType[type]));
    };
    PlayerData.prototype.addCustomInspect = function (type) {
        this._add(this.custom, "minecraft:inspect_".concat(CustomInspectType[type]));
    };
    PlayerData.prototype.addCustomOpen = function (type) {
        this._add(this.custom, "minecraft:open_".concat(CustomOpenType[type]));
    };
    PlayerData.prototype.addCustomclean = function (type) {
        this._add(this.custom, "minecraft:clean_".concat(CustomCleanType[type]));
    };
    PlayerData.prototype.addCustomTime = function (type) {
        this._add(this.custom, "minecraft:".concat(CustomTimeType[type], "_time"));
    };
    PlayerData.prototype.addCustomSinceTime = function (type) {
        this._add(this.custom, "minecraft:time_since_".concat(CustomSinceTimeType[type]));
    };
    PlayerData.prototype.resetCustomSinceTime = function (type) {
        this.custom["minecraft:time_since_".concat(CustomSinceTimeType[type])] = 0;
    };
    PlayerData.prototype.addCustomKills = function (type) {
        this._add(this.custom, "minecraft:".concat(CustomKillType[type], "_kills"));
    };
    PlayerData.prototype.addCustomMove = function (type, dis) {
        this._add(this.custom, "minecraft:".concat(CustomMoveType[type], "_one_cm"), dis);
    };
    PlayerData.prototype.addCustomDamage = function (type, damage) {
        this._add(this.custom, "minecraft:damage_".concat(CustomDamageType[type]), damage);
    };
    PlayerData.prototype.addCustomOthers = function (type) {
        this._add(this.custom, "minecraft:".concat(CustomOtherType[type]));
    };
    PlayerData.prototype.setRidingEntity = function (entityType) {
        this._ridingEntity = entityType;
    };
    PlayerData.prototype.changeSprinting = function (sprint) {
        this._isSprinting = sprint;
    };
    PlayerData.prototype.onTick = function () {
        var player = mc.getPlayer(this.xuid);
        this.addCustomTime(CustomTimeType.play);
        // if (this._oldStates.isSneaking&&player.isSneaking) {
        //     this.addCustomTime(CustomTimeType.sneak)
        // }
        this.addMove(player);
        this.addCustomSinceTime(CustomSinceTimeType.death);
        this.addCustomSinceTime(CustomSinceTimeType.rest);
    };
    PlayerData.prototype._getDis = function (pos1, pos2) {
        var dx = Math.abs(pos1.x - pos2.x) * 100;
        var dy = Math.abs(pos1.y - pos2.y) * 100;
        var dis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        return Math.round(dis);
    };
    PlayerData.prototype.addMove = function (player) {
        /**
         *  Todo
         *  攀爬距离
         *  摔落高度
         *  水面上下游走距离
         */
        if (this._oldPos.dimid !== player.pos.dimid) {
            return this._setOldStates(player);
        }
        var dis = this._getDis(this._oldPos, player.pos);
        if (player.isRiding) {
            switch (this._ridingEntity) {
                case 'minecraft:boat':
                case "minecraft:chest_boat":
                    this.addCustomMove(CustomMoveType.boat, dis);
                    break;
                case "minecraft:pig":
                    this.addCustomMove(CustomMoveType.pig, dis);
                    break;
                case "minecraft:horse":
                    this.addCustomMove(CustomMoveType.horse, dis);
                    break;
                case "minecraft:minecraft":
                    this.addCustomMove(CustomMoveType.minecart, dis);
                    break;
                case "minecraft:strider":
                    this.addCustomMove(CustomMoveType.strider, dis);
                    break;
                default:
            }
            return this._setOldStates(player);
        }
        else {
            this._ridingEntity = null;
        }
        //无法检测在梯子上和藤曼上
        // if (this._oldStates.inWall && player.inWall) {
        //     this.addCustomMove(CustomMoveType.climb, dis)
        //     return
        // }
        if (this._oldStates.isSneaking && player.isSneaking) {
            this.addCustomMove(CustomMoveType.climb, dis);
            this.addCustomTime(CustomTimeType.sneak);
        }
        if (this._oldStates.isGliding && player.isGliding) {
            this.addCustomMove(CustomMoveType.aviate, dis);
            return this._setOldStates(player);
        }
        if (this._oldStates.isFlying && player.isFlying) {
            this.addCustomMove(CustomMoveType.fly, dis);
            return this._setOldStates(player);
        }
        if (this._oldStates.inWater && player.inWater) {
            if (player.isOnGround) {
                this.addCustomMove(CustomMoveType.walk_under_water, dis);
            }
            else {
                this.addCustomMove(CustomMoveType.swim, dis);
            }
            return this._setOldStates(player);
        }
        if (this._oldStates.isMoving && player.isMoving) {
            if (this._isSprinting) {
                this.addCustomMove(CustomMoveType.sprint, dis);
            }
            else {
                this.addCustomMove(CustomMoveType.walk, dis);
            }
        }
        this._setOldStates(player);
    };
    PlayerData.prototype._setOldStates = function (player) {
        var inAir = player.inAir, inWater = player.inWater, inWall = player.inWall, isOnGround = player.isOnGround, isGliding = player.isGliding, isFlying = player.isFlying, isSneaking = player.isSneaking, isMoving = player.isMoving;
        this._oldStates = {
            inAir: inAir,
            inWater: inWater,
            inWall: inWall,
            isOnGround: isOnGround,
            isGliding: isGliding,
            isFlying: isFlying,
            isSneaking: isSneaking,
            isMoving: isMoving
        };
        this._oldPos = player.pos;
    };
    PlayerData.prototype.save = function () {
        var _a = this, uuid = _a.uuid, xuid = _a.xuid, name = _a.name, custom = _a.custom, mined = _a.mined, broken = _a.broken, crafted = _a.crafted, used = _a.used, picked_up = _a.picked_up, dropped = _a.dropped, killed = _a.killed, killed_by = _a.killed_by;
        var playerInfo = { uuid: uuid, xuid: xuid, name: name, updated_at: new Date().getTime() };
        var data = {
            playerInfo: playerInfo,
            'minecraft:custom': custom,
            'minecraft:mined': mined,
            'minecraft:broken': broken,
            'minecraft:crafted': crafted,
            'minecraft:used': used,
            'minecraft:picked_up': picked_up,
            'minecraft:dropped': dropped,
            'minecraft:killed': killed,
            'minecraft:killed_by': killed_by,
        };
        File.writeTo("".concat(DATA_PATH).concat(this.uuid, ".json"), JSON.stringify(data));
    };
    PlayerData.prototype._add = function (obj, e, num) {
        if (num === void 0) { num = 1; }
        if (typeof obj === 'undefined')
            obj = {};
        if (typeof obj[e] === 'undefined')
            obj[e] = 0;
        obj[e] += num;
    };
    return PlayerData;
}());
var BlockMgr = /** @class */ (function () {
    function BlockMgr() {
        this._map = new Map();
    }
    BlockMgr.prototype.add = function (pos, uuid) {
        var arg = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            arg[_i - 2] = arguments[_i];
        }
        return this._map.set(this._pos2String(pos), __spreadArray([uuid], arg, true));
    };
    BlockMgr.prototype.remove = function (pos) {
        return this._map.delete(this._pos2String(pos));
    };
    BlockMgr.prototype.has = function (pos) {
        return this._map.has(this._pos2String(pos));
    };
    BlockMgr.prototype.get = function (pos) {
        return this._map.get(this._pos2String(pos));
    };
    BlockMgr.prototype._pos2String = function (pos) {
        var x = pos.x, y = pos.y, z = pos.z, dimid = pos.dimid;
        return "".concat(dimid, "-").concat(x, "-").concat(y, "-").concat(z);
    };
    return BlockMgr;
}());
var cakeMap = new BlockMgr();
var cauldronMap = new BlockMgr();
var campfireMap = new BlockMgr();
var foods = [
    'minecraft:chicken',
    'minecraft:porkchop',
    'minecraft:beef',
    'minecraft:mutton',
    'minecraft:rabbit',
    'minecraft:cod',
    'minecraft:salmon',
    'minecraft:potato',
    'minecraft:kelp'
];
//监听玩家进服
mc.listen('onJoin', function (player) {
    var playerData = new PlayerData(player);
    playersMap.set(player.uuid, playerData);
});
//监听玩家退服
mc.listen('onLeft', function (player) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addCustomOthers(CustomOtherType.leave_game);
    playerDt.save();
    playersMap.delete(player.uuid);
});
//监听玩家破坏方块
mc.listen('onDestroyBlock', function (player, block) {
    if (player.isCreative)
        return;
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addStats(StatsType.Mined, block.type);
});
//监听玩家捡起物品
mc.listen('onTakeItem', function (player, entity, item) {
    if (!item)
        return;
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addStats(StatsType.Picked_Up, item.type, item.count);
});
//监听玩家扔出物品
mc.listen('onDropItem', function (player, item) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addStats(StatsType.Dropped, item.type, item.count);
    playerDt.addCustomOthers(CustomOtherType.drop);
});
mc.listen('onPlayerDie', function (player, source) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    if (source != null) {
        if (source.type === 'minecraft:player')
            return;
        if (source.isItemEntity())
            return;
        playerDt.addStats(StatsType.Killed_By, source.type);
    }
    playerDt.addCustomOthers(CustomOtherType.deaths);
    playerDt.resetCustomSinceTime(CustomSinceTimeType.death);
});
mc.listen('onMobDie', function (mob, source, cause) {
    if (source == null)
        return;
    var player = source.toPlayer();
    if (player == null)
        return;
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    if (mob.type === 'minecraft:player') {
        playerDt.addCustomKills(CustomKillType.player);
    }
    else {
        playerDt.addCustomKills(CustomKillType.mobs);
        playerDt.addStats(StatsType.Killed, mob.type);
    }
});
mc.listen('onChangeSprinting', function (player, sprinting) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.changeSprinting(sprinting);
});
mc.listen('onRide', function (entity1, entity2) {
    if (!entity1.isPlayer())
        return;
    var player = entity1.toPlayer();
    if (player == null)
        return;
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.setRidingEntity(entity2.type);
});
//伤害(玩家造成/受到伤害)
/**
 * Todo
 * 吸收/抵挡伤害
 */
mc.listen('onAttackEntity', function (player, entity, damage) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addCustomDamage(CustomDamageType.dealt, damage);
});
mc.listen('onMobHurt', function (mob, source, damage, cause) {
    if (!mob.isPlayer())
        return;
    var player = mob.toPlayer();
    if (player == null)
        return;
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addCustomDamage(CustomDamageType.taken, damage);
});
//监听玩家与方块交互
mc.listen('onBlockInteracted', function (player, block) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    var type = block.type.split(':');
    if (type[0] === 'minecraft') {
        if (typeof CustomInteractType[type[1]] === 'number') {
            //与工作方块交互(工作台监听不到，切石机type不同)
            playerDt.addCustomInteract(CustomInteractType[type[1]]);
            return;
        }
        if (typeof CustomInspectType[type[1]] === 'number') {
            //检查容器(漏斗，发射器，投掷器)
            playerDt.addCustomInspect(CustomInspectType[type[1]]);
            return;
        }
        if (typeof CustomOpenType[type[1]] === 'number') {
            //打开箱子(箱子，末影箱,木桶)
            playerDt.addCustomOpen(CustomOpenType[type[1]]);
            return;
        }
        if (type[1].includes('shulker_box')) {
            //打开潜影盒
            playerDt.addCustomOpen(CustomOpenType.shulker_box);
            return;
        }
        switch (type[1]) {
            case 'flower_pot':
                //与花盆交互
                playerDt.addCustomOthers(CustomOtherType.pot_flower);
                break;
            case 'bell':
                //敲钟
                playerDt.addCustomOthers(CustomOtherType.bell_ring);
                break;
            case 'trapped_chest':
                //陷阱箱
                playerDt.addCustomOthers(CustomOtherType.trigger_trapped_chest);
                break;
            case 'stonecutter_block':
                //切石机
                playerDt.addCustomInteract(CustomInteractType.stonecutter);
                break;
            case 'noteblock':
                //音符盒
                playerDt.addCustomOthers(CustomOtherType.tune_noteblock);
                break;
        }
    }
});
mc.listen('onOpenContainer', function (player, block) {
    //工作台合成
    if (block.type === 'minecraft:crafting_table') {
        var playerDt = playersMap.get(player.uuid);
        if (typeof playerDt === 'undefined')
            return;
        playerDt.addCustomInteract(CustomInteractType.crafting_table);
    }
});
//监听玩家放置方块
mc.listen('afterPlaceBlock', function (player, block) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addStats(StatsType.Used, block.type);
});
mc.listen('onAte', function (player, item) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addStats(StatsType.Used, item.type);
});
//监听玩家获得效果(袭击)
mc.listen('onEffectAdded', function (player, effectName) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    if (effectName === 'minecraft:effect.bad_men')
        playerDt.addCustomOthers(CustomOtherType.raid_trigger);
    if (effectName === 'minecraft:effect.village_hero')
        playerDt.addCustomOthers(CustomOtherType.raid_win);
});
//监听玩家点击方块(音符盒)
mc.listen('onStartDestroyBlock', function (player, block) {
    if (block.type === 'minecraft:noteblock') {
        var playerDt = playersMap.get(player.uuid);
        if (typeof playerDt === 'undefined')
            return;
        playerDt.addCustomOthers(CustomOtherType.play_noteblock);
    }
});
//监听玩家使用物品
mc.listen('onUseItemOn', function (player, item, block) {
    switch (block.type) {
        case 'minecraft:cake':
            cakeMap.add(block.pos, player.uuid);
            break;
        case 'minecraft:cauldron':
            if (item.type.includes('minecraft:leather_') && item.isArmorItem) {
                cauldronMap.add(block.pos, player.uuid, CauldronType[0]);
                return;
            }
            if (item.type.includes('shulker_box')) {
                cauldronMap.add(block.pos, player.uuid, CauldronType[1]);
                return;
            }
            switch (item.type) {
                case 'minecraft:banner':
                    cauldronMap.add(block.pos, player.uuid, CauldronType[2]);
                    break;
                case 'minecraft:water_bucket':
                    cauldronMap.add(block.pos, player.uuid, CauldronType[3]);
                    break;
                case 'minecraft:glass_bottle':
                    cauldronMap.add(block.pos, player.uuid, CauldronType[4]);
                    break;
                default:
                    cauldronMap.remove(block.pos);
            }
            break;
        case 'minecraft:soul_campfire':
        case 'minecraft:campfire':
            //todo
            if (foods.includes(item.type)) {
                campfireMap.add(block.pos, player.uuid);
            }
            break;
        case 'minecraft:jukebox':
            if (!item.type.includes('minecraft:music_disc'))
                return;
            var blockEntity = block.getBlockEntity();
            var blockNbt = blockEntity.getNbt().toObject();
            if (typeof blockNbt['RecordItem'] === 'undefined') {
                var playerDt = playersMap.get(player.uuid);
                if (typeof playerDt === 'undefined')
                    return;
                playerDt.addCustomOthers(CustomOtherType.play_record);
            }
            break;
        default:
            return;
    }
});
mc.listen('onContainerChange', function (player, container, slotNum, oldItem, newItem) {
    /**
     * Todo
     * 附魔次数
     * 物品合成，炼制
     */
});
mc.listen('onBlockChanged', function (beforeBlock, afterBlock) {
    //蛋糕
    if (beforeBlock.type === 'minecraft:cake') {
        var bst = beforeBlock.getBlockState();
        var ast = afterBlock.getBlockState();
        if (typeof bst['bite_counter'] === 'undefined')
            return;
        if (bst['bite_counter'] < 6) {
            if (typeof ast['bite_counter'] === 'undefined')
                return;
            var arr = cakeMap.get(beforeBlock.pos);
            if (typeof arr === 'undefined')
                return;
            var playerDt = playersMap.get(arr[0]);
            if (typeof playerDt === 'undefined')
                return;
            playerDt.addCustomOthers(CustomOtherType.eat_cake_slice);
        }
        else {
            if (afterBlock.type === 'minecraft:air') {
                var arr = cakeMap.get(beforeBlock.pos);
                if (typeof arr === 'undefined')
                    return;
                var playerDt = playersMap.get(arr[0]);
                if (typeof playerDt === 'undefined')
                    return;
                playerDt.addCustomOthers(CustomOtherType.eat_cake_slice);
            }
        }
        cakeMap.remove(beforeBlock.pos);
        return;
    }
    //炼药锅
    if (beforeBlock.type === 'minecraft:cauldron' && afterBlock.type === 'minecraft:cauldron') {
        if (beforeBlock.tileData === afterBlock.tileData)
            return;
        var arr = cauldronMap.get(beforeBlock.pos);
        if (typeof arr === 'undefined')
            return;
        var playerDt = playersMap.get(arr[0]);
        if (typeof playerDt === 'undefined')
            return;
        if (beforeBlock.tileData < afterBlock.tileData) {
            if (arr[1] === CauldronType[3]) {
                playerDt.addCustomOthers(CustomOtherType.fill_cauldron);
            }
        }
        else {
            switch (arr[1]) {
                case CauldronType[0]:
                    playerDt.addCustomclean(CustomCleanType.armor);
                    break;
                case CauldronType[1]:
                    playerDt.addCustomclean(CustomCleanType.shulker_box);
                    break;
                case CauldronType[2]:
                    playerDt.addCustomclean(CustomCleanType.banner);
                    break;
                case CauldronType[4]:
                    playerDt.addCustomOthers(CustomOtherType.use_cauldron);
                    break;
                default:
            }
        }
        cauldronMap.remove(beforeBlock.pos);
    }
    var campfireExists = beforeBlock.type === 'minecraft:campfire' && afterBlock.type === 'minecraft:campfire';
    var soul_campfireExists = beforeBlock.type === 'minecraft:soul_campfire' && afterBlock.type === 'minecraft:soul_campfire';
    if (campfireExists || soul_campfireExists) {
        var arr = campfireMap.get(beforeBlock.pos);
        if (typeof arr === 'undefined')
            return;
        var playerDt = playersMap.get(arr[0]);
        if (typeof playerDt === 'undefined')
            return;
        playerDt.addCustomInteract(CustomInteractType.campfire);
    }
});
mc.listen('onProjectileHitBlock', function () {
    /**beforeBlock.type==='minecraft:campfire'
     * Todo
     * 击中标靶次数
     */
});
mc.listen('onBedEnter', function (player, pos) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addCustomOthers(CustomOtherType.sleep_in_bed);
    playerDt.resetCustomSinceTime(CustomSinceTimeType.rest);
});
//Todo 监听玩家使用桶装东西(水桶捕鱼)
// mc.listen('onUseBucketTake', () => {
// })
mc.listen('onJump', function (player) {
    var playerDt = playersMap.get(player.uuid);
    if (typeof playerDt === 'undefined')
        return;
    playerDt.addCustomOthers(CustomOtherType.jump);
});
mc.listen('onTick', function () {
    playersMap.forEach(function (v, k) {
        v.onTick();
    });
});
