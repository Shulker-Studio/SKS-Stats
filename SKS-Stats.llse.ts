/// <reference path="e:\Dev/dts/llaids/src/index.d.ts"/> 

ll.registerPlugin(
    /* name */ "SKS-Stats",
    /* introduction */ "",
    /* version */[0, 0, 3],
    /* otherInformation */ {}
);
export function a() { }
function debug(...data: any[]) {
    if (DEBUG) {
        log(`[DEBUG]`, ...data)
    }
}
let bb = {
    zh_CN: {
        //custom
        "minecraft:animals_bred": "繁殖动物次数",
        "minecraft:clean_armor": "清洗盔甲次数",
        "minecraft:clean_banner": "清洗旗帜次数",
        "minecraft:open_barrel": "木桶打开次数",
        "minecraft:bell_ring": "鸣钟次数",
        "minecraft:eat_cake_slice": "吃掉的蛋糕片数",
        "minecraft:fill_cauldron": "炼药锅装水次数",
        "minecraft:open_chest": "箱子打开次数",
        "minecraft:damage_absorbed": "吸收的伤害",
        "minecraft:damage_blocked_by_shield": "盾牌抵挡的伤害",
        "minecraft:damage_dealt": "造成伤害",
        "minecraft:damage_dealt_absorbed": "造成伤害（被吸收）",
        "minecraft:damage_dealt_resisted": "造成伤害（被抵挡）",
        "minecraft:damage_resisted": "抵挡的伤害",
        "minecraft:damage_taken": "受到伤害",
        "minecraft:inspect_dispenser": "搜查发射器次数",
        "minecraft:boat_one_cm": "坐船移动距离",
        "minecraft:aviate_one_cm": "鞘翅滑行距离",
        "minecraft:horse_one_cm": "骑马移动距离",
        "minecraft:minecart_one_cm": "坐矿车移动距离",
        "minecraft:pig_one_cm": "骑猪移动距离",
        "minecraft:strider_one_cm": "骑炽足兽移动距离",
        "minecraft:climb_one_cm": "已攀爬距离",
        "minecraft:crouch_one_cm": "潜行距离",
        "minecraft:fall_one_cm": "摔落高度",
        "minecraft:fly_one_cm": "飞行距离",
        "minecraft:sprint_one_cm": "疾跑距离",
        "minecraft:swim_one_cm": "游泳距离",
        "minecraft:walk_one_cm": "行走距离",
        "minecraft:walk_on_water_one_cm": "水面行走距离",
        "minecraft:walk_under_water_one_cm": "水下行走距离",
        "minecraft:inspect_dropper": "搜查投掷器次数",
        "minecraft:open_enderchest": "末影箱打开次数",
        "minecraft:fish_caught": "捕鱼数",
        "minecraft:leave_game": "游戏退出次数",
        "minecraft:inspect_hopper": "搜查漏斗次数",
        "minecraft:interact_with_anvil": "与铁砧交互次数",
        "minecraft:interact_with_beacon": "与信标交互次数",
        "minecraft:interact_with_blast_furnace": "与高炉交互次数",
        "minecraft:interact_with_brewingstand": "与酿造台交互次数",
        "minecraft:interact_with_campfire": "与营火交互次数",
        "minecraft:interact_with_cartography_table": "与制图台交互次数",
        "minecraft:interact_with_crafting_table": "与工作台交互次数",
        "minecraft:interact_with_furnace": "与熔炉交互次数",
        "minecraft:interact_with_grindstone": "与砂轮交互次数",
        "minecraft:interact_with_lectern": "与讲台交互次数",
        "minecraft:interact_with_loom": "与织布机交互次数",
        "minecraft:interact_with_smithing_table": "与锻造台交互次数",
        "minecraft:interact_with_smoker": "与烟熏炉交互次数",
        "minecraft:interact_with_stonecutter": "与切石机交互次数",
        "minecraft:drop": "物品掉落",
        "minecraft:enchant_item": "物品附魔次数",
        "minecraft:jump": "跳跃次数",
        "minecraft:mob_kills": "生物击杀数",
        "minecraft:play_record": "播放唱片数",
        "minecraft:play_noteblock": "音符盒播放次数",
        "minecraft:tune_noteblock": "音符盒调音次数",
        "minecraft:deaths": "死亡次数",
        "minecraft:pot_flower": "盆栽种植数",
        "minecraft:player_kills": "玩家击杀数",
        "minecraft:raid_trigger": "触发袭击次数",
        "minecraft:raid_win": "袭击胜利次数",
        "minecraft:clean_shulker_box": "潜影盒清洗次数",
        "minecraft:open_shulker_box": "潜影盒打开次数",
        "minecraft:time_since_death": "自上次死亡",
        "minecraft:time_since_rest": "自上次入眠",
        "minecraft:sneak_time": "潜行时间",
        "minecraft:talked_to_villager": "村民交互次数",
        "minecraft:target_hit": "击中标靶次数",
        "minecraft:play_time": "游戏时间",
        "minecraft:total_world_time": "世界打开时间",
        "minecraft:sleep_in_bed": "躺在床上的次数",
        "minecraft:traded_with_villager": "村民交易次数",
        "minecraft:trigger_trapped_chest": "陷阱箱触发次数",
        "minecraft:use_cauldron": "从炼药锅取水次数",
        //实体
        "minecraft:agent": "智能体",
        "minecraft:allay": "悦灵",
        "minecraft:area_effect_cloud": "区域效果云",
        "minecraft:armor_stand": "盔甲架",
        "minecraft:arrow": "箭",
        "minecraft:axolotl": "美西螈",
        "minecraft:balloon": "气球",
        "minecraft:bat": "蝙蝠",
        "minecraft:bee": "蜜蜂",
        "minecraft:blaze": "烈焰人",
        "minecraft:boat": "船",
        "minecraft:camel": "骆驼",
        "minecraft:cat": "流浪猫",
        "minecraft:cave_spider": "洞穴蜘蛛",
        "minecraft:chalkboard": "黑板",
        "minecraft:chest_boat": "运输船",
        "minecraft:chest_minecart": "运输矿车",
        "minecraft:chicken": "鸡",
        "minecraft:cod": "鳕鱼",
        "minecraft:command_block_minecart": "命令方块矿车",
        "minecraft:cow": "牛",
        "minecraft:creeper": "苦力怕",
        "minecraft:dolphin": "海豚",
        "minecraft:donkey": "驴",
        "minecraft:dragon_fireball": "末影龙火球",
        "minecraft:drowned": "溺尸",
        "minecraft:egg": "鸡蛋",
        "minecraft:elder_guardian": "远古守卫者",
        "minecraft:elder_guardian_ghost": "远古守卫者幽灵",
        "minecraft:ender_crystal": "末地水晶",
        "minecraft:ender_dragon": "末影龙",
        "minecraft:ender_pearl": "末影珍珠",
        "minecraft:enderman": "末影人",
        "minecraft:endermite": "末影螨",
        "minecraft:evocation_fang": "尖牙",
        "minecraft:evocation_illager": "唤魔者",
        "minecraft:eye_of_ender_signal": "末影之眼",
        "minecraft:falling_block": "下落的方块",
        "minecraft:fireball": "恶魂火球",
        "minecraft:fireworks_rocket": "烟花火箭",
        "minecraft:fishing_hook": "浮漂",
        "minecraft:fox": "狐狸",
        "minecraft:frog": "青蛙",
        "minecraft:ghast": "恶魂",
        "minecraft:glow_squid": "发光鱿鱼",
        "minecraft:goat": "山羊",
        "minecraft:guardian": "守卫者",
        "minecraft:hoglin": "疣猪兽",
        "minecraft:hopper_minecart": "漏斗矿车",
        "minecraft:horse": "马",
        "minecraft:husk": "尸壳",
        "minecraft:ice_bomb": "冰弹",
        "minecraft:iron_golem": "铁傀儡",
        "minecraft:item": "掉落物",
        "minecraft:leash_knot": "拴绳结",
        "minecraft:lightning_bolt": "闪电",
        "minecraft:lingering_potion": "滞留药水",
        "minecraft:llama": "羊驼",
        "minecraft:llama_spit": "羊驼唾沫",
        "minecraft:magma_cube": "岩浆怪",
        "minecraft:minecart": "矿车",
        "minecraft:mooshroom": "哞菇",
        "minecraft:moving_block": "移动的方块",
        "minecraft:mule": "骡",
        "minecraft:npc": "NPC",
        "minecraft:ocelot": "豹猫",
        "minecraft:painting": "画",
        "minecraft:panda": "熊猫",
        "minecraft:parrot": "鹦鹉",
        "minecraft:phantom": "幻翼",
        "minecraft:pig": "猪",
        "minecraft:piglin": "猪灵",
        "minecraft:piglin_brute": "猪灵蛮兵",
        "minecraft:pillager": "掠夺者",
        "minecraft:player": "玩家",
        "minecraft:polar_bear": "北极熊",
        "minecraft:pufferfish": "河豚",
        "minecraft:rabbit": "兔子",
        "minecraft:ravager": "劫掠兽",
        "minecraft:salmon": "鲑鱼",
        "minecraft:sheep": "绵羊",
        "minecraft:shield": "盾牌",
        "minecraft:shulker": "潜影贝",
        "minecraft:shulker_bullet": "潜影弹",
        "minecraft:silverfish": "蠹虫",
        "minecraft:skeleton": "骷髅",
        "minecraft:skeleton_horse": "骷髅马",
        "minecraft:slime": "史莱姆",
        "minecraft:small_fireball": "小火球",
        "minecraft:sniffer": "嗅探兽",
        "minecraft:snow_golem": "雪傀儡",
        "minecraft:snowball": "雪球",
        "minecraft:spider": "蜘蛛",
        "minecraft:splash_potion": "喷溅药水",
        "minecraft:squid": "鱿鱼",
        "minecraft:stray": "流浪者",
        "minecraft:strider": "炽足兽",
        "minecraft:tadpole": "蝌蚪",
        "minecraft:thrown_trident": "三叉戟",
        "minecraft:tnt": "点燃的TNT",
        "minecraft:tnt_minecart": "TNT矿车",
        "minecraft:trader_llama": "行商羊驼",
        "minecraft:tripod_camera": "相机",
        "minecraft:tropicalfish": "热带鱼",
        "minecraft:turtle": "海龟",
        "minecraft:vex": "恼鬼",
        "minecraft:villager": "旧版村民",
        "minecraft:villager_v2": "村民",
        "minecraft:vindicator": "卫道士",
        "minecraft:wandering_trader": "流浪商人",
        "minecraft:warden": "监守者",
        "minecraft:witch": "女巫",
        "minecraft:wither": "凋灵",
        "minecraft:wither_skeleton": "凋灵骷髅",
        "minecraft:wither_skull": "凋灵之首",
        "minecraft:wither_skull_dangerous": "蓝色凋灵之首",
        "minecraft:wolf": "狼",
        "minecraft:xp_bottle": "附魔之瓶",
        "minecraft:xp_orb": "经验球",
        "minecraft:zoglin": "僵尸疣猪兽",
        "minecraft:zombie": "僵尸",
        "minecraft:zombie_horse": "僵尸马",
        "minecraft:zombie_pigman": "僵尸猪灵",
        "minecraft:zombie_villager": "僵尸村民",
        "minecraft:zombie_villager_v2": "僵尸村民"
        //item

    }
}
function getLevelName() {
    let r = 'SKS'
    let data = File.readFrom(SERVER_PROPERTIES_PATH)
    if (!data) {

        log('server.properties读取失败')
        return r
    }
    let lines = data.split(/\r\n|\n/);

    for (var i = 0; i < lines.length - 1; i++) {
        let str = lines[i]

        let n = str.indexOf('#')
        if (n >= 0) {
            str = str.slice(0, n)
        }
        if (str.includes('=')) {
            //logger.info(i + '-->' + str)
            let kv = str.split('=')
            if (kv[0].trim() === 'level-name') r = kv[1].trim()
        }
    }
    debug(r)
    return r

}
const SERVER_PROPERTIES_PATH = './server.properties'
let levelName: string = getLevelName()
//const CONFIG_PATH = './plugins/SKS/stats/config.json'
const DATA_PATH = `./worlds/${levelName}/stats/`
const DEBUG = true
let playersMap: Map<string, PlayerData> = new Map()

