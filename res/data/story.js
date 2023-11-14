const db_story = [
    // 第一幕
    {
        meta: {
            chapter: "第一幕",
            title: "准确",
            description: "准确性是一个好译名的首要要求。"
        },
        icon: "checkCircleOutline",
        new_target: "accuracy",
        choice_limit: 3,
        events: [
            // 红石中继器
            {
                type: "choice",
                id : "s1_001",
                meta: {
                    title: "选择译名",
                    description: "一种用于“中继”并放大红石信号、“锁存”信号状态或者阻止信号倒流的红石元件。",
                    image: "",
                    original: "Redstone Repeater",
                    meta_id: "block:redstone_repeater"
                },
                options: [
                    {
                        meta: {
                            title: "红石中继器",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1
                        }
                    }, {
                        meta: {
                            title: "雷石东直放站",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -3,
                            stability: -2
                        }
                    }
                ],
                require: true
            },
            
            // 苦力怕
            {
                type: "choice",
                id : "s1_002",
                meta: {
                    title: "选择译名",
                    description: "它会悄无声息地接近玩家，然后爆炸。",
                    image: "",
                    original: "Creeper",
                    meta_id: "mob:creeper"
                },
                options: [
                    {
                        meta: {
                            title: "爬行者",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1
                        }
                    }, {
                        meta: {
                            title: "苦力怕",
                            description: "决定译名"
                        },
                        target_change: {}
                    }, {
                        meta: {
                            title: "JJ怪",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -2,
                            stability: -2
                        }
                    }
                ],
                require: true
            },

            // 熔岩
            {
                type: "choice",
                id : "s1_003",
                meta: {
                    title: "选择译名",
                    description: "一种可以造成伤害并导致着火的发光液体方块。",
                    image: "",
                    original: "Lava",
                    meta_id: "block:lava"
                },
                options: [
                    {
                        meta: {
                            title: "熔岩",
                            description: "决定译名"
                        },
                        target_change: {
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "岩浆",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1
                        }
                    }
                ],
                require: true
            }
        ]
    },

    // 第二幕
    {
        meta: {
            chapter: "第二幕",
            title: "达意",
            description: "无法做到准确时的备选方案。"
        },
        icon: "lightbulbOnOutline",
        new_target: "sense",
        choice_limit: 5,
        events: [
            // 红石中继器
            {
                type: "choice",
                id : "s2_001",
                conditions: [
                    {
                        type: "check_translate",
                        value: {
                            meta_id: "block:redstone_repeater",
                            name: "雷石东直放站"
                        }
                    }
                ],
                meta: {
                    title: "更正译名",
                    description: "“雷石东直放站”不是一个正确的译名，这是一个恶意用户提交的机翻译名，您最好更正它。",
                    image: "",
                    original: "Redstone Repeater",
                    meta_id: "block:redstone_repeater"
                },
                options: [
                    {
                        meta: {
                            title: "红石中继器",
                            description: "更正译名"
                        },
                        target_change: {
                            accuracy: 2
                        }
                    }, {
                        meta: {
                            title: "雷石东直放站",
                            description: "保持现状"
                        },
                        target_change: {
                            stability: -3
                        }
                    }
                ],
                require: true
            },

            // 鸡蛋
            {
                type: "choice",
                id : "s2_002",
                meta: {
                    title: "选择译名",
                    description: "鸡的产物，它可以投掷出去并有几率砸出鸡。",
                    image: "",
                    original: "Egg",
                    meta_id: "item:egg"
                },
                options: [
                    {
                        meta: {
                            title: "蛋",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1,
                            sense: -1
                        }
                    }, {
                        meta: {
                            title: "鸡蛋",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -1,
                            sense: 1,
                            stability: -1
                        }
                    }
                ],
                require: true
            },

            // 豹猫
            {
                type: "choice",
                id : "s2_003",
                meta: {
                    title: "选择译名",
                    description: "一种丛林中罕见的友好生物。",
                    image: "",
                    original: "Ocelot",
                    meta_id: "mob:ocelot"
                },
                options: [
                    {
                        meta: {
                            title: "虎猫",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1
                        }
                    }, {
                        meta: {
                            title: "豹猫",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -1,
                            stability: -1
                        }
                    }
                ],
                require: true
            },

            // 流浪者
            {
                type: "choice",
                id : "s2_004",
                meta: {
                    title: "选择译名",
                    description: "一种只生成在有雪的生物群系里的骷髅变种。",
                    image: "",
                    original: "Stray",
                    meta_id: "mob:stray"
                },
                options: [
                    {
                        meta: {
                            title: "流髑",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: -1,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "流浪者",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: 1
                        }
                    }
                ],
                require: true
            },

            // 灾厄村民
            {
                type: "choice",
                id : "s2_005",
                meta: {
                    title: "选择译名",
                    description: "一类敌对生物族群，外观与村民类似。",
                    image: "",
                    original: "Illager",
                    meta_id: "mob:illager"
                },
                options: [
                    {
                        meta: {
                            title: "刌民",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: -1,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "窳民",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: -2,
                            stability: -2
                        }
                    }, {
                        meta: {
                            title: "灾厄村民",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: 1
                        }
                    }
                ],
                require: true
            },

            // 亡灵杀手
            {
                type: "choice",
                id : "s2_006",
                meta: {
                    title: "选择译名",
                    description: "一种用于剑或斧的魔咒，能对僵尸、骷髅等一类的生物造成额外伤害。",
                    image: "",
                    original: "Smite",
                    meta_id: "enchantments:smite"
                },
                options: [
                    {
                        meta: {
                            title: "亡灵杀手",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -1,
                            sense: 2,
                        }
                    }, {
                        meta: {
                            title: "不死克星",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -1,
                            sense: 1
                        }
                    }, {
                        meta: {
                            title: "惩击",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1,
                            sense: -2,
                            stability: -2
                        }
                    }
                ],
                require: true
            },

            // 随机事件：大主播进入翻译讨论群
            {
                type: "choice",
                id : "s2_r001",
                meta: {
                    title: "来自大主播的入群申请",
                    description: "一位很有人气的大主播申请加入译名讨论群，是否接受？",
                    image: "",
                    original: "",
                    meta_id: "game_event:uploder_join"
                },
                options: [
                    {
                        meta: {
                            title: "接受",
                            description: "作出决定"
                        },
                        target_change: {}
                    }, {
                        meta: {
                            title: "拒绝",
                            description: "作出决定"
                        },
                        target_change: {}
                    }
                ]
            }
        ]
    },

    // 第三幕
    {
        meta: {
            chapter: "第三幕",
            title: "服众",
            description: "译名也会受社区的接受度影响。"
        },
        icon: "forumOutline",
        new_target: "acceptability",
        choice_limit: 5,
        events: [
            // 苦力怕
            {
                type: "choice",
                id : "s3_001",
                conditions: [
                    {
                        type: "check_translate",
                        value: {
                            meta_id: "mob:creeper",
                            name: "爬行者"
                        }
                    }
                ],
                meta: {
                    title: "更改译名",
                    description: "没有人会使用“爬行者”这个奇怪的译名，如今这个绿油油的生物已经是 Minecraft 的标志性元素之一，应该为它取一个更好的名字。",
                    image: "",
                    original: "Creeper",
                    meta_id: "mob:creeper"
                },
                options: [
                    {
                        meta: {
                            title: "苦力怕",
                            description: "更改译名"
                        },
                        target_change: {
                            acceptability: 2,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "爬行者",
                            description: "保持现状"
                        },
                        target_change: {
                            acceptability: -2
                        }
                    }, {
                        meta: {
                            title: "JJ怪",
                            description: "最好不要考虑这个"
                        },
                        target_change: {
                            acceptability: -15
                        }
                    }
                ],
                require: true
            },

            // 苦力怕
            {
                type: "choice",
                id : "s3_002",
                conditions: [
                    {
                        type: "check_translate",
                        value: {
                            meta_id: "mob:creeper",
                            name: "JJ怪"
                        }
                    }
                ],
                meta: {
                    title: "更改译名",
                    description: "受不可抗力因素影响，您必须为 Creeper 取一个新的名字。",
                    image: "",
                    original: "Creeper",
                    meta_id: "mob:creeper"
                },
                options: [
                    {
                        meta: {
                            title: "苦力怕",
                            description: "更改译名"
                        },
                        target_change: {
                            acceptability: 3,
                            stability: -2
                        }
                    }, {
                        meta: {
                            title: "爬行者",
                            description: "更改译名"
                        },
                        target_change: {
                            acceptability: -1,
                            stability: -3
                        }
                    }
                ],
                require: true
            },

            // 红石中继器
            {
                type: "choice",
                id : "s3_003",
                conditions: [
                    {
                        type: "check_translate",
                        value: {
                            meta_id: "block:redstone_repeater",
                            name: "雷石东直放站"
                        }
                    }
                ],
                meta: {
                    title: "更正译名",
                    description: "玩家们已经受不了“雷石东直放站”这个诡异的名字了，他们要求立即更正，并且他们普遍认为翻译组根本没有认真对待翻译工作。",
                    image: "",
                    original: "Redstone Repeater",
                    meta_id: "block:redstone_repeater"
                },
                options: [
                    {
                        meta: {
                            title: "红石中继器",
                            description: "更正译名"
                        },
                        target_change: {
                            accuracy: 2,
                            acceptability: -2,
                            stability: 3
                        }
                    }, {
                        meta: {
                            title: "雷石东直放站",
                            description: "保持现状"
                        },
                        target_change: {
                            acceptability: -15
                        }
                    }
                ],
                require: true
            },

            // 下界合金
            {
                type: "choice",
                id : "s3_004",
                conditions: [
                    {
                        type: "check_translate_not",
                        value: {
                            meta_id: "game_event:uploder_join",
                            name: "接受"
                        }
                    }
                ],
                meta: {
                    title: "选择译名",
                    description: "一种可从下界采得的珍贵材料。",
                    image: "",
                    original: "Netherite",
                    meta_id: "item:netherite"
                },
                options: [
                    {
                        meta: {
                            title: "下界合金",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: 1,
                            acceptability: -1,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "地獄合金",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -3,
                            sense: 2,
                            acceptability: -1,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "下界玄铁",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -2,
                            sense: 2,
                            acceptability: -1,
                            stability: -1
                        }
                    }
                ],
                require: true
            },

            // 下界合金
            {
                type: "choice",
                id : "s3_004b",
                conditions: [
                    {
                        type: "check_translate",
                        value: {
                            meta_id: "game_event:uploder_join",
                            name: "接受"
                        }
                    }
                ],
                meta: {
                    title: "选择译名",
                    description: "一种可从下界采得的珍贵材料。顺带一提，受某大主播影响，玩家社区非常关注本次译名决定。",
                    image: "",
                    original: "Netherite",
                    meta_id: "item:netherite"
                },
                options: [
                    {
                        meta: {
                            title: "下界合金",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: 1,
                            acceptability: -2,
                            stability: -2
                        }
                    }, {
                        meta: {
                            title: "地獄合金",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -3,
                            sense: 2,
                            acceptability: -2,
                            stability: -2
                        }
                    }, {
                        meta: {
                            title: "下界玄铁",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -2,
                            sense: 2,
                            acceptability: -2,
                            stability: -2
                        }
                    }, {
                        meta: {
                            title: "熔岩（锭）",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -3,
                            sense: -2,
                            acceptability: -3,
                            stability: -3
                        }
                    }
                ],
                require: true
            },

            // 幽匿
            {
                type: "choice",
                id : "s3_005",
                meta: {
                    title: "选择译名",
                    description: "源于“skulk”，意为隐匿、潜伏，是一个生造词，官方对该词的定义是“远离视线，通常出于险恶或懦弱的动机”。",
                    image: "",
                    original: "Sculk",
                    meta_id: "common:sculk"
                },
                options: [
                    {
                        meta: {
                            title: "幽匿",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: 1,
                            acceptability: -1,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "暗伏",
                            description: "决定译名"
                        },
                        target_change: {
                            sense: 1,
                            acceptability: -2,
                            stability: -1
                        }
                    }, {
                        meta: {
                            title: "潜声",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -3,
                            sense: 2,
                            acceptability: 2,
                            stability: 1
                        }
                    }
                ],
                require: true
            },

            // 监守者
            {
                type: "choice",
                id : "s3_006",
                meta: {
                    title: "选择译名",
                    description: "一种高大而危险的敌对生物，会根据振动和气息判断生物的位置。",
                    image: "",
                    original: "Warden",
                    meta_id: "mob:warden"
                },
                options: [
                    {
                        meta: {
                            title: "监守者",
                            description: "决定译名"
                        },
                        target_change: {
                            acceptability: -1
                        }
                    }, {
                        meta: {
                            title: "循声守卫",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: -3,
                            sense: 1,
                            acceptability: 2,
                            stability: -1
                        }
                    }
                ],
                require: true
            },

            // 蜜脾
            {
                type: "choice",
                id : "s3_007",
                meta: {
                    title: "选择译名",
                    description: "一种可以从蜂巢与蜂箱中通过剪刀获得的物品。",
                    image: "",
                    original: "Honeycomb",
                    meta_id: "mob:honeycomb"
                },
                options: [
                    {
                        meta: {
                            title: "蜜脾",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1,
                            sense: -1,
                        }
                    }, {
                        meta: {
                            title: "蜂房",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1,
                            sense: 1,
                            acceptability: -1
                        }
                    }, {
                        meta: {
                            title: "蜂巢蜜",
                            description: "决定译名"
                        },
                        target_change: {
                            accuracy: 1,
                            acceptability: -1
                        }
                    }
                ],
                require: true
            },
        ]
    }
];