enum StatsType {
    Mined,
    Broken,
    Crafted,
    Used,
    Picked_Up,
    Dropped,
    Killed,
    Killed_By
}
enum CustomInteractType {
    anvil,
    beacon,
    blast_furnace,
    brewingstand,
    campfire,
    cartography_table,
    crafting_table,
    furnace,
    grindstone,
    lectern,
    loom,
    smithing_table,
    smoker,
    stonecutter
}
enum CustomInspectType {
    dispenser,
    dropper,
    hopper
}
enum CustomOpenType {
    barrel,
    chest,
    enderchest,
    shulker_box
}
enum CustomCleanType {
    armor,
    banner,
    shulker_box
}
enum CustomTimeType {
    sneak,
    play
}
enum CustomSinceTimeType {
    death,
    rest
}
enum CustomKillType {
    mobs,
    player
}
enum CustomMoveType {
    boat,
    aviate,
    horse,
    minecart,
    pig,
    strider,
    climb,
    crouch,
    fall,
    fly,
    sprint,
    swim,
    walk,
    walk_on_water,
    walk_under_water
}
enum CustomDamageType {
    absorbed,
    blocked_by_shield,
    dealt,
    dealt_absorbed,
    dealt_resisted,
    resisted,
    taken,
}
enum CustomOtherType {
    animals_bred,
    bell_ring,
    eat_cake_slice,
    fill_cauldron,
    fish_caught,
    leave_game,
    drop,
    enchant_item,
    jump,
    play_record,
    play_noteblock,
    tune_noteblock,
    deaths,
    pot_flower,
    raid_trigger,
    raid_win,
    talked_to_villager,
    target_hit,
    sleep_in_bed,
    traded_with_villager,
    trigger_trapped_chest,
    use_cauldron
}
enum CauldronType {
    armor,
    shulker_box,
    banner,
    water_bucket,
    glass_bottle
}

interface PlayerState {
    inAir: boolean,
    inWater: boolean,
    inWall: boolean,
    isOnGround: boolean,
    isGliding: boolean,
    isFlying: boolean,
    isSneaking: boolean,
    isMoving: boolean
}

class PlayerData {
    readonly custom: {};
    readonly mined: {};
    readonly broken: {};
    readonly crafted: {};
    readonly used: {};
    readonly picked_up: {};
    readonly dropped: {};
    readonly killed: {};
    readonly killed_by: {};
    readonly name: string;
    readonly xuid: string;
    readonly uuid: string;
    private _ridingEntity: null | string;
    private _oldPos: FloatPos;
    private _oldStates: PlayerState;
    private _isSprinting: boolean;
    constructor(player: Player) {
        let { realName, xuid, uuid, pos } = player
        this.name = realName
        this.xuid = xuid
        this.uuid = uuid
        this._oldPos = pos
        this._ridingEntity = null
        this._isSprinting = false
        this._oldStates = {
            inAir: player.inAir,
            inWater: player.inWater,
            inWall: player.inWall,
            isOnGround: player.isOnGround,
            isGliding: player.isGliding,
            isFlying: player.isFlying,
            isSneaking: player.isSneaking,
            isMoving: player.isMoving
        }
        let data = File.readFrom(`${DATA_PATH}${player.uuid}.json`)
        if (data == null) {
            this.custom = {}
            this.mined = {}
            this.broken = {}
            this.crafted = {}
            this.used = {}
            this.picked_up = {}
            this.dropped = {}
            this.killed = {}
            this.killed_by = {}
            this.save()
        } else {
            let d = JSON.parse(data)
            this.custom = d['minecraft:custom']
            this.mined = d['minecraft:mined']
            this.broken = d['minecraft:broken']
            this.crafted = d['minecraft:crafted']
            this.used = d['minecraft:used']
            this.picked_up = d['minecraft:picked_up']
            this.dropped = d['minecraft:dropped']
            this.killed = d['minecraft:killed']
            this.killed_by = d['minecraft:killed_by']
        }
    }
    addStats(type: StatsType, e: string, num: number = 1) {
        switch (type) {
            case StatsType.Mined:
                this._add(this.mined, e, num)
                break
            case StatsType.Broken:
                this._add(this.broken, e, num)
                break
            case StatsType.Crafted:
                this._add(this.crafted, e, num)
                break
            case StatsType.Used:
                this._add(this.used, e, num)
                break
            case StatsType.Picked_Up:
                this._add(this.picked_up, e, num)
                break
            case StatsType.Dropped:
                this._add(this.dropped, e, num)
                break
            case StatsType.Killed:
                this._add(this.killed, e, num)
                break
            case StatsType.Killed_By:
                this._add(this.killed_by, e, num)
                break
            default:

        }
    }
    addCustomInteract(type: CustomInteractType) {
        this._add(this.custom, `minecraft:interact_with_${CustomInteractType[type]}`)
    }
    addCustomInspect(type: CustomInspectType) {
        this._add(this.custom, `minecraft:inspect_${CustomInspectType[type]}`)
    }
    addCustomOpen(type: CustomOpenType) {
        this._add(this.custom, `minecraft:open_${CustomOpenType[type]}`)
    }
    addCustomclean(type: CustomCleanType) {
        this._add(this.custom, `minecraft:clean_${CustomCleanType[type]}`)
    }
    addCustomTime(type: CustomTimeType) {
        this._add(this.custom, `minecraft:${CustomTimeType[type]}_time`)
    }
    addCustomSinceTime(type: CustomSinceTimeType) {
        this._add(this.custom, `minecraft:time_since_${CustomSinceTimeType[type]}`)
    }
    resetCustomSinceTime(type: CustomSinceTimeType) {
        this.custom[`minecraft:time_since_${CustomSinceTimeType[type]}`] = 0
    }
    addCustomKills(type: CustomKillType) {
        this._add(this.custom, `minecraft:${CustomKillType[type]}_kills`)
    }
    addCustomMove(type: CustomMoveType, dis: number) {
        this._add(this.custom, `minecraft:${CustomMoveType[type]}_one_cm`, dis)
    }
    addCustomDamage(type: CustomDamageType, damage: number) {
        this._add(this.custom, `minecraft:damage_${CustomDamageType[type]}`, damage)
    }
    addCustomOthers(type: CustomOtherType) {
        this._add(this.custom, `minecraft:${CustomOtherType[type]}`)
    }
    setRidingEntity(entityType: string) {
        this._ridingEntity = entityType
    }
    changeSprinting(sprint: boolean) {
        this._isSprinting = sprint
    }
    onTick() {
        let player = mc.getPlayer(this.xuid)
        this.addCustomTime(CustomTimeType.play)
        // if (this._oldStates.isSneaking&&player.isSneaking) {
        //     this.addCustomTime(CustomTimeType.sneak)
        // }
        this.addMove(player)
        this.addCustomSinceTime(CustomSinceTimeType.death)
        this.addCustomSinceTime(CustomSinceTimeType.rest)
    }
    private _getDis(pos1: FloatPos, pos2: FloatPos) {
        let dx = Math.abs(pos1.x - pos2.x) * 100
        let dy = Math.abs(pos1.y - pos2.y) * 100
        let dis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        return Math.round(dis)
    }
    addMove(player: Player) {
        /**
         *  Todo
         *  攀爬距离
         *  摔落高度
         *  水面上下游走距离
         */
        if (typeof player.pos === 'undefined') return
        if (this._oldPos.dimid !== player.pos.dimid) {
            return this._setOldStates(player)
        }
        let dis = this._getDis(this._oldPos, player.pos)
        if (player.isRiding) {
            switch (this._ridingEntity) {
                case 'minecraft:boat':
                case "minecraft:chest_boat":
                    this.addCustomMove(CustomMoveType.boat, dis)
                    break
                case "minecraft:pig":
                    this.addCustomMove(CustomMoveType.pig, dis)
                    break
                case "minecraft:horse":
                    this.addCustomMove(CustomMoveType.horse, dis)
                    break
                case "minecraft:minecraft":
                    this.addCustomMove(CustomMoveType.minecart, dis)
                    break
                case "minecraft:strider":
                    this.addCustomMove(CustomMoveType.strider, dis)
                    break
                default:
            }
            return this._setOldStates(player)
        } else {
            this._ridingEntity = null
        }
        //无法检测在梯子上和藤曼上
        // if (this._oldStates.inWall && player.inWall) {
        //     this.addCustomMove(CustomMoveType.climb, dis)
        //     return
        // }
        if (this._oldStates.isSneaking && player.isSneaking) {
            this.addCustomMove(CustomMoveType.climb, dis)
            this.addCustomTime(CustomTimeType.sneak)
        }
        if (this._oldStates.isGliding && player.isGliding) {
            this.addCustomMove(CustomMoveType.aviate, dis)
            return this._setOldStates(player)
        }
        if (this._oldStates.isFlying && player.isFlying) {
            this.addCustomMove(CustomMoveType.fly, dis)
            return this._setOldStates(player)
        }
        if (this._oldStates.inWater && player.inWater) {
            if (player.isOnGround) {
                this.addCustomMove(CustomMoveType.walk_under_water, dis)
            } else {
                this.addCustomMove(CustomMoveType.swim, dis)
            }
            return this._setOldStates(player)
        }
        if (this._oldStates.isMoving && player.isMoving) {
            if (this._isSprinting) {
                this.addCustomMove(CustomMoveType.sprint, dis)
            } else {
                this.addCustomMove(CustomMoveType.walk, dis)
            }
        }
        this._setOldStates(player)
    }
    private _setOldStates(player: Player) {
        let {
            inAir,
            inWater,
            inWall,
            isOnGround,
            isGliding,
            isFlying,
            isSneaking,
            isMoving
        } = player
        this._oldStates = {
            inAir,
            inWater,
            inWall,
            isOnGround,
            isGliding,
            isFlying,
            isSneaking,
            isMoving
        }
        this._oldPos = player.pos
    }
    save() {
        let { uuid, xuid, name, custom, mined, broken, crafted, used, picked_up, dropped, killed, killed_by } = this
        let playerInfo = { uuid, xuid, name, updated_at: new Date().getTime() }
        let data = {
            playerInfo,
            'minecraft:custom': custom,
            'minecraft:mined': mined,
            'minecraft:broken': broken,
            'minecraft:crafted': crafted,
            'minecraft:used': used,
            'minecraft:picked_up': picked_up,
            'minecraft:dropped': dropped,
            'minecraft:killed': killed,
            'minecraft:killed_by': killed_by,
        }

        File.writeTo(`${DATA_PATH}${this.uuid}.json`, JSON.stringify(data))
    }
    private _add(obj: object, e: string, num: number = 1) {
        if (typeof obj === 'undefined') obj = {}
        if (typeof obj[e] === 'undefined') obj[e] = 0
        obj[e] += num
    }
}

class BlockMgr {
    private _map: Map<string, string[]>;

    constructor() {
        this._map = new Map()
    }
    add(pos: IntPos, uuid: string, ...arg: string[]) {
        return this._map.set(this._pos2String(pos), [uuid, ...arg])
    }
    remove(pos: IntPos) {
        return this._map.delete(this._pos2String(pos))
    }
    has(pos: IntPos) {
        return this._map.has(this._pos2String(pos))
    }
    get(pos: IntPos) {
        return this._map.get(this._pos2String(pos))
    }
    private _pos2String(pos: IntPos) {
        let { x, y, z, dimid } = pos
        return `${dimid}-${x}-${y}-${z}`
    }
}

let cakeMap = new BlockMgr()
let cauldronMap = new BlockMgr()
let campfireMap = new BlockMgr()

let foods = [
    'minecraft:chicken',
    'minecraft:porkchop',
    'minecraft:beef',
    'minecraft:mutton',
    'minecraft:rabbit',
    'minecraft:cod',
    'minecraft:salmon',
    'minecraft:potato',
    'minecraft:kelp'
]
//监听玩家进服
mc.listen('onJoin', (player) => {
    let playerData = new PlayerData(player)
    playersMap.set(player.uuid, playerData)
})
//监听玩家退服
mc.listen('onLeft', (player) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addCustomOthers(CustomOtherType.leave_game)
    playerDt.save()
    playersMap.delete(player.uuid)
})
//监听玩家破坏方块
mc.listen('onDestroyBlock', (player, block) => {
    if (player.isCreative) return
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addStats(StatsType.Mined, block.type)
})
//监听玩家捡起物品
mc.listen('onTakeItem', (player, entity, item) => {
    if (!item) return
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addStats(StatsType.Picked_Up, item.type, item.count)
})
//监听玩家扔出物品
mc.listen('onDropItem', (player, item) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addStats(StatsType.Dropped, item.type, item.count)
    playerDt.addCustomOthers(CustomOtherType.drop)
})
mc.listen('onPlayerDie', (player, source) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    if (source != null) {
        if (source.type === 'minecraft:player') return
        if (source.isItemEntity()) return
        playerDt.addStats(StatsType.Killed_By, source.type)
    }
    playerDt.addCustomOthers(CustomOtherType.deaths)
    playerDt.resetCustomSinceTime(CustomSinceTimeType.death)
})
mc.listen('onMobDie', (mob, source, cause) => {
    if (source == null) return
    let player = source.toPlayer()
    if (player == null) return
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    if (mob.type === 'minecraft:player') {
        playerDt.addCustomKills(CustomKillType.player)
    } else {
        playerDt.addCustomKills(CustomKillType.mobs)
        playerDt.addStats(StatsType.Killed, mob.type)
    }
})
mc.listen('onChangeSprinting', (player, sprinting) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.changeSprinting(sprinting)
})
mc.listen('onRide', (entity1, entity2) => {
    if (!entity1.isPlayer()) return
    let player = entity1.toPlayer()
    if (player == null) return
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.setRidingEntity(entity2.type)
})
//伤害(玩家造成/受到伤害)
/**
 * Todo
 * 吸收/抵挡伤害
 */
mc.listen('onAttackEntity', (player, entity, damage) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addCustomDamage(CustomDamageType.dealt, Math.round(damage * 10))
})
mc.listen('onMobHurt', (mob, source, damage, cause) => {
    if (!mob.isPlayer()) return
    let player = mob.toPlayer()
    if (player == null) return
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addCustomDamage(CustomDamageType.taken, Math.round(damage * 10))
})

//监听玩家与方块交互
mc.listen('onBlockInteracted', (player, block) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    let type = block.type.split(':')
    if (type[0] === 'minecraft') {
        if (typeof CustomInteractType[type[1]] === 'number') {
            //与工作方块交互(工作台监听不到，切石机type不同)
            playerDt.addCustomInteract(CustomInteractType[type[1]])
            return
        }
        if (typeof CustomInspectType[type[1]] === 'number') {
            //检查容器(漏斗，发射器，投掷器)
            playerDt.addCustomInspect(CustomInspectType[type[1]])
            return
        }
        if (typeof CustomOpenType[type[1]] === 'number') {
            //打开箱子(箱子，末影箱,木桶)
            playerDt.addCustomOpen(CustomOpenType[type[1]])
            return
        }
        if (type[1].includes('shulker_box')) {
            //打开潜影盒
            playerDt.addCustomOpen(CustomOpenType.shulker_box)
            return
        }
        switch (type[1]) {
            case 'flower_pot':
                //与花盆交互
                playerDt.addCustomOthers(CustomOtherType.pot_flower)
                break
            case 'bell':
                //敲钟
                playerDt.addCustomOthers(CustomOtherType.bell_ring)
                break
            case 'trapped_chest':
                //陷阱箱
                playerDt.addCustomOthers(CustomOtherType.trigger_trapped_chest)
                break
            case 'stonecutter_block':
                //切石机
                playerDt.addCustomInteract(CustomInteractType.stonecutter)
                break
            case 'noteblock':
                //音符盒
                playerDt.addCustomOthers(CustomOtherType.tune_noteblock)
                break
        }
    }
})
mc.listen('onOpenContainer', (player, block) => {
    //工作台合成
    if (block.type === 'minecraft:crafting_table') {
        let playerDt = playersMap.get(player.uuid)
        if (typeof playerDt === 'undefined') return
        playerDt.addCustomInteract(CustomInteractType.crafting_table)
    }
})
//监听玩家放置方块
mc.listen('afterPlaceBlock', (player, block) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addStats(StatsType.Used, block.type)
})
mc.listen('onAte', (player, item) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addStats(StatsType.Used, item.type)
})
//监听玩家获得效果(袭击)
mc.listen('onEffectAdded', (player, effectName) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    if (effectName === 'minecraft:effect.bad_men') playerDt.addCustomOthers(CustomOtherType.raid_trigger)
    if (effectName === 'minecraft:effect.village_hero') playerDt.addCustomOthers(CustomOtherType.raid_win)
})
//监听玩家点击方块(音符盒)
mc.listen('onStartDestroyBlock', (player, block) => {
    if (block.type === 'minecraft:noteblock') {
        let playerDt = playersMap.get(player.uuid)
        if (typeof playerDt === 'undefined') return
        playerDt.addCustomOthers(CustomOtherType.play_noteblock)
    }
})
//监听玩家使用物品
mc.listen('onUseItemOn', (player, item, block) => {
    switch (block.type) {
        case 'minecraft:cake':
            cakeMap.add(block.pos, player.uuid)
            break
        case 'minecraft:cauldron':
            if (item.type.includes('minecraft:leather_') && item.isArmorItem) {
                cauldronMap.add(block.pos, player.uuid, CauldronType[0])
                return
            }
            if (item.type.includes('shulker_box')) {
                cauldronMap.add(block.pos, player.uuid, CauldronType[1])
                return
            }
            switch (item.type) {
                case 'minecraft:banner':
                    cauldronMap.add(block.pos, player.uuid, CauldronType[2])
                    break
                case 'minecraft:water_bucket':
                    cauldronMap.add(block.pos, player.uuid, CauldronType[3])
                    break
                case 'minecraft:glass_bottle':
                    cauldronMap.add(block.pos, player.uuid, CauldronType[4])
                    break
                default:
                    cauldronMap.remove(block.pos)
            }
            break
        case 'minecraft:soul_campfire':
        case 'minecraft:campfire':
            //todo
            if (foods.includes(item.type)) {
                campfireMap.add(block.pos, player.uuid)
            }
            break
        case 'minecraft:jukebox':
            if (!item.type.includes('minecraft:music_disc')) return
            let blockEntity = block.getBlockEntity()
            let blockNbt = blockEntity.getNbt().toObject()
            if (typeof blockNbt['RecordItem'] === 'undefined') {
                let playerDt = playersMap.get(player.uuid)
                if (typeof playerDt === 'undefined') return
                playerDt.addCustomOthers(CustomOtherType.play_record)
            }
            break
        default:
            return
    }
})
mc.listen('onContainerChange', (player, container, slotNum, oldItem, newItem) => {
    /**
     * Todo
     * 附魔次数
     * 物品合成，炼制
     */
})
mc.listen('onBlockChanged', (beforeBlock, afterBlock) => {
    //蛋糕
    if (beforeBlock.type === 'minecraft:cake') {
        let bst = beforeBlock.getBlockState()
        let ast = afterBlock.getBlockState()
        if (typeof bst['bite_counter'] === 'undefined') return
        if (bst['bite_counter'] < 6) {
            if (typeof ast['bite_counter'] === 'undefined') return
            let arr = cakeMap.get(beforeBlock.pos)
            if (typeof arr === 'undefined') return
            let playerDt = playersMap.get(arr[0])
            if (typeof playerDt === 'undefined') return
            playerDt.addCustomOthers(CustomOtherType.eat_cake_slice)
        } else {
            if (afterBlock.type === 'minecraft:air') {
                let arr = cakeMap.get(beforeBlock.pos)
                if (typeof arr === 'undefined') return
                let playerDt = playersMap.get(arr[0])
                if (typeof playerDt === 'undefined') return
                playerDt.addCustomOthers(CustomOtherType.eat_cake_slice)
            }
        }
        cakeMap.remove(beforeBlock.pos)
        return
    }
    //炼药锅
    if (beforeBlock.type === 'minecraft:cauldron' && afterBlock.type === 'minecraft:cauldron') {
        if (beforeBlock.tileData === afterBlock.tileData) return
        let arr = cauldronMap.get(beforeBlock.pos)
        if (typeof arr === 'undefined') return
        let playerDt = playersMap.get(arr[0])
        if (typeof playerDt === 'undefined') return
        if (beforeBlock.tileData < afterBlock.tileData) {
            if (arr[1] === CauldronType[3]) {
                playerDt.addCustomOthers(CustomOtherType.fill_cauldron)
            }
        } else {
            switch (arr[1]) {
                case CauldronType[0]:
                    playerDt.addCustomclean(CustomCleanType.armor)
                    break
                case CauldronType[1]:
                    playerDt.addCustomclean(CustomCleanType.shulker_box)
                    break
                case CauldronType[2]:
                    playerDt.addCustomclean(CustomCleanType.banner)
                    break
                case CauldronType[4]:
                    playerDt.addCustomOthers(CustomOtherType.use_cauldron)
                    break
                default:
            }
        }
        cauldronMap.remove(beforeBlock.pos)
    }
    let campfireExists = beforeBlock.type === 'minecraft:campfire' && afterBlock.type === 'minecraft:campfire'
    let soul_campfireExists = beforeBlock.type === 'minecraft:soul_campfire' && afterBlock.type === 'minecraft:soul_campfire'
    if (campfireExists || soul_campfireExists) {
        let arr = campfireMap.get(beforeBlock.pos)
        if (typeof arr === 'undefined') return
        let playerDt = playersMap.get(arr[0])
        if (typeof playerDt === 'undefined') return
        playerDt.addCustomInteract(CustomInteractType.campfire)
    }
})
mc.listen('onProjectileHitBlock', () => {
    /**beforeBlock.type==='minecraft:campfire'
     * Todo
     * 击中标靶次数
     */
})
mc.listen('onBedEnter', (player, pos) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addCustomOthers(CustomOtherType.sleep_in_bed)
    playerDt.resetCustomSinceTime(CustomSinceTimeType.rest)
})
//Todo 监听玩家使用桶装东西(水桶捕鱼)
// mc.listen('onUseBucketTake', () => {

// })
mc.listen('onJump', (player) => {
    let playerDt = playersMap.get(player.uuid)
    if (typeof playerDt === 'undefined') return
    playerDt.addCustomOthers(CustomOtherType.jump)
})
mc.listen('onTick', () => {
    playersMap.forEach((v, k) => {
        v.onTick()
    })
})

function getPlayerData() {

}

ll.exports(getPlayerData, 'SKS-Score', 'getPlayerData